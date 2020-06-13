import React from "react";
import Header from "./header";
import "../styles/styles.css";

const Layout = ({ children }) => (
  <>
    <Header />
    <main className="container mx-auto">{children}</main>
  </>
);

export default Layout;
