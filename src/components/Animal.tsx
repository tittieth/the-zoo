import { Link, useParams } from "react-router-dom";
import { IAnimal } from "../models/IAnimal";
import { useEffect, useState } from "react";
import { getAnimalById } from "../services/AnimalService";
import { formatDateTime, handleImageError } from "../helpers";


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

    if (!animal) getAnimalFromAPI();
  });

  console.log(animal);

  const handleClick = () => {
    
  }
  

  return (
    <>
      <button><Link to="/animals"><img src="/public/arrow-back.png" height={80} alt="arrow back" className="arrow"></img></Link></button>
      <div className="animal-presentation-wrapper">
        <div className="wrapper">
          <div>
            <h1>{animal?.name}</h1>
            <p>{animal?.yearOfBirth}</p>
            <p>Matad: {animal ? formatDateTime(animal.lastFed) : ""}</p>
            <p>Hungrig: {animal?.isFed}</p>
          </div>
          <div>
            <img onClick={handleClick} src={animal?.imageUrl} width={130} height={130} className="sml-img" onError={handleImageError}></img>
          </div>
        </div>
        <div className="animal-desc">
          <p>{animal?.longDescription}</p>
          <button>Mata mig!</button>
        </div>
      </div>
      
    </>
  )
}
