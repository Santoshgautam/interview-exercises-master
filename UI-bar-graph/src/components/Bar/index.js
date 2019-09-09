import React from "react";

const Bar = ({ data, label, max }) => {
  return (
    <div className="bar" style={{ height: `${(data / max) * 100}%` }}>
      <span className="bar-value">{data}</span>
      <span className="bar-label">{label}</span>
    </div>
  );
};

export default Bar;
