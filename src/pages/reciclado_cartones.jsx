import React from 'react';

const RecyclingInstructions = () => {
  return (
    <div>
        <div className='card'>
            <div className='header'>Instrucciones</div>
            <div className='content-instruccion'>
                <h2 className='title'>Reciclar plástico correctamente</h2>
                <ul className='list'>
                <li>Lava y enjuaga los envases de plástico antes de depositarlos en el contenedor. De esta forma, se evitarán los malos olores y se facilitará el proceso de reciclaje.</li>
                <li>Separa los envases de plástico por tipos de material. Esto ayudará a mejorar la calidad del material reciclado.</li>
                <li>Deposita los envases de plástico en el contenedor de envases correctamente. No los aplastes ni los dejes abiertos.</li>
                </ul>
            </div>
        </div>
    </div>

  );
};

export default RecyclingInstructions;


