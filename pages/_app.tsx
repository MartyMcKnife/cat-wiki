import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "./../components/Layout";
import Header from "./../components/Header";
import Footer from "./../components/Footer";
import Router from "next/router";
import NProgress from "nprogress";

Router.events.on("routeChangeStart", (url) => {
  NProgress.start();
});
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Layout />
      <div className="mx-6 md:mx-12 lg:mx-28 md:mt-10 font-site min-h-screen relative">
        <Header />
        <div className="pb-28">
          <Component {...pageProps} />
        </div>

        <Footer />
      </div>
    </>
  );
}

export default MyApp;
