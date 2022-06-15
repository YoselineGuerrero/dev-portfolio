import React, {useState, useRef, useContext} from 'react';
import IconButton from '@mui/material/IconButton';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import psyduck_white_flag from './images/psyduck_white_flag.jpg'
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
import { useTheme } from '@mui/material/styles';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

export default function MainPage() {
  const [navMenu, setnavMenu] = useState(null);
  const education = useRef(null);
  const competitions = useRef(null);
  const projects = useRef(null);
  const tech = useRef(null);
  const theme = useTheme();
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
    else if(title === 'Competitions')
    competitions.current.scrollIntoView({  behavior: 'smooth' })
    else if(title === 'Projects')
    projects.current.scrollIntoView({   behavior: 'smooth' })
    else if(title === 'Tech')
    tech.current.scrollIntoView({ behavior: 'smooth' })
  };

  return (
    <div>
      <AppBar position="sticky">
        <Toolbar>
          <img src={YG_dark} alt='YG logo' height='50px'/>
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
              <Button key={section.title} color='dark' onClick={(e) => executeScroll(e, section.title)}>
                {section.title} 
              </Button>
            ))}
          </Box>
          <Box sx={{ flexShrink: 0 , display:'flex'}}>
            <IconButton onClick={colorMode.toggleColorMode}>
              {theme.palette.mode === 'dark' ? <LightModeIcon fontSize="small"/> : <DarkModeIcon  fontSize="small"/>}
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      <div style={{ marginBottom:'20px'}}>
        <Typography variant="h3"> Hello World! </Typography>
        <Typography variant="h3" sx={{marginLeft:'100px'}}>I'm Yoseline Guererro </Typography>
        <img style={{display: 'flex', marginLeft:'auto', marginRight:'auto' }} src={psyduck_white_flag} alt='psyduck with white flag'/>
        <Grid container justifyContent="center" align="center">
          <Grid item xs={11} ref={education} sx={{paddingTop: '70px'}}>
            <Typography variant="h6" display="block">
              Education
            </Typography>
          </Grid>
          <Grid item md={5} xs={11}>
            <Typography variant="overline" display="block" >
              Lone Star College (2018-2020)<br></br>
              associates degree in computer science
            </Typography>
          </Grid>
          <Grid item md={5} xs={11}>
            <Typography variant="overline" display="block" >
              University of Houston (2020-2022)<br></br>
              bachelor degree in computer science
            </Typography>
          </Grid>
          <Grid item xs={11} ref={competitions} sx={{paddingTop: '70px'}}>
            <Typography variant="h6" display="block" >
              Competitions
            </Typography>
          </Grid> 
          <Grid item xs={11}>
            <Typography variant="overline" display="block" >
              I have done competititon back in high school and during my last year of university. Here's a preview of some
              of the competitions I have been in.
            </Typography>
            <Button sx={{ marginBottom: '10px'}} target='_blank'  color='dark' variant="outlined" startIcon={<RocketLaunchIcon/>} href="https://devpost.com/YoselineGuerrero?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav">Devpost</Button>
          </Grid>
          <Grid item xs={11} ref={projects} sx={{paddingTop: '70px'}}>
            <Typography variant="h6" display="block" >
              Currect released projects
            </Typography>
          </Grid>
          <Grid item xs={11}>
            <Typography variant="overline" display="block" >
              Here's all the public solo project that I have done
            </Typography>
            <Button target='_blank' color='dark' variant="outlined" startIcon={<GitHubIcon/>} href="https://github.com/YoselineGuerrero?tab=repositories"> GitHub</Button>
          </Grid>
          <RepoCards/>
          <Grid item xs={12} ref={tech} sx={{paddingTop: '70px'}}>
            <Typography variant="h6" display="block">
              Tech
            </Typography>
          </Grid>
          <Grid item md={3} xs={11} sx={{ margin: '10px'}} >
            <Card elevation={2}>
              <Typography variant="overline" display="block" gutterBottom>
              <b>frontend</b><br></br>
                -Html, javascript, css<br></br>
                -React (MUI/material UI, Sematic)<br></br> 
              </Typography>
            </Card>
          </Grid>
          <Grid item md={3} xs={11} sx={{ margin: '10px'}} >
            <Card elevation={2}>
              <Typography variant="overline" display="block" gutterBottom>
              <b>Full-stack/ Backend</b><br></br>
                -Django
                <br></br>
                -Node
              </Typography>
            </Card>
          </Grid>
          <Grid item md={3} xs={11} sx={{ margin: '10px'}} >
            <Card elevation={2}>
              <Typography variant="overline"  display="block" gutterBottom>
                <b>Database</b><br></br>
                -Mysql<br></br>
                -MongoDB
              </Typography>
            </Card>
          </Grid>
        </Grid>
      </div>
      <Footer/>
    </div>
  );
}
