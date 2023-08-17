import { Link, useParams } from "react-router-dom";
import { IAnimal } from "../models/IAnimal";
import { useEffect, useState } from "react";
import { getAnimalById } from "../services/AnimalService";
import { formatDateTime, handleImageError, saveToLocalStorage } from "../helpers";


export default function Animal() {
  const [animal, setAnimal] = useState<IAnimal>();

  const { id } = useParams<string>();


  useEffect(() => {
    const getAnimalFromAPI = async () => {
      if (id) {
        const response = await getAnimalById(id);
        setAnimal(response);
      }
    };

    if (!animal) {
      const storedAnimals = JSON.parse(localStorage.getItem("animals") || "[]");
      const numericId = parseInt(id); // Konvertera id till en siffra
  
      const storedAnimal = storedAnimals.find((storedAnimal: IAnimal) => storedAnimal.id === numericId);
  
      if (storedAnimal) {
        setAnimal(storedAnimal);
      } else {
        getAnimalFromAPI();
      }
    }
  }, [animal, id]);

  console.log(animal);

  const handleImgClick = () => {
    // Ska kunna se bilden i större format
    console.log('clicked img');
  }

  const feedAnimal = () => {
    if (animal) {
      const updatedAnimal = {
        ...animal,
        lastFed: new Date().toISOString()
      };
      
      const updatedAnimals = JSON.parse(localStorage.getItem("animals") || "[]").map((storedAnimal: IAnimal) =>
        storedAnimal.id === updatedAnimal.id ? updatedAnimal : storedAnimal
      );

      saveToLocalStorage(updatedAnimals);

      setAnimal(updatedAnimal);
    }
  };
  

  return (
    <>
      <button><Link to="/animals"><img src="/public/arrow-back.png" height={80} alt="arrow back" className="arrow"></img></Link></button>
      <div className="animal-presentation-wrapper">
        <div className="wrapper">
          <div>
            <h1>{animal?.name}</h1>
            <p>{animal?.yearOfBirth}</p>
            <p>Matad: {animal ? formatDateTime(animal.lastFed) : ""}</p>
            <p>Hungrig: {animal?.isFed ? 'Ja' : 'Nej'}</p>
          </div>
          <div>
            <img onClick={handleImgClick} src={animal?.imageUrl} width={130} height={130} className="sml-img" onError={handleImageError}></img>
          </div>
        </div>
        <div className="animal-desc">
          <p>{animal?.longDescription}</p>
          <button onClick={feedAnimal}>Mata mig!</button>
        </div>
      </div>
      
    </>
  )
}
