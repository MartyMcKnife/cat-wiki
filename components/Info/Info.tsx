import React, { ReactElement } from "react";
import Link from "next/link";

import Image from "./Images";

export default function Info(): ReactElement {
  return (
    <div className="lg:mx-32 my-24 sm:flex justify-evenly items-center">
      <div className="mr-3 md:w-4/12 pb-4">
        <hr className="border-accent border-2 w-2/12 rounded-full mb-4" />
        <h1 className="text-xl md:text-5xl font-bold text-text pb-4">
          Why should you have a cat?
        </h1>
        <p className="mb-8">
          Having a cat around you can actually trigger the release of calming
          chemicals in your body, which lowers both your stress and anxiety
          levels
        </p>
        <Link href="https://www.mentalfloss.com/article/51154/10-scientific-benefits-being-cat-owner">
          <a className=" mx-auto mr-4 font-medium" target="_blank">
            Read More →
          </a>
        </Link>
      </div>

      <Image />
    </div>
  );
}
