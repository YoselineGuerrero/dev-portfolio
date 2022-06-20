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
    url: 'https://github.com/YoselineGuerrero'
  }, {
    id: '2',
    icon: LinkedInIcon,
    title: 'LinkedIn',
    url: 'https://www.linkedin.com/in/yoseline-guerrero-a78526175/'
  }, {
    id: '3',
    icon: EmailIcon,
    title: 'Email',
    url: '#'
  }
];

const repos = [
  {
    id: '1',
    name: 'MUI Template',
    description: 'A template created using react and MUI. Open for the whole public to copy and have a frontend already created for them to use.',
    code_site: 'https://github.com/YoselineGuerrero/mui_template',
    live_site: 'https://main.db6zihjdbzz7y.amplifyapp.com/',
    img: MUIHomepage,
    tech: ['React','MUI', 'AWS']
  }, {
    id: '2',
    name: 'GitHub API search',
    description: 'Search for any user and get information on who they are and their projects.',
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
    items:['Html, JavaScript, CSS', 'React (MUI, Semantic)']
  }, {
    title: 'Full-stack/ Backend',
    items:['Django', 'Node']
  }, {
    title: 'Database',
    items:['Mysql', 'MongoDB']
  }
];

export { socials, repos, sections, techs };