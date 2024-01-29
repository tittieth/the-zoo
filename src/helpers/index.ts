import { IAnimal } from '../models/IAnimal';

export const handleImageError = (
  event: React.SyntheticEvent<HTMLImageElement, Event>,
) => {
  const maxWidth = '500px';

  event.currentTarget.src = '/the-zoo/404.jpg';
  event.currentTarget.alt = 'Bilden kunde inte laddas';
  event.currentTarget.style.maxWidth = maxWidth;
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

  return animals.map(animal => {
    if (animal) {
      const lastFedTime = new Date(animal.lastFed);
      const timeDifferenceInHours = Math.floor(
        (currentTime.getTime() - lastFedTime.getTime()) / (1000 * 60 * 60),
      );

      if (timeDifferenceInHours >= 4) {
        return { ...animal, isFed: false, hungerLevel: 'Håller på att dö' };
      } else if (timeDifferenceInHours >= 3) {
        return { ...animal, isFed: false, hungerLevel: 'Behöver mat' };
      } else {
        return { ...animal, isFed: true, hungerLevel: 'Mätt' };
      }
    }
    return animal;
  });
};
