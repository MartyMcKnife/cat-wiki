import React, { ReactElement } from "react";
import { useRouter } from "next/router";
import Logo from "./Logo";

export default function Header(): ReactElement {
  const router = useRouter();
  const index = router.asPath !== "/";
  const goHome = () => {
    router.push("/");
  };
  return (
    <header className="flex justify-between">
      <Logo
        fill="#291507"
        width="150"
        height="100"
        className="cursor-pointer"
        onClick={goHome}
      />
      {index ? (
        <button onClick={goHome} className="focus:outline-none">
          Go Home!
        </button>
      ) : (
        ""
      )}
    </header>
  );
}
