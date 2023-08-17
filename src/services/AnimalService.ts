import axios from "axios";
import { IAnimal } from "../models/IAnimal";

const BASE_URL = `https://animals.azurewebsites.net/api/animals`;

export const getAnimals = async (): Promise<IAnimal[]> => {
    const response = await axios.get<IAnimal[]>(BASE_URL);
    return response.data;
  };
  
  export const getAnimalById = async (id: string): Promise<IAnimal> => {
    const response = await axios.get<IAnimal>(`${BASE_URL}/${id}`);
    return response.data;
  };
