import React from "react";
import Navbar from "../components/Navbar/Navbar";
import { Container, Box, Typography,Button } from "@mui/material";
import Grid from "@mui/material/Grid";
import img1 from "../assets/rant-1.png";
import img2 from "../assets/rant-2.png";
import img3 from "../assets/img-3.png";
import img4 from "../assets/img-4.png";
import { useMediaQuery } from "@mui/material";
import { Link } from "react-router-dom";
import { MdKeyboardArrowRight} from 'react-icons/md'
import Navbarscomponent from '../components/Navbar2/Navbarscomponent'
const fontsizep = {
  fontSize: "17px",
};
const fontsizehtag = {
  fontSize: "40px",
  fontWeight: "800",
};

const Lending = () => {
  const isLargeS12 = useMediaQuery("(max-width:1200px)");
  const isLargeS90 = useMediaQuery("(max-width:900px)");
  const isLargeS40 = useMediaQuery("(max-width:400px)");

  return (
    <>
    <Navbarscomponent/>
      <Container maxWidth="xl">
        <Box style={{display:'flex',alignItems:'center',marginTop:'1rem'}}>
          <Link to='/' style={{textDecoration:'none',cursor:'pointer',color:"#6D6D6D",fontWeight:'600'}}>Home</Link>
          <MdKeyboardArrowRight/>
          <Typography variant="p" color="#005494" style={{fontWeight:'600'}}>
          How Lending Works
          </Typography>
        </Box>
      </Container>
      <Container maxWidth="xl">
        <Box
          style={{
            background: "rgba(0, 84, 148, 0.8)",
            borderRadius: isLargeS40 ? '10px' : '32px',
            display: "flex",
            alignAitems: "center",
            justifyContent: "center",
            textAlign: "center",
            padding: "5rem 1rem",
            margin: "2rem auto",
            color: "white",
          }}
        >
          <Typography variant="span">
            <Typography
              variant="h4"
              style={
                isLargeS90 === false
                  ? { fontSize: "60px", fontWeight: "800" }
                  : fontsizehtag
              }
            >
             Lend to start earning
            </Typography>
            <Typography variant="p">
              Rent a Camera from a fellow photographer in Hong Kong. Over 50%{" "}
              <br />
              Cheaper Than Traditional Rental Spend less & Enjoy more
            </Typography>
          </Typography>
        </Box>
      </Container>

      <Container maxWidth="xl" style={{ marginTop: "2rem" }}>
        <Grid container spacing={3}>
          <Grid
            item
            xs={12}
            md={6}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box>
              <Typography
                variant="h4"
                style={{ fontSize: "42px", fontWeight: "600" }}
              >
              Before lending
              </Typography>
              <Typography
                variant="body1"
                color="#969696"
                style={isLargeS12 === false ? { fontSize: "22px" } : fontsizep}
              >
                <Typography variant="span" color="#005494">
                  Find an item:
                </Typography>
                Search for the desired item and filter by <br />
                category and location.
                <br />
                <Typography variant="span" color="#005494">
                  Request and wait:
                </Typography>
                Send a request to the lender and <br /> wait for the lender to
                confirm your request. <br />
                <Typography variant="span" color="#005494">
                  Arrange handover:
                </Typography>
                Use the chat function to arrange a <br /> convenient time.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box>
              <img src={img1} alt="img" style={{ width: "100%" }} />
            </Box>
          </Grid>
        </Grid>
      </Container>

      <Container maxWidth="xl" style={{ marginTop: "2rem" }}>
        <Grid container spacing={3}
          sx={{ flexDirection: { xs: "column", sm: "row-reverse" } }}>
          <Grid
            item
            xs={12}
            md={6}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}>
            <Box>
              <Typography
                variant="h4"
                style={{ fontSize: "42px", fontWeight: "600" }}>
              When lending
              </Typography>
              <Typography
                variant="body1"
                color="#969696"
                style={isLargeS12 === false ? { fontSize: "22px" } : fontsizep}>
                <Typography variant="span" color="#005494">
                  Enjoy your rental:
                </Typography>
                Make the most of your time with <br />
                the item. Have fun!
                <br />
                <Typography variant="span" color="#005494">
                  Take good care:
                </Typography>
                Use and treat the item as you would if
                <br /> it was your own. <br />
                <Typography variant="span" color="#005494">
                  Return on time:
                </Typography>
                To avoid surcharges and penalties, <br />
                return the item on time. Message the lender and
                <br />
                request if you would like the item for a few more days.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box>
              <img src={img2} alt="img" style={{ width: "100%" }} />
            </Box>
          </Grid>
        </Grid>
      </Container>

      <Container maxWidth="xl" style={{ marginTop: "2rem" }}>
        <Grid container spacing={3}>
          <Grid
            item
            xs={12}
            md={6}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box>
              <Typography
                variant="h4"
                style={{ fontSize: "42px", fontWeight: "600" }}
              >
              After lending
              </Typography>
              <Typography
                variant="body1"
                color="#969696"
                style={isLargeS12 === false ? { fontSize: "22px" } : fontsizep}
              >
                <Typography variant="span" color="#005494">
                  Rate the lender:
                </Typography>
                Take this opportunity and review the
                <br />
                lender for other members of the community.
                <br />
                <Typography variant="span" color="#005494">
                  Repeat:
                </Typography>
                Search and rent again!
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box>
              <img src={img3} alt="img" style={{ width: "100%" }} />
            </Box>
          </Grid>
        </Grid>
      </Container>

      <Container maxWidth="xl" style={{ marginTop: "2rem",marginBottom:'5rem' }}>
        <Grid container spacing={3}
         sx={{ flexDirection: { xs: "column", sm: "row-reverse" } }}>
          <Grid
            item
            xs={12}
            md={6}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box>
              <Typography
                variant="h4"
                style={{ fontSize: "42px", fontWeight: "600" }}
              >
              Play your part
              </Typography>
              <Typography
                variant="body1"
                color="#969696"
                style={isLargeS12 === false ? { fontSize: "22px" } : fontsizep}
              >
                Renting on Elephant Please isn’t just convenient and <br />
                cost-saving. By purchasing less and renting more, <br />
                you’re also contributing to a circular economy, making
                <br />
                better use of resources and helping to protect this
                <br />
                wonderful planet we call home.
              </Typography>
             <Box style={{display:'flex',justifyContent:'flex-end',marginTop:'2rem'}}>
             <Button variant="contained">
              Search and rent
              </Button>
             </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box>
              <img src={img4} alt="img" style={{ width: "100%" }} />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Lending;
