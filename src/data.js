import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import githubHomepage from './images/github-example.jpg';
import MUIHomepage from './images/MUI_template.jpg';
import studioGhibli from './images/studio-ghibli.png';
import Mysql from './tech-icons/Mysql.svg'
import MongoDB from './tech-icons/MongoDB.svg'
import Django from './tech-icons/Django.svg'
import Node from './tech-icons/Node.svg'
import HTML from './tech-icons/HTML.svg'
import JavaScript from './tech-icons/JavaScript.svg'
import CSS from './tech-icons/CSS.svg'
import React from './tech-icons/React.svg'
import MUI from './tech-icons/MUI.svg'

const socials = [
  {
    id: '1',
    icon: GitHubIcon,
    title: 'Github',
    url: 'https://github.com/YoselineGuerrero',
    description: ''
  }, {
    id: '2',
    icon: LinkedInIcon,
    title: 'LinkedIn',
    url: 'https://www.linkedin.com/in/yoseline-guerrero/',
    description: ''
  }, {
    id: '3',
    icon: EmailIcon,
    title: 'Email',
    url: 'mailto:yguerrerocs@gmail.com?subject=Yoseline%20Guerrero%20Portfolio',
    description: ''
  }
];

const repos = [
  {
    id: '1',
    name: 'MUI Template',
    description: 'A template created using react and MUI. Open for the whole public to copy and have a frontend already created for them to use.',
    code_site: 'https://github.com/YoselineGuerrero/mui_template',
    live_site: 'https://mui-template.netlify.app',
    img: MUIHomepage,
    tech: ['React','MUI', 'Netlify']
  }, {
    id: '2',
    name: 'GitHub API search',
    description: 'Search for any user and get information on who they are and their projects.',
    code_site: 'https://github.com/YoselineGuerrero/github-user-search',
    live_site: 'https://github-userinfo-search.netlify.app',
    img: githubHomepage,
    tech: ['React','CSS', 'Netlify', 'API']
  }, {
    id: '3',
    name: 'Studio Ghibli Catalog',
    description: 'Site to find more information on studio ghibli films.',
    code_site: 'https://github.com/YoselineGuerrero/studio-ghibli',
    live_site: 'https://studio-ghibli-collections.netlify.app',
    img: studioGhibli,
    tech: ['React','CSS', 'Netlify', 'API']
  }
];
  
const sections = [
  {
    title: 'About Me'
  }, {
    title: 'Education'
  }, {
    title: 'Projects'
  }, {
    title: 'Tech'
  }
];

const techs = [
  {
    title: 'Frontend',
    icons: [
      {
        id: '1',
        img: HTML,
        img_title: 'HTML'
      }, {
        id: '2',
        img: JavaScript,
        img_title: 'JavaScript'
      }, {
        id: '3',
        img: CSS,
        img_title: 'CSS'
      }, {
        id: '4',
        img: React,
        img_title: 'React'
      }, {
        id: '5',
        img: MUI,
        img_title: 'MUI'
      }
    ]
  }, {
    title: 'Full-stack/ Backend',
    icons: [
      {
        id: '1',
        img: Django,
        img_title: 'Django'
      }, {
        id: '2',
        img: Node,
        img_title: 'Node'
      }
    ]
  }, {
    title: 'Database',
    icons: [
      {
        id: '1',
        img: Mysql,
        img_title: 'Mysql'
      }, {
        id: '2',
        img: MongoDB,
        img_title: 'MongoDB'
      }
    ]
  }
];

const clientWork = [
  {
    id: '1',
    title: 'Django Lead Developer',
    tech: ['Python', 'Django'],
    date: 'Jan. 2022 – June 2022',
    info: ['Expanded client’s site with add on features in Django.',
      'Implemented non-relational data into MySQL (Relational Database) with EAV.',
      'Implemented continuous delivery using Jenkins for quality assurance.',
      'Maintain above 90% on all unit testing both for front/back-end.',
      'Manage a group of 8 in a full stack environment.',
      'Head of communications with the client, their main developer, and the professors.'],
  }, {
    id: '2',
    title: 'Social Networking Site Lead Developer',
    tech: ['MERN', 'MUI'],
    date: 'Aug. 2021 – Jan. 2022',
    info: ['Developed a full-stack web application using MERN (MySQL, Express, React, Node) as well as Material-UI.',
      'Used google Firebase and their API to simplify admin responsibility.',
      'Led a group of 6 to carry out this assignment.',
      'Established and maintained positive relationships with the client.']
  }, {
    id: '3',
    title: 'Software Developer',
    tech: ['HTML', 'CSS', 'PHP'],
    date: 'Aug. 2021 – Dec. 2021',
    info: ['Updated site and restored functionally to 100%.',
      'Utilized HTML, CSS, and PHP to accomplish task since their website builder is discontinued.',
      'Upgraded CAPTCHA from v1 to v3.',
      'Integrated Instagram for effortless image gallery.']
  }
];

export { socials, repos, sections, techs, clientWork };
