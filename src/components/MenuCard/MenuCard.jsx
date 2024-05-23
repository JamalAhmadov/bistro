import React from "react";
import style from "./menucard.module.css";

const MenuCard = ({ img, header, text, button, href }) => {
  return (
    <div className={style.cartMenu}>
      <div className={style.coffeeImg}>
        <img className={style.coffee} src={img} alt="" />
      </div>
      <div className={style.cartMenuAbout}>
        <h1 className={style.breakfast}>{header}</h1>
        <p className={style.technology}>{text}</p>
        <a href={href} className={style.explore}>
          {button}
        </a>
      </div>
    </div>
  );
};

export default MenuCard;
