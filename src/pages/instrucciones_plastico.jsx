import React from 'react';

const RecyclingInstructions = () => {
  return (
    <div style={styles.card}>
      <div style={styles.header}>Instrucciones</div>
      <div style={styles.content}>
        <h2 style={styles.title}>Reciclar plástico correctamente</h2>
        <ul style={styles.list}>
          <li>Lava y enjuaga los envases de plástico antes de depositarlos en el contenedor. De esta forma, se evitarán los malos olores y se facilitará el proceso de reciclaje.</li>
          <li>Separa los envases de plástico por tipos de material. Esto ayudará a mejorar la calidad del material reciclado.</li>
          <li>Deposita los envases de plástico en el contenedor de envases correctamente. No los aplastes ni los dejes abiertos.</li>
        </ul>
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
    padding: '20px 30%',
    
  },
  title: {
    margin: '0',
    fontSize: '2em',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  list: {
    paddingLeft: '20px',
    lineHeight: '1.5',
    textAlign: 'justify',
  },
  footer: {
    backgroundColor: '#00a122',
    padding: '20px 50%',
    position: 'absolute',
    bottom: '0vh',
  },
};

export default RecyclingInstructions;


