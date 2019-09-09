import React, { useState } from "react";
import BarChart from "./components/BarChart";
import Sample from "./constants/data.json";

import "./styles/index.scss";

function App() {
  const [data] = useState(Sample.data);
  const [labels] = useState(Sample.labels);
  const [title] = useState(Sample.title);
  return (
    <div className="App">
      <h2 className="title">{title}</h2>
      <BarChart data={data} labels={labels} />
    </div>
  );
}

export default App;
