import React from "react";
import style from "./contact.module.css";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
const Contact = () => {
  return (
    <div className={style.contact}>
      <div className={style.contactIcon}>
        <FaPhoneAlt /> <p>(414) 857 - 0107</p>
      </div>
      <div className={style.contactIcon}>
        <IoMdMail /> <p>yummy@bistrobliss</p>
      </div>
    </div>
  );
};

export default Contact;
