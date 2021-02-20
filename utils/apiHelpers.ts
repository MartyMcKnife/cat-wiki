import { Breed, BreedImage } from "../interfaces/catapi";
import counter from "./counter.json";
import axios from "axios";

const baseURL = "https://api.thecatapi.com/v1";

export const fetcher = (url: string) => axios.get(url).then((res) => res.data);

export const getBreeds = async () => {
  const resp = await axios.get<Breed[]>(`${baseURL}/breeds`, {
    headers: { "x-api-key": process.env.CATAPI },
  });
  const cats = resp.data.map((cat) => {
    return { name: cat.name, id: cat.id };
  });
  return cats;
};

export const getBreed = async (breedID: string, id: boolean) => {
  const imagePath = `${baseURL}/images/search?${
    id ? "breed_ids" : "q"
  }=${breedID}&limit=9&mime_types=png,jpg`;

  const images = await axios.get<BreedImage[]>(imagePath, {
    headers: { "x-api-key": process.env.CATAPI },
  });
  const refinedImages = images.data.map((image) => {
    return { url: image.url };
  });
  return { info: images.data[0].breeds[0], images: refinedImages };
};

export const getSearched = (amount: number) => {
  function getKeysWithHighestValue(o: object, n: number) {
    var keys = Object.keys(o);
    keys.sort(function (a, b) {
      return o[b] - o[a];
    });
    return keys.slice(0, n);
  }
  return getKeysWithHighestValue(counter, amount);
};
