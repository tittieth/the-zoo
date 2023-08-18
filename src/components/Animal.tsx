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

      const storedAnimals = JSON.parse(localStorage.getItem("animals") || "[]");
      const numericId = parseInt(id); // Konvertera id till en siffra
  
      const storedAnimal = storedAnimals.find((storedAnimal: IAnimal) => storedAnimal.id === numericId);
  
      if (storedAnimal) {
        setAnimal(storedAnimal);

      } else {
        getAnimalFromAPI();
      }
    
  }, [id]);

  const handleImgClick = () => {
    // Ska kunna se bilden i större format
    console.log('clicked img');
  }

  const feedAnimal = () => {
    if (animal) {
      const updatedAnimal = {
        ...animal,
        lastFed: new Date().toISOString(),
        isFed: true
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
          <div className="animal-info">
            <h1>{animal?.name}</h1>
            <p>Född: {animal?.yearOfBirth}
            <br />Matad: {animal ? formatDateTime(animal.lastFed) : ""}
            <br />Hungrig: {animal?.isFed ? 'Nej' : 'Ja'}</p>
          </div>
          <div>
            <img onClick={handleImgClick} src={animal?.imageUrl} width={130} height={130} className="sml-img" onError={handleImageError}></img>
          </div>
        </div>
        <div className="animal-desc">
          <p>{animal?.longDescription}</p>
          <button className="feed-btn" onClick={feedAnimal} disabled={animal?.isFed}>{ animal?.isFed ? 'Fått mat' : 'Mata mig!'}</button>
        </div>
      </div>
      
    </>
  )
}
