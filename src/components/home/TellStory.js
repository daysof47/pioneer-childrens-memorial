import React from "react";
import { graphql, StaticQuery } from "gatsby";
import Fade from "react-reveal/Fade";
import HugeText from "../../components/HugeText";
import Img from "gatsby-image";

const TellStory = () => (
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
                    Have a Fascinating Story to tell?
                  </h2>
                </Fade>
                <Fade right distance="50px">
                  <div>
                    <p className="mb-8">
                      Vestibulum ante ipsum primis in faucibus orci luctus et
                      ultrices posuere cubilia Curae; Donec velit neque, auctor
                      sit amet aliquam vel, ullamcorper sit amet ligula. Nulla
                      quis lorem ut libero malesuada feugiat. Nulla porttitor
                      accumsan tincidunt.
                    </p>
                    <p className="text-center lg:text-left">
                      <a
                        href="#subscribe"
                        className="inline-block py-4 px-12 text-white bg-green uppercase tracking-widest text-sm"
                      >
                        Submit a Story
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
