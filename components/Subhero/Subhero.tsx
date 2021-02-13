import React, { ReactElement } from "react";
import Link from "next/link";

import { IgetBreed } from "./../../interfaces/api";

import CatGallery from "./CatGallery";

interface Props {
  cats: IgetBreed[];
}

export default function Subhero({ cats }: Props): ReactElement {
  return (
    <div className="bg-main text-text px-14 py-4 rounded-b-2xl">
      <div className="relative w-max font-medium text-sm">
        <h3>Most Searched Breeds</h3>
        <hr className="border-accent border-2 w-4/12 rounded-full mt-1" />
      </div>

      <div className="flex items-center font-bold">
        <h1 className="text-xl md:text-5xl mr-4 md:w-4/12 my-4">
          66+ Breeds for you to discover
        </h1>
        <Link href="/searches">
          <a className=" mx-auto mr-4 font-bold focus:outline-none">
            See More →
          </a>
        </Link>
      </div>
      <CatGallery cats={cats} />
    </div>
  );
}
