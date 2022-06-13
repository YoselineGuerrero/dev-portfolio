import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import {repos} from '../data';
import { Button, CardActions } from '@mui/material';

export default function RepoCards() {
  return(
    <>
      {repos.map((repo) => (
        <Grid item md={5} xs={12} key={repo.id}>
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
    </>
  )
}