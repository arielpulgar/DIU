import React from 'react'
import { NavLink } from 'react-router-dom'
import telefono from '../assets/tel.png'
import ubicacion from '../assets/ubi.png'
import instruccion from '../assets/ins.png'

export const NavBar = () => {
  const navLinkClass = ({ isActive }) => {
    const classes = ['nav-bar__link']
    if (isActive) classes.push('nav-bar__link--active')
    return classes.join(' ')
  }
  return (     
    <div className='iconos'>
      <NavLink className={navLinkClass} to='/'>
        <div>
          <img src={instruccion} className='instruccion'/>
        </div>
      </NavLink>
      <NavLink className={navLinkClass} to='/lightbulb'>
        <div>
          <img src={ubicacion} className='ubicacion'/>
        </div>
      </NavLink>
      <NavLink className={navLinkClass} to='/lightbulb'>
        <div>
          <img src={telefono} className='telefono' />
        </div>
      </NavLink>
    </div>

    
  )
}
 
export default NavBar
