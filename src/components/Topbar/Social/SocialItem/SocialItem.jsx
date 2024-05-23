import React from "react";
import style from "./socialitem.module.css";

const SocialItem = ({ icon }) => {
  return <div className={style.icon}>
    {icon}
  </div>;
};

export default SocialItem;
