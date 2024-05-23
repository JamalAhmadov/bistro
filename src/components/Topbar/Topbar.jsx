import React from "react";
import style from "./topbar.module.css";
import Social from "./Social/Social";
import Contact from "./Contact/Contact";
const Topbar = () => {
  return (
    <div className={style.topBar}>
      <div className={style.container}>
        <Contact />
        <Social />
      </div>
    </div>
  );
};

export default Topbar;
