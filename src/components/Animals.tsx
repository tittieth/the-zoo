import { useEffect, useState } from 'react';
import '../App.css';
import { IAnimal } from '../models/IAnimal';
import { AnimalList } from './AnimalList';
import { getAnimals } from '../services/AnimalService';
import Header from './Header';

function Animals() {
  const [animals, setAnimals] = useState<IAnimal[]>([]);

  const saveToLocalStorage = (animals: IAnimal[]) => {
    localStorage.setItem('animals', JSON.stringify(animals))
  }

  useEffect(() => {
    const animalsFromLS = localStorage.getItem('animals');

    if (animalsFromLS) {
      setAnimals(JSON.parse(animalsFromLS))
    } else {
        const getDataFromAPI = async () => {
          const response = await getAnimals();
          setAnimals(response);
          saveToLocalStorage(response);
        };
        getDataFromAPI();
      }
  }, []);  

  return (
    <>
      <div>
        <Header />
        <AnimalList animals={animals}/>
      </div>
    </>
  );
}

export default Animals;
