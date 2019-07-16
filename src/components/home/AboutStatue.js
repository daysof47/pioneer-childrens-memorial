import React from "react";
import { graphql, StaticQuery } from "gatsby";
import Img from "gatsby-image";

const AboutStatue = () => (
  <StaticQuery
    query={graphql`
      query {
        file(relativePath: { eq: "home-about-statue.png" }) {
          childImageSharp {
            fluid(maxWidth: 600, quality: 90) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render={data => {
      const imageData = data.file.childImageSharp.fluid;
      return <Img fluid={imageData} />;
    }}
  />
);

export default AboutStatue;
