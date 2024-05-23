import React from "react";
import style from "./eventCart.module.css";
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";


function EventsCard({ img, header, text, about }) {
  const navigate = useNavigate();
  return (
    <div className={style.eventMenu}>
      <div className={style.eventImg}>
        <img className={style.food} src={img} alt="" />
      </div>
      <div className={style.eventAbout}>
        <h1 className={style.healthy}>{header}</h1>
        <p className={style.ourStory}>{text}</p>
        <p className={style.place}>{about}</p>
        <Button
          handleClick={() => {
            navigate("/about");
          }}
          bgcolor="transparent"
          text="More About Us"
          border="1.5px solid #2C2F24"
          className={style.button}
        />
      </div>
    </div>
  );
}

export default EventsCard;
