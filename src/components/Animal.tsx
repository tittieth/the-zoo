import { useParams } from 'react-router-dom';
import { IAnimal } from '../models/IAnimal';
import { useEffect, useState } from 'react';
import { getAnimalById } from '../services/AnimalService';
import { saveToLocalStorage } from '../helpers';
import { format } from 'date-fns';
import { AnimalCard } from './AnimalCard';
import { ModalImage } from './ModalImage';

export default function Animal() {
  const [animal, setAnimal] = useState<IAnimal | undefined>();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { id } = useParams<string>();

  const getAnimalFromAPI = async (id: string) => {
    try {
      const response = await getAnimalById(id);
      setAnimal(response);
    } catch (error) {
      console.log('Error fetching:', error);
    }
  };

  const getAnimalFromLS = (numericId: number) => {
    const storedAnimals = JSON.parse(localStorage.getItem('animals') || '[]');
    return storedAnimals.find(
      (storedAnimal: IAnimal) => storedAnimal.id === numericId,
    );
  };

  useEffect(() => {
    if (id) {
      const numericId = parseInt(id); // Konvertera id till en siffra
      const storedAnimal = getAnimalFromLS(numericId);

      if (storedAnimal) {
        setAnimal(storedAnimal);
      } else {
        try {
          getAnimalFromAPI(id);
        } catch (error) {
          console.error('Error fetching animal from API:', error);
        }
      }
    }
  }, [id]);

  const handleImgClick = () => {
    // Ska kunna se bilden i större format
    console.log('clicked img');
    setIsModalOpen(true);
  };

  const feedAnimal = () => {
    if (animal) {
      const currentTime = new Date();
      const formattedTime = format(currentTime, 'yyyy-MM-dd HH:mm:ss');

      const updatedAnimal = {
        ...animal,
        lastFed: formattedTime,
        isFed: true,
        hungerLevel: 'Mätt',
      };

      const updatedAnimals = JSON.parse(
        localStorage.getItem('animals') || '[]',
      ).map((storedAnimal: IAnimal) =>
        storedAnimal.id === updatedAnimal.id ? updatedAnimal : storedAnimal,
      );

      saveToLocalStorage(updatedAnimals);
      setAnimal(updatedAnimal);
    }
  };

  return (
    <>
      <AnimalCard
        animal={animal}
        feedAnimal={feedAnimal}
        handleImgClick={handleImgClick}
      ></AnimalCard>
      {animal && isModalOpen && (
        <ModalImage
          imageSrc={animal.imageUrl} 
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </>
  );
}
