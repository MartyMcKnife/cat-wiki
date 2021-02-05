import React, { ReactElement } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default function Search(): ReactElement {
  return (
    <div className="bg-white rounded-full text-black py-2 lg:py-4 flex justify-start items-center">
      <input
        className="ml-4 focus:outline-none w-full"
        type="text"
        placeholder="Enter your breed"
      ></input>
      <FontAwesomeIcon
        icon={faSearch}
        color="#291507"
        className="mx-auto mr-5"
      />
    </div>
  );
}
