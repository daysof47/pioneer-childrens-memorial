import React from "react";
import Img from "gatsby-image";

const Slide = ({ slide }) => {
  // let transform = "";
  // let opacity = "0";
  // switch (slide.position) {
  //   case 0:
  //     transform = "translate(-125%, 0%) scale(0.5)";
  //     break;
  //   case 1:
  //     transform = "translate(-75%, 0%) scale(0.5)";
  //     opacity = "1";
  //     break;
  //   case 2:
  //     transform = "translate(-27%, 0%) scale(.92)";
  //     opacity = "1";
  //     break;
  //   case 3:
  //     transform = "translate(0%, 0%) scale(0.5)";
  //     opacity = "1";
  //     break;
  //   case 4:
  //     transform = "translate(25%, 0%) scale(0.5)";
  //     break;
  //   default:
  //     transform = "translate(-25%, 0%) scale(0.5)";
  // }
  let styles = {
    // zIndex: "1",
    // position: "absolute",
    // width: "100%",
    // left: "50%",
    // top: "0",
    // opacity: opacity,
    // transform: transform,
    // transition: "transform ease-out 0.45s"
  };
  return (
    <div className="slide" style={styles}>
      <Img fixed={slide.image.childImageSharp.fixed} />
    </div>
  );
};

export default Slide;
