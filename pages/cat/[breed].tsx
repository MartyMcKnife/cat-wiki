import React, { ReactElement } from "react";
import { getBreeds, getBreed } from "./../../utils/apiHelpers";
import { IgetBreed } from "./../../interfaces/api";
import { GetStaticPaths, GetStaticProps } from "next";
import Info from "./../../components/CatPage/Info";
interface Props {
  breed: IgetBreed;
}

export default function Breed({ breed }: Props): ReactElement {
  return (
    <section>
      <div className="sm:flex md:mx-24 my-8">
        <img
          src={breed.images[0].url}
          alt={`Image of ${breed.info.name}`}
          className="rounded-xl"
        />
        <Info breedInfo={breed.info} />
      </div>
    </section>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const breeds = await getBreeds();

  const paths = breeds.map((breed) => {
    return { params: { breed: breed.name } };
  });

  return {
    paths: paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  if (context.params) {
    if (context.params.breed && !Array.isArray(context.params.breed)) {
      const breedName = context.params.breed;
      const breedInfo = await getBreed(breedName);
      return {
        props: {
          breed: breedInfo,
        },
      };
    }
  }
  return { notFound: true };
};
