/* Change this file to get your personal Porfolio */

const theme = {
  primaryTheme: "#6C63FF",
  secondaryTheme: "#55198b",
  easing: "cubic-bezier(0.645, 0.045, 0.355, 1)",
};

const greeting = {
  /* Your Summary And Greeting Section */
  title: "Hi all 👋 I'm Rohan",
  nickname: "Full Stack Developer",
  subTitle: `A Software-Engineer with a strong programming background and experience in multiple programming languages including 
  Javascript and Typescript to solve challenging problems. Expertise in developing features end to end on React, ReactNative, NodeJS and Python.`,
  resumeLink:
    "https://drive.google.com/file/d/1KuQJEGEr2QRmLiilfyw9hc3Opy6o1mZ6/view?usp=drive_link",
};

const socialMediaLinks = {
  /* Your Social Media Link */
  github: "https://github.com/RohanShah27/",
  linkedin: "https://linkedin.com/in/rohanshah27111997/",
  gmail: "rohanshah2711@gmail.com",
  instagram: "https://www.instagram.com/rohanshah.27/",
};

const skills = {
  data: [
    {
      title: "Full Stack Development",
      imagePath: "fullstack.svg",
      skills: [
        "- Production grade service development with full ownership in NodeJS, Python and GoLang.",
        "- Front end development using React, Vue",
        "- UI and API integration testing automation, with user event tracking.",
        "- Ensuring cross-platform optimization for mobile phones.",
        "- Slow query analysis and experience of working on scale.",
        "- Experience with event driven service development using Kafka."
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "TypeSript",
          fontAwesomeClassname: "simple-icons:typescript",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "Jest",
          fontAwesomeClassname: "simple-icons:jest",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
      ],
    },
    {
      title: "UI/UX Development ",
      imagePath: "data_science.svg",
      skills: [
        "- Gather and evaluate user requirements in collaboration with product managers and engineers",
        "- Develop UI mockups and prototypes that clearly illustrate how sites function and look like",
        "- Identify and troubleshoot UX problems",
        "- Create original graphic designs",
        "- Design graphic user interface elements, like menus, tabs and widgets",
        "- llustrate design ideas using storyboards, process flows and sitemaps",
      ],
      softwareSkills: [
        {
          skillName: "Figma",
          fontAwesomeClassname: "logos-figma",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Adobe",
          fontAwesomeClassname: "simple-icons:adobe",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
      ],
    },
    {
      title: "Database Architecture",
      imagePath: "database.svg",
      skills: [
        "- Design of production-grade, fault-tolerant and highly scalable database",
        "- Developing database solutions to store and retrieve company information",
        "- Designing databases and writing scripts to ensure best practices being followed",
        "- Analyzing structural requirements for new software and applications",
      ],
      softwareSkills: [
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        }
      ],
    },
  ],
};

const competitiveSites = {
  competitiveSites: [
    {
      siteName: "NPM JS",
      iconifyClassname: "simple-icons:npm",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.npmjs.com/~rohanshah27",
    },
    {
      siteName: "Github",
      iconifyClassname: "simple-icons:github",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://github.com/RohanShah27",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "A. P. Shah Institute of Technology",
      subtitle: "B.E. in Information Technology",
      logo_path: "apshah.png",
      alt_name: "APSIT",
      duration: "2015 - 2019",
      descriptions: [
        "I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, AI, Computer Networking and Architecture etc",
        "Apart from this, I have done courses on Web Development, Cloud Computing and Full Stack Development",
        "Elected as a CSI (Computer Society of India) member for AY 2018-2019",
        "ITSA (Information Technology Students Association) member for AY 2017-2019",
        "Winner of Best Project of the Year AY 2018-2019",
      ],
      website_link: "https://www.apsit.edu.in/home",
    },
    {
      title: "Abhinav Vidyalay",
      subtitle: "ISC - Computer Science",
      logo_path: "abhinav.jpg",
      alt_name: "Abhinav Vidyalay",
      duration: "2013 - 2015",
      descriptions: [
        "Took up Information Technology as my elective",
        "Built a replica of KBC (Quiz game) mobile app game on Java.",
      ],
      website_link:
        "https://www.google.com/search?sxsrf=ALeKk00whlGcFk8zjDpxMPvUBExnOuL4bA%3A1610452545576&source=hp&ei=QY79X6qsINfJrQHss4ToBQ&q=abhinav+vidyalaya+dombivli&gs_ssp=eJzj4tZP1zcsyTYpyDUvMmC0UjWoME5KNbc0tTBJSUxKSzNKM7UyqDAysUhOSjFOtTA1tUg2SDH3kkpMysjMSyxTKMtMqUzMSaxMVEjJz03KLMvJBADFxBmI&oq=abhina&gs_lcp=CgZwc3ktYWIQAxgAMg0ILhDHARCvARAnEJMCMggILhCxAxDJAzIHCC4QsQMQQzIICAAQsQMQgwEyBQguELEDMggIABCxAxCDATICCC4yCAguEMcBEK8BMgUILhCxAzIFCAAQsQM6BAgjECc6BAgAEEM6BwgAEMkDEEM6CAguELEDEIMBOgsILhCxAxDHARCjAlDGBVjIDWDuFGgAcAB4AIABlAGIAbAGkgEDMC42mAEAoAEBqgEHZ3dzLXdpeg&sclient=psy-ab",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "MTA: HTML5 Application Development Fundamentals",
      subtitle: "- Microsoft",
      logo_path: "microsoft.png",
      certificate_link:
        "https://www.youracclaim.com/badges/03149f43-8531-425e-ade4-3ce889c70202/linked_in_profile",
      alt_name: "MTA-Microsoft",
      color_code: "#EDF2F4",
    },
    {
      title: "Python for Data Science",
      subtitle: "- Udemy",
      logo_path: "udemy.svg",
      certificate_link: "https://www.udemy.com/certificate/UC-BDPP1I8W/",
      alt_name: "Udemy",
      color_code: "lightgrey",
    },
    {
      title: "Master Digital Product Design: UX Research and UI Design",
      subtitle: "- Udemy",
      logo_path: "udemy.svg",
      certificate_link:
        "https://www.udemy.com/certificate/UC-a691ab5e-fadd-4875-97e1-3b3196daee3a/",
      alt_name: "Udemy",
      color_code: "lightgrey",
    },
    {
      title: "Build Real World Native Cross-Platform Applications",
      subtitle: "- ISG eSolutions",
      logo_path: "isgEsolutions.png",
      certificate_link: "https://www.linkedin.com/company/isg-esolutions/",
      alt_name: "ISG eSolutions",
      color_code: "white",
    },
    {
      title: "Android App development using Cordova SDK",
      subtitle: "- Aptech",
      logo_path: "aptech.png",
      certificate_link: "https://www.linkedin.com/company/isg-esolutions/",
      alt_name: "ISG eSolutions",
      color_code: "#F3B610",
    },
    {
      title: "Introduction to ELK",
      subtitle: "- Ashnik",
      logo_path: "ashnik.png",
      certificate_link: "https://www.linkedin.com/company/isg-esolutions/",
      alt_name: "IAshnik",
      color_code: "white",
    },
    {
      title: "Complete 2020 Data Science & Machine Learning Bootcamp ",
      subtitle: "- Udemy",
      logo_path: "udemy.svg",
      certificate_link:
        "https://www.udemy.com/certificate/UC-eb4d30dc-5607-4af9-ae6f-bd2a60a1ec12/",
      alt_name: "Udemy",
      color_code: "lightgrey",
    },
  ],
};

const bigProjects = {
  /* Some Big Projects You have worked with your company */
  title: "Big Projects",
  subtitle: "Some Startups and Tech companies that I have helped",
  projects: [
    {
      image:
        "https://static1.squarespace.com/static/5c3388c87e3c3a852e63c1d6/t/5e6549eab6faeb732c18251a/1585291537549/?format=1500w",
      link: "https://deviecoach.com//",
    },
  ],
};

const contactInfo = {
  title: "Contact Me ☎️",
  subtitle:
    "Discuss a project or just want to say hi? My inbox is open for all",
  number: "+91-8454031650",
  email_address: "rohanshah2711@gmail.com",
};

export {
  theme,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  bigProjects,
  contactInfo,
};
