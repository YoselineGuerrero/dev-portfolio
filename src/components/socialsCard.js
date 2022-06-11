import React from 'react';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import {socials} from '../data';

export default function SocialCard() {
  return(
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
  )
}