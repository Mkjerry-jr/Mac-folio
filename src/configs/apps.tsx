import { appBarHeight } from "~/utils";
import type { AppsData } from "~/types";
import Spotify from "~/components/apps/Spotify";

const apps: AppsData[] = [
  
  {
    id: "github",
    title: "Github",
    desktop: false,
    img: "img/icons/github.png",
    link: "https://github.com/Mkjerry-jr"
  },
  {
    id: "safari",
    title: "Safari",
    desktop: true,
    width: 1024,
    minWidth: 375,
    minHeight: 200,
    x: -20,
    img: "img/icons/safari.png",
    content: <Safari />
  },
  {
    id: "launchpad",
    title: "Launchpad",
    desktop: false,
    img: "img/icons/launchpad.png"
  },
  {
    id: "resume",
    title: "Resume",
    desktop: false,
    link: "https://drive.google.com/file/d/1Qt6d6ySNg0y0G7EWuOEye8aC6G6uYtII/view?usp=sharing",
    img: "img/icons/resume-logo.png",
  },
  {
    id: "siri",
    title: "Siri",
    desktop: false,
    img: "/img/sites/siri.gif",
    link: ""
  },
  {
    id: "terminal",
    title: "Terminal",
    desktop: true,
    img: "img/icons/terminal.png",
    content: <Terminal />
  },
  {
    id: "bear",
    title: "Profile",
    desktop: true,
    width: 1000,
    height: 500,
    show: true,
    y: -40,
    img: "img/icons/c.png",
    content: <Bear />
  },
  {
    id: "linkedin",
    title: "Linkedin",
    desktop: false,
    img: "img/sites/linkedin.png",
    link: "https://www.linkedin.com/in/manoj-kumar-k-27b338250/"
  },
  {
    id: "spotify",
    title: "Spotify",
    desktop: true,
    width: 860,
    height: 500,
    show: false,
    y: -40,
    img: "img/icons/spotify.png",
    content: <Spotify />,
  }
  
];

export default apps;
