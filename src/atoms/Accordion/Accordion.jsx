import React, { useState } from 'react';
import './Accordion.scss';

const Accordion = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="accordion">
      <div className="accordion-item">
        <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
          <p>Beverages</p>
          <p>{isActive ? '-' : '+'}</p>
        </div>
        {isActive && (
          <div className="accordion-content">
            <p>Fish</p>
            <p>Fish</p>
            <p>Fish</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Accordion;
