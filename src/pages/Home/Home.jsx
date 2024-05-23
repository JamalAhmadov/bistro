import React from "react";
import style from "./home.module.css";
import Button from "../../components/Button/Button";
import healthy from "../../assets/images/healthy.svg";
import catering from "../../assets/images/catering.png";
import brithday from "../../assets/images/brithday.png";
import weeding from "../../assets/images/weeding.png";
import event from "../../assets/images/event.png";
import food from "../../assets/images/food.jpg";
import dishes from "../../assets/images/dishes.svg";
import coffee from "../../assets/images/coffee.svg";
import drink from "../../assets/images/drink.svg";
import vegetable from "../../assets/images/vegetable.svg";
import dessert from "../../assets/images/dessert.svg";
import chef from "../../assets/images/chef.png";
import seafood from "../../assets/images/seafood.png";
import kebab from "../../assets/images/kebab.png";
import MenuCard from "../../components/MenuCard/MenuCard";
import EventsCard from "../../components/EventCart/EventsCard";
import ServicesCart from "../../components/ServicesCart/ServicesCart";
import Footer from "../../components/Footer/Footer";
import Logo from "../../assets/images/Logo.svg";
import Social from "../../assets/images/Social.svg";
import Mask1 from "../../assets/images/Mask1.svg";
import Mask2 from "../../assets/images/Mask2.svg";
import Mask3 from "../../assets/images/Mask3.svg";
import Mask4 from "../../assets/images/Mask4.svg";
import { CiClock1 } from "react-icons/ci";
import Blog from "../../components/OurBlog/Our";
import Blog1 from "../../assets/images/Blog1.svg";
import { useNavigate } from "react-router-dom";


const Home = () => {

  const navigate = useNavigate();

  return (
    <>
      <main>
        <section className={style.welcome}>
          <div className={style.text}>
            <div>
              <h1>Best food for your taste</h1>
              <p>
                Discover delectable cuisine and unforgettable moments in our
                welcoming, culinary haven.
              </p>
            </div>
            <div className={style.buttons}>
              <Button
                text="Book A Table"
                width="147px"
                height="48px"
                bgcolor="#AD343E"
                color="white"
                border="1.5px solid #AD343E"
                handleClick={()=>{navigate('/contact')}}
              />
              <Button
                text="Explore Menu"
                width="147px"
                height="48px"
                bgcolor="transparent"
                color="black"
                border="1.5px solid #2C2F24"
                handleClick={()=>{navigate('/menu')}}
              />
            </div>
          </div>
        </section>
        <section className={style.ourMenu}>
          <div className={style.container}>
            <h2 className={style.browse}>Browse Our Menu</h2>
            <div className={style.cartContainer}>
              <MenuCard
                img={coffee}
                header="Breakfast"
                text="In the new era of technology we look in the future with certainty
              and pride for our life."
                button="Explore Menu"
                href="#"
              />
              <MenuCard
                img={dishes}
                header="Breakfast"
                text="In the new era of technology we look in the future with certainty
              and pride for our life."
                button="Explore Menu"
                href="#"
              />
              <MenuCard
                img={drink}
                header="Breakfast"
                text="In the new era of technology we look in the future with certainty
              and pride for our life."
                button="Explore Menu"
                href="#"
              />
              <MenuCard
                img={dessert}
                header="Breakfast"
                text="In the new era of technology we look in the future with certainty
              and pride for our life."
                button="Explore Menu"
                href="#"
              />
            </div>
          </div>
        </section>
        <section className={style.healthy}>
          <div className={style.container}>
            <EventsCard
              img={vegetable}
              header="We provide healthy food for your family."
              text="Our story began with a vision to create a unique dining experience that merges fine dining, exceptional service, and a vibrant ambiance. Rooted in city's rich culinary culture, we aim to honor our local roots while infusing a global palate."
              about="At place, we believe that dining is not just about food, but also about the overall experience. Our staff, renowned for their warmth and dedication, strives to make every visit an unforgettable event."
            />
          </div>
        </section>
        <section className={style.services}>
          <div className={style.container}>
            <h2 className={style.unique}>We also offer unique</h2>
            <h2 className={style.uniqueServices}>services for your events</h2>
            <div className={style.cateringContainer}>
              <ServicesCart
                img={catering}
                header="Caterings"
                text="In the new era of technology we look in the future with certainty for life."
              />
              <ServicesCart
                img={brithday}
                header="Birthdays"
                text="In the new era of technology we look in the future with certainty for life."
              />
              <ServicesCart
                img={weeding}
                header="Weddings"
                text="In the new era of technology we look in the future with certainty for life."
              />
              <ServicesCart
                img={event}
                header="Events"
                text="In the new era of technology we look in the future with certainty for life."
              />
            </div>
          </div>
        </section>
        <section className={style.fastesFood}>
          <div className={style.container}>
            <div className={style.chefImgs}>
              <div className={style.chefImg}>
                <img className={style.chef} src={chef} alt="chef" />
              </div>
              <div className={style.seafoodKebab}>
                <img className={style.sea} src={seafood} alt="seafood" />
                <img className={style.kebab} src={kebab} alt="kebab" />
              </div>
              <div></div>
            </div>
            <div className={style.fastesFoodAbout}>
              <h2 className={style.foodDelivery}>Fastest Food</h2>
              <h2 className={style.foodDelivery}>Delivery in City</h2>
              <p className={style.ourVisual}>
                Our visual designer lets you quickly and of drag a down your way
                to customapps for both keep desktop.
              </p>
              <div className={style.deliveryAbout}>
                <div className={style.delivery}>
                  <CiClock1 className={style.deliveryIcon} />
                  <h5 className={style.minutes}>Delivery within 30 minutes</h5>
                </div>
                <div className={style.delivery}>
                  <CiClock1 className={style.deliveryIcon} />
                  <h5 className={style.minutes}>Delivery within 30 minutes</h5>
                </div>
                <div className={style.delivery}>
                  <CiClock1 className={style.deliveryIcon} />
                  <h5 className={style.minutes}>Delivery within 30 minutes</h5>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={style.ourBlog}>
          <div className={style.container}>
            <div className={style.ourblogContent}>
              <div className={style.ourblogText}>
                <h2>Our Blog & Articles</h2>
                <Button
                  text="Read All Articles"
                  width="150px"
                  height="50px"
                  bgcolor="rgba(173, 52, 62, 1)"
                  color="white"
                  border="none"
                />
              </div>

              <div className={style.articles}>
                <div className={style.perfectBurger}>
                  <Blog
                    img={Blog1}
                    date="January 3, 2023"
                    description="The secret tips & tricks to prepare a perfect burger & pizza for our customers"
                  />
                </div>
                <div className={style.secretTips}>
                  <Blog
                    img={Blog1}
                    date="January 3, 2023"
                    description="The secret tips & tricks to prepare a perfect burger & pizza for our customers"
                  />
                  <Blog
                    img={Blog1}
                    date="January 3, 2023"
                    description="The secret tips & tricks to prepare a perfect burger & pizza for our customers"
                  />
                  <Blog
                    img={Blog1}
                    date="January 3, 2023"
                    description="The secret tips & tricks to prepare a perfect burger & pizza for our customers"
                  />
                  <Blog
                    img={Blog1}
                    date="January 3, 2023"
                    description="The secret tips & tricks to prepare a perfect burger & pizza for our customers"
                  />
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

export default Home;
