import React, { ReactElement } from "react";

interface Image {
  height: number;
  id: string;
  url: string;
  width: number;
}

interface Props {
  images: Image[];
}

export default function Images({}: Props): ReactElement {
  return <div></div>;
}
