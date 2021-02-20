import React, { ReactElement } from "react";
import { Breed } from "./../../interfaces/catapi";
import { useRouter } from "next/router";

interface Props {
  info: Breed;
  images: {
    url: string;
  }[];
  number: number;
}

export default function CatItem({ info, images, number }: Props): ReactElement {
  const router = useRouter();
  return (
    <div
      className="sm:flex justify-center text-text space-x-8 transition ease-in-out transform hover:scale-105 hover:translate-y-1 hover:shadow-sm cursor-pointer"
      onClick={() => router.push(`/cat/${info.id}`)}
    >
      <img
        src={images[0].url}
        alt={`An image of ${info.name}`}
        className="w-44 h-44 rounded-2xl object-cover mx-auto sm:mx-0 mb-4"
      />
      <article className="max-w-4xl space-y-3">
        <h1 className="text-2xl font-semibold">
          {number}. {info.name}
        </h1>
        <p className="font-medium">{info.description}</p>
      </article>
    </div>
  );
}
