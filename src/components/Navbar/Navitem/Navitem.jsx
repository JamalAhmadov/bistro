import React from 'react'
import style from "./navitem.module.css"
import { NavLink } from 'react-router-dom'

const Navitem = ({text,to}) => {
  return (
    <div>
      <NavLink to={to}>{text}</NavLink>
      
    </div>
  )
}

export default Navitem
