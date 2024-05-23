import React from "react";
import style from "./about.module.css";
import playicon from "../../assets/images/Play.svg";
import Features from "../../components/FeaturesCard/Features";
import icon1 from "../../assets/images/icon1.svg";
import icon2 from "../../assets/images/icon2.svg";
import egg from "../../assets/images/egg.svg";
import icon3 from "../../assets/images/timer 1.svg";
import guest from "../../assets/images/valuableguest.svg";
import Guest from "../../components/GuestCard/Guest";
import Customer from "../../components/CustomersCard/Customers";
import Sophie from "../../assets/images/sophie.svg";
import Matt from "../../assets/images/matt.svg";
import Andy from "../../assets/images/andy.svg";
import Footer from "../../components/Footer/Footer";
import Logo from "../../assets/images/Logo.svg";
import Social from "../../assets/images/Social.svg";
import Mask1 from "../../assets/images/Mask1.svg";
import Mask2 from "../../assets/images/Mask2.svg";
import Mask3 from "../../assets/images/Mask3.svg";
import Mask4 from "../../assets/images/Mask4.svg";
import EventsCard from "../../components/EventCart/EventsCard";
const About = () => {
  return (
   <>
    <main>
    <section className={style.healthy}>
          <div className={style.container}>
            <EventsCard
              img={egg}
              header="We provide healthy food for your family."
              text="Our story began with a vision to create a unique dining experience that merges fine dining, exceptional service, and a vibrant ambiance. Rooted in city's rich culinary culture, we aim to honor our local roots while infusing a global palate."
              about="At place, we believe that dining is not just about food, but also about the overall experience. Our staff, renowned for their warmth and dedication, strives to make every visit an unforgettable event."
            />
          </div>
        </section>
      <section className={style.originalTaste}>
        <div className={style.container}>
          <div className={style.tasteContent}>
            <img src={playicon} alt="playicon" />
            <h2>Feel the authentic & original taste from us</h2>
          </div>
        </div>
      </section>
      <section className={style.features}>
        <div className={style.container}>
          <div className={style.featurescontainer}>
            <Features
              img={icon1}
              text="In the new era of technology we look in the future with certainty life."
              head="Multi Cuisine"
            />

            <Features
              img={icon2}
              text="In the new era of technology we look in the future with certainty life."
              head="Easy To Order"
            />

            <Features
              img={icon3}
              text="In the new era of technology we look in the future with certainty life."
              head="Fast Delivery"
            />
          </div>
        </div>
      </section>
      <section className={style.valuableGuest}>
        <div className={style.container}>
          <div className={style.guestContainer}>
            <div className={style.valuableContent}>
              <div className={style.valuableText}>
                <h2>A little information for our valuable guest</h2>
                <p>
                  At place, we believe that dining is not just about food, but
                  also about the overall experience. Our staff, renowned for
                  their warmth and dedication, strives to make every visit an
                  unforgettable event.
                </p>
              </div>
              <div className={style.guestCount}>
                <div className={style.count}>
                  <Guest head="3" text="Locations" />

                  <Guest head="1995" text="Founded" />
                </div>

                <div className={style.count}>
                  <Guest head="65+" text="Staff Members" />

                  <Guest head="100%" text="Satisfied Customers" />
                </div>
              </div>
            </div>
            <div className={style.guestFood}>
              <img src={guest} alt="" />
            </div>
          </div>
        </div>
      </section>
      <section className={style.ourCustomers}>
        <div className={style.container}>
          <div className={style.customerContainer}>
            <div className={style.whatsay}>
                <h2>What Our Customers Say</h2>
            </div>
            <div className={style.customerSay}>
                <Customer
                head="“The best restaurant”"
                text="Last night, we dined at place and were simply blown away. From the moment we stepped in, we were enveloped in an inviting atmosphere and greeted with warm smiles."
                img={Sophie}
                headcontent="Sophire Robson"
                spancontent="Los Angeles, CA"
                />
                
                <Customer
                head="“Simply delicious”"
                text="Place exceeded my expectations on all fronts. The ambiance was cozy and relaxed, making it a perfect venue for our anniversary dinner. Each dish was prepared and beautifully presented."
                img={Matt}
                headcontent="Matt Cannon"
                spancontent="San Diego, CA"
                />

                <Customer
                head="“One of a kind restaurant”"
                text="The culinary experience at place is first to none. The atmosphere is vibrant, the food - nothing short of extraordinary. The food was the highlight of our evening. Highly recommended."
                img={Andy}
                headcontent="Andy Smith"
                spancontent="San Francisco, CA"
                />
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

export default About;
