import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Chip from '@mui/material/Chip';
import {repos} from '../data';
import { Button, CardActions } from '@mui/material';

export default function RepoCards() {
  return(
    <>
      {repos.map((repo) => (
        <Grid item md={5} xs={11} key={repo.id} sx={{ margin: '10px', display: "flex", flexDirection: "column", justifyContent: "space-between"}} component={Card}>
            <CardMedia component="img" image={repo.img} alt="project image"/>
            <CardContent>
              <Typography gutterBottom variant="h6">
                {repo.name}
              </Typography>
              <Typography variant="body1" color="text.secondary">
                {repo.description}
              </Typography>
              {repo.tech.map((item) => (
                <Chip key={item} label={item} color="secondary" size="small" variant="outlined" sx={{margin:'3px'}}/>
              ))}
            </CardContent>
            <CardActions>
              <Button size="small" color="secondary" variant="outlined" href={repo.code_site} target="_blank">
                Code
              </Button>
              <Button size="small" color="secondary" variant="outlined" href={repo.live_site} target="_blank">
                Live Site
              </Button>
            </CardActions>
        </Grid>
      ))}
    </>
  )
}