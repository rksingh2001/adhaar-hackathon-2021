import React, { useState } from 'react';
import { Button, Grid, Box, TextField, Typography } from '@mui/material';
import Captcha from './Captcha';

const LandingPage = () => {
  const [adhaar, setAdhaar] = useState("");
  const [captcha, setCaptcha] = useState("");

  return (
    <Box>
      <Box height="10vh" />
      <Grid container justifyContent="center">
        <Grid item xs={10} md={8}>
          <Typography variant="h5" color="secondary" fullWidth>
            Enter the following Details : 
          </Typography>
        </Grid>
      </Grid>
      <Box height="5vh" />
      <Grid container justifyContent="center">
        <Grid item xs={10} md={8}>
          <TextField value={adhaar} onChange={e => setAdhaar(e.target.value)} color="secondary" label="Adhaar Number" fullWidth />
        </Grid>
      </Grid>
      <Box height="5vh" fullWidth />
      <Grid container justifyContent="center">
        <Grid item xs={10} sm={6}>
          <TextField value={captcha} onChange={e => setCaptcha(e.target.value)} color="secondary" label="Enter Captcha" fullWidth />
        </Grid>
        <Grid item xs={9} sm={2}>
          <Captcha />
        </Grid>
      </Grid>
      <Box height="5vh" fullWidth />
      <Grid container justifyContent="center">
        <Grid item sm={7}>
          <Button variant="contained" color="secondary" size="large">Submit</Button>
        </Grid>
      </Grid>
    </Box>
  )
}

export default LandingPage;
