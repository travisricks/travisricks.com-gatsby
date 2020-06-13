import React from "react";
import Header from "./header";
import "../styles/styles.css";
import Helmet from "react-helmet";
import useSiteMetadata from "../hooks/useSiteMetadata";

const Layout = ({ children }) => {
  const { title, description } = useSiteMetadata();
  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>
      <Header />
      <main className="container mx-auto">{children}</main>
    </>
  );
};

export default Layout;
