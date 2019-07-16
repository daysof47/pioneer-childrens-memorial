import React from "react";
import Img from "gatsby-image";
import HugeText from "./HugeText";
import Fade from "react-reveal/Fade";
import NamesSlider from "./NamesSlider";
import ScrollableAnchor from "react-scrollable-anchor";

const StoneSection = ({ section, index }) => (
  <ScrollableAnchor id={`section-${index}`}>
    <section className="py-8 lg:py-24">
      <HugeText
        text={section.years}
        start="-30"
        finish="-70"
        textalign={index % 2 ? "text-right" : "text-left"}
      />
      <div className="container mx-auto">
        <div
          className={`flex flex-wrap items-center ${
            index % 2 ? "md:flex-row-reverse" : ""
          }`}
        >
          <div className="w-full md:w-1/2 lg:w-5/12">
            <Img fluid={section.image.childImageSharp.fluid} />
          </div>
          <div className="w-full md:w-1/2 lg:w-7/12 p-8 lg:p-12">
            <Fade up distance="50px">
              <h2 className="text-3xl lg:text-4xl mb-6 text-center">
                {section.heading}
              </h2>
              <div className="text-center leading-loose">
                <NamesSlider names={section.names} />
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </section>
  </ScrollableAnchor>
);

export default StoneSection;
