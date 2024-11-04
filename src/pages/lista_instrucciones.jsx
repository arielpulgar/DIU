import React from 'react';
import { NavLink } from 'react-router-dom'

const InstructionsCard = () => {
  const items = [
    { name: "RECICLADO PAPELES", path: "/Rpapeles" },
    { name: "RECICLADO CARTONES", path: "/Rcartones" },
    { name: "RECICLADO VIDRIOS", path: "/Rvidrios" },
    { name: "RECICLADO ALUMINIOS", path: "/Raluminios" },
    { name: "RECICLADO PLASTICOS", path: "/Rplasticos" },
  ];

  return (
    <div className="card">
      <div className="header">Instrucciones</div>
      <div className="content">
        {items.map((item, index) => (
          <NavLink key={index} to={item.path} className="button">
            {item.name}
          </NavLink>
        ))}
      </div>
      <div className="fake"></div>
      <div className="footer"></div>
    </div>
  );
};

export default InstructionsCard;