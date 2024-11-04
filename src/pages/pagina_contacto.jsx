import React from 'react';

const ContactCard = () => {
  return (
    <div className="card">
      <div className="header">Contacto</div>
      <div className="content">
        <h2 className="title">Reciclaje Unido SPA.</h2>
        <p className="text"><strong>Teléfono</strong><br />+569 9876 5432</p>
        <p className="text"><strong>Correo</strong><br />reciclaje.unido@gmail.com</p>
        <p className="text"><strong>Dirección</strong><br />Av. Vicuña Mackenna 3939, San Joaquín, RM</p>
      </div>
      <div className="footer"></div>
    </div>
  );
};

export default ContactCard;

