import React from 'react'
import style from './features.module.css'

const Features = ({text, head, img}) => {
  return (
    <div className={style.featuresCard}>
        <div>
            <img src={img} alt="" />
        </div>
        <div>
            <h1>{head}</h1>
            <p>{text}</p>
        </div>
    </div>
  )
}

export default Features