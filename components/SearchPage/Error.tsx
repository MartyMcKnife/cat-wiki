import React, { ReactElement } from "react";

export default function Error(): ReactElement {
  return (
    <div className="flex justify-center items-center h-full">
      <h1 className="text-text text-4xl font-semibold block text-center w-2/4">
        Aw snap. <br /> Looks like something went wrong when getting the breeds.
        Please try again later
      </h1>
    </div>
  );
}
