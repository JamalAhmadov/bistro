import React, { useEffect } from "react";
import style from "./blog.module.css";
import Hero from "../../components/HeroText/Hero";
import Logo from "../../assets/images/Logo.svg";
import Social from "../../assets/images/Social.svg";
import Mask1 from "../../assets/images/Mask1.svg";
import Mask2 from "../../assets/images/Mask2.svg";
import Mask3 from "../../assets/images/Mask3.svg";
import Mask4 from "../../assets/images/Mask4.svg";
import { getBlogs } from "../../Redux/blogSlice";
import Footer from "../../components/Footer/Footer";
import { useDispatch, useSelector } from "react-redux";

const Blog = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.getBlogs.blogs);

  useEffect(() => {
    dispatch(getBlogs());
  }, [dispatch]);
  return (
    <>
      <main>
        <section className={style.ourMenu}>
          <div className={style.container}>
            <div className={style.menuContent}>
              <Hero
                head="Our Blog & Articles"
                text="We consider all the drivers of change gives you the components you need to change to create a truly happens."
              />
            </div>
            <div className={style.ourMenuProducts}>
              {data.map((item) => (
                <div key={item.id} className={style.productCart}>
                  <img src={item.foodphoto} alt="" className={style.cartImg} />
                  <div className={style.cartAbout}>
                    <h3 className={style.date}>{item.date}</h3>
                    <p className={style.description}>{item.description}</p>
                  </div>
                </div>
              ))}
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
export default Blog;
