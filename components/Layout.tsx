import React, { ReactElement } from "react";
import Head from "next/head";

export default function Layout(): ReactElement {
  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="CatwikiLogo.svg" />
        <meta name="title" content="CatWiki" />
        <meta
          name="description"
          content="A wiki to find all sorts of information for your cat"
        />
        <meta
          name="keywords"
          content="cat, wiki, furry, friend, tool, utility, stats, helper, search"
        />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="author" content="Sean Mcdougall" />
      </Head>
    </div>
  );
}
