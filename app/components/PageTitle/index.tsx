import Head from "next/head";
import React from "react";

function PageTitle(props: { title: string }) {
  return (
    <Head>
      <title>{props.title}</title>
      <meta property="og:title" content="My page title" key="title" />
    </Head>
  );
}

export default PageTitle;
