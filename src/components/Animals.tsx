import { useEffect, useState } from 'react';
import '../App.css';
import { IAnimal } from '../models/IAnimal';
import { AnimalList } from './AnimalList';
import { getAnimals } from '../services/AnimalService';
import Header from './Header';
import { saveToLocalStorage, updateIsFedStatus } from '../helpers';

function Animals() {
  const [animals, setAnimals] = useState<IAnimal[]>([]);

  useEffect(() => {
    const animalsFromLS = localStorage.getItem('animals');

    if (animalsFromLS) {
      const parsedAnimals = JSON.parse(animalsFromLS);
      const updatedAnimals = updateIsFedStatus(parsedAnimals);

      setAnimals(updatedAnimals);
      saveToLocalStorage(updatedAnimals);
    } else {
        const getDataFromAPI = async () => {
          const response = await getAnimals();
          const updatedAnimals = updateIsFedStatus(response)

          setAnimals(updatedAnimals);
          saveToLocalStorage(updatedAnimals);
        };
        getDataFromAPI();
      }
  }, []);  

  console.log(animals);
  

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
