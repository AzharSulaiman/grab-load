// Displays factoring/risk analysis results about brokers (e.g., credit scores, payment risk).
import React, { useState } from "react";

const dummyFactoring = [
  {
    broker: "ABC Logistics",
    creditScore: 92,
    riskLevel: "Low",
    paymentHistory: "Pays in 20 days on avg.",
    factoringApproved: true
  },
  {
    broker: "XYZ Freight",
    creditScore: 61,
    riskLevel: "Medium",
    paymentHistory: "Pays in 32 days on avg.",
    factoringApproved: false
  }
];

function FactoringCheck() {
  const [templates] = useState(dummyFactoring);
  return (
    <div>
      <h2>Factoring Check</h2>
      {templates.map(tpl => (
        <div key={tpl.id}>
          <strong>{tpl.name}</strong>
          <pre>{tpl.template}</pre>
        </div>
      ))}
    </div>
  );
}

export default FactoringCheck;