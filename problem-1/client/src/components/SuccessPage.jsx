import React from 'react';
import { Typography, Container, Box, Card, CardMedia} from "@mui/material";
 
function ConsentPage() {
  return (
      <Box style={{display: "flex", justifyContent: "center"}}>
          <Card style={{width: '', marginTop: "5vh", boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"}}>
            <CardMedia
              backgroundSize="contain"
              component="img"              
              image="https://icon-library.com/images/success-icon-png/success-icon-png-22.jpg"
            style={{height:"400px", marginBottom:"35px"}}
            />
            <Container style={{backgroundImage: "linear-gradient(to right, #24fe41, #a8ff78, #24fe41)", padding:"25px"}}>
                <Typography align="center" variant="h5"style={{fontWeight: "bold", textShadow: "2px 2px 4px #000", color:"white"}}>
                  Form Successfully Submitted 🎉
                </Typography>
            </Container>
          </Card>
      </Box>
  )
}

export default ConsentPage;