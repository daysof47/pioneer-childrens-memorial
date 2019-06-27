import React from "react";
import { graphql, StaticQuery } from "gatsby";
import Fade from "react-reveal/Fade";
import HugeText from "../../components/HugeText";
import Img from "gatsby-image";

const TellStory = ({ content }) => (
  <StaticQuery
    query={graphql`
      query {
        submitStory: file(relativePath: { eq: "home-submit-a-story.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 800, quality: 90) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render={data => {
      const imageData = data.submitStory.childImageSharp.fluid;
      console.log(content);
      return (
        <div>
          <HugeText text="Tell a Story" start="-20" finish="-100" />
          <div className="flex flex-wrap lg:flex-no-wrap">
            <div className="w-full lg:w-7/12">
              <Img fluid={imageData} />
            </div>
            <div className="w-full lg:w-5/12 flex items-center relative">
              <div className="p-8 lg:p-12 max-w-md">
                <Fade right distance="50px">
                  <h2 className="text-3xl lg:text-4xl mb-4 lg:-ml-24">
                    {content.heading}
                  </h2>
                </Fade>
                <Fade right distance="50px">
                  <div>
                    <p className="mb-8">{content.description}</p>
                    <p className="text-center lg:text-left">
                      <a
                        href="#subscribe"
                        className="inline-block py-4 px-12 text-white bg-green uppercase tracking-widest text-sm"
                      >
                        {content.linkText}
                      </a>
                    </p>
                  </div>
                </Fade>
              </div>
            </div>
          </div>
        </div>
      );
    }}
  />
);

export default TellStory;
