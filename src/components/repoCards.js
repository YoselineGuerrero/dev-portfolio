import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Chip from '@mui/material/Chip';
import ListItem from '@mui/material/ListItem';
import Stack from '@mui/material/Stack';
import { repos, clientWork } from '../data';
import { Button, CardActions } from '@mui/material';

export default function RepoCards() {
  return(
    <>
      {repos.map((repo) => (
        <Grid item md={5} xs={11} key={repo.id} sx={{ margin: '10px', display: "flex", flexDirection: "column", justifyContent: "space-between"}} component={Card}>
          <CardMedia component="img" image={repo.img} alt="project image"/>
          <CardContent>
            <Typography gutterBottom variant="h6" color='text.tertiary'>
              {repo.name}
            </Typography>
            {repo.info.map((points) => (
              <ListItem key={points}>
                <Typography variant="body1" color="text.secondary">- {points}</Typography>
              </ListItem>
            ))}
            {repo.tech.map((item) => (
              <Chip key={item} label={item} color="secondary" size="small" variant="outlined" sx={{margin:'3px'}}/>
            ))}
          </CardContent>
          <CardActions>
            <Button size="small" variant="outlined" href={repo.code_site} target="_blank">
              Code
            </Button>
            <Button size="small" variant="outlined" href={repo.live_site} target="_blank">
              Live Site
            </Button>
          </CardActions>
        </Grid>
      ))}
      <Grid item xs={10}>
        <Typography variant="h6" gutterBottom sx={{paddingTop:'1em'}}>
          Client Work
        </Typography>
        <Typography variant="body1" gutterBottom sx={{paddingBottom:'1em'}}>
          While at the University of Houston I took 2 different conculting clinct classes. While allows us studnets
          to work with people in the community that needed assiatnce for their websites. This could have been 
          updating or creating a new site from scartch. Below below are the projects I work on.
        </Typography>
      </Grid>
      {clientWork.map((work) => (
        <Grid component={Card} item xs={11} md={5} sx={{ margin: '10px', display: "flex", flexDirection: "column", justifyContent: "space-between"}} key={work.id}>
          <CardContent>
            <Stack direction="row" justifyContent="space-between" alignItems="center">
              <Typography color='text.tertiary'>{work.title}</Typography>
              <Typography color='text.tertiary'>{work.date}</Typography>
            </Stack>
            <Stack direction="row" justifyContent="center">
              {work.tech.map((item) => (
                <Chip key={item} label={item} color="secondary" size="small" variant="outlined" sx={{margin:'3px'}}/>
              ))}
            </Stack>
            {work.info.map((points) => (
              <ListItem key={points}>
                <Typography variant="body1" color="text.secondary">- {points}</Typography>
              </ListItem>
            ))}
          </CardContent>
        </Grid>
      ))}
    </>
  )
}