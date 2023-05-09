import React from "react";
import Container from "@mui/material/Container";
import logo from "../../assets/logo.png";
import Typography from '@mui/material/Typography'
import { Box } from "@mui/material";
import { TfiFacebook } from "react-icons/tfi";
import { FaTwitter, FaYoutube } from "react-icons/fa";
import { AiFillLinkedin, AiFillInstagram } from "react-icons/ai";
import { useMediaQuery } from "@mui/material";
import { Link } from "react-router-dom";

const footdiv ={
  width:"100%",
}
const fotordiv ={
  width:'fit-content',
  margin:'0px'
}
const padin ={
  background: "#ECF7FF",
  padding:'0px'
}

const icons ={
  color:'#72737C',
  fontSize:'20px',
  cursor:'pointer',
}

const Footer = () => {

  const responsivesmal4 = useMediaQuery("(min-width:600px)");

  return (
    <Box style={responsivesmal4===true?{ background: "#ECF7FF", paddingBottom: "2rem" }:padin}>
      <Container maxWidth="xl">
        <Box
          variant="div"
          style={{
            display: "flex",
            justifyContent:'space-between',
            flexWrap: "wrap",
            gap: "20px",
            paddingTop:'4rem'
          }}
        >
          <Box variant="div" style={responsivesmal4===true?{ width: "300px" }:footdiv}>
            <Box variant="div">
              <img src={logo} alt="images" />
            </Box>
            <br />
            <Typography
              variant="p"
              color="initial"
              style={{ fontSize: "16px" }}
            >
              Elephant Please was established in 2021 to alleviate and bring
              awareness to excessive purchasing, over spending and its effect on
              climate change. Elephant Please is a member of Revision AI
              Limited.
            </Typography>
            <Box variant="div" style={{ display: "flex", gap: "20px",marginTop:'1rem' }}>
              <TfiFacebook style={icons} />
              <FaTwitter style={icons} />
              <FaYoutube style={icons} />
              <AiFillLinkedin style={icons} />
              <AiFillInstagram style={icons} />
            </Box>
          </Box>

          <Box variant="div" style={responsivesmal4===true?{ width: "200px", margin: "auto" }:fotordiv}>
            <Box>
              <Typography variant="h6" color='#005494' style={{fontWeight:'600'}}>Elephant Please</Typography>
            </Box><br />
            <Typography variant="p" style={{lineHeight:'40px'}}>
            <Link to='/Rent' style={{textDecoration:'none',color:'black'}}>How renting works</Link>
            </Typography> <br />
             <Typography variant="p" style={{lineHeight:'40px'}}>
            <Link to='/Lend' style={{textDecoration:'none',color:'black'}}>How lending works</Link>
            </Typography><br />
            <Typography variant="p" style={{lineHeight:'40px'}}>
            <Link to='/FAQs' style={{textDecoration:'none',color:'black'}}>FAQs</Link>
            </Typography>
          </Box>

          <Box variant="div" style={responsivesmal4===true?{ width: "200px", margin: "auto" }:fotordiv}>
          <Box variant='div' style={{marginTop:'3rem'}}>
          <Typography variant="p" style={{lineHeight:'40px'}}>
            
            <Link to='/Termsofuse' style={{textDecoration:'none',color:'black'}}>Terms of use</Link>

            </Typography><br />
          <Typography variant="p" style={{lineHeight:'40px'}}>

            <Link to='/PrivacyPolicy' style={{textDecoration:'none',color:'black'}}>Privacy policy</Link>
          </Typography>
          </Box>
          </Box>
        </Box>

      </Container>
      <Box style={{background:'rgba(0, 84, 148, 0.06)',padding:'1rem',marginTop:'2rem',textAlign:'center'}}>
        <Typography variant="p" color="initial">© Elephant Please 2021</Typography>
      </Box>
    </Box>

  );
};

export default Footer;
