import React from 'react';

const InstructionsCard = () => {
  return (
    <div style={styles.card}>
      <div style={styles.header}>Instrucciones</div>
      <div style={styles.content}>
        {["RECICLADO PAPELES", "RECICLADO CARTONES", "RECICLADO VIDRIOS", "RECICLADO ALUMINIOS", "RECICLADO PLASTICOS"].map((item, index) => (
          <div key={index} style={styles.button}>
            {item}
          </div>
        ))}
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
    //overflow: 'hidden',
    backgroundColor: 'white',
    fontFamily: 'Arial, sans-serif',
    //textAlign: 'center',
  },
  header: {
    backgroundColor: '#00a122',
    color: 'white',
    fontSize: '2em',
    padding: '10px',
    textAlign: 'center',
  },
  content: {
    padding: '20px 40%',
    display: 'flex',
    flexDirection: 'column',
    gap: '1em',
  },
  button: {
    backgroundColor: '#00a122',
    color: 'white',
    fontWeight: 'bold',
    padding: '10px 0',
    borderRadius: '20px',
    textAlign: 'center',
  },
  footer: {
    backgroundColor: '#00a122',
    padding: '20px 50%',
    position: 'absolute',
    bottom: '0vh',
  },
};

export default InstructionsCard;