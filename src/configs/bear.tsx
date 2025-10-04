import type { BearData } from "~/types";

const bear: BearData[] = [
  {
    id: "profile",
    title: "Profile",
    icon: "i-fa-solid:user-secret",
    md: [
      {
        id: "about-me",
        title: "About Me",
        file: "markdown/about-me.md",
        icon: "i-la:dragon",
        excerpt: "Welcome to my About me!!!, "
      },
      {
        id: "github-stats",
        title: "Github Stats",
        file: "markdown/github-stats.md",
        icon: "i-icon-park-outline:github",
        excerpt: "Here are some status about my github account..."
      }
    ]
  },
  {
    id: "project",
    title: "Projects",
    icon: "i-octicon:repo",
    md: [
      {
        id: "eduvision",
        title: "EduVision",
        file: "https://raw.githubusercontent.com/Mkjerry-jr/EduVision/refs/heads/main/README.md",
        icon: "i-fa-solid:eye",
        excerpt: "A Supervision Platform for Primary School Children... ",
        link: "https://github.com/Mkjerry-jr/EduVision"
      },
      {
        id: "chatbot",
        title: "Simple Chatbot",
        file: "https://raw.githubusercontent.com/Mkjerry-jr/Chatbot/refs/heads/main/README.md",
        icon: "i-fa-solid:comment-dots",
        excerpt: "A Simple Q/A Chatbot that understands shortforms...",
        link: "https://github.com/Mkjerry-jr/Chatbot"
      },
      {
        id: "cyberrush",
        title: "Cyber Rush Game",
        file: "https://raw.githubusercontent.com/Mkjerry-jr/Cyber-Rush-Game/refs/heads/main/README.md",
        icon: "i-ri:gamepad-line",
        excerpt: "Endless Skating Game with AI generated real char...",
        link: "https://github.com/Mkjerry-jr/Cyber-Rush-Game"
      },
      {
        id: "portfolio",
        title: "Portfolio Website",
        file: "https://raw.githubusercontent.com/Mkjerry-jr/REAL-PORTFOLIO/refs/heads/main/README.md",
        icon: "i-fa-solid:users",
        excerpt: "A Simple Portfolio website made using React.js...",
        link: "https://mkjerry.netlify.app"
      },
      {
        id: "ffr",
        title: "FireFighter Robot",
        file: "https://raw.githubusercontent.com/Mkjerry-jr/Firefighter-Robot/refs/heads/main/README.md",
        icon: "i-fa-solid:fire-extinguisher",
        excerpt: "A Simple Fiefighter Robot made using Arduino UNO...",
        link: "https://github.com/Mkjerry-jr/Firefighter-Robot"
      },
      {
        id: "calculator",
        title: "Simple Calculator",
        file: "https://raw.githubusercontent.com/Mkjerry-jr/Simple-Calculator/refs/heads/main/README.md",
        icon: "i-fa-solid:calculator",
        excerpt: "A Simple Calculator with Apple Iphone UI...",
        link: "https://github.com/Mkjerry-jr/Simple-Calculator"
      }
    ]
  },
  {
    id: "education",
    title: "Education",
    icon: "i-fa-solid:user-graduate",
    md: [
      {
        id: "ignou",
        title: "IGNOU",
        file: "https://raw.githubusercontent.com/Mkjerry-jr/Mkjerry-jr/refs/heads/main/ignou.md",
        icon: "i-fa-solid:chalkboard",
        excerpt: "Post Graduate Diploma in Computer Applications "
      },
      {
        id: "pu",
        title: "Presidency University",
        file: "https://raw.githubusercontent.com/Mkjerry-jr/Mkjerry-jr/refs/heads/main/pu.md",
        icon: "i-fa-solid:graduation-cap",
        excerpt: "Bachelors in Computer Applications"
      },
      {
        id: "fcs",
        title: "Freedom Concept School",
        file: "https://raw.githubusercontent.com/Mkjerry-jr/Mkjerry-jr/refs/heads/main/fcs.md",
        icon: "i-fa-solid:school",
        excerpt: "High & Middle School"
      }
    ]
  },
  {
    id: "work",
    title: "Experience",
    icon: "i-fa-solid:briefcase",
    md: [
      {
        id: "tcs",
        title: "Tata Consultancy Services",
        file: "https://raw.githubusercontent.com/Mkjerry-jr/Mkjerry-jr/refs/heads/main/tcs.md",
        icon: "i-fa-solid:laptop-code",
        excerpt: "Graduate Trainee "
      }
      
    ]
  }
];

export default bear;
