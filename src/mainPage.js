import React, {useState, useRef, useContext} from 'react';
import IconButton from '@mui/material/IconButton';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import YG_dark from './images/YG_dark.png'
import YG_light from './images/YG_light.png'
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
  };

  return (
    <div>
      <AppBar position="sticky">
        <Toolbar>
          {localStorage.getItem("mode") === 'dark' ? <img src={YG_light} alt='YG logo' height='50px'/>: <img src={YG_dark} alt='YG logo' height='50px'/>}
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
        <Typography variant="h3"  sx={{margin:'50px'}}> Hello World! </Typography>
        <Typography variant="h3" sx={{marginLeft:'100px'}}>I'm Yoseline Guererro </Typography>
        
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
              Currect released projects
            </Typography>
          </Grid>
          <Grid item xs={11}>
            <Typography variant="h6">
              I have done competititon back in high school and during my last year of university. Clicking the devpost 
              button will redirect you to the competition website.
            </Typography>
            <Typography variant="h6">
              Here's all the public solo project that I have done.
            </Typography>
            <Button target='_blank' color='secondary' variant="outlined" startIcon={<RocketLaunchIcon/>} href="https://devpost.com/YoselineGuerrero">Devpost</Button>
            <Button target='_blank' color='secondary' variant="outlined" startIcon={<GitHubIcon/>} href="https://github.com/YoselineGuerrero?tab=repositories"> GitHub</Button>
          </Grid>
          <RepoCards/>
          <Grid item xs={12} ref={tech} sx={{paddingTop: '70px'}}>
            <Typography variant="h5" gutterBottom>
              Tech
            </Typography>
          </Grid>
          <TechCards/>
        </Grid>
      </div>
      <Footer/>
    </div>
  );
}
