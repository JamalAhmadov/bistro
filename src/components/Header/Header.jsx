import React from "react";
import style from "./header.module.css";
import Logo from "./Logo/Logo";
import Navbar from "../Navbar/Navbar";
import Button from "../Button/Button";
import Topbar from "../Topbar/Topbar";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaBars } from "react-icons/fa6";



const Header = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 550);

  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 550);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header>
      <Topbar />
      <div className={style.container}>
        <Logo />
        <Navbar />
        <Button
          text="Book A Table"
          width={isSmallScreen ? "110px" : "147px"}
          height={isSmallScreen ? "35px" : "48px"}
          bgcolor="transparent"
          color="black"
          border="1.5px solid #2C2F24"
          handleClick={()=>{navigate('/contact')}}
        />
        <FaBars size={32} className={style.hamburger} />
      </div>
    </header>
  );
};

export default Header;
