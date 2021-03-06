import React, { ReactElement } from "react";
import { useRouter } from "next/router";

interface Props {
  name: string;
  id: string;
}

export default function BreedName({ name, id }: Props): ReactElement {
  const router = useRouter();
  return (
    <a
      className="transition-colors text-left pl-4 py-3 font-semibold hover:bg-gray-200 block w-full focus:outline-none cursor-pointer"
      onMouseDown={() => router.push(`/cat/${id}`)}
    >
      {name}
    </a>
  );
}
