import React, { ReactElement } from "react";

interface Props {
  colour: boolean;
}

export default function InfoCell({ colour }: Props): ReactElement {
  const style = colour ? "bg-cell" : "bg-gray-400";
  return (
    <div className={`rounded-full w-12 h-3 ${style} inline-block mx-1.5`}></div>
  );
}
