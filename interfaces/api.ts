import { Breed } from "./catapi";

export interface getSearch {
  name: string;
  id: string;
}

export interface IgetBreed {
  info: Breed;
  images: {
    url: string;
  }[];
}
