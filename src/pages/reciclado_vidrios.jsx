import React from 'react';

const RecyclingInstructions = () => {
  return (
    <div>
        <div className='card'>
            <div className='header'>Instrucciones</div>
            <div className='content-instruccion'>
                <h2 className='title'>Reciclar vidrios correctamente</h2>
                <ul className='list'>
                <li>Los objetos de vidrios que pueden ser reciclados son los siguientes: Botellas, envases y frascos de vidrio.</li>
                <li>Lavar y desinfectar los envases/botellas después de usarlas. Luego dejarlas secar por completo para evitar hongos y malos olores.</li>
                <li>Asegurarse que cualquier botella o envase se encuentre sin la tapa.</li>
                </ul>
            </div>
        </div>
    </div>

  );
};

export default RecyclingInstructions;