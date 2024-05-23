import React from 'react'
import style from './customers.module.css'
const Customers = ({head, text, img, headcontent, spancontent}) => {
  return (
    <div className={style.customerCard}>
        <div className={style.customerSay}>
            <h3>{head}</h3>
            <p>{text}</p>
        </div>
        <div className={style.line}></div>
        <div className={style.customer}>
            <img src={img} alt="" />
            <div className={style.customerAbout}>
                <h6>{headcontent}</h6>
                <span>{spancontent}</span>
            </div>
        </div>
    </div>
  )
}

export default Customers