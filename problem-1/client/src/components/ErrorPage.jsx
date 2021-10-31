import React from 'react';
import { Typography, Container, Link, Box, Card, CardMedia} from "@mui/material";

function ErrorPage() {
  return (
      <Box style={{display: "flex", justifyContent: "center"}}>
          <Card style={{width: '60%', marginTop: "20vh" }}>
            <CardMedia
              backgroundSize="contain"
              component="img"              
              image="https://www.impactbnd.com/hubfs/404-error-page-examples-best.jpg"
            />
            <Container style={{backgroundImage: "linear-gradient(to right, #8A2387, #e94057, #F27121)", padding:"25px"}}>
                <Typography align="center" variant="h5"style={{fontWeight: "bold"}}>
                  404 Not Found
                </Typography>
                <Link to="/">
                  <Typography align="center" variant="h5" style={{fontWeight: "bold", textShadow: "2px 2px 3px #000", color:"white"}}>
                    Home
                  </Typography>
                </Link>
            </Container>
          </Card>
      </Box>
  )
}

export default ErrorPage;