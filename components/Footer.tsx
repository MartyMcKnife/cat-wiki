import React, { ReactElement } from "react";
import Logo from "./Logo";

export default function Footer(): ReactElement {
  return (
    <footer className="bg-black rounded-t-3xl flex items-center px-12 justify-between absolute w-full bottom-0 h-28">
      <Logo fill="white" width="150" height="100" />
      <h1 className="text-white">© Sean McDougall</h1>
    </footer>
  );
}
