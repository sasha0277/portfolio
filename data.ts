import { AiOutlineAntDesign, AiOutlineApi } from 'react-icons/ai';
import { BsCircleFill } from 'react-icons/bs';
import { FaServer } from 'react-icons/fa';
import { RiComputerLine } from 'react-icons/ri';
import { IProject, IService, ISkill } from './type';

export const services: IService[] = [
  {
    Icon: RiComputerLine,
    title: 'Frontend Development',
    about:
      'I can build a beautiful and scalable SPA using <b> HTML</b>,<b>CSS</b>   and <b>React.js</b> ',
  },
  {
    Icon: FaServer,
    title: 'Backend  Development',
    about: 'Node.js, Rest API , Java',
  },
  {
    Icon: AiOutlineApi,
    title: 'API Development',
    about: 'I can develop robust  REST API using <b>Node.js</b> ',
  },

  {
    Icon: AiOutlineAntDesign,
    title: 'UI/UX designer',
    about: 'stunning user interface designer using <b>Figma</b> ',
  },
  {
    Icon: RiComputerLine,
    title: 'JavaScript',
    about: 'I have good knowledge of core JavaScript and ECMA ES6',
  },
];

export const languages: ISkill[] = [
  {
    name: 'HTML',
    level: '95',
    Icon: BsCircleFill,
  },
  {
    name: 'JavaScript',
    level: '80',
    Icon: BsCircleFill,
  },
  {
    name: 'CSS,SASS',
    level: '80',
    Icon: BsCircleFill,
  },
  {
    name: 'C#',
    level: '70',
    Icon: BsCircleFill,
  },
  {
    name: 'React.js',
    level: '80',
    Icon: BsCircleFill,
  },
  {
    name: 'Java',
    level: '70',
    Icon: BsCircleFill,
  },
  {
    name: 'Node.js',
    level: '80',
    Icon: BsCircleFill,
  },
];

export const tools: ISkill[] = [
  {
    name: 'Figma',
    level: '50',
    Icon: BsCircleFill,
  },

  {
    Icon: BsCircleFill,
    name: 'Visual Studio Code',
    level: '90',
  },
];

export const projects: IProject[] = [
  {
    id: 1,
    name: 'EcomMern',
    description: 'Mern App',
    image_path: '/images/EcomwithReact.png',
    deployed_url: 'https://mernecomappversion1.herokuapp.com/',
    github_url: 'https://github.com/sonny-sharma',
    category: ['react'],
    key_tech: ['react', 'node', 'Express', 'Material Ui'],
  },
  {
    id: 2,
    name: 'GitHub Finder',
    description: 'This app for testing purposes',
    image_path: '/images/GitHubFinder.png',
    deployed_url: 'https://githubfinduser.vercel.app/',
    github_url: 'https://github.com/sonny-sharma',
    category: ['react'],
    key_tech: ['react', 'node', 'Tailwind'],
  },
  {
    id: 3,
    name: 'SmallJavaScriptProject1',
    description: 'Expanding pages',
    image_path: '/images/JavaScript1.png',
    deployed_url: 'https://tiny-semolina-3500b2.netlify.app/',
    github_url: 'https://github.com',
    category: ['javascript'],
    key_tech: ['javascript'],
  },
  {
    id: 4,
    name: 'House Listing',
    description: 'This app for testing purposes',
    image_path: '/images/HousingProject.png',
    deployed_url: 'https://houserentsell.vercel.app',
    github_url: 'https://github.com/sonny-sharma',
    category: ['react'],
    key_tech: ['react', 'Firebase'],
  },
  {
    id: 5,
    name: 'Task Added JavaScriptProject3',
    description: 'add task',
    image_path: '/images/TaskList.png',
    deployed_url: 'https://deft-heliotrope-3d52fd.netlify.app/',
    github_url: 'https://github.com/sonny-sharma',
    category: ['javascript'],
    key_tech: ['javascript'],
  },
  {
    id: 6,
    name: 'Shopping-ReactApp',
    description: 'This app for testing purposes',
    image_path: '/images/Ecom2WithReact.png',
    deployed_url: 'https://github.com/sonny-sharma',
    github_url: 'https://github.com/sonny-sharma',
    category: ['react'],
    key_tech: ['react', 'node'],
  },
];
