import React from 'react'
import style from "./navbar.module.css"
import Navitem from './Navitem/Navitem'
const Navbar = () => {
  return (
    <nav>
      <Navitem to="/" text="Home"/>
      <Navitem to="/about" text="About"/>
      <Navitem to="/menu" text="Menu"/>
      <Navitem to="/pages" text="Pages"/>
      <Navitem to="/contact" text="Contact"/>
    </nav>
  )
}

export default Navbar
