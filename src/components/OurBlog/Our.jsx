import React from 'react'
import style from './our.module.css'
const Our = ({img, date, description}) => {
  return (
    <div className={style.blogArticles}>
       <div className={style.blogPhotos}>
        <img src={img} alt="" className={style.hamburger} />
       </div>
       <div className={style.blogContent}>
        <span>{date}</span>
        <p>{description}</p>
       </div>

    </div>
  )
}

export default Our