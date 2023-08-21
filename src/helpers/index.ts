import { IAnimal } from '../models/IAnimal';

export const handleImageError = (
  event: React.SyntheticEvent<HTMLImageElement, Event>,
) => {
  event.currentTarget.src = '/244537-P3VK92-904.jpg';
  event.currentTarget.alt = 'Bild kunde inte laddas';
  event.currentTarget.width = 100;
};

export const formatDateTime = (isoDateTime: string) => {
  const date = new Date(isoDateTime);
  const formattedDate = date.toLocaleDateString('sv-SE');
  const formattedTime = date.toLocaleTimeString('sv-SE');
  return `${formattedDate} ${formattedTime}`;
};

export const saveToLocalStorage = (animals: IAnimal[]) => {
  localStorage.setItem('animals', JSON.stringify(animals));
};

export const updateIsFedStatus = (animals: IAnimal[]) => {
  const currentTime = new Date();

 return animals.map((animal) => {
    if (animal) {
      const lastFedTime = new Date(animal.lastFed);
      const timeDifferenceInSeconds = Math.floor(
        (currentTime.getTime() - lastFedTime.getTime()) / 1000
      );

      if (timeDifferenceInSeconds >= 50) {
        return { ...animal, isFed: false, hungerLevel: "Håller på att dö" };
      } else if (timeDifferenceInSeconds >= 30) {
        return { ...animal, isFed: false, hungerLevel: "Behöver mat" };
      } else {
        return { ...animal, isFed: true, hungerLevel: "Mätt" };
      }
    }
    return animal;
  });
};
