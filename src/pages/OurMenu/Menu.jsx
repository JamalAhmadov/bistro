import React from "react";
import style from "./menu.module.css";
import Hero from "../../components/HeroText/Hero";
import Logo from "../../assets/images/Logo.svg";
import Social from "../../assets/images/Social.svg";
import Mask1 from "../../assets/images/Mask1.svg";
import Mask2 from "../../assets/images/Mask2.svg";
import Mask3 from "../../assets/images/Mask3.svg";
import Mask4 from "../../assets/images/Mask4.svg";
import Uber from "../../assets/images/uber.svg";
import Grubhub from "../../assets/images/grubhub.svg";
import Postmates from "../../assets/images/postmates.svg";
import Doordash from "../../assets/images/doordash.svg";
import Foodpanda from "../../assets/images/foodpanda.svg";
import Deliveroo from "../../assets/images/deliveroo.svg";
import Didifood from "../../assets/images/didifood.svg";
import Instacart from "../../assets/images/instacart.svg";
import Justeat from "../../assets/images/justeat.svg";
import Button from "../../components/Button/Button";
import { useState, useEffect } from "react";

import Footer from "../../components/Footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../Redux/productsSlice";

const Menu = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.getProducts.products);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <>
      <main>
        <section className={style.ourMenu}>
          <div className={style.container}>
            <div className={style.menuContent}>
              <Hero
                head="Our Menu"
                text="We consider all the drivers of change gives you the components you need to change to create a truly happens."
              />

              <div className={style.menuButtons}>
                <Button
                  text="All"
                  width="150px"
                  height="48px"
                  bgcolor="#AD343E"
                  color="white"
                  border="1.5px solid #AD343E"
                />
                <Button
                  text="Breakfast"
                  width="150px"
                  height="48px"
                  bgcolor="white"
                  color="black"
                  border="1.5px solid rgba(219, 223, 208, 1)"
                />
                <Button
                  text="Main Dishes"
                  width="150px"
                  height="48px"
                  bgcolor="white"
                  color="black"
                  border="1.5px solid rgba(219, 223, 208, 1)"
                />
                <Button
                  text="Drinks"
                  width="150px"
                  height="48px"
                  bgcolor="white"
                  color="black"
                  border="1.5px solid rgba(219, 223, 208, 1)"
                />
                <Button
                  text="Desserts"
                  width="150px"
                  height="48px"
                  bgcolor="white"
                  color="black"
                  border="1.5px solid rgba(219, 223, 208, 1)"
                />
              </div>
            </div>
            <div className={style.ourMenuProducts}>
              {data?.map((item) => (
                <div key={item.id} className={style.productCart}>
                  <img src={item.foodphoto} alt="" className={style.cartImg} />
                  <div className={style.cartAbout}>
                    <h3 className={style.cartPrice}>{item.price}</h3>
                    <p className={style.cartName}>{item.foodname}</p>
                    <p className={style.cartIngredients}>{item.ingredients}</p>
                  </div>
                </div>
              ))}
              {/* 
              {products.length > 0 ? (
                products.map((item) => (
                  <div key={item.id} className={style.productCart}>
                    <img
                      src={item.foodphoto}
                      alt=""
                      className={style.cartImg}
                    />
                    <div className={style.cartAbout}>
                      <h3 className={style.cartPrice}>{item.price}</h3>
                      <p className={style.cartName}>{item.foodname}</p>
                      <p className={style.cartIngredients}>
                        {item.ingredients}
                      </p>
                    </div>
                  </div>
                ))
              ) : (
                <div>No products available</div>
              )} */}
            </div>
          </div>
        </section>

        <section className={style.orderApps}>
          <div className={style.container}>
            <div className={style.orderappsContent}>
              <div className={style.orderappsText}>
                <h2 className={style.orderName}>You can order through apps</h2>
                <p className={style.orderDescription}>
                  Lorem ipsum dolor sit amet consectetur adipiscing elit enim
                  bibendum sed et aliquet aliquet risus tempor semper.
                </p>
              </div>
              <div className={style.appsLogos}>
                <div className={style.appLogos}>
                  <img src={Uber} className={style.apps} alt="" />
                  <img src={Grubhub} className={style.apps} alt="" />
                  <img src={Postmates} className={style.apps} alt="" />
                </div>
                <div className={style.appLogo}>
                  <img src={Doordash} className={style.apps} alt="" />
                  <img src={Foodpanda} className={style.apps} alt="" />
                  <img src={Deliveroo} className={style.apps} alt="" />
                </div>
                <div className={style.appLogos}>
                  <img src={Instacart} className={style.apps} alt="" />
                  <img src={Justeat} className={style.apps} alt="" />
                  <img src={Didifood} className={style.apps} alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer>
        <div className={style.container}>
          <div>
            <Footer
              logo={Logo}
              text="In the new era of technology we look a in the future with certainty and pride to for our company and."
              icons={Social}
              head1="Pages"
              text1="Home"
              text2="About"
              text3="Menu"
              text4="Pricing"
              text5="Blog"
              text6="Contact"
              text7="Delivery"
              head2="Utility Pages"
              text8="Start Here"
              text9="Styleguide"
              text10="Password Protected"
              text11="404 Not Found"
              text12="Licenses"
              text13="Changelog"
              text14="View More"
              head3="Follow Us On Instagram"
              img1={Mask1}
              img2={Mask2}
              img3={Mask3}
              img4={Mask4}
            />
          </div>
        </div>
      </footer>
    </>
  );
};

export default Menu;
