import React from 'react';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
import {socials} from '../data';

export default function Footer() {
  return(
    <div>
      <AppBar position="static" sx={{ top: 'auto', bottom: 0, marginTop:'20px'}}>
        <Grid container justifyContent="center">
          {socials.map((socials) => (
            <Grid item key={socials.title}>
              <Tooltip title={socials.title} >
                <IconButton target="_blank" href={socials.url} >
                  <socials.icon  />
                </IconButton>
              </Tooltip>
            </Grid>
          ))}
        </Grid>
        <Typography variant="body2" color="text.secondary" sx={{paddingBottom:'10px'}} align="center">
          Copyright © Yoseline Guerrero 2022
        </Typography>
      </AppBar>
    </div>      
  )
}