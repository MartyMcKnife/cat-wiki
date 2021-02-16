import React, { ReactElement } from "react";
import { Breed } from "./../../interfaces/catapi";
import InfoBar from "./InfoBar";

interface Props {
  breedInfo: Breed;
}

export default function Info({ breedInfo }: Props): ReactElement {
  return (
    <article className="text-text ml-28 max-w-xl text-left tracking-wide">
      <h1 className="text-4xl font-semibold">{breedInfo.name}</h1>
      <h2 className="font-medium ptfa-rotate-180">{breedInfo.description}</h2>
      <section className="space-y-4 pt-8">
        <h3>
          <b>Temperament:</b> {breedInfo.temperament}
        </h3>
        <h3>
          <b>Origin:</b> {breedInfo.origin}
        </h3>
        <h3>
          <b>Life Span:</b> {breedInfo.life_span}
        </h3>
        <InfoBar label={"Adaptability"} length={breedInfo.adaptability} />
      </section>
    </article>
  );
}
