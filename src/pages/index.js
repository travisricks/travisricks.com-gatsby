import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";

export default () => (
  <Layout>
    <div>Hello there, Frontend Masters!</div>
    <Link to="/about/">Learn about me &rarr;</Link>
  </Layout>
);
