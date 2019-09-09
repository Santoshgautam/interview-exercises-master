import React from "react";
import Bar from "../Bar";
import Grid from "../Grid";

const BarChart = ({ data = [], labels = [] }) => {
  const maxStep = Math.ceil(data.reduce((r, d) => (r < d ? d : r), 0) / 10) * 10;

  return (
    <div className="bar-chart">
      <Grid maxStep={maxStep} step={10} start={0} />
      <div className="bar-chart__bars">
        {data.map((d, i) => (
          <Bar key={i} data={d} label={labels[i]} max={maxStep} />
        ))}
      </div>
    </div>
  );
};

export default BarChart;
