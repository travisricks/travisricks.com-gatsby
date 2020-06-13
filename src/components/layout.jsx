import React from "react";
import "../styles/styles.css";

const Layout = ({ children }) => (
  <>
    <header></header>
    <main>{children}</main>
  </>
);

export default Layout;
