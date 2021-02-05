import React, { ReactElement } from "react";

import Search from "./Search";
import Logo from "./../Logo";

export default function Hero(): ReactElement {
  return (
    <div className="text-white relative">
      <div className="absolute">
        <img
          src="/HeroImagelg.png"
          alt="Hero Image"
          className="rounded-t-2xl object-fill w-full h-52 md:h-100"
        />
      </div>
      <div className="absolute w-8/12 ml-4 mt-3 md:ml-24 md:mt-12 md:w-4/12 lg:w-3/12">
        <Logo fill="white" width="100%" className="md:h-32" />
        <h1 className="text-base mb-4 lg:text-3xl md:mb-12">
          Get to know more about your cat breed
        </h1>
        <Search />
      </div>
    </div>
  );
}
