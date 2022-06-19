import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import {techs} from '../data';

export default function TechCards() {
  return(
    <>
      {techs.map((tech) => (
        <Grid item md={3} xs={11} sx={{margin:'10px', padding:'10px'}} key={tech.title}>
          <Typography variant="h6" display="block" gutterBottom>
            <b>{tech.title}</b>
          </Typography>
          {tech.items.map((item) =>(
            <Typography gutterBottom key={item}> 
              {item}
            </Typography>
          ))}
        </Grid>
      ))}
    </>
  )
}