import React, { ReactElement, useEffect } from "react";
import { Breed } from "./../../interfaces/catapi";
import InfoBar from "./InfoBar";
import { fetcher } from "./../../utils/apiHelpers";
import useSWR from "swr";

interface Props {
  breedInfo: Breed;
}

export default function Info({ breedInfo }: Props): ReactElement {
  const { data, error } = useSWR(`/api/addSearch/${breedInfo.id}`, fetcher);
  if (error) {
    console.error(error);
  }
  if (data) {
    console.log(data);
  }
  return (
    <article className="text-text mt-4 sm:mt-0 sm:ml-20 xl:ml-28 max-w-screen-md text-left tracking-wide">
      <h1 className="text-4xl font-semibold">{breedInfo.name}</h1>
      <h2 className="font-medium pt-4">{breedInfo.description}</h2>
      <section className="space-y-4 pt-8">
        <h3>
          <b>Temperament:</b> {breedInfo.temperament}
        </h3>
        <h3>
          <b>Origin:</b> {breedInfo.origin}
        </h3>
        <h3>
          <b>Life Span:</b> {breedInfo.life_span} years
        </h3>
        <div className="grid grid-cols-3">
          <InfoBar label="Adaptability" length={breedInfo.adaptability} />
          <InfoBar label="Affection Level" length={breedInfo.affection_level} />
          <InfoBar label="Child Friendly" length={breedInfo.child_friendly} />
          <InfoBar label="Grooming" length={breedInfo.grooming} />
          <InfoBar label="Intelligience" length={breedInfo.intelligence} />
          <InfoBar label="Health Issues" length={breedInfo.health_issues} />
          <InfoBar label="Social Needs" length={breedInfo.social_needs} />
          <InfoBar
            label="Stranger Friendly"
            length={breedInfo.stranger_friendly}
          />
        </div>
      </section>
    </article>
  );
}
