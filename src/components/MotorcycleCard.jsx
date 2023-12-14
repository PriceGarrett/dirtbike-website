import React from "react";

export default function MotorcycleCard({
  image,
  imgOnLeft,
  category,
  exampleBike,
  desc,
  children
}) {
  return (
    <div className="card-container">
      <div className="motorcycle-card">
        {imgOnLeft && (
          <img src={image} className="motorcycle-item-img" alt={exampleBike} />
        )}
        <div className="motorcycle-content">
          <div className="motorcycle-details">
            <h2>
              {category}{(exampleBike !== "") && ':'} {exampleBike}
            </h2>
          </div>

          <div className="motorcycle-description">
            <p>{desc}</p>
          </div>

          {children}

        </div>
        {!imgOnLeft && (
          <img src={image} className="motorcycle-item-img" alt={exampleBike} />
        )}
      </div>
    </div>
  );
}
