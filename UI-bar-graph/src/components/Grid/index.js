import React from "react";

const Grid = ({ maxStep, step, start }) => {
  const grids = [];
  let value = maxStep;

  while (value >= start) {
    grids.push(
      <div className="grid-y" key={value}>
        <div className="grid-label">{value}</div>
        <div className="grid-line"></div>
      </div>
    );
    value -= step;
  }
  return (
    <div className="axis-y">
      <div className="axis"></div>
      {grids}
    </div>
  );
};

export default Grid;
