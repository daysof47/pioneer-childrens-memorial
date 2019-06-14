import React from "react";
import BackgroundImage from "gatsby-background-image";
import { Link } from "gatsby";

export default function Hero({ image, content }) {
  const { heading, subheading } = content;
  console.log(content);
  return (
    <BackgroundImage fluid={image.childImageSharp.fluid}>
      <div className="hero">
        <div className="text-white text-center mx-auto max-w-3xl">
          <h1 className="text-xl lg:text-6xl tracking-wide mb-6 text-white">
            {heading}
          </h1>
          <p className="text-lg mb-8">
            <em className="font-lora">{subheading}</em>
          </p>
          <p>
            <Link
              to="/"
              className="inline-block uppercase m-3 py-4 px-12 border-solid border-white border-2 font-bold tracking-widest text-sm hover:bg-white hover:text-green"
            >
              Read the stories
            </Link>
            <Link
              to="/"
              className="inline-block uppercase m-3 py-4 px-12 border-solid border-white border-2 font-bold tracking-widest text-sm hover:bg-white hover:text-green"
            >
              Visit the Memorial
            </Link>
          </p>
        </div>
      </div>
    </BackgroundImage>
  );
}
