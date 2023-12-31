import { Link } from "react-router-dom";
import { IAnimal } from "../models/IAnimal"
import { handleImageError } from "../helpers";

interface IProps {
    animals: IAnimal[];
}

export const AnimalList = (props: IProps) => { 
      return (
        <ul className="animal-items">
          {props.animals.map((animal) => (
            <li key={animal.id} className={`animal-card ${animal.hungerLevel === "Håller på att dö" ? "hungry" : ""}`}>
              <Link to={"/animal/" + animal.id} className="test">
                <p>{animal.isFed ? '' : animal.hungerLevel}</p>
                <img
                  src={animal.imageUrl}
                  alt={animal.latinName}
                  width={100}
                  height={100}
                  onError={handleImageError}
                  className="animal-img"
                  loading="lazy"
                />
                <h2>{animal.name}</h2>
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