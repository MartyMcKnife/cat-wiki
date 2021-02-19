import React, { ReactElement } from "react";

interface Props {
  images: { url: string }[];
}

export default function Images({ images }: Props): ReactElement {
  const refImages = images.slice(1);
  const imageArr = refImages.map((image) => {
    return (
      <img
        src={image.url}
        alt="An image of this cat!"
        className="rounded-xl my-4 max-h-52 w-full object-cover transition duration-300 ease-in-out transform hover:scale-105 hover:translate-y-1"
        key={image.url}
      />
    );
  });
  return (
    <div className="text-text">
      <h1 className="font-semibold text-2xl mb-4">Other Photos:</h1>
      <div className="md:grid grid-cols-4 gap-8 align-middle ">{imageArr}</div>
    </div>
  );
}
