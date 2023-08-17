import { useEffect, useState } from 'react';
import '../App.css';
import { IAnimal } from '../models/IAnimal';
import { AnimalList } from './AnimalList';
import { getAnimals } from '../services/AnimalService';
import Header from './Header';

function Animals() {
  const [animals, setAnimals] = useState<IAnimal[]>([]);
  const [isDataFetched, setIsDataFetched] = useState(false);


  useEffect(() => {
    const getDataFromAPI = async () => {
      if (!isDataFetched) {
        const response = await getAnimals();
        setAnimals(response);
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
