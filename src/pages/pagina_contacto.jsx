import React from 'react';

export const ContactCard = () => {
  return (
    <div style={styles.card}>
      <div style={styles.header}>Contacto</div>
      <div style={styles.content}>
        <h2 style={styles.title}>Reciclaje Unido SPA.</h2>
        <p style={styles.text}><strong>Teléfono</strong><br />+569 9876 5432</p>
        <p style={styles.text}><strong>Correo</strong><br />reciclaje.unido@gmail.com</p>
        <p style={styles.text}><strong>Dirección</strong><br />Av. Vicuña Mackenna 3939, San Joaquín, RM</p>
      </div>
      <div style={styles.footer}>
      </div>
    </div>
  );
};

const styles = {
  card: {
    position: 'relative',
    minHeight: '85vh',
    backgroundColor: 'white',
    fontFamily: 'Arial, sans-serif',
  },
  header: {
    backgroundColor: '#00a122',
    color: 'white',
    fontSize: '2em',
    textAlign: 'center',
  },
  content: {
    padding: '20px',
    textAlign: 'center',
  },
  title: {
    margin: '0',
    fontSize: '2em',
    fontWeight: 'bold',
  },
  text: {
    margin: '0.75em 0',
    color: '#333',
  },
  footer: {
    backgroundColor: '#00a122',
    padding: '20px 50%',
    position: 'absolute',
    bottom: '0vh',
  },
};

export default ContactCard;

