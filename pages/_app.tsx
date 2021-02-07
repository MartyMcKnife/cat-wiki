import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "./../components/Layout";
import Logo from "./../components/Logo";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Layout />
      <div className="mx-6 md:mx-12 lg:mx-28 md:mt-10 font-site">
        <Logo fill="#291507" width="150" height="100" />

        <Component {...pageProps} />
      </div>
    </div>
  );
}

export default MyApp;
