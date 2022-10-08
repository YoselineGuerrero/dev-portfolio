import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';

export default function Education() {
  return(
    <>
      <Grid item md={5.5} xs={10} sx={{padding:'15px'}}>
        <Stack direction="row" justifyContent="space-around" alignItems="center">
          <Typography variant="body1">Lone Star College</Typography>
          <Typography variant="body1">2018-2020</Typography>
        </Stack>
        <Typography variant="h6">Associates Degree in Computer Science</Typography>
        <Typography variant='body1'>Magna Cum Laude</Typography>
      </Grid>
      <Divider orientation="vertical" flexItem  sx={{display: { xs: 'none', md: 'flex' }}}></Divider>
      <Grid item xs={6} sx={{margin:'15px', display: { xs: 'block', md: 'none' }}}>
        <Divider  component="li" sx={{display: 'block'}} />
      </Grid>
      <Grid item md={5.5} xs={10} sx={{padding:'15px'}}>
        <Stack direction="row" justifyContent="space-around" alignItems="center">
          <Typography variant="body1">University of Houston</Typography>
          <Typography variant="body1">2020-2022</Typography>
        </Stack>
        <Typography variant="h6">Bachelor Degree in Computer Science</Typography>
        <Typography variant="body1">Minor in Mathematics</Typography>
        <Typography variant='body1'>Magna Cum Laude, GPA: 3.85</Typography>
      </Grid>
    </>      
  )
}
