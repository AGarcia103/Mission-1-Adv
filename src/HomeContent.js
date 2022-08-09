import React from 'react';
import { Box, Container } from '@mui/material';
import Typography from '@mui/material/Typography';
import Cars from "./Cars.jpg";


function HomeContent () {

  return (

    <Box 
      sx={{
      boxSizing: "border-box",
      backgroundImage: `url(${Cars})`,
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      height: "535px",
      width: "100%"
      }}>
  
    <Typography gutterBottom variant="h4" component="div" 
      sx={{
      fontFamily: "Poppins", 
      color: "#FFFFFF",
      paddingTop: "100px",
      textAlign: "center",
      marginBottom: "0px"
      }}>
     
        The sweetest used  <span 
          style={{color: "#0076be"}}>
             car deals
          </span>
          <br/>
        you can imagine
    </Typography>
      <br/>
      <br/>
      <Typography gutterBottom variant="h4" component="div" 
      sx={{
      fontFamily: "Poppins", 
      color: "#0076be",
      paddingTop: "350px",
      textAlign: "center",
      marginBottom: "0px"
      }}>
     
        Find your perfect car
    </Typography>
  {/* ------- FIRST CARD CONTAINER ------- */}

    <Container disableGutters={true} maxWidth={false}
        sx={{
          display: "flex",
          paddingTop: "50px",
          textAlign: "center",
          justifyContent: "center"
          }}>
        <div class="container">
            <img id="1"
                src="/images/Car1.jpg" 
                alt="Honda CRV" 
                height="250px" 
                width="350px"
                />
                
            <img id="2"
                src="/images/Car2.jpg" 
                alt="Toyota Fortuner" 
                height="250px" 
                width="350px"
                />

            <img id="3"
                src="/images/Car3.jpg" 
                alt="Mitsubishi Outlander" 
                height="250px" 
                width="350px"
                />
            
        </div>       
    </Container>

  {/* ------- SECOND CARD CONTAINER ------- */}

  <Container disableGutters={true} maxWidth={false}
        sx={{
          display: "flex",
          paddingTop: "50px",
          textAlign: "center",
          justifyContent: "center"
          }}>
        <div class="container">
            <img id="1"
                src="/images/Car4.jpg" 
                alt="Mitsubishi Mirage" 
                height="250px" 
                width="350px"
                />
                
            <img id="2"
                src="/images/Car5.jpg" 
                alt="Mitsubishi ASX" 
                height="250px" 
                width="350px"
                />

            <img id="3"
                src="/images/Car6.jpg" 
                alt="Mitsubishi Triton" 
                height="250px" 
                width="350px"
                />
            
        </div>       
    </Container>


  {/* ---------- FOOTER ---------- */}

    <Container disableGutters={true} maxWidth={false}
        sx={{ 
          height: "50px",
          marginTop: "50px",
          textAlign: "center",
          color: "#0076be"}}>
      <Typography>
      Copyright 2022 &copy; Turners Cars
      </Typography>
    </Container>  
  </Box>
    );
}
export default HomeContent;