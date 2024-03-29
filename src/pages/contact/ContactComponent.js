import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import { greeting } from "../../portfolio";
import { Fade } from "react-reveal";
import "./ContactComponent.css";

const addressSection = {
  title: "Address",
  subtitle: "Ghatkopar, Mumbai - 400086",
  avatar_image_path: "address_image.svg",
  location_map_link: "https://goo.gl/maps/oyqbqxMZtwthEJXK7",
};

const phoneSection = {
  title: "Phone Number",
  subtitle: "+91 8454031650",
};

const emailSection = {
  title: "Email",
  subtitle: "rohanshah2711@gmail.com",
};

const ContactData = {
  title: "Contact Me",
  profile_image_path: "profile.jpg",
  description: `I am available on almost every social media. You can message me, I will reply within 24 hours.
     I can help you with both Mobile, Web, Opensource Development, scalable and production grade API's, flexible frameworks, UI UX designing along with Logo's and Icon set designing `,
};

class Contact extends Component {
  render() {
    return (
      <div className="contact-main">
        <Header />
        <div className="basic-contact">
          <Fade bottom duration={1000} distance="40px">
            <div className="contact-heading-div">
              <div className="contact-heading-img-div">
                <img
                  style={{ borderRadius: "22%" }}
                  src={require(`../../assests/images/${ContactData["profile_image_path"]}`)}
                  alt="Rohan Shah"
                />
              </div>
              <div className="contact-heading-text-div">
                <h1 className="contact-heading-text">{ContactData["title"]}</h1>
                <p className="contact-header-detail-text subTitle">
                  {ContactData["description"]}
                </p>
                <SocialMedia />
                <div className="resume-btn-div">
                  <Button
                    text="See My Resume"
                    newTab={true}
                    href={greeting.resumeLink}
                  />
                </div>
              </div>
            </div>
          </Fade>
          <Fade bottom duration={1000} distance="40px">
            <div className="address-heading-div">
              <div className="contact-heading-img-div mobile-avatar">
                <img
                  src={require(`../../assests/images/${addressSection["avatar_image_path"]}`)}
                  alt=""
                />
              </div>
              <div className="address-heading-text-div">
                <h1 className="address-heading-text">
                  {addressSection["title"]}
                </h1>
                <p className="contact-header-detail-text subTitle">
                  {addressSection["subtitle"]}
                </p>
                <h1 className="address-heading-text">
                  {phoneSection["title"]}
                </h1>
                <p className="contact-header-detail-text subTitle">
                  {phoneSection["subtitle"]}
                </p>
                <h1 className="address-heading-text">
                  {emailSection["title"]}
                </h1>
                <p className="contact-header-detail-text subTitle">
                  <a
                    className="subTitle"
                    href={"mailto:" + emailSection["subtitle"]}
                    style={{ textDecoration: "none" }}
                  >
                    {emailSection["subtitle"]}
                  </a>
                </p>
              </div>
            </div>
          </Fade>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Contact;
