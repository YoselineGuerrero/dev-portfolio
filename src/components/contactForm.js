import React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField  from '@mui/material/TextField';
import Grid from '@mui/material/Grid';

export default function ContactForm() {
  return(
    <Box component="form" sx={{ width: '95%' }}>
      <Grid item xs={12}  md={6}>
        <TextField fullWidth helperText="Please enter your name" label="Name" disabled />
      </Grid>
      <Grid item xs={12} md={6}>
        <TextField fullWidth helperText="Please enter your email" label="Email" disabled />
      </Grid>
      <Grid item xs={11} md={6}>
        <TextField fullWidth label="Form" multiline rows={8} variant="filled" disabled />
      </Grid>
      <Grid item xs={12} >
        <Button type="submit" variant="contained" disabled sx={{ marginTop:'15px'}} >
          Submit
        </Button>
      </Grid>
    </Box>
  )
}