import React from "react";
import { graphql, StaticQuery } from "gatsby";
import BackgroundImage from "gatsby-background-image";

const IntroBackgroundSection = ({ children }) => (
  <StaticQuery
    query={graphql`
      query {
        bgImage: file(relativePath: { eq: "home-bg-donors-visit.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 90) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render={data => {
      const imageData = data.bgImage.childImageSharp.fluid;
      return (
        <BackgroundImage
          Tag="section"
          fluid={imageData}
          style={{
            backgroundSize: "100% auto",
            backgroundPosition: "center 180px"
          }}
        >
          {children}
        </BackgroundImage>
      );
    }}
  />
);

export default IntroBackgroundSection;
