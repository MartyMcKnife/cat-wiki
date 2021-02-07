import React, { ReactElement } from "react";
import { GetStaticProps } from "next";
import { getSearch } from "./../interfaces/api";
import { Breed } from "./../interfaces/catapi";
import axios from "axios";

import Hero from "./../components/Hero/Hero";

interface Props {
  cats: getSearch[];
}

export default function index({ cats }: Props): ReactElement {
  return (
    <>
      <Hero cats={cats} />
      <h1>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem blanditiis
        illo dicta, sequi velit pariatur dolore corrupti voluptate eum modi fuga
        suscipit asperiores! Eaque aspernatur tenetur eum sequi laborum enim.
      </h1>
    </>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  const baseURL = "https://api.thecatapi.com/v1";

  const resp = await axios.get<Breed[]>(`${baseURL}/breeds`, {
    headers: { "x-api-key": process.env.CATAPI },
  });
  const cats = resp.data.map((cat) => {
    return { name: cat.name, id: cat.id };
  });
  return {
    props: {
      cats,
    },
  };
};
