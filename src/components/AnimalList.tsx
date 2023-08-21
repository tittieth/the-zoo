import { Link } from "react-router-dom";
import { IAnimal } from "../models/IAnimal"
import { handleImageError } from "../helpers";

interface IProps {
    animals: IAnimal[];
}

export const AnimalList = (props: IProps) => {
    
      return (
        <ul className="animal-items">
          {props.animals.map((animal, i) => (
            <li key={i} className="animal-card">
              <Link to={"/animal/" + animal.id}>
                <img
                  src={animal.imageUrl}
                  alt={animal.latinName}
                  width={100}
                  height={100}
                  onError={handleImageError}
                  className="animal-img"
                />
                <h2>{animal.name}</h2>
                {/* <p>{animal.isFed ? 'Mätt' : 'Jag är hungrig'}</p> */}
                <p>{animal?.hungerLevel}</p>
                <div>
                  <p className="short-desc">
                    {animal.shortDescription}
                  </p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      );
    };