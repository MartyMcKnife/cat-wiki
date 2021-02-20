import React, { ReactElement, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useMediaQuery } from "react-responsive";

import { getSearch } from "./../../interfaces/api";

import BreedName from "./BreedName";
import NoBreeds from "./NoBreeds";
interface Props {
  cats: getSearch[];
}

const searchForItem = (query: string | undefined, object: getSearch[]) => {
  if (query) {
    const regex = new RegExp(query, "gi");
    const newObj = object.filter((breed) => {
      return regex.test(breed.name);
    });
    return newObj;
  } else {
    return object;
  }
};

export default function Search({ cats }: Props): ReactElement {
  const [breedsList, setBreedsList] = useState(cats);
  const [showBreed, setShowBreed] = useState(false);

  const isDesktop = useMediaQuery({
    query: "(min-device-width: 640px)",
  });

  const breedItem = breedsList.map((breed) => (
    <BreedName key={breed.id} name={breed.name} id={breed.id} />
  ));

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBreedsList(searchForItem(event.target.value, cats));
  };

  let classes: string = "";
  let searchClasses: string = "";

  if (showBreed && !isDesktop) {
    classes = "absolute w-full top-0 left-0 z-10 bg-white h-screen";
    searchClasses = "mt-16 border-2 border-black mx-2";
  }

  return (
    <div className={`${classes} sm:relative`}>
      {showBreed && (
        <div className="bg-gray-200 float-right mr-4 mt-4 px-2 rounded-lg sm:hidden">
          <FontAwesomeIcon
            icon={faTimes}
            color="black"
            onClick={() => setShowBreed(false)}
          />
        </div>
      )}
      <div
        className={`${searchClasses} bg-white rounded-full text-black py-2 lg:py-4 flex justify-start items-center`}
      >
        <input
          type="text"
          className="ml-4 focus:outline-none w-full"
          placeholder="Enter your breed"
          onFocus={() => setShowBreed(true)}
          onBlur={() => setShowBreed(false)}
          onChange={handleChange}
        ></input>
        <FontAwesomeIcon
          icon={faSearch}
          color="#291507"
          className="mx-auto mr-5"
          size="1x"
        />
      </div>

      {showBreed && (
        <>
          <div className="transition-all rounded-lg overflow-y-scroll mt-3 h-5/6 sm:h-52 absolute bg-white text-black w-full z-10">
            {breedItem.length > 0 ? breedItem : <NoBreeds />}
          </div>
        </>
      )}
    </div>
  );
}
