import React, { ReactElement } from "react";

export default function Images(): ReactElement {
  return (
    <div className="grid grid-cols-2 gap-4">
      <img src="/image 2.png" alt="Cat being cuddled" />
      <img src="/image 3.png" alt="Cat in backpack" className="row-span-2" />
      <img src="/image 1.png" alt="Cat being held" className="place-self-end" />
    </div>
  );
}
