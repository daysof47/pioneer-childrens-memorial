import React from "react";

export default function Line({ mobile, desk }) {
  return (
    <div className="line">
      <div className={`h-${mobile} lg:h-${desk}`}></div>
    </div>
  );
}
