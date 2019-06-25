import React from "react";
import Layout from "../../components/Layout";
import Hero from "../../components/Hero";

export default ({ data }) => (
  <Layout>
    <Hero
      image={data.heroBg}
      content={{
        heading: "Thank You",
        subheading: "We will be in touch"
      }}
      home={true}
    />
  </Layout>
);

export const pageQuery = graphql`
  query ThanksPageTemplate {
    heroBg: file(relativePath: { eq: "storiesindex-hero-img.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2048, quality: 90) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;
