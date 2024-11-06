import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import HomePage from '../pages/home_page'
import LightbulbPage from '../pages/lightbulb_page'
import Instrucciones from '../pages/lista_instrucciones'
import Contacto from '../pages/pagina_contacto'
import Ubicacion from '../pages/ubicacion';

import RecicladosAluminios from '../pages/reciclado_aluminios';
import RecicladosCartones from '../pages/reciclado_cartones';
import RecicladosPapeles from '../pages/reciclado_papeles';
import RecicladosPlasticos from '../pages/reciclado_plastico';
import RecicladosVidrios from '../pages/reciclado_vidrios';

import NavBar from '../components/nav_bar'

const Layout = () => {
  return (
    <BrowserRouter>
      <div className='layout'>
        <h1 className='layout__title'>Reciclaje Inteligente</h1>
        <NavBar />
        <div className='layout__page'>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/ubicacion' element={<Ubicacion />} />
            <Route path='/instrucciones' element={<Instrucciones />} />
            <Route path='/contacto' element={<Contacto />} />

            <Route path='/Rpapeles' element={<RecicladosPapeles />} />
            <Route path='/Rcartones' element={<RecicladosCartones />} />
            <Route path='/Rvidrios' element={<RecicladosVidrios />} />
            <Route path='/Raluminios' element={<RecicladosAluminios />} />
            <Route path='/Rplasticos' element={<RecicladosPlasticos />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default Layout
