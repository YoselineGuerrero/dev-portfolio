import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import {techs} from '../data';

export default function TechCards() {
  return(
    <>
      {techs.map((tech) => (
        <Grid item md={4} xs={11} sx={{ padding: '10px'}} >
          <Card elevation={2} sx={{padding:'10px'}}>
            <Typography variant="h6" display="block" gutterBottom>
              <b>{tech.title}</b>
            </Typography>
            {tech.items.map((item) =>(
              <Typography gutterBottom> 
                {item}
              </Typography>
            ))}
          </Card>
        </Grid>
      ))}
    </>
  )
}