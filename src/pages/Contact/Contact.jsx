import React from "react";
import style from "./contact.module.css";
import Hero from "../../components/HeroText/Hero";
import Footer from "../../components/Footer/Footer";
import Logo from "../../assets/images/Logo.svg";
import Social from "../../assets/images/Social.svg";
import Mask1 from "../../assets/images/Mask1.svg";
import Mask2 from "../../assets/images/Mask2.svg";
import Mask3 from "../../assets/images/Mask3.svg";
import Mask4 from "../../assets/images/Mask4.svg";
import ContactForm from "../../components/Form/ContactForm";

const Contact = () => {
  

  return (
    <>
      <main>
        <section className={style.contactUs}>
          <div className={style.container}>
            <Hero
              head="Contact Us"
              text="We consider all the drivers of change gives you the components you need to change to create a truly happens."
            />
            {/* <form className={style.contactForm} onSubmit={handleSubmit}>
              <div className={style.nameEmail}>
                <div className={style.lableInp}>
                  <label htmlFor="name" className={style.inpLable}>
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Enter your name"
                    className={style.nameInp}
                    value={formData.name}
                    onChange={handleInputChange}
                    pattern="[A-Za-z\s]*"
                    title="Please enter letters only"
                    required
                  />
                </div>
                <div className={style.lableInp}>
                  <label htmlFor="email" className={style.inpLable}>
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                    className={style.emailInp}
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
              <div className={style.subject}>
                <label htmlFor="subject" className={style.inpLable}>
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="Enter subject"
                  className={style.subjectInp}
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className={style.message}>
                <label htmlFor="message" className={style.inpLable}>
                  Message
                </label>
                <input
                  type="text"
                  id="message"
                  name="message"
                  placeholder="Write your message"
                  className={style.messageInp}
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <Button
                text="Send"
                width="90%"
                height="48px"
                bgcolor="#AD343E"
                color="#fff"
                border="none"
              />
            </form> */}
            <ContactForm />
          </div>
        </section>
        <section className={style.callUs}>
          <div className={style.container}>
            <div className={style.callContainer}>
              <div className={style.call}>
                <h4 className={style.callTxt}>Call Us:</h4>
                <p className={style.phoneNumber}>+1-234-567-8900</p>
              </div>
              <div className={style.call}>
                <h4 className={style.callTxt}>Hours:</h4>
                <p className={style.phoneTxt}>Mon-Fri: 11am - 8pm</p>
                <p className={style.phoneTxt}>Sat, Sun: 9am - 10pm</p>
              </div>
              <div className={style.call}>
                <h4 className={style.callTxt}>Our Location:</h4>
                <p className={style.phoneTxt}>123 Bridge Street</p>
                <p className={style.phoneTxt}>Nowhere Land, LA 12345 </p>
                <p className={style.phoneTxt}>United States</p>
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

export default Contact;
