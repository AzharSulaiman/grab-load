// Component to analyze and display data scraped from load boards—e.g., loads, rates, broker info.

import React, { useState } from "react";

const dummyLoads = [
  {
    id: "LD12345",
    origin: "Chicago, IL",
    destination: "Dallas, TX",
    rate: "$2100",
    broker: "ABC Logistics"
  },
  {
    id: "LD67890",
    origin: "Atlanta, GA",
    destination: "Miami, FL",
    rate: "$1500",
    broker: "XYZ Freight"
  }
];

function LoadBoardAnalyzer() {
  const [templates] = useState(dummyLoads);
  return (
    <div>
      <h2>Load Board</h2>
      {templates.map(tpl => (
        <div key={tpl.id}>
          <strong>{tpl.name}</strong>
          <pre>{tpl.template}</pre>
        </div>
      ))}
    </div>
  );
}

export default LoadBoardAnalyzer;

