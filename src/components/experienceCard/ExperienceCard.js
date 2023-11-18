import React, { Component } from "react";
import "./ExperienceCard.css";

class ExperienceCard extends Component {
  render() {
    const experience = this.props.experience;
    return (
      <div
        className="experience-card"
        style={{ border: `1px solid ${experience["color"]}` }}
      >
        {/* <div className="experience-card-logo-div">
          <div className="experience-circle">
          <img
            className="experience-card-logo"
            src={require(`../../assests/images/${experience["logo_path"]}`)}
            alt=""
          />
          </div>
        </div> */}
        <div className="experience-card-body-div">
          <div className="experience-card-header-div">
            <div className="experience-card-heading-left">
            <div className="experience-circle">
          <img
            className="experience-card-logo"
            src={require(`../../assests/images/${experience["logo_path"]}`)}
            alt=""
          />
              </div>
              <div>
              <h3 className="experience-card-title">{experience["title"]}</h3>
              <p className="experience-card-company">
                <a
                  href={experience["company_url"]}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {experience["company"]}
                </a>
              </p>
              </div>
              
            </div>
            <div className="experience-card-heading-right">
              <p className="experience-card-duration">
                {experience["duration"]}
              </p>
              <p className="experience-card-location">
                {experience["location"]}
              </p>
            </div>
          </div>
          <div className="experience-card-description">
            <ul>
              {experience["description"].map((item) => (
                <li>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default ExperienceCard;
