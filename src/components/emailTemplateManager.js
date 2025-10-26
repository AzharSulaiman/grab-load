// Component for creating and managing broker email templates

import React, { useState } from "react";
import "../css/emailTemplateCss.css"

const dummyTemplates = [
  {
    id: 1,
    name: "Basic Broker Pitch",
    template: "Hello {broker_name},\nWe are interested in booking load {load_id} from {origin} to {destination} at the offered rate of {rate}. Please confirm availability.\nThank you!"
  },
  {
    id: 2,
    name: "Rate Negotiation",
    template: "Hi {broker_name},\nCan you do better than {rate} for load {load_id}? Looking forward to your response."
  }
];

function EmailTemplateManager() {
  const [templates] = useState(dummyTemplates);
  return (
   <div className="email-templates-container">
      <h2>Email Templates</h2>
      {templates.map(tpl => (
        <div className="email-template-card" key={tpl.id}>
          <strong>{tpl.name}</strong>
          <pre>{tpl.template}</pre>
        </div>
      ))}
    </div>
  );
}

export default EmailTemplateManager;
