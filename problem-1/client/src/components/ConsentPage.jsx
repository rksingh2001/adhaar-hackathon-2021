import React from 'react';
import { Button, Box, Grid, Typography} from "@mui/material";
 
function ConsentPage() {
  return (
      <Box align="center" style={{width: "90%", marginLeft: "15px", display: "flex", justifyContent: "center"}}> 
        <Grid align="center" style={{flexDirection: "column", marginTop: "30vh", justifyContent: "center"}}>
            <Typography align="center" variant="h5" style={{fontWeight: "bold"}}>
                Do you give permission to <br/>
                use your number
            </Typography>
            <Box style={{marginTop: "30px", display: "flex", flexDirection: "row"}}>
                <Button variant="contained" color="success" style={{padding: "15px 35px", fontSize: "20px", marginLeft: "25px"}}>
                    Yes
                </Button>
                <Button variant="contained" color="error" style={{padding: "15px 38px", fontSize: "20px", marginLeft: "25px"}}>
                    No
                </Button>
            </Box>
        </Grid>
      </Box>
  )
}

export default ConsentPage;