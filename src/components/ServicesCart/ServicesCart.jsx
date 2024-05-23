import React from "react";
import style from "./servicesCart.module.css";

const ServicesCart = ({ img, header, text}) => {
  return (
      <div className={style.eventAbout}>
      <div className={style.servicesImg}>
        <img className={style.eventImg} src={img} alt="" />
      </div>
        <h3 className={style.eventMore}>{header}</h3>
        <p className={style.technology}>{text}</p>
      </div>
  );
};

export default ServicesCart;
