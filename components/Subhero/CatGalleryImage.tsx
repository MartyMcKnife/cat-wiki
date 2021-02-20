import React, { ReactElement } from "react";
import { useRouter } from "next/router";

interface Props {
  url: string;
  name: string;
  id: string;
}

export default function CatGalleryImage({
  url,
  name,
  id,
}: Props): ReactElement {
  const router = useRouter();
  return (
    <div
      className="transition duration-300 ease-in-out cursor-pointer mx-2 transform hover:scale-105 hover:translate-y-1"
      onClick={() => router.push(`/cat/${id}`)}
    >
      <img
        src={url}
        alt={`A photo of a ${name}`}
        className="rounded-xl w-36 h-36 object-cover"
      />
      <h2 className="font-bold py-2 text-sm">{name}</h2>
    </div>
  );
}
