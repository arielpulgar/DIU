import React from 'react'
import { NavLink } from 'react-router-dom'
import menu_img from '../assets/menu.png'

export const NavBar = () => {
  const navLinkClass = ({ isActive }) => {
    const classes = ['nav-bar__link']
    if (isActive) classes.push('nav-bar__link--active')
    return classes.join(' ')
  }
  return (
    <div className='menu-container'>
      <input type="checkbox" id="menu" />
      <label for="menu">
        <img src={menu_img} class="menu-icon" alt=""/>
      </label>
      <div className='nav-bar'>
        <NavLink
          className={navLinkClass}
          to='/'
        >
          Inicio
        </NavLink>
        <NavLink
          className={navLinkClass}
          to='/lightbulb'
        >
          Ampolleta
        </NavLink>
      </div>
    </div>
  )
}
 
export default NavBar
