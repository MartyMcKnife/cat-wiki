import React, { ReactElement } from "react";
import { IgetBreed } from "./../../interfaces/api";

interface Props {
  cats: IgetBreed[];
}

export default function CatGallery({ cats }: Props): ReactElement {
  const items = cats.map((cat) => {
    const randomImage =
      cat.images[Math.floor(Math.random() * cat.images.length)];
    return (
      <div className="cursor-pointer mx-2" key={cat.info.id}>
        <img
          src={randomImage.url}
          alt={`A photo of a ${cat.info.name}`}
          className="rounded-xl w-36 h-36 object-cover"
        />
        <h2 className="font-bold py-2 text-sm">{cat.info.name}</h2>
      </div>
    );
  });
  return (
    <div className="grid grid-cols-2 md:flex md:justify-evenly">{items}</div>
  );
}
