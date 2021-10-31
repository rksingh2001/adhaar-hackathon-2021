import React from "react";
import { Typography, Container, Box } from "@mui/material";

const Footer = () => {
    return(
        <div className="footer" style={{marginTop: "100px"}}>
            <Box 
                py={{lg: 4, xs: 2, sm: 3}}
                style={{backgroundImage: "linear-gradient(to right, #f12711, #f5af19)"}}
            >
                <Container maxwifth="lg">
                    <Box container spacing= {5}>
                        <Box item xs={12} sm={4} style={{display: "flex", justifyContent: "center"}}>
                           <Typography align="center" style={{fontWeight: "bold", fontSize: "20px", textShadow: "2px 2px 4px #000", color:"#fff" }}>
                                Ones and Zeroes
                           </Typography>
                        </Box>
                    </Box>
                </Container>
            </Box>
        </div>
    )
}

export default Footer;