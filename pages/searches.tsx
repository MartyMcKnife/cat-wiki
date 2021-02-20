import React, { ReactElement } from "react";
import SearchPage from "./../components/SearchPage/SearchPage";
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
  return <SearchPage></SearchPage>;
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
