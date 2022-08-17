import * as React from 'react';
import { Box, Container } from '@mui/material';
import Typography from '@mui/material/Typography';
import Banner2 from "./Banner2.png";


function HomeFind () {

  return (

    <Box 
        sx={{
            display: "flex",
            boxSizing: "border-box",
            backgroundImage: `url(${Banner2})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundColor: "#3d3d3d",
            
            height: "400px",
            width: "100%"}}>
            <Container disableGutters={true} maxWidth={false}>
                <Typography variant="h4" component="div"
                    sx={{
                        color: "#ffffff",
                        textAlign: "center",
                        paddingTop: "30px",
                        fontFamily: "Nunito"}}>
                    Find your perfect car
                </Typography>
              
            </Container>
    </Box>
  );
}
export default HomeFind