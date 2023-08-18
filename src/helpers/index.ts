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

// export const calculateTimeSinceLastFed = (animal: IAnimal) => {

//     const currentTime = new Date();

//     const updatedAnimals = animals.map((animal: IAnimal) => {
//       const lastTimeFed = new Date(animal.lastFed);
//       const timeDifference = (currentTime - lastTimeFed) / (1000 * 60 * 60);
      
//       return {
//         ...animal,
//         isFed: timeDifference <= 3
//       };
//     });
  
//     return updatedAnimals;
//   };
