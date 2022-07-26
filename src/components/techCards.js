import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import {techs} from '../data';
import Box from '@mui/material/Box';
import Tooltip from '@mui/material/Tooltip';

export default function TechCards() {
  return(
    <>
      {techs.map((tech) => (
        <Grid item md={3} xs={11} sx={{margin:'10px', padding:'10px'}} key={tech.title}>
          <Typography variant="h6" display="block" gutterBottom>
            <b>{tech.title}</b>
          </Typography>
          {tech.icons.map((icon) =>(
            <Box sx={{margin:'10px', display:'inline-flex'}} key={icon.id}>
              <Tooltip title={icon.img_title}>
                <img src={icon.img} alt={icon.img_title}/>
              </Tooltip>
            </Box>
          ))}
        </Grid>
      ))}
    </>
  )
}