import React from 'react'
import style from "./button.module.css"
const Button = ({text,width,color,border,height,bgcolor, handleClick}) => {
  return (
    <button onClick={handleClick} className={style.button} style={{width:width,color:color,border:border,backgroundColor:bgcolor,height:height}}>{text}</button>
  )
}

export default Button
