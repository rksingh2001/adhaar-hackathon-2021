import React, { useState } from 'react';
import axios from 'axios';
import { Button, Grid, Box, TextField, Typography } from '@mui/material';

import Header from './Header';
import Footer from './Footer';
import Captcha from './Captcha';

var ds = {
  uid: "",
  pno: "",
  captcha: "",
  captchaTxnId: "",
  otpTxnId: "",
};

const uuidv4 = () => {
  return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) =>
    (
      c ^
      (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
    ).toString(16)
  );
};

const LandingPage = () => {
  const [adhaar, setAdhaar] = useState("");
  const [captcha, setCaptcha] = useState("");
  const [clientPhoneNo, setClientPhoneNo] = useState("");

  const handleSubmit = () => {
    console.log("sd")
    const generateOTP = async () => {
      ds.uid = adhaar;
      ds.pno = clientPhoneNo;
      ds.captcha = captcha;
      console.log(adhaar);
      console.log(clientPhoneNo);
      console.log(captcha);
    
      await axios
        .post(
          "https://stage1.uidai.gov.in/unifiedAppAuthService/api/v2/generate/aadhaar/otp",

          {
            uidNumber: ds.uid,
            captchaTxnId: ds.captchaTxnId,
            captchaValue: ds.captcha,
            transactionId: "MYAADHAAR:59142477-3f57-465d-8b9a-75b28fe48725",
          },
          {
            "x-request-id": uuidv4(),
            appid: "MYAADHAAR",
            "Accept-Language": "en_in",
            "Content-Type": "application/json ",
          }
        )
        .then(
          (response) => {
            console.log(response);
            ds.otpTxnId = response.data.txnId;
          },
          (error) => {
            console.log(error);
          }
        );
    
      // const otpfield = document.createElement("input");
      // otpfield.setAttribute("id", "otpId");
      // const otpfieldText = document.createElement("p");
    
      // otpfieldText.innerText = "Enter OTP";
      // document.querySelector("#otpWrapper").innerHTML = "";
      // document.querySelector("#otpWrapper").appendChild(otpfieldText);
      // document.querySelector("#otpWrapper").appendChild(otpfield);
    };

    generateOTP();
  }

  return (
    <Box>
      <Header />
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
        <Grid item xs={10} md={8}>
          <TextField value={clientPhoneNo} onChange={e => setClientPhoneNo(e.target.value)} color="secondary" label="Phone Number" fullWidth />
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
          <Button onClick={handleSubmit} variant="contained" color="secondary" size="large">Submit</Button>
        </Grid>
      </Grid>
      <Footer />
    </Box>
  )
}

export default LandingPage;
