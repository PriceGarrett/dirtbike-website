import React from "react";

export default function InformationCard({ sectionName, children, left, right }) {
  return (
    <div className="information-container">
      <h2 className="subsection-header">{sectionName}</h2>
      <div className="columns">
      <div className="extra-column">{left}</div>
        <div className="text-column">{children}</div>
        <div className="extra-column">{right}</div>
      </div>
    </div>
  );
}
