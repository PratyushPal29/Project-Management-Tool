import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";

const Footer = () => {
  return (
    
    <Box
    sx={{
        width: "100%",
        height: "auto",
        backgroundImage: "linear-gradient(teal, #111c34)",
        paddingTop: "1rem",
        paddingBottom: "1rem",
       
      }}
    >
      <Container>
        <Grid container direction="column" alignItems="center">
          <Grid item xs={12}>
            <Typography  style={{color:"white"}} variant="h5">
              React Starter App
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography color="white" variant="subtitle1">
              {`${new Date().getFullYear()} | React | Material UI | React Router`}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
    
  );
};

export default Footer;


