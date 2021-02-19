import React, { ReactElement } from "react";
import InfoCell from "./InfoCell";

interface Props {
  label: string;
  length: number;
}

const clamp = (min: number, max: number, val: number): number => {
  return Math.min(Math.max(min, +val), max);
};

export default function InfoBar({ label, length }: Props): ReactElement {
  const clampedNumber = Math.round(clamp(0, 5, length));
  let elements: JSX.Element[] = [];

  for (let i = 0; i < clampedNumber; i++) {
    elements.push(<InfoCell colour={true} key={i} />);
  }
  while (true) {
    let i = elements.length + 1;
    if (elements.length != 5) {
      elements.push(<InfoCell colour={false} key={i} />);
      i++;
    } else {
      break;
    }
  }

  return (
    <>
      <h1 className="mb-4 max-w-max">
        <b>{label}:</b>
      </h1>
      <div className="w-full col-span-2">{elements}</div>
    </>
  );
}
