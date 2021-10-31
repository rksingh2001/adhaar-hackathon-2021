import React from "react";
import { AppBar, Toolbar, Box, useTheme, useMediaQuery } from "@mui/material";

import logo from "../assets/adhaar.png";

const Header = () => {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <>
      <AppBar position="absolute" color="inherit" gutterBottom>
        <Toolbar variant="regular" sx={{ height: "15vh" }}>
          <Box>
            <img src={logo} alt="Logo" height={isSmall ? "40px" : "60px"} />
          </Box>
          <Box sx={{ flexGrow: 0.8 }}></Box>
        </Toolbar>
      </AppBar>
      <Box height="15vh"></Box>
    </>
  )
}

export default Header;