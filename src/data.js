import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import githubHomepage from './images/github.png';
import github_dark from './images/github_dark.png';
import MUIHomepage from './images/MUI_template.jpg';
import MUI_dark from './images/MUI_template_dark.png';
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
import Link from '@mui/material/Link';

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
    code_site: 'https://github.com/YoselineGuerrero/mui_template',
    live_site: 'https://mui-template.netlify.app',
    img: MUIHomepage,
    dark_img: MUI_dark,
    tech: ['React','MUI', 'Netlify'],
    info: ['Open for the public to copy and have a frontend already created for them to use.',
      'Implemented pages for different scenarios (404 error, comming soon, contact page with form, blog page view)',],
  }, {
    id: '2',
    name: 'GitHub API Search',
    code_site: 'https://github.com/YoselineGuerrero/github-user-search',
    live_site: 'https://github-userinfo-search.netlify.app',
    img: githubHomepage,
    dark_img: github_dark,
    tech: ['React','CSS', 'Netlify', 'API'],
    info: ['Search for any user and get information on who they are and their projects, using GitHub\'s API.',
      'CSS used to created different color schemes modes, responsive web design, and similiar styling to the actual site.',],
  }, {
    id: '3',
    name: 'Studio Ghibli Catalog',
    code_site: 'https://github.com/YoselineGuerrero/studio-ghibli',
    live_site: 'https://studio-ghibli-collections.netlify.app',
    img: studioGhibli,
    dark_img: studioGhibli,
    tech: ['React','CSS', 'Netlify', 'API'],
    info: ['Site to find more information on studio ghibli films.',
      'Gathers Studio Ghibli films information from the public API and displays it in multiples sections.',],
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
    title: 'Django Developer',
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
    title: 'Social Networking Developer',
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

const otherExp =[
  {
    id: '1',
    title: 'Research Assistant ',
    tech: ['Keils', 'Linux'],
    date: 'Aug 2020 - Jan 2021',
    info: ['Developed many different quizzes and exams.',
      'Helped over 100+ students.',
      'Managed the process of adding all quizzes and exams to the system.']
  }, {
    id: '2',
    title: 'I-TECH Mentor',
    tech: ['Python', '3D modeling'],
    date: 'Jul 2021 - Aug 2021',
    info: ['Guided groups of 6 in different CS topics',
      'Worked with elementary, middle, and high school students groups.',
      'Led more challenging project in class.']
  }, {
    id: '3',
    title: 'HackMISSO 1st place',
    tech: ['React'],
    date: 'Nov 2021',
    info: ['Group won 1st place at hackathon.',
      'Focus on CRM possible solutions the pros and cons of each possible solution, as well as which we recommend.',
      <Link href="https://devpost.com/software/crm-solution-noname-team-submission" underline="none" color='secondary' target="_blank">
        Look at the submission by clicking me!
      </Link>
    ]
  }
]

const currentJob ={
  id: '1',
  title: 'API Automation Developer Intern',
  time: 'Aug. 2022 – Present',
  companyName: 'P97 Networks, Inc.',
  points: ['Helped create/run different type of tests (smoke/sanity) reaching over 80% success rates',
    'Working with pipelines to improve scores',
    'Helped run manual testing, finding over 10+ bugs',
    'Improved depreciated documentation']
}

export { socials, repos, sections, techs, clientWork, otherExp, currentJob };
