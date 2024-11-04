import React from 'react';

const RecyclingInstructions = () => {
  return (
    <div>
        <div className='card'>
            <div className='header'>Instrucciones</div>
            <div className='content-instruccion'>
                <h2 className='title'>Reciclar latas de aluminio correctamente</h2>
                <ul className='list'>
                <li>Lavar y desinfectar las latas después de usarlas. Luego dejarlas secar por completo para evitar hongos u oxidación.</li>
                <li>En el caso de latas tipo bebida, quitar el tap. En cambio si su lata es del tipo donde se almacenan comestibles, retirar la tapa por completo antes de reciclar.</li>
                <li>Se recomienda en la medida de lo posible aplastar la lata antes de depositarla.</li>
                </ul>
            </div>
        </div>
    </div>

  );
};

export default RecyclingInstructions;