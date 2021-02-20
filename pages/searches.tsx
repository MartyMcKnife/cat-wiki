import React, { ReactElement } from "react";
import CatItem from "./../components/SearchPage/CatItem";
import { GetServerSideProps } from "next";
import { getSearched, getBreed } from "./../utils/apiHelpers";
import { Breed } from "./../interfaces/catapi";

interface Props {
  breedInfo: {
    info: Breed;
    images: {
      url: string;
    }[];
  }[];
}

export default function searches({ breedInfo }: Props): ReactElement {
  const elements = breedInfo.map((breed, i) => {
    return (
      <CatItem
        info={breed.info}
        images={breed.images}
        key={breed.info.id}
        number={i + 1}
      />
    );
  });
  return (
    <main className="space-y-5 my-4 w-max mx-auto p-4 rounded-2xl">
      {elements}
    </main>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const breedList = getSearched(10);
  const breedInfo = await Promise.all(
    breedList.map(async (id) => {
      return await getBreed(id, true);
    })
  );

  return {
    props: {
      breedInfo,
    },
  };
};
