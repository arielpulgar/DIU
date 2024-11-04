import React from 'react';

const RecyclingInstructions = () => {
  return (
    <div>
        <div className='card'>
            <div className='header'>Instrucciones</div>
            <div className='content-instruccion'>
                <h2 className='title'>Reciclar cartón correctamente</h2>
                <ul className='list'>
                <li>Asegurarse que el cartón que se desea reciclar sea reciclable, esto suele ser indicado mediante un triángulo formado por tres flechas.</li>
                <li>Dependiendo del tipo de cartón es donde se deposita; los cartones de líquidos, también conocidos como Tetra Pak, se dejan en un contenedor propio ya que posee distintos materiales además del
                cartón. Cualquier otro se deposita en el contenedor destinado para cartón.
                </li>
                <li>Se debe retirar del cartón cualquier plástico, cinta adhesiva o otros materiales que no sean cartón. Asegurarse que estén limpios antes de depositar.</li>
                <li>De ser posible, cortar o doblar los cartones para que ocupen el menor espacio posible.</li>
                </ul>
            </div>
        </div>
    </div>

  );
};

export default RecyclingInstructions;


