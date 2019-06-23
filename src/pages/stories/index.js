import React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/Layout";
import Hero from "../../components/Hero";
import StoryRoll from "../../components/StoryRoll";
import FeaturedStory from "../../components/FeaturedStory";
import { ParallaxProvider } from "react-scroll-parallax";
import HugeText from "../../components/HugeText";
import IntroBackgroundSection from "../../components/IntroBackgroundSection";

export default ({ data }) => (
  <Layout>
    <ParallaxProvider>
      {console.log(data)}
      <Hero
        image={data.heroBg}
        content={{
          heading: "The Stories",
          subheading: "Need subheadline content here"
        }}
      />
      <IntroBackgroundSection>
        <HugeText text="Featured" start="10" finish="-40" />
        <div className="container mx-auto mb-8 lg:mb-24 lg:mt-24">
          <h4 className="uppercase tracking-widest text-green mb-4 text-center">
            Subheadline Goes Here
          </h4>
          <h2 className="text-3xl lg:text-4xl text-center mb-8">
            Featured Story
          </h2>
          <FeaturedStory />
        </div>
        <HugeText text="More" start="-20" finish="-50" />
        <div className="container mx-auto">
          <h4 className="uppercase tracking-widest text-green mb-4 text-center">
            Subheadline Goes Here
          </h4>
          <h2 className="text-3xl lg:text-4xl text-center mb-8">
            More Stories
          </h2>
          <StoryRoll />
        </div>
      </IntroBackgroundSection>
    </ParallaxProvider>
  </Layout>
);

export const pageQuery = graphql`
  query StoriesPageTemplate {
    heroBg: file(relativePath: { eq: "storiesindex-hero-img.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2048, quality: 90) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;
