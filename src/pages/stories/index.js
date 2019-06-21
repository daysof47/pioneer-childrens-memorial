import React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/Layout";
import BackgroundImage from "gatsby-background-image";
import Hero from "../../components/Hero";
import StoryRoll from "../../components/StoryRoll";

export default ({ data }) => (
  <Layout>
    {console.log(data)}
    <Hero
      image={data.heroBg}
      content={{
        heading: "The Stories",
        subheading: "Need subheadline content here"
      }}
    />
    <BackgroundImage
      fluid={data.introBg.childImageSharp.fluid}
      style={{
        backgroundSize: "contain",
        backgroundPosition: "top center",
        marginTop: "40px"
      }}
    >
      <div className="container mx-auto">
        <StoryRoll />
      </div>
    </BackgroundImage>
  </Layout>
);

export const pageQuery = graphql`
  query StoriesPageTemplate {
    introBg: file(relativePath: { eq: "home-bg-purpose.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2048, quality: 90) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    heroBg: file(relativePath: { eq: "storiesindex-hero-img.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2048, quality: 90) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;
