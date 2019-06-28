import React from "react";
import { graphql, StaticQuery } from "gatsby";
import BackgroundImage from "gatsby-background-image";

const IntroBackgroundSection = ({ children }) => (
  <StaticQuery
    query={graphql`
      query {
        introBg: file(relativePath: { eq: "home-bg-purpose.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 90) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render={data => {
      // Set ImageData.
      // console.log(data);
      const imageData = data.introBg.childImageSharp.fluid;
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
