import React, { ReactElement } from "react";

import Search from "./Search";
import Logo from "./../Logo";

import { getSearch } from "./../../interfaces/api";
interface Props {
  cats: getSearch[];
}

export default function Hero({ cats }: Props): ReactElement {
  return (
    <div className="text-white rounded-t-2xl bg-hero-image bg-cover bg-no-repeat xl:py-6">
      <div className="w-9/12 pl-4 py-4 sm:w-6/12 md:w-4/12 sm:pl-12 sm:py-8 lg:py-12">
        <Logo fill="white" width="100%" className="md:h-32" />
        <h1 className="text-xl lg:text-3xl my-6 mb-7">
          Get to know more about your cat breed
        </h1>
        <Search cats={cats} />
      </div>
    </div>
  );
}
