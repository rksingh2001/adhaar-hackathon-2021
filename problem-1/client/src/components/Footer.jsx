import React from "react";
import { Typography, Container, Box } from "@mui/material";

const Footer = () => {
  return (
    <div className="footer" style={{ marginTop: "100px" }}>
      <Box py={{ lg: 4, xs: 2, sm: 3 }}
        sx={{
          bgcolor: "primary.main"
        }} xs={12} sm={4} style={{ display: "flex", justifyContent: "center" }}>
        <Typography align="center" color="white">
          Team: Ones and Zeroes
        </Typography>
      </Box>
    </div>
  )
}

export default Footer;