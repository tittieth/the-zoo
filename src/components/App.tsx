import { useEffect, useState } from 'react';
import '../App.css';
import { IAnimal } from '../models/IAnimal';
import { AnimalList } from './AnimalList';
import { getAnimals } from '../services/AnimalService';
import Header from './Header';

function App() {
  const [animals, setAnimals] = useState<IAnimal[]>([]);


  useEffect(() => {
    const getDataFromAPi = async () => {
      const response = await getAnimals();
      setAnimals(response)
      console.log(response);
      
    }
    getDataFromAPi();
    
  }, [])

  return (
    <>
      <div>
        <Header />
        <AnimalList animals={animals}/>
      </div>
    </>
  );
}

export default App;
