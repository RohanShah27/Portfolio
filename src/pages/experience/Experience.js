import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import ExperienceAccordion from "../../containers/experienceAccordion/ExperienceAccordion.js";
import "./Experience.css";
import { Fade } from "react-reveal";

const experience = {
  title: "Past Experiences",
  subtitle: "",
  description:
    "I have worked with many evolving startups as ML and DL Developer, Designer and Software Architect. I have also worked with some well established companies mostly as AI Developer. I love organising events and that is why I am also involved with many opensource communities as a representative.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      experiences: [
        {
          title: "Data Scientist",
          company: "Headstrait",
          company_url: "https://www.linkedin.com/company/headstrait/",
          logo_path: "hs_logo.png",
          duration: "April 2020 - Present",
          location: "Mumbai, Maharashtra",
          description: [
            `Designed and developed PoC for a voice banking app with features like adding credit/debit cards,
			finding near ATM's and performing voice transactions.`,
            `Lead a team of 5-10 members that designed and developed an application for managing the
			content of multiple formats for a parenting application developed to run on IOS and Android using
			react-native framework.`,
            `Developed a bill payment solution from scratch and created multiple microservices along with highly available integration layers for a small finance bank.
			`,
            `Developed scalable and highly available REST API endpoints in NodeJs.
			`,
            `Mentored interns in domains of software development on ReactJs and NodeJs.
			`,
            `Major focus on TDD (Test Driven Development)
			`,
            `Created high fidelity prototypes using Figma for multiple projects.`,
          ],
          color: "#9b1578",
        },
      ],
    },
  ],
};

class Experience extends Component {
  render() {
    return (
      <div className="experience-main">
        <Header />
        <div className="basic-experience">
          <Fade bottom duration={1000} distance="40px">
            <div className="experience-heading-div">
              <div className="experience-heading-img-div">
                <img
                  src={require(`../../assests/images/${experience["header_image_path"]}`)}
                  alt=""
                />
              </div>
              <div className="experience-heading-text-div">
                <h1 className="experience-heading-text">{experience.title}</h1>
                <h3 className="experience-heading-sub-text">
                  {experience["subtitle"]}
                </h3>
                <p className="experience-header-detail-text subTitle">
                  {experience["description"]}
                </p>
              </div>
            </div>
          </Fade>
        </div>
        <ExperienceAccordion sections={experience["sections"]} />
        <Footer />
      </div>
    );
  }
}

export default Experience;
