import React from "react";

export default function SubCard({ title, content }) {
  return (
    <div className="sub-card">
      <h3>{title}</h3>
      <ul>
        {content.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
