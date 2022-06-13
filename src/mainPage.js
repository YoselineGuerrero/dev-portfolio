import React, {useState, useRef} from 'react';
import IconButton from '@mui/material/IconButton';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import psyduck_white_flag from './psyduck_white_flag.jpg'
import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Footer from './components/footer';
import SocialCard from './components/socialsCard';
import RepoCards from './components/repoCards';
import {sections} from './data';

export default function MainPage() {
  const [navMenu, setnavMenu] = useState(null);
  const education = useRef(null);
  const competitions = useRef(null);
  const projects = useRef(null);
  const tech = useRef(null);

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
      <Toolbar sx={{ position: "sticky", top: '0vh'}} >
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
            <Button key={section.title} variant="text" onClick={(e) => executeScroll(e, section.title)}>
              {section.title} 
            </Button>
          ))}
        </Box>
      </Toolbar>
      <SocialCard/>
      <div style={{ marginTop:'-150px', marginRight:'50px', marginLeft:'50px', marginBottom:'20px'}}>
        <img src={psyduck_white_flag} alt='psyduck with white flag'/>
        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={11} ref={education}>
            <Typography variant="h6" align="center" display="block">
              Education
            </Typography>
          </Grid>
          <Grid item md={5} xs={11}>
            <Typography variant="overline" align="center" display="block" >
              Lone Star College (2018-2020)<br></br>
              associates degree in computer science
            </Typography>
          </Grid>
          <Grid item md={5} xs={11}>
            <Typography variant="overline" align="center" display="block" >
              University of Houston (2020-2022)<br></br>
              bachelor degree in computer science
            </Typography>
          </Grid>
          <Grid item xs={11} ref={competitions}>
            <Typography variant="h6" align="center" display="block" >
              Competitions
            </Typography>
          </Grid> 
          <Grid item xs={11}>
            <Typography variant="overline" align="center" display="block" >
              I have done competititon back in high school and during my last year of university. Here's a preview of some
              of the competitions I have been in. {' '}
              <Link target="_blank" href="https://devpost.com/YoselineGuerrero?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav">Devpost, click me!</Link>
            </Typography>
          </Grid>
          <Grid item xs={11} ref={projects}>
            <Typography variant="h6" align="center" display="block" >
              Currect released projects
            </Typography>
          </Grid>
          <Grid item xs={11}>
            <Typography variant="overline" align="center" display="block" >
              Here's all the public solo project that I have done {' '}
            <Link target="_blank" href="https://github.com/YoselineGuerrero?tab=repositories">GitHub</Link>
            </Typography>
          </Grid>
          <RepoCards/>
          <Grid item xs={12} ref={tech}>
            <Typography variant="h6" align="center" display="block">
              Tech
            </Typography>
          </Grid>
          <Grid item md={3} xs={11}>
            <Card elevation={2}>
              <Typography variant="overline" align="center" display="block" gutterBottom>
              <b>frontend</b><br></br>
                -Html, javascript, css<br></br>
                -React (MUI/material UI, Sematic)<br></br> 
              </Typography>
            </Card>
          </Grid>
          <Grid item md={3} xs={11}>
            <Card elevation={2}>
              <Typography variant="overline" align="center" display="block" gutterBottom>
              <b>Full-stack/ Backend</b><br></br>
                -Django
                <br></br>
                -Node
              </Typography>
            </Card>
          </Grid>
          <Grid item md={3} xs={11}>
            <Card elevation={2}>
              <Typography variant="overline" align="center" display="block" gutterBottom>
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
