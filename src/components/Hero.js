import React from "react";
import BackgroundImage from "gatsby-background-image";
import { Link } from "gatsby";

export default function Hero({ image, content, home = false }) {
  const { heading, subheading, theme } = content;
  return (
    <BackgroundImage
      fluid={image.childImageSharp.fluid}
      style={{
        backgroundAttachment: "fixed"
      }}
    >
      <div className={`hero ${home ? "home" : ""}`}>
        <div className="text-white text-center mx-auto max-w-3xl mt-24 lg:mt-0">
          {theme ? (
            <p className="font-lora tracking-wide font-lg italic mb-4">
              {theme.join(", ")}
            </p>
          ) : null}
          <h1 className="text-5xl lg:text-6xl tracking-wide mb-6 text-white">
            {heading}
          </h1>
          <p className="text-lg mb-8 font-lora tracking-wide font-lg italic">
            {subheading}
          </p>
          {home ? (
            <p>
              <Link
                to="/stories"
                className="block lg:inline-block w-56 mx-auto lg:mx-4 uppercase m-3 py-4 px-4 border-solid border-white border-2 font-bold tracking-widest text-sm hover:bg-white hover:text-green"
              >
                Read the stories
              </Link>
              <Link
                to="#visit"
                className="block lg:inline-block w-56 mx-auto lg:mx-4 uppercase m-3 py-4 px-4 border-solid border-white border-2 font-bold tracking-widest text-sm hover:bg-white hover:text-green"
              >
                Visit the Memorial
              </Link>
            </p>
          ) : null}
        </div>
      </div>
    </BackgroundImage>
  );
}
