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
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import { ColorModeContext } from './App.js';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import TechCards from './components/techCards';

export default function MainPage() {
  const [navMenu, setnavMenu] = useState(null);
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
      <AppBar position="sticky">
        <Toolbar>
          <img src={YG_logo} alt='YG logo' height='50px'/>
          <Box sx={{flexGrow: 1, justifyContent: 'flex-end', display: { xs: 'flex', md: 'none' }}}>
            <IconButton aria-haspopup="true" onClick={handleOpenNavMenu} color="inherit">
              <MenuIcon fontSize="small"/>
            </IconButton>
            <Menu anchorEl={navMenu} open={Boolean(navMenu)} onClose={handleCloseNavMenu} sx={{ display: { xs: 'block', md: 'none' } }}>
              {sections.map((section) => (
                <MenuItem key={section.title} onClick={(e) => executeScroll(e, section.title)}>
                  <Button>{section.title}</Button>
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
      <div style={{ marginBottom:'20px'}}>
        <Typography variant="h3" sx={{ flexGrow: 1, textAlign: "center", paddingTop:'50px'}} > Hello World! </Typography>
        <Typography variant="h3" sx={{ flexGrow: 1, textAlign: "center"}}>I'm Yoseline Guererro </Typography>
        <Typography variant="subtitle1" sx={{ flexGrow: 1, textAlign: "center"}}>Software Developer</Typography>
        <Grid container justifyContent="center" align="center">
          <Grid item xs={11} ref={education} sx={{paddingTop: '70px'}}>
            <Typography variant="h5" gutterBottom>
              Education
            </Typography>
          </Grid>
          <Grid item md={5} xs={11}>
            <Typography variant="h6">
              Lone Star College (2018-2020)<br></br>
              associates degree in computer science
            </Typography>
          </Grid>
          <Grid item md={5} xs={11}>
            <Typography variant="h6">
              University of Houston (2020-2022)<br></br>
              bachelor degree in computer science
            </Typography>
          </Grid>
          <Grid item xs={11} ref={projects} sx={{paddingTop: '70px'}}>
            <Typography variant="h5" gutterBottom >
              Released Projects
            </Typography>
          </Grid>
          <Grid item xs={11}>
            <Typography variant="h6">
              Here's all the public project that I have done.
            </Typography>
            <Typography variant="h6">
              Devpost will redirect you to see the competitions I have been in.
            </Typography>
          </Grid>
          <Grid item xs={12} >
            <Box display="flex" justifyContent="space-evenly">
              <Button target='_blank' color='secondary' variant="outlined" startIcon={<RocketLaunchIcon/>} href="https://devpost.com/YoselineGuerrero">Devpost</Button>
              <Button target='_blank' color='secondary' variant="outlined" startIcon={<GitHubIcon/>} href="https://github.com/YoselineGuerrero">GitHub</Button>
            </Box>
          </Grid>
          <RepoCards/>
          <Grid item xs={12} ref={tech} sx={{paddingTop: '70px'}}>
            <Typography variant="h5" gutterBottom>
              Tech
            </Typography>
          </Grid>
          <TechCards/>
          <Grid item xs={12} ref={contact}>
            <Typography variant="h5" gutterBottom align='center' sx={{paddingTop: '70px'}}>
              Let's stay in touch!
            </Typography>
            <Typography  variant="outline" gutterBottom align='center'>
              Currently working on it so come back soon!
            </Typography>
          </Grid>
        </Grid>
      </div>
      <Footer/>
    </div>
  );
}
