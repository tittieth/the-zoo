import { Link } from "react-router-dom";
import { IAnimal } from "../models/IAnimal"

interface IProps {
    animals: IAnimal[];
}

export const AnimalList = (props: IProps) => {
    const handleImageError = (event: React.SyntheticEvent<HTMLImageElement, Event>) => {
        event.currentTarget.src = "/244537-P3VK92-904.jpg";
        event.currentTarget.alt = "Bild kunde inte laddas";
        event.currentTarget.width = 100;
      };
    
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
                  onError={handleImageError} // Anropas vid laddningsfel för bilden
                  className="animal-img"
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