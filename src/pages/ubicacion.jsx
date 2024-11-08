import React, { useState } from 'react';
import maps from '../assets/maps.jpg';

const UbiCard = () => {
  const [selectedFuente, setSelectedFuente] = useState("Seleccione un punto");

  const getRandomStatus = () => (Math.random() > 0.5 ? "Operativo" : "Fuera de servicio");

  const handleFuenteClick = (fuente) => {
    setSelectedFuente(fuente);
  };

  const renderStatus = () => {
    if (selectedFuente === "Seleccione un punto") {
      return null;
    }
    return (
      <>
        <p className="title-texto-mapa"><strong>Estado de los contenedores</strong></p>
        <p className="texto-mapa"><strong>Contenedor de papeles</strong><br />{getRandomStatus()}</p>
        <p className="texto-mapa"><strong>Contenedor de vidrios</strong><br />{getRandomStatus()}</p>
        <p className="texto-mapa"><strong>Contenedor de aluminios</strong><br />{getRandomStatus()}</p>
        <p className="texto-mapa"><strong>Contenedor de cartones</strong><br />{getRandomStatus()}</p>
        <p className="texto-mapa"><strong>Contenedor de plásticos</strong><br />{getRandomStatus()}</p>
      </>
    );
  };

  return (
    <div className="card">
      <div className="header">BUSCADOR DE PUNTOS</div>
      <div className="content">
        <div className="mapa-container">
          <img src={maps} className="mapa" alt="Mapa"/>
          <div className="puntos">
              <button className='mardoqueo' onClick={() => handleFuenteClick("Fuente Mardoqueo")}></button>
              <button className='oxxo' onClick={() => handleFuenteClick("OXXO")}></button>
              <button className='amadeus' onClick={() => handleFuenteClick("Amadeus Pizza")}></button>
          </div>
        </div>
        <h2 className={`sub-title ${selectedFuente !== "Seleccione un punto" ? 'selected' : ''}`}>
          {selectedFuente}
        </h2>
        {renderStatus()}
      </div>
    </div>
  );
};

export default UbiCard;
