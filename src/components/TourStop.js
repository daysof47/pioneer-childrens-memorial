import React from "react";
import ScrollableAnchor from "react-scrollable-anchor";
import { configureAnchors } from "react-scrollable-anchor";
import Img from "gatsby-image";
import HugeText from "./HugeText";
import Fade from "react-reveal/Fade";
import ReactAudioPlayer from "react-audio-player";

configureAnchors({ scrollDuration: 750 });

const TourStop = ({ section, index }) => (
  <ScrollableAnchor id={`section-${index}`}>
    <section className="py-8 lg:py-24">
      <HugeText
        text={section.heading}
        start="-20"
        finish="-100"
        textalign={index % 2 ? "text-right" : "text-left"}
      />
      <div>
        <div
          className={`flex flex-wrap items-center ${
            index % 2 ? "md:flex-row-reverse" : ""
          }`}
        >
          <div className="w-full md:w-1/2 lg:w-7/12">
            <Img fluid={section.image.childImageSharp.fluid} />
          </div>
          <div className="w-full md:w-1/2 lg:w-5/12 p-8 lg:p-12">
            <Fade
              left={index % 2 ? true : false}
              right={index % 2 ? false : true}
              distance="100px"
            >
              <h2 className="text-3xl lg:text-4xl mb-6">
                0{index + 1}. {section.heading}
              </h2>
              <div
                dangerouslySetInnerHTML={{
                  __html: section.description
                }}
              ></div>
            </Fade>
            <ReactAudioPlayer src={section.audio} controls />
          </div>
        </div>
      </div>
    </section>
  </ScrollableAnchor>
);

export default TourStop;
