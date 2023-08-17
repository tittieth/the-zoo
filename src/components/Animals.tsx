import { useEffect, useState } from 'react';
import '../App.css';
import { IAnimal } from '../models/IAnimal';
import { AnimalList } from './AnimalList';
import { getAnimals } from '../services/AnimalService';
import Header from './Header';

function Animals() {
  const [animals, setAnimals] = useState<IAnimal[]>([]);
  const [isDataFetched, setIsDataFetched] = useState(false);

  const saveToLocalStorage = (animals: IAnimal[]) => {
    localStorage.setItem('animals', JSON.stringify(animals))
  }

  useEffect(() => {
    const getDataFromAPI = async () => {
      if (!isDataFetched) {
        const response = await getAnimals();
        setAnimals(response);
        saveToLocalStorage(response);
        setIsDataFetched(true);
      }
    };

    getDataFromAPI();
  }, [isDataFetched]);  

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
