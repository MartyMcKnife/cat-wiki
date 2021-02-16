import React, { ReactElement } from "react";
import InfoCell from "./InfoCell";

interface Props {
  label: string;
  length: number;
}

const clamp = (min: number, max: number, val: number): number => {
  return Math.min(Math.max(min, +val), max);
};

//Create array from length of input
//Make sure it has length of five
//If it isn't, pad it out to five by adding empty InfoBars

export default function InfoBar({ label, length }: Props): ReactElement {
  const clampedNumber = Math.round(clamp(0, 5, length));
  let elements: JSX.Element[] = [];

  for (let i = 0; i < clampedNumber; i++) {
    elements.push(<InfoCell colour={true} />);
  }
  while (true) {
    if (elements.length != 5) {
      elements.push(<InfoCell colour={false} />);
    } else {
      break;
    }
  }

  console.log(elements);

  return (
    <div className="flex items-center">
      <h1>
        <b>{label}:</b>
      </h1>
      <div className="ml-8">{elements}</div>
    </div>
  );
}
