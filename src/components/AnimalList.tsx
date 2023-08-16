import { IAnimal } from "../models/IAnimal"

interface IProps {
    animals: IAnimal[];
}

export const AnimalList = (props: IProps) => {
    const handleImageError = (event: React.SyntheticEvent<HTMLImageElement, Event>) => {
        event.currentTarget.src = "/public/244537-P3VK92-904.jpg";
        event.currentTarget.alt = "Bild kunde inte laddas";
        event.currentTarget.width = 100;
      };
    
      return (
        <>
          {props.animals.map((animal, i) => (
            <div key={i}>
              <img
                src={animal.imageUrl}
                alt={animal.latinName}
                width={100}
                onError={handleImageError} // Anropas vid laddningsfel för bilden
              />
            </div>
          ))}
        </>
      );
    };