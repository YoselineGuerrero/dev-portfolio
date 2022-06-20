import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

export default function Education() {
  return(
    <>
      <Grid item md={5} xs={11}>
        <Typography variant="h6">
          2018-2020<br></br>
          Lone Star College<br></br>
          Associates Degree in Computer Science
        </Typography>
      </Grid>
      <Grid item md={5} xs={11}>
        <Typography variant="h6">
          2020-2022<br></br>
          University of Houston<br></br>
          Bachelor Degree in Computer Science<br></br>
          Minor in Mathematics 
        </Typography>
      </Grid>
    </>      
  )
}