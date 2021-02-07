import React, { ReactElement } from "react";
import { GetStaticProps } from "next";
import { getSearch, IgetBreed } from "./../interfaces/api";

import { getBreeds, getBreed } from "./../utils/apiHelpers";

import Hero from "./../components/Hero/Hero";
import SubHero from "./../components/Subhero/Subhero";

interface Props {
  cats: getSearch[];
  randomCatInfo: IgetBreed[];
}

export default function index({ cats, randomCatInfo }: Props): ReactElement {
  return (
    <>
      <Hero cats={cats} />
      <SubHero cats={randomCatInfo} />
    </>
  );
}

const getRandom = (array: Array<{ name: string; id: string }>, n: number) => {
  return array.sort(() => Math.random() - Math.random()).slice(0, n);
};

export const getStaticProps: GetStaticProps = async (context) => {
  const cats = await getBreeds();
  const randomCats = getRandom(cats, 8);

  const randomCatInfo = await Promise.all(
    randomCats.map(async (cat) => {
      const data = await getBreed(cat.name);
      return data;
    })
  );

  return {
    props: {
      cats,
      randomCatInfo,
    },
  };
};
