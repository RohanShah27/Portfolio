import React, { Component } from "react";
import "./Skills.css";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import { skills } from "../../portfolio";

class SkillSection extends Component {
  render() {
    return (
      <div>
        {skills.data.map((skill) => {
          return (
            <div className="skills-main-div">
                <div className="skills-image-div">
                  <img
                    alt="Rohan is Analysing Data"
                    src={require(`../../assests/images/${skill.imagePath}`)}
                  ></img>
                </div>
              <div className="skills-text-div">
                  <h1 className="skills-heading">{skill.title}</h1>
                  <SoftwareSkill logos={skill.softwareSkills} />
                  <div>
                    {skill.skills.map((skillSentence) => {
                      return (
                        <p className="subTitle skills-text">{skillSentence}</p>
                      );
                    })}
                  </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default SkillSection;
