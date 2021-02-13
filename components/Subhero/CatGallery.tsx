import React, { ReactElement } from "react";
import { IgetBreed } from "./../../interfaces/api";
import CatGalleryImage from "./CatGalleryImage";

interface Props {
  cats: IgetBreed[];
}

export default function CatGallery({ cats }: Props): ReactElement {
  const items = cats.map((cat) => {
    const randomImage =
      cat.images[Math.floor(Math.random() * cat.images.length)];
    return (
      <CatGalleryImage
        url={randomImage.url}
        name={cat.info.name}
        key={cat.info.id}
      />
    );
  });
  return (
    <div className="grid grid-cols-2 md:flex md:justify-evenly">{items}</div>
  );
}
