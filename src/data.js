import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import githubHomepage from './images/github-example.jpg';
import MUIHomepage from './images/MUI_template.jpg';

const socials = [
  {
    id: '1',
    icon: GitHubIcon,
    title: 'Github',
    color: 'black',
    url: 'https://github.com/YoselineGuerrero'
  }, {
    id: '2',
    icon: LinkedInIcon,
    title: 'LinkedIn',
    color: 'blue',
    url: 'https://www.linkedin.com/in/yoseline-guerrero-a78526175/'
  }, {
    id: '3',
    icon: EmailIcon,
    title: 'Email',
    color: 'red',
    url: '#'
  }
];

const repos = [
  {
    id: '1',
    name: 'MUI Template',
    description: 'A template created using react and mui (material UI)',
    code_site: 'https://github.com/YoselineGuerrero/mui_template',
    live_site: 'https://main.db6zihjdbzz7y.amplifyapp.com/',
    img: MUIHomepage,
    tech: ['React','MUI', 'AWS']
  }, {
    id: '2',
    name: 'GitHub API search',
    description: 'Search for any user and get information on who they are.',
    code_site: 'https://github.com/YoselineGuerrero/react-api-pratice',
    live_site: 'https://yoselineguerrero.github.io/react-api-pratice/',
    img: githubHomepage,
    tech: ['React','CSS', 'GitHub Pages']
  }
];
  
const sections = [
  {
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
    items:['Html, javascript, css', 'React (MUI/material UI, Sematic']
  }, {
    title: 'Full-stack/ Backend',
    items:['Django', 'Node']
  }, {
    title: 'Database',
    items:['Mysql', 'MongoDB']
  }
];

export { socials, repos, sections, techs };