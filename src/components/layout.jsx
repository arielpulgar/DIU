import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import HomePage from '../pages/home_page'
import LightbulbPage from '../pages/lightbulb_page'
import Instrucciones from '../pages/lista_instrucciones'
import Contacto from '../pages/pagina_contacto'

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
            <Route path='/lightbulb' element={<LightbulbPage />} />
            <Route path='/instrucciones' element={<Instrucciones />} />
            <Route path='/contacto' element={<Contacto />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default Layout
