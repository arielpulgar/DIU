import React from 'react';

const InstructionsCard = () => {
  return (
    <div className="card">
      <div className="header">Instrucciones</div>
      <div className="content">
        {["RECICLADO PAPELES", "RECICLADO CARTONES", "RECICLADO VIDRIOS", "RECICLADO ALUMINIOS", "RECICLADO PLASTICOS"].map((item, index) => (
          <div key={index} className="button">
            {item}
          </div>
        ))}
      </div>
      <div className="facke"></div>
      <div className="footer"></div>
    </div>
  );
};

export default InstructionsCard;