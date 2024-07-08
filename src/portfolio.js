// To change portfolio colors globally go to the  _globalColor.scss file
import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation
import { FALSE } from "sass";
// Splash Screen
const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};
// Summary And Greeting Section
const illustration = {
  animated: true // Set to false to use static SVG
};
const greeting = {
  username: "Asif Nawaz",
  title: "Hi all, I'm Asif",
  subTitle: emoji(
    "Dedicated Software Developer with a comprehensive skill set spanning multiple technologies and an unwavering determination to overcome challenges. As a Computer Science graduate, I possess a strong foundation and a passion for continuous growth and impactful contributions.\n\nMy expertise includes Machine Learning with proficiency in Python, ASP.NET, HTML, CSS, JavaScript, React.js, C++, C#, and SQL. Additionally, I am skilled in data visualization tools like Power BI and Tableau, enabling me to transform data into actionable insights. I am committed to leveraging my skills to contribute meaningfully to any team and project, always striving for excellence and innovation."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1TLpEKxjvD2XTA5ziTOFuwHvHjlseQGWO/view", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};
// Social Media Links
const socialMediaLinks = {
  github: "https://github.com/ASIF679",
  linkedin: "http://www.linkedin.com/in/asif-nawaz-1093961b1/",
  gmail: "asifnawaz679@gmail.com",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

const skillsSection = {
  title: "What I do",
  subTitle: "Dedicated Software Developer with a passion for exploring every tech stack.",
  skills: [
    emoji(
      "⚡ Develop highly interactive front-end interfaces for web applications"
    ),
    emoji("⚡ Implement databases and ensure backend functionality with ASP.NET and SQL"),
    emoji(
      "⚡ Integration of Machine Learning models using Jupyter Notebook, PyCharm, and Google Colab"
    ),
    emoji("⚡ Transform raw data into insights and generate reports that help organizations grow")
  ],

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "Machine Learning",
      fontAwesomeClassname: "fas fa-robot"
    },
    {
      skillName: "Data Science",
      fontAwesomeClassname: "fas fa-chart-line"
    },
    {
      skillName: "postgressSQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Scrapy",
      fontAwesomeClassname: "fas fa-spider"
    },
    {
      skillName: "Power BI",
      fontAwesomeClassname: "fas fa-chart-bar"
    },
    {
      skillName: "Tableau",
      fontAwesomeClassname: "fas fa-table"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};


// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "HITEC University Taxila Pakistan",
      logo: require("./assets/images/harvardLogo.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "july 2020 - july 2024",
      CGPA: "3.60",
      desc: "Programing Fundamentals , object oriented programming, Data Structures and algorithm, Data base and management systems , Machine learning , Deep learning , Data Science and Big Data Programming  ",
      descBullets: [
      
      ]
    },
    ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Machine Learning", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Frontend/Design",
      progressPercentage: "65%"
    },
    {
      Stack: "Programming",
      progressPercentage: "75%"
    },
    ],
  displayCodersrank: true // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Machine learning/Data analyst",
      company: "Fiver",
      companylogo: require("./assets/images/facebookLogo.png"),
      date: "May 2022 – Present",
      desc: "Completed over 10 projects in data analysis and machine learning., Developed machine learning models to provide predictive insights, Utilized Power BI and Tableau for data visualization, creating interactive dashboards for client reports et dolore magna aliqua   Delivered data-driven solutions that optimized client operations and enhanced decision-making processes .",
      descBullets: [
         ]
    },
    {
      role: "React.JS Developer Intern",
      company: "Forage",
      companylogo: require("./assets/images/quoraLogo.jpeg"),
      date: "SEP 2023 – NOV 2023",
      desc: "Applied ReactJS concepts to develop dynamic and responsive web applications.,Built and enhanced user interfaces using ReactJS, improving user experience, Collaborated with a team to implement interactive features and optimize performance."
    },
    {
      role: "Frontend Web developer Intern",
      company: "Intern Pakistan",
      companylogo: require("./assets/images/airbnbLogo.png"),
      date: "June 2023 – Aug 2023",
      desc: "Developed and enhanced web applications using HTML, CSS, and JavaScript, Collaborated with a team to design and implement user-friendly web interfaces, Improved coding skills and learned industry best practices for web development.."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SHOPSMART A REAL TIME PRICE COMPARISION",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.png"),
      projectName: "ShopSmart Navigating the best deals online :",
      projectDesc: "Developed a robust web application enabling real-time price comparison of electronic devices (mobile phones and laptops) across various e-commerce platforms.Utilized Python (BeautifulSoup, Scrapy) for efficient data scraping and PostgreSQL for data storage.Created a web API using ASP.NET Core to facilitate data retrieval.Designed an intuitive user interface with React.js and Material-UI, enhancing user experience in comparing product prices and features.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://github.com/ASIF679/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.png"),
      projectName: "Diabities Prediction using Machine Learning",
      projectDesc: " successfully completed a machine learning project focused on the prediction of diabetes using Linear Regression. This project involved data preprocessing, feature selection, and model training to accurately predict the likelihood of diabetes in patients based on various health metrics. The project demonstrated the effectiveness of Linear Regression in medical prediction tasks and provided actionable insights for healthcare professionals.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://github.com/ASIF679/"
        },
        
      ]
    },
    {
      image: require("./assets/images/hsp.jpeg"),
      projectName: "Hospital Management System ",
      projectDesc: " Developed a full-stack hospital management system using ASP.NET and MSSQL Server Implemented patient and doctor management modules, Patient and doctor can chat with each other. ",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://github.com/ASIF679/"
        },
        
      ]
    }
  
  ],
  display: true // Set false to hide this section, defaults to true
 
};
<p style="color: red; border: 1px solid red; padding: 10px; box-sizing: border-box;">VISIT my GITHUB TO SEE MORE interesting Projects</p>

  // Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Code War at HITEC university ",
      subtitle:
        "Participated in Code war at HITEC University and try to solve and implement the Data Structure and algorithms problem Test my problem solving  skill to enhance the logic building Skill to become better day by day  .",
      image: require("./assets/images/codeInLogo.jpeg"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
      ]
    },
    {
      title: "Web Development by Coursera JOHNS HOPKINS University",
      subtitle:
        "Learn HTML ,CSS , javaScript, Implement these Concepts to gain the hands on experince with Frontend web developmnet Accomplish the Certificate with 95% overall marks.",
      image: require("./assets/images/googleAssistantLogo.jpeg"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        
      ]
    },

    {
      title: "React JS Developer virtual Programme at Forage",
      subtitle: "Completed Certifcation from Forage in React Development Software enginnering program ",
      image: require("./assets/images/pwaLogo.jpeg"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        ]
    },
    {
      title: "Automation With Python",
      subtitle:
        "Learn Python and implement the Core concept to get hands on experience with python Generate a word cloud using python.",
      image: require("./assets/images/Python.png"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
     ]
    },
    {
      title: "React JS ",
      subtitle:
        "Learn React JS  and implement the Core concept to get hands on experience with React JS design a interactive and responsive calculator APP using   using React JS .",
      image: require("./assets/images/React.png"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
     ]
    },
    {
      title: "Prograaming Fundamentals  ",
      subtitle:
        "Learn the Fudamental and Basic  concept of programming .",
      image: require("./assets/images/programming.jpg"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
     ]
    },

  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or say hi? My Inbox is open for all.",
  number: "+92-3235405841",
  email_address: "asifnawaz679@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection,
};
