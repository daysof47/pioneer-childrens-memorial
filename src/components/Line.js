import React from "react";

export default function Line({ height }) {
  return (
    <div className="line">
      <div style={{ height: `${height}px` }}></div>
    </div>
  );
}
