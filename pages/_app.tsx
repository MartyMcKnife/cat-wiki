import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "./../components/Layout";
import Logo from "./../components/Logo";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    <>
      <Layout />
      <div className="mx-6 md:mx-12 lg:mx-28 md:mt-10 font-site">
        <div
          className="cursor-pointer"
          onClick={() => {
            router.push("/");
          }}
        >
          <Logo fill="#291507" width="150" height="100" />
        </div>

        <Component {...pageProps} />
        <footer className="bg-black rounded-t-3xl flex items-center px-12 justify-between">
          <Logo fill="white" width="150" height="100" />
          <h1 className="text-white">© Sean McDougall</h1>
        </footer>
      </div>
    </>
  );
}

export default MyApp;
