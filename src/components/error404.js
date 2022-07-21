import React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

export default function ErrorPage() {
  return(
    <div>
      <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height:'100vh'}}>
      <Typography >Oops! Seems like that page doesn't exist...</Typography>
      <Button href='/' color='secondary' variant='contained'>Click me to go to the main page</Button>
      </Box>
    </div>      
  )
}