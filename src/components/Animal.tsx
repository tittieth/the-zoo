import { Link, useParams } from "react-router-dom";
import { IAnimal } from "../models/IAnimal";
import { useEffect, useState } from "react";
import { getAnimalById } from "../services/AnimalService";
import { formatDateTime } from "../helpers";

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
  

  return (
    <>
      <button><Link to="/animals"><img src="/public/icons8-left-64 (1).png" alt="arrow back" className="arrow"></img></Link></button>
      <div>Animal: {id}</div>
      <h1>{animal?.name}</h1>
      <p>{animal?.longDescription}</p>
      <p>Senast matad: {animal ? formatDateTime(animal.lastFed) : ""}</p>
      <button>Mata mig!</button>
      
    </>
  )
}
