import React, { useState } from "react";
import "../css/emailTemplateCss.css";

const initialTemplates = [
  {
    id: 1,
    name: "Usual",
    to: "dispatch@goldenkeyexpressllc.com",
    from: "dispatch@goldenkeyexpressllc.com",
    subject: "Load from {{origin}} to {{dest}} {{ref}}",
    body: `Hello, team!\n\nCould you please provide more details on your load from {{origin}} to {{dest}} available on {{avail}} and your target rate?\nOur MC is 978910.\nKindly reply to all.\n\nThanks in advance,\nGolden Key Express\n(484) 320-6700 ext 1`,
  },
];

function EmailTemplateManager() {
  const [templates, setTemplates] = useState(initialTemplates);
  const [activeIdx, setActiveIdx] = useState(0);

  // Editing fields
  const [body, setBody] = useState(templates[0].body);
  const [from, setFrom] = useState(templates[0].from);
  const [to, setTo] = useState(templates[0].to);

  const handleSend = () => {
    alert("Email sent!\n\n" + body);
  };

  return (
    <div className="email-templates-container">
      <div className="email-template-card">
        <div className="email-header">
          <div>
            <label>From:</label>
            <input value={from} onChange={e => setFrom(e.target.value)} />
          </div>
          <div>
            <label>To:</label>
            <input value={to} onChange={e => setTo(e.target.value)} />
          </div>
        </div>
        <div className="email-fields">
          <label>Subject:</label>
          <input disabled value={templates[activeIdx].subject} />
        </div>
        <div className="email-fields">
          <label>Body:</label>
          <textarea
            value={body}
            onChange={e => setBody(e.target.value)}
            rows={10}
          />
        </div>
        <button className="btn-send" onClick={handleSend}>
          Send Email
        </button>
      </div>
    </div>
  );
}

export default EmailTemplateManager;