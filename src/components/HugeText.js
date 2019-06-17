import React from "react";
import { Parallax } from "react-scroll-parallax";

export default function HugeText({ text, start, finish }) {
  return (
    <div className="huge-text relative">
      <div style={{ position: "absolute", width: "100%" }}>
        <Parallax y={[start, finish]} tagOuter="div">
          {text}
        </Parallax>
      </div>
    </div>
  );
}
