import { useEffect, useState } from 'react';
import '../App.css';
import { IAnimal } from '../models/IAnimal';
import { AnimalList } from './AnimalList';
import { getAnimals } from '../services/AnimalService';
import Header from './Header';
import { saveToLocalStorage } from '../helpers';

function Animals() {
  const [animals, setAnimals] = useState<IAnimal[]>([]);

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
