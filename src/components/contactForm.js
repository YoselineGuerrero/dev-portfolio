import React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField  from '@mui/material/TextField';
import Grid from '@mui/material/Grid';

export default function ContactForm() {
  return(
    <Box component="form" sx={{ width: '95%' }}>
      <Grid item xs={12}  md={6}>
        <TextField fullWidth helperText="Please enter your name" label="Name" disabled focused color="secondary"/>
      </Grid>
      <Grid item xs={12} md={6}>
        <TextField fullWidth helperText="Please enter your email" focused  color="secondary" label="Email" disabled />
      </Grid>
      <Grid item xs={11} md={6}>
        <TextField fullWidth label="Form" multiline rows={8} color="secondary" focused disabled />
      </Grid>
      <Grid item xs={12} >
        <Button type="submit" variant="outlined" disabled sx={{ marginTop:'15px'}} >
          Submit
        </Button>
      </Grid>
    </Box>
  )
}