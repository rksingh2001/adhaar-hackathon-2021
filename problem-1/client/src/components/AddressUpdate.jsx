import React from 'react';
import { Button, Box, TextField, Container} from "@mui/material";
 
function AddressPage() {
  return (
      
      <Box align="center" style={{width: "90%", marginLeft: "15px", display: "flex", justifyContent: "center"}}> 
      <form style={{marginTop: "10px", width: "85%", padding: "10px"}}>
        <Container style={{display: "flex", flexDirection: "row"}}>
            <h2 style={{marginRight: "73px"}}>Name:</h2>
            <TextField
            style={{ width: "200px", margin: "5px" }}
            type="text"
            label="Name"
            variant="outlined"
            />
        </Container>


        <Container style={{display: "flex", flexDirection: "row"}}>
            <h2 style={{marginRight: "70px"}}>House:</h2>
            <TextField
            style={{ width: "200px", margin: "5px" }}
            type="text"
            label="House"
            variant="outlined"
            />
        </Container>


        <Container style={{display: "flex", flexDirection: "row"}}>
            <h2 style={{marginRight: "73px"}}>Street:</h2>
            <TextField
            style={{ width: "200px", margin: "5px" }}
            type="text"
            label="Street"
            variant="outlined"
            />
        </Container>
        

        <Container style={{display: "flex", flexDirection: "row"}}>
            <h2 style={{marginRight: "24px"}}>Landmark:</h2>
            <TextField
            style={{ width: "200px", margin: "5px" }}
            type="text"
            label="Landmark"
            variant="outlined"
            />
        </Container>
       

        <Container style={{display: "flex", flexDirection: "row"}}>
            <h2 style={{marginRight: "50px"}}>Locality:</h2>
            <TextField
            style={{ width: "200px", margin: "5px" }}
            type="text"
            label="Locality"
            variant="outlined"
            />
        </Container>

     
        <Container style={{display: "flex", flexDirection: "row"}}>
            <h2 style={{marginRight: "55px"}}>District:</h2>
            <TextField
            style={{ width: "200px", margin: "5px" }}
            type="text"
            label="District"
            variant="outlined"
            />
        </Container>


        <Container style={{display: "flex", flexDirection: "row"}}>
            <h2 style={{marginRight: "81px"}}>State:</h2>
            <TextField
            style={{ width: "200px", margin: "5px" }}
            type="text"
            label="State"
            variant="outlined"
            />
        </Container>

     
        <Container style={{display: "flex", flexDirection: "row"}}>
            <h2 style={{marginRight: "46px"}}>Country:</h2>
            <TextField
            style={{ width: "200px", margin: "5px" }}
            type="text"
            label="Country"
            variant="outlined"
          />
        </Container>

        <br />

        <Button style={{padding: "15px 140px", marginLeft: "30px", fontSize: "20px"}} variant="contained" color="primary">
          save
        </Button>
      </form>
      </Box>
  )
}

export default AddressPage;


/**
            <label for="co"></label>C/O<input type="text" id="co" name="co"/>  
            <label for="house">house</label><input type="text" id="house" name="house"/>  
            <label for="street">street</label><input type="text" id="street" name="street"/>  
            <label for="lm">Landmark</label><input type="text" id="lm" name="lm"/>  
            <label for="loc">Locality</label><input type="text" id="loc" name="loc"/>  
            <label for="vtc">vtc</label><input type="text" id="vtc" name="vtc"/>  
            <label for="subdist">subdist</label><input type="text" id="subdist" name="subdist"/>  
            <label for="dist">dist</label><input type="text" id="dist" name="dist"/>  
            <label for="state">state</label><input type="text" id="state" name="state"/>  
            <label for="country">country</label><input type="text" id="country" name="country"/>  
            <label for="pc">pc</label><input type="text" id="pc" name="pc"/>  
            <label for="po">po</label><input type="text" id="po" name="po"/>  
            
*/