/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Sujithra's Portfolio",
  description:
    "A passionate individual who always thrive to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Sujithra Kathiravan Portfolio",
    type: "website",
    url: "https://sujikathir.github.io/",
  },
};

//Home Page
const greeting = {
  title: "Sujithra Kathiravan",
  logo_name: "Sujithra Kathiravan",
  nickname: "SuG",
  subTitle:
    "A passionate individual who always thrive to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  resumeLink:
    "https://drive.google.com/file/d/1BWRlWEyHSDcgJRHWTw32A0Bxbd9nm5IV/view?usp=sharing",
  portfolio_repository: "https://github.com/sujikathir/sujikathir.github.io",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/sujikathir",
  // linkedin: "https://www.linkedin.com/in/sujithra-kathiravan-7705a014b/",
  // gmail: "sujikathir18@gmail.com",
  // facebook: "https://www.facebook.com/sujithra.kathir.7/",
  // twitter: "https://twitter.com/SuG_Wowie",
  // instagram: "https://www.instagram.com/sugtrya99/"

  {
    name: "Github",
    link: "https://github.com/sujikathir",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/sujithra-kathiravan-7705a014b/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "YouTube",
    link: "https://www.youtube.com/channel/UC33mDatJHw2S2FlLPJP7tHg",
    fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
    backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  },
  {
    name: "Gmail",
    link: "mailto:sujikathir18@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Twitter",
    link: "https://twitter.com/SuG_Wowie",
    fontAwesomeIcon: "fa-twitter", // Reference https://fontawesome.com/icons/twitter?style=brands
    backgroundColor: "#1DA1F2", // Reference https://simpleicons.org/?q=twitter
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/sujithra.kathir.7/",
    fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/sugtrya99/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Data Science & Machine Learning",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Developing highly scalable production ready models for various deeplearning and statistical use cases",
        "⚡ Experience of working with Computer Vision and Deep Learning projects",
        "⚡ Complex quantitative modelling for dynamic forecasting and time series analysis",
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
      ],
    },
    
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
        "⚡ Deploying deep learning models on cloud",
        "⚡ Experience working with GCP and AWS",
      ],
      softwareSkills: [
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
      
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
      
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
      ],
    },
    {
      title: "Internet of Things",
      fileName: "DesignImg",
      skills: [
        "⚡ Designing highly efficient models that are embedded with sensors, software, and other technologies",
        "⚡ Customizing electronics and developing Embedded devices",
        "⚡ Developing, Managing, and Monitoring IoT devices and systems",
      ],
      softwareSkills: [
        {
          skillName: "Arduino",
          fontAwesomeClassname: "simple-icons:arduino",
          style: {
            color: "#FF2BC2",
          },
        },
        {
          skillName: "RaspberryPi",
          fontAwesomeClassname: "logos:raspberry-pi",
          style: {
            color: "#A36468",
          },
        },
        {
          skillName: "Machine Learning",
          fontAwesomeClassname: "simple-icons:ml",
          style: {
            color: "#Efb7b9",
          },
        },
        {
          skillName: "Embedded Sytems",
          fontAwesomeClassname: "logos:embedded",
          style: {
            color: "#Efb7b9",
          },
        },

      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "Microsoft Learn",
      iconifyClassname: "simple-icons:microsoft",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://docs.microsoft.com/en-us/users/sujithra-0450/",
    },
    {
      siteName: "Leetcode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#5B4638",
      },
      profileLink: "hhttps://leetcode.com/Suji99/",
    },
    {
      siteName: "Hackerearth",
      iconifyClassname: "simple-icons:hackerearth",
      style: {
        color: "#323754",
      },
      profileLink: "https://www.hackerearth.com/@sujithra24",
    },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/sujikathir18",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Srm Trp Engineering College",
      subtitle: "B.E. in Electronics and Communication Engineering",
      logo_path: "srm.png",
      alt_name: "SRM-TRPEC",
      duration: "2017 - Present",
      descriptions: [
        "⚡ I have studied basic electronics and communication engineering subjects like Microprocessor, Digital Signal Processing, Embedded Systems, Electronic Circuits, Communication Theory, Antenna etc.",
        "⚡ Apart from this, I have done courses on Deep Learning, Data Science, Cloud Computing and Internet of Things.",
        "⚡ I was selected for various competitions representing the college. I have lead the cultural and technical team for symposiums.",
      ],
      website_link: "https://trp.srmtrichy.edu.in/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Deep Learning",
      subtitle: "- Andrew Ng",
      logo_path: "stanford_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/KSDUUX6T9Y85",
      alt_name: "Stanford University",
      color_code: "#8C151599",
    },
    {
      title: "Centre for Computational Brain Research",
      subtitle: "- IIT Madras",
      logo_path: "ccbr.png",
      certificate_link:
        "https://drive.google.com/file/d/1MroalANv79xB7fZyEk6axBb42NZFSqzU/view?usp=sharing",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: "ML on GCP",
      subtitle: "- GCP Training",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/UAV43Z7PVD3Q",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    {
      title: "Data Analytics Consulting Virtual Internship",
      subtitle: "- KPMG",
      logo_path: "kpmg.png",
      certificate_link:
        "https://insidesherpa.s3.amazonaws.com/completion-certificates/KPMG/m7W4GMqeT3bh9Nb2c_KPMG_xbyJdh5TvP3gKJgWt_completion_certificate.pdf",
      alt_name: "Insidesherpa",
      color_code: "#0C9D5799",
    },
    {
      title: "Data Science",
      subtitle: "- Alex Aklson",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/professional-cert/D6GLGN5JAG5U",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
    {
      title: "Natural Language Processing",
      subtitle: "- Deeplearning.ai",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/ZRWK3JZL4UNH",
      alt_name: "deeplearning.ai",
      color_code: "#D83B0199",
    },
    {
      title: "Deep Learning in Python",
      subtitle: "- DataCamp",
      logo_path: "datacamp.png",
      certificate_link:
        "https://www.datacamp.com/statement-of-accomplishment/course/f2ffb3073f934947b4b5dcde258a757aa33033f7",
      alt_name: "Datacamp",
      color_code: "#0C9D5899",
    },
    {
      title: "Complete Machine Learning and Data Science",
      subtitle: "- Zero to Mastery",
      logo_path: "ztm.png",
      certificate_link:
        "https://www.udemy.com/certificate/UC-d65a64d2-8811-4dd9-b9c8-6b5d8a1a2eef/",
      alt_name: "Udemy",
      color_code: "#4285F499",
    },
    {
      title: "Python for Everybody",
      subtitle: "- Dr.Charles Severance",
      logo_path: "U-M.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/F5RV7LGMNYL2",
      alt_name: "University of Michigan",
      color_code: "#FFBB0099",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I have worked with many evolving startups as ML and Data Science Developer, Business associate and manager. I have also worked with some well established companies mostly as Business Analyst. I love organising events and that is why I am also involved with many opensource communities as a representative.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      experiences: [
        {
          title: "Business Analyst",
          company: "Prime Group of Companies",
          logo_path: "primemarketing.png",
          duration: "Oct 2019 - May 2020",
          location: "Trichy, Tamil Nadu",
          description:
            "I worked on competitive analysis, identified various methods, proposed solutions and developed innovative strategies to increase the reach of the company.  Provided technical support for existing reports, dashboards and other tools of business visualization.",
          color: "#0879bf"
        },
        {
          title: "AWS Community Builder",
          company: "AWS",
          company_url: "https://aws.amazon.com/",
          logo_path: "aws-logo.png",
          duration: "Dec 2020 - Present",
          location: "Work from Home",
          description:
            "I have worked on various cloud services through this program and received mentorship from AWS subject matter experts on a variety of topics, including content creation, community building, and securing speaking engagements.",
          color: "#9b1578"
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Data Science Research Intern",
          company: "NATIONAL UNIVERSITY OF SINGAPORE",
          company_url: "https://nus.edu.sg/",
          logo_path: "nus.png",
          duration: "Oct 2020 - Present",
          location: "Work from Home",
          description: [
            "Forecasting for Time Series Data",
            "⚡ Detect the trend and seasonality from the historical data first based on an additive model where non-linear trends are fit with time seasonality by FB prophet (robust to missing data, shifts in the trend and handles outliers)",
            "⚡ Adopting ARIMA model by implementing process such as Model identification, Parameter estimation, Model Checking to achieve a desirable level of fit.",
            "⚡ Perform exponential smoothing on the model to accurately predict the future by means of the trend and seasonality in the historical data.",
            "⚡ Compute the minimized AIC using step-wise search and generate lag of correlation and reducing the MSE.",
            "⚡ Optimising the parameter for Autocorrelation using criteria of Distribution, Variance and Residual mean.",
            "⚡ Used LSTM to train the model using Back propagation through time to address the sequence problem by means of memory blocks connected through layers (performed using SciPy environment with the Keras deep learning library).",
            "⚡ Reconstructed the code to run in a Graphical User Interface for easy use by the end user." ],
          color: "#ee3c26"
        },
        {
          title: "Data Science and Analytics Internship",
          company: "THE SPARKS FOUNDATION",
          company_url:
            "https://www.thesparksfoundationsingapore.org/",
          logo_path: "sparks.jpg",
          duration: "Sept 2020 - Oct 2020",
          location: "Work From Home",
          description:
            ["⚡ Classify the attendance performance report based on the clustering methods such as centroid based, distribution based and density-based clustering formulated by students' multilevel of optimization using central vector.",
             "⚡ Enhance with EM algorithm to find maximum likelihood estimates of parameters in probabilistic models (i.e. to group students according to their performance). ",
             "⚡ Execute Outlier analysis and finalize the features that profoundly influence the performance for decision making that is likely to effect on student’s learning outcomes."],
          color: "#0071C5"
        },
        {
          title: "Data Science Internship",
          company: "OkCredit",
          company_url:
            "https://www.linkedin.com/company/okcredit/?originalSubdomain=in",
          logo_path: "okcredit.jpg",
          duration: "May 2020 - July 2020",
          location: "Work From Home",
          description:
            ["⚡ Extracted data using SQL from BigQuery, followed by Data Pre-processing to find meaningful insights and created an Exploratory Data Analysis sheet.", 
            " ⚡ Applied Hidden Markov model and coded the Viterbi Algorithm to predict their app event sequences based on data of 18000 users extracted previously."],
          color: "#0081C5"
        },
        {
          title: "Student Internship",
          company: "Airport Authority of India",
          company_url: "https://www.aai.aero/",
          logo_path: "aai.png",
          duration: "Dec 2019 - Jan 2020",
          location: "Chennai",
          description: "Focused on the Principles of operation inside the Airport with various Electronics and Communication Systems such as: Technology used in Control Room & Voice control system, Navigation, Security and Surveillance technology, Radar and Very High Frequency(VHF) Units",
          color: "#fe3c26"
        },

      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Student Mentor",
          company: "U&I",
          company_url: "https://www.uandi.org.in/",
          logo_path: "u&i.png",
          duration: "April 2020 - Nov 2020",
          location: "Trichy, TamilNadu",
          description:
            "U&I is a volunteer-driven charitable organization based in Bangalore, India. I have taught under-priviliged students under this program.",
          color: "#4285F4"
        },
        {
          title: "Developer Students Club Member",
          company: "DSC Sastra",
          company_url:
            "https://dscsastra.com/",
          logo_path: "dsc_logo.png",
          duration: "Nov 2020 - Present",
          location: "Thanjavur, Tamil Nadu",
          description:
            "Part of the well established developer club in Sastra college which is directly associated with Google Developers. We have developed interdisciplinary projects under the membership of this club. Many workshops and activities on Android Application Development, Flutter and React JS and Machine Learning have been conducted  .",
          color: "#0C9D58"
        },
        {
          title: "Developer Program Member",
          company: "Github",
          company_url: "https://github.com/",
          logo_path: "github_logo.png",
          duration: "July 2019 - PRESENT",
          location: "Work From Home",
          description:
            "I am actively contributing to many opensource projects. I have contributed to projects of organisations like Tensorflow, Uber, Facebook, Google, Scikit-learn, Kiwix, Sympy, Python, NVLabs, Fossasia, Netrack, Keras etc. These contributions include bug fixes, feature requests and formulating proper documentation for project.",
          color: "#181717"
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to use.",
  avatar_image_path: "projects_image.svg",
};

const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "suji.jpg",
    description:
      "I am more frequently available on LinkedIn. You can message me and I'll reply within 24 hours. I can help you with ML, AI, Data Science Development and related queries.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "For individual fundamental empowerment, I like to write powerful lessons that create impact on each of the reader individually to change the core of their character.",
    link: "Yet to publish",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle:
      "Trichy, Tamil Nadu, India",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://goo.gl/maps/YP1iHUB5mY8d9XE9A",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
};
