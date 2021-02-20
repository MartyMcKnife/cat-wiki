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
  const infoPath = id
    ? `${baseURL}/breeds/search?breed_id=${breedID}`
    : `${baseURL}/breeds/search?q=${breedID}`;

  const info = await axios.get<Breed[]>(infoPath, {
    headers: { "x-api-key": process.env.CATAPI },
  });
  const images = await axios.get<BreedImage[]>(
    `${baseURL}/images/search?q=${breedID}&limit=9&mime_types=png,jpg`,
    {
      headers: { "x-api-key": process.env.CATAPI },
    }
  );
  const refinedImages = images.data.map((image) => {
    return { url: image.url };
  });

  return { info: info.data[0], images: refinedImages };
};

export const getSearched = () => {
  function getKeysWithHighestValue(o: object, n: number) {
    var keys = Object.keys(o);
    keys.sort(function (a, b) {
      return o[b] - o[a];
    });
    return keys.slice(0, n);
  }
  return getKeysWithHighestValue(counter, 10);
};
