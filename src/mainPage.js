import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import psyduck_white_flag from './psyduck_white_flag.jpg'
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Button, CardActions } from '@mui/material';
import githubHomepage from './images/github-example.jpg';
import MUIHomepage from './images/MUI_template.jpg';

const socials = [
  {id:'1', icon:GitHubIcon, title: 'Github', color: 'black', url: 'https://github.com/YoselineGuerrero' },
  {id:'2', icon:LinkedInIcon, title: 'LinkedIn', color: 'blue',  url: 'https://www.linkedin.com/in/yoseline-guerrero-a78526175/' },
  {id:'3', icon:EmailIcon, title: 'Email', color: 'red', url: '#' },
];

const repos = [
  {id:'1', name:'MUI Template', description: 'A template created using react and mui (material UI)', code_site: 'https://github.com/YoselineGuerrero/mui_template', live_site: 'https://main.db6zihjdbzz7y.amplifyapp.com/', img:MUIHomepage},
  {id:'2', name:'GitHub API search', description: 'Search for any user and get information on who they are.', code_site: 'https://github.com/YoselineGuerrero/react-api-pratice', live_site: 'https://yoselineguerrero.github.io/react-api-pratice/', img:githubHomepage },
];


export default function MainPage() {
  return (
    <div>
      <Card elevation={3} sx={{ display: 'inline-block', position: "sticky", top: '40vh', left:'100vw'}} >
        <Grid rowSpacing={1} >
          {socials.map((socials) => (
            <Grid key={socials.id}>
              <Tooltip title={socials.title}>
                <IconButton sx={{ "&:hover": { color: socials.color } }} target="_blank" href={socials.url} >
                  <socials.icon fontSize="large" />
                </IconButton>
              </Tooltip>
            </Grid>
          ))}
        </Grid>
      </Card>

      <div style={{ marginTop:'-150px', marginRight:'50px', marginLeft:'50px', marginBottom:'20px'}}>
        <img src={psyduck_white_flag} alt='psyduck with white flag'/>
        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={11}>
            <Typography variant="h6" align="center" display="block">
              Education
            </Typography>
          </Grid>
          <Grid item xs={11}>
            <Typography variant="overline" align="center" display="block" >
              <Grid container justifyContent="center">
                <Grid item md={6} xs={11}>
                  Lone Star College (2018-2020)<br></br>
                  associates degree in computer science 
                </Grid>
                <Grid item md={6} xs={11}>
                  University of Houston (2020-2022)<br></br>
                  bachelor degree in computer science
                </Grid>
              </Grid>
            </Typography>
          </Grid>
          <Grid item xs={11}>
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
          <Grid item xs={11}>
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

          {repos.map((repo) => (
            <Grid item md={5} sx={12}>
              <Card elevation={3}>
                <CardMedia component="img" image={repo.img} alt="green iguana"/>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {repo.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {repo.description}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary" href={repo.code_site} target="_blank">
                    Code
                  </Button>
                  <Button size="small" color="primary" href={repo.live_site} target="_blank">
                    Live Site
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}

          <Grid item xs={12}>
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
    </div>
  );
}