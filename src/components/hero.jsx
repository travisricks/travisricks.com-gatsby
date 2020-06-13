import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import BackgroundImage from "gatsby-background-image";

const Hero = () => {
  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "louie-martinez-tokyo.jpg" }) {
        sharp: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);
  return (
    <BackgroundImage Tag="section" fluid={image.sharp.fluid} fadeIn="soft">
      <div>
        <h1>FEM + Gatsby &hearts;</h1>
        <p>
          Hello Tokyo. <Link to="/about">Learn about me.</Link>
        </p>
      </div>
    </BackgroundImage>
  );
};

export default Hero;
