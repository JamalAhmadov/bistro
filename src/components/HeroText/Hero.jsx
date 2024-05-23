import React from 'react'
import style from './hero.module.css'
const Hero = ({head,text}) => {
  return (
    <div className={style.heroContent}>
        <h2>{head}</h2>
        <p>{text}</p>
    </div>
  )
}

export default Hero