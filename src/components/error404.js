import React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Footer from './footer';

export default function ErrorPage() {
  return(
    <div style={{display: 'flex', height: '100vh', flexDirection: 'column'}}>
      <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', flex: '1 0 auto'}}>
        <Typography >Oops! Seems like that page doesn't exist...</Typography>
        <Button href='/' color='secondary' variant='contained'>Click me to go to the main page</Button>
      </Box>
      <Footer style={{flexShrink: '0'}}/>
    </div>      
  )
}