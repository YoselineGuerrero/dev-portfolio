import React, {useState, useRef, useContext} from 'react';
import IconButton from '@mui/material/IconButton';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import YG_logo from './images/YG_logo.png';
import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import AppBar from '@mui/material/AppBar';
import Footer from './components/footer';
import RepoCards from './components/repoCards';
import {sections} from './data';
import GitHubIcon from '@mui/icons-material/GitHub';
import { ColorModeContext } from './App.js';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import TechCards from './components/techCards';
import Education from './components/education';
import {socials} from './data';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import DescriptionIcon from '@mui/icons-material/Description';
import Yoseline_Resume from './components/Yoseline_Resume.pdf';
import Tooltip from '@mui/material/Tooltip';

export default function MainPage() {
  const [navMenu, setnavMenu] = useState(null);
  const aboutMe = useRef(null);
  const education = useRef(null);
  const projects = useRef(null);
  const tech = useRef(null);
  const contact = useRef(null);
  const colorMode = useContext(ColorModeContext);

  const handleOpenNavMenu = (event) => {
    setnavMenu(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setnavMenu(null);
  };

  const executeScroll = (e, title) => {
    e.preventDefault();
    if(title === 'About Me')
    aboutMe.current.scrollIntoView({  behavior: 'smooth' })
    if(title === 'Education')
    education.current.scrollIntoView({  behavior: 'smooth' })
    else if(title === 'Projects')
    projects.current.scrollIntoView({   behavior: 'smooth' })
    else if(title === 'Tech')
    tech.current.scrollIntoView({ behavior: 'smooth' })
    else if(title === 'Contact')
    contact.current.scrollIntoView({ behavior: 'smooth' })
  };

  return (
    <div>
      <AppBar position="sticky" elevation={0}>
        <Toolbar>
          <img src={YG_logo} alt='YG logo' height='50px'/>
          <Box sx={{flexGrow: 1, justifyContent: 'flex-end', display: { xs: 'flex', md: 'none' }}}>
            <IconButton aria-haspopup="true" onClick={handleOpenNavMenu} color="inherit">
              <MenuIcon fontSize="small"/>
            </IconButton>
            <Menu anchorEl={navMenu} open={Boolean(navMenu)} onClose={handleCloseNavMenu} sx={{ display: { xs: 'block', md: 'none' } }}>
              {sections.map((section) => (
                <MenuItem key={section.title} onClick={(e) => executeScroll(e, section.title)}>
                  <Button color='secondary'>{section.title}</Button>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{flexGrow: 1, justifyContent: 'flex-end', display: { xs: 'none', md: 'flex' } }}>
            {sections.map((section) => (
              <Button key={section.title} color='secondary' onClick={(e) => executeScroll(e, section.title)}>
                {section.title} 
              </Button>
            ))}
          </Box>
          <Box sx={{ flexShrink: 0 , display:'flex'}}>
            <IconButton onClick={colorMode.toggleColorMode}>
              {localStorage.getItem("mode") === 'dark' ? <LightModeIcon fontSize="small" color='secondary'/> : <DarkModeIcon  fontSize="small" color='secondary'/>}
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      <Typography variant="h3" sx={{ flexGrow: 1, textAlign: "center", paddingTop:'50px'}} > Hello World! </Typography>
      <Typography variant="h3" sx={{ flexGrow: 1, textAlign: "center"}}>I'm Yoseline Guererro </Typography>
      <Typography variant="subtitle1" sx={{ flexGrow: 1, textAlign: "center"}}>Software Developer</Typography>
      <Box style={{display: 'flex', justifyContent: 'center'}}>
        <Tooltip title="Resume">
          <IconButton href = {Yoseline_Resume} target = "_blank">
            <DescriptionIcon/>
          </IconButton>
        </Tooltip>
      </Box>
      <Grid container justifyContent="center" align="center">
        <Grid item xs={10} ref={aboutMe} sx={{paddingTop: '70px'}}>
          <Typography variant="h5" gutterBottom>
            About Me
          </Typography>
          <Typography variant="h6">
            Born and raised in Texas. I have been interested in CS since high school and have worked on multiple 
            team projects, competitions, and volunteer work related to CS. When I'm not on my computer, I enjoy 
            taking time to learn new recipes and cook food from around the world and try new ingredients.
          </Typography>
        </Grid>
        <Grid item xs={11} ref={education} sx={{paddingTop: '70px'}}>
          <Typography variant="h5" gutterBottom>
            Education
          </Typography>
        </Grid>
        <Education/>
        <Grid item xs={11} ref={projects} sx={{paddingTop: '70px'}}>
          <Typography variant="h5" gutterBottom >
            Released Projects
          </Typography>
        </Grid>
        <Grid item xs={11}>
          <Typography variant="h6">
            Here's some of public project that I have done.
          </Typography>
          <Button target='_blank' color='secondary' variant="outlined" startIcon={<GitHubIcon/>} href="https://github.com/YoselineGuerrero">GitHub</Button>
        </Grid>
        <RepoCards/>
        <Grid item xs={12} ref={tech} sx={{paddingTop: '70px'}}>
          <Typography variant="h5" gutterBottom>
            Tech
          </Typography>
        </Grid>
        <TechCards/>
        <Grid item xs={10} ref={contact}>
          <Typography variant="h5" gutterBottom align='center' sx={{paddingTop: '70px'}}>
            Let's stay in touch!
          </Typography>
        </Grid>
      </Grid>
      <Stack direction="row" divider={<Divider orientation="vertical" flexItem />} justifyContent="space-evenly">
        {socials.map((socials) => (
          <Stack key={socials.url} justifyContent="center" alignContent='center'>
            <IconButton target="_blank" href={socials.url}>
              <socials.icon  sx={{ fontSize: '2em' }}/>
            </IconButton>
            <Typography align='center'>{socials.title}</Typography>
            <Typography align='center'>{socials.description}</Typography>
          </Stack>
        ))}
      </Stack>
      <Footer/>
    </div>
  );
}
