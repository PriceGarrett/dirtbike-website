import React from 'react';

const ProConList = ({ pros, cons }) => {
  return (
    <div className="pro-con-list">
      <div className="pros">
        <h3>Pros</h3>
        <ul>
          {pros.map((pro, index) => (
            <li key={index}>{pro}</li>
          ))}
        </ul>
      </div>
      <div className="cons">
        <h3>Cons</h3>
        <ul>
          {cons.map((con, index) => (
            <li key={index}>{con}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProConList;