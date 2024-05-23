import React from 'react'
import style from './guest.module.css'
const Guest = ({head,text}) => {
  return (
    <div className={style.guestCard}>
        <h2>{head}</h2>
        <span>{text}</span>
    </div>
  )
}

export default Guest