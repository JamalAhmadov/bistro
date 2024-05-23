import React from 'react'
import style from "./input.module.css"
const Input = ({width,height,placeholder,borderRadius}) => {
  return (
    <input
    type="text"
    className={style.input}
    style={{ width: width, height: height, borderRadius: borderRadius }}
    placeholder={placeholder} // Doğru şekilde placeholder prop'u kullanıldı
  />
  )
}

export default Input
