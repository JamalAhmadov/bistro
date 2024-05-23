import React from "react";
import style from "./social.module.css";
import { FaTwitter, FaInstagram, FaFacebook } from "react-icons/fa";
import SocialItem from "./SocialItem/SocialItem";
const Social = () => {
  return (
    <div className={style.socialMedia}>
      <SocialItem icon={<FaTwitter />} />
      <SocialItem icon={<FaInstagram />} />
      <SocialItem icon={<FaFacebook />} />
    </div>
  );
};

export default Social;
