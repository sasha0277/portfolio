import { AiOutlineAntDesign, AiOutlineApi } from "react-icons/ai";
import { BsCircleFill } from "react-icons/bs";
import { FaServer } from "react-icons/fa";
import { MdDeveloperMode } from "react-icons/md";
import { RiComputerLine } from "react-icons/ri";
import { IProject, IService, ISkill } from "./type";

export const services: IService[] = [
  {
    Icon: RiComputerLine,
    title: "Frontend Development",
    about:
      "I can build a beautiful and scalable SPA using <b> HTML</b>,<b>CSS</b>   and <b>React.js</b> ",
  },
  {
    Icon: FaServer,
    title: "Backend  Development",
    about:
      "handle database, server, api using <b>Express </b> & other popular frameworks",
  },
  {
    Icon: AiOutlineApi,
    title: "API Development",
    about:
      "I can develop robust  REST API using <b>django-rest-api</b>  & <b>Node API</b> ",
  },
  {
    Icon: MdDeveloperMode,
    title: "Competitive Coder",
    about: "a daily problem solver in <b>HackerRank</b>  and <b>Leet Code</b> ",
  },
  {
    Icon: AiOutlineAntDesign,
    title: "UI/UX designer",
    about:
      "stunning user interface designer using <b>Figma</b>  and  <b>Framer</b> ",
  },
  {
    Icon: RiComputerLine,
    title: "Whatever",
    about:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quis minima autem!",
  },
];

export const languages: ISkill[] = [
  {
    name: "HTML",
    level: "95",
    Icon: BsCircleFill,
  },
  {
    name: "JavaScript",
    level: "80",
    Icon: BsCircleFill,
  },
  {
    name: "CSS,SASS",
    level: "80",
    Icon: BsCircleFill,
  },
  {
    name: "C#,ASP.NET,MVC",
    level: "70",
    Icon: BsCircleFill,
  },
  {
    name: "React.js",
    level: "80",
    Icon: BsCircleFill,
  },
  {
    name: "Angular13",
    level: "70",
    Icon: BsCircleFill,
  },
  {
    name: "Node.js",
    level: "80",
    Icon: BsCircleFill,
  },
];

export const tools: ISkill[] = [
  {
    name: "Figma",
    level: "85",
    Icon: BsCircleFill,
  },
  {
    Icon: BsCircleFill,
    name: "Photoshop",
    level: "45",
  },
  {
    Icon: BsCircleFill,
    name: "Illustrator",
    level: "60",
  },
  {
    Icon: BsCircleFill,
    name: "Framer",
    level: "45",
  },
  {
    Icon: BsCircleFill,
    name: "Visual Studio Code",
    level: "90",
  },
];

export const projects: IProject[] = [
  {
    id:1,
    name: "Shopping-ReactApp",
    description: "This app for testing purposes",
    image_path: "/images/React-app.jpg",
    deployed_url: "https://google.com",
    github_url: "https://github.com",
    category: ["react"],
    key_tech: ["react", "node", "typescript", "Material Ui"],
  },
  {
    id:2,
    name: "YouTube-Clone",
    description: "YouTube Clone",
    image_path: "/images/youtubeClone.png",
    deployed_url: "https://google.com",
    github_url: "https://github.com",
    category: ["react"],
    key_tech: ["react", "node", "typescript", "Material Ui"],
  },
  {
    id:3,
    name: "Netflix-Clone",
    description: "Netflix-clone",
    image_path: "/images/Netflix.png",
    deployed_url: "https://google.com",
    github_url: "https://github.com",
    category: ["react"],
    key_tech: ["react", "node", "typescript", "Material Ui"],
  },
  {
    id:4,
    name: "Shopping-ReactApp",
    description: "This app for testing purposes",
    image_path: "/images/React-app.jpg",
    deployed_url: "https://google.com",
    github_url: "https://github.com",
    category: ["mongo"],
    key_tech: ["react", "node", "typescript", "Material Ui"],
  },
  {
    id:5,
    name: "Netflix-Clone",
    description: "Netflix-clone",
    image_path: "/images/Netflix.png",
    deployed_url: "https://google.com",
    github_url: "https://github.com",
    category: ["react"],
    key_tech: ["react", "node", "typescript", "Material Ui"],
  },
  {
    id:6,
    name: "YouTube-Clone",
    description: "YouTube Clone",
    image_path: "/images/youtubeClone.png",
    deployed_url: "https://google.com",
    github_url: "https://github.com",
    category: ["react"],
    key_tech: ["react", "node", "typescript", "Material Ui"],
  },
];
