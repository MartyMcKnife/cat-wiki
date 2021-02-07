import { Breed, BreedImage } from "../interfaces/catapi";
import axios from "axios";
import editJsonFile from "edit-json-file";

const baseURL = "https://api.thecatapi.com/v1";

export const getBreeds = async () => {
  const resp = await axios.get<Breed[]>(`${baseURL}/breeds`, {
    headers: { "x-api-key": process.env.CATAPI },
  });
  const cats = resp.data.map((cat) => {
    return { name: cat.name, id: cat.id };
  });
  return cats;
};

export const getBreed = async (breedID: string) => {
  const info = await axios.get<Breed[]>(
    `${baseURL}/breeds/search?q=${breedID}`,
    {
      headers: { "x-api-key": process.env.CATAPI },
    }
  );
  const images = await axios.get<BreedImage[]>(
    `${baseURL}/images/search?q=${breedID}&limit=8`,
    {
      headers: { "x-api-key": process.env.CATAPI },
    }
  );
  const refinedImages = images.data.map((image) => {
    return { url: image.url };
  });

  return { info: info.data[0], images: refinedImages };
};

export const addSearch = (breedID: string) => {
  const file = editJsonFile(`${process.cwd()}/utils/counter.json`);

  const oldValue: number = file.get(`${breedID}`);
  file.set(`${breedID}`, oldValue + 1);
  file.save();
};
