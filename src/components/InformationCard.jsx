import React from "react";

export default function InformationCard({ sectionName, children, extras }) {
  return (
    <div className="information-container">
      <h2 className="subsection-header">{sectionName}</h2>
      <div className="columns">
        <div className="text-column">{children}</div>
        <div className="extra-column">{extras}</div>
      </div>
    </div>
  );
}
