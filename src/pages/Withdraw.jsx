import React from "react";
import { Box, Container, Button, Input, Typography } from "@mui/material";
import Navbarscomponent from "../components/Navbar2/Navbarscomponent";
import drowimg from '../assets/drow.png'
const Withdraw = () => {
  return (
    <>
      <Navbarscomponent />
      <Container maxWidth="xl">
        <Box
          style={{ display: "flex", alignItems: "center", marginTop: "1rem" }}>
          <Typography variant="h6" style={{ fontWeight: "600" }}>
            Withdraw
          </Typography>
        </Box>
      </Container>
      <Container maxWidth="xl" style={{display:"flex",alignItems:"center",justifyContent:"center",height:"80vh"}}>

        <Box style={{display:"flex",flexDirection:"column",alignItems:"center",textAlign:"center",maxWidth:'450px',width:"100%",gap:"20px"}}>
            <img src={drowimg} alt="" />
          <Typography variant="h6" fontWeight={600}>No Withdrawal yet</Typography>
          <Typography variant="p" color='#969696'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore labore et dolore
            labore et dolore magna aliqua.
          </Typography>
          <Button variant="contained">Withdraw</Button>
        </Box>
      </Container>
    </>
  );
};

export default Withdraw;
