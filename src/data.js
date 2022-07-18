import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import githubHomepage from './images/github-example.jpg';
import MUIHomepage from './images/MUI_template.jpg';
import studioGhibli from './images/studio-ghibli.png';

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
    url: 'https://www.linkedin.com/in/yoseline-guerrero-a78526175/',
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
    code_site: 'https://github.com/YoselineGuerrero/react-api-pratice',
    live_site: 'https://yoselineguerrero.github.io/react-api-pratice/',
    img: githubHomepage,
    tech: ['React','CSS', 'GitHub Pages']
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
  }, {
    title: 'Contact'
  }
];

const techs = [
  {
    title: 'Frontend',
    items:['Html, JavaScript, CSS', 'React (MUI, Semantic)']
  }, {
    title: 'Full-stack/ Backend',
    items:['Django', 'Node']
  }, {
    title: 'Database',
    items:['Mysql', 'MongoDB']
  }
];

const clientWork = [
  {
    id: '1',
    title: 'Social Website',
    tech: ['MERN', 'React'],
    date: 'Aug. 2021 - Dec. 2021',
    info: ['Client wanted a new site that would help them interact with their members. As well as create an admin view to show records and higher level actions.',
      'Created CRUD API endpoints and deployed the site.',
      'Frontend functionally for admin side, creating table views of users/items, reports from data, restricting users from logging in, and making a user admin.',
      'Arranged communications with the client with weekly meetings. As well as with the group (stand-up meetings), organized the group to make sure everyone has a goal.'],
  }, {
    id: '2',
    title: 'Web Developer',
    tech: ['Python', 'Django'],
    date: 'Jan. 2022 - June 2022',
    info: ['Client wanted new pages with tables to manipulate data.',
      'Developed database layout (ER model), setup models in Django admin.',
      'Unit testing frontend as well as backend with Djangos built in functions.',
      'Organizing client meetings and main communicator with the client.']
  }
];

export { socials, repos, sections, techs, clientWork };
