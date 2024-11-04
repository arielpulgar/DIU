import React from 'react';

const RecyclingInstructions = () => {
  return (
    <div>
        <div className='card'>
            <div className='header'>Instrucciones</div>
            <div className='content-instruccion'>
                <h2 className='title'>Reciclar papel correctamente</h2>
                <ul className='list'>
                <li>Asegurarse que el papel que se tiene pueda ser reciclado. Los papeles que se reciclan comúnmente son: Periódicos, revistas, folletos publicitarios, hojas de cuaderno, hojas de libretas y papel de impresora. </li>
                <li>Antes de depositarlo en el contenedor, elimina las grapas, clips o cualquier material extra que no forme parte del papel.</li>
                <li>Evita el papel húmedo o mojado, este puede contaminar otros papeles y no ser reciclable.</li>
                </ul>
            </div>
        </div>
    </div>

  );
};

export default RecyclingInstructions;