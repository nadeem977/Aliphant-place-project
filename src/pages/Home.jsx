import React from "react";
import { Box, Container, Button, Input, Typography } from "@mui/material";
import Card from "../components/Slider/Card";
import absltimg from "../assets/apslut.png";
import ship from "../assets/1.png";
import data from "../assets/2.png";
import plnt from "../assets/3.png";
import homeimg from "../assets/home.png";
import homeimg2 from "../assets/home-2.png";
import camra from "../assets/camra.png";
import phot1 from "../assets/sec-4-1.png";
import phot2 from "../assets/sec-4-2.png";
import phot3 from "../assets/sec-4-3.png";
import phot4 from "../assets/sec-4-4.png";
import phot5 from "../assets/sec-4-5.png";
import phot6 from "../assets/sec-4-6.png";
import fun from "../assets/fun.png";
import { useMediaQuery } from "@mui/material";
import img from "../assets/camra-2.png";
import Grid from "@mui/material/Grid";
import Navbar from "../components/Navbar/Navbar";
import { Link } from "react-router-dom";
const inputsx = {
  Padding: "1rem",
  width: "70%",
  height: " 40px",
  background: "#FFFFFF",
  boxShadow: " 0px 19px 29px rgba(62, 53, 120, 0.14)",
  bordeRadius: "12px",
  outline: "none",
};

const imgab = {
  position: "absolute",
  top: "0",
  right: "0px",
  width: "40%",
};

const ptag = {
  color: "#969696",
};
const pfont = {
  fontSize: "15px",
  color: "#969696",
};
const responsiv = {
  display: "none",
};
const resposivecard = {
  marginTop: "6rem",
};
const resposivetitle = {
  margin: "5rem auto",
  width: "100%",
};
const photimg = {
  width: "100%",
};
const fontsize = {
  fontSize: "2.75rem",
  fontWeight: "600px",
};
const width = {
  width: "100%",
};
const hfont = {
  fontSize: "18px",
  margin: "1rem auto",
  fontWeight: "600",
};
const inputdiv = {
  width: "100%",
};
const bordRadus = {
  borderRadius: "10px",
  background: "#ECF7FF",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-btween",
  padding: "1rem",
  position: "relative",
};
const Home = () => {


  const isLargeS12 = useMediaQuery("(max-width:1400px)");
  const isLargeS10 = useMediaQuery("(max-width:1250px)");
  const isLargeS99 = useMediaQuery("(max-width:900px)");
  const isLargeS6 = useMediaQuery("(max-width:600px)");



  return (
    <>
      <Navbar />
      <Container
        maxWidth="xl"
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <Box
          style={
            isLargeS10 === false
              ? { marginTop: "8rem", width: "50%" }
              : resposivetitle
          }
        >
          <Box variant="div">
            <Typography
              variant="h4"
              style={
                isLargeS12 === false
                  ? { fontWeight: "700", margin: "2rem 0px", fontSize: "67px" }
                  : fontsize
              }
            >
              Rent{" "}
              <Typography variant="span" style={{ color: "#005494" }}>
                cameras
              </Typography>{" "}
              from <br />
              <Typography variant="span" style={{ color: "#005494" }}>
                people
              </Typography>{" "}
              in your <br /> Community
            </Typography>
            <Typography variant="p" style={{ color: "#4A525A" }}>
              Enjoy the item without the burden to own <br />
              and at a fraction of the price.
            </Typography>
          </Box>
          <Box
            variant="div"
            style={{ display: "flex", alignItems: "center", marginTop: "1rem" }}
          >
            <Input
              type="search"
              placeholder="Search Here"
              variant="input"
              style={inputsx}
              sx={{ padding: "22px" }}
            />
            <Button
              variant="contained"
              style={{
                fontWeight: "600",
                textTransform: "capitalize",
                padding: "10px 30px",
              }}
            >
              {" "}
              Search
            </Button>
          </Box>
          <Box
            variant="div"
            style={{
              marginTop: "1rem",
              width: "300px",
              textAlign: "center",
              color: "#005494",
            }}
          >
            or{" "}
            <Button variant="outlined" style={{ textTransform: "capitalize" }}>
              {" "}
              <Link to='/ListNewitem' style={{textDecoration:'none',color: "#005494"}}> List an item</Link>
            
            </Button>
          </Box>
        </Box>
        <Box
          variant="div"
          style={isLargeS99 === false ? { width: "50%" } : responsiv}
        >
          <img src={absltimg} alt="" style={imgab} />
        </Box>
      </Container>

      <Box
        variant="div"
        style={
          isLargeS99 === true
            ? {
                width: "100%",
                display: "flex",
                justifyContent: "flex-end",
                marginTop: "3rem",
              }
            : responsiv}>
        <img
          src={img}
          alt="img"
          style={isLargeS6 === false ? { width: "60%" } : width}
        />
      </Box>
      <br />
      <Container
        maxWidth="xl"
        style={isLargeS12 === false ? { marginTop: "20rem" } : resposivecard}
      >
        <Box
          variant="div"
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "20px",
            maxWidth: "1200px",
            margin: "auto",
          }}
        >
          <Box variant="div" style={{ textAlign: "center", margin: "auto" }}>
            <img src={ship} alt="" />
            <Typography variant="h6" color="initial">
              Community based
            </Typography>
            <Typography variant="p" sx={ptag}>
              Take part in the community. <br />
              Grow together.
            </Typography>
          </Box>
          <Box variant="div" style={{ textAlign: "center", margin: "auto" }}>
            <img src={data} alt="" />
            <Typography variant="h6" color="initial">
              Community based
            </Typography>
            <Typography variant="p" sx={ptag}>
              Take part in the community. <br />
              Grow together.
            </Typography>
          </Box>
          <Box variant="div" style={{ textAlign: "center", margin: "auto" }}>
            <img src={plnt} alt="" />
            <Typography variant="h6" color="initial">
              Community based
            </Typography>
            <Typography variant="p" sx={ptag}>
              Take part in the community. <br />
              Grow together.
            </Typography>
          </Box>
        </Box>
      </Container>

      <Container maxWidth="xl" style={{ marginTop: "7rem" }}>
        <Grid container spacing={2}>
          <Grid
            item
            xs={12}
            sm={6}
            variant="div"
            style={{ display: "flex", alignItems: "center" }}
          >
            <Typography variant="span">
              <Typography
                variant="h4"
                sx={{ marginBottom: "1rem", fontWeight: "600" }}
              >
                Rent to save and be green
              </Typography>
              <Typography variant="p" sx={ptag}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit.
              </Typography>{" "}
              <br />
              <Button  variant="contained" style={{ margin: "1rem auto" }}>
               <Link to='/Rent' style={{textDecoration:'none',color:'white'}}> How Renting Works</Link>
              </Button>
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} variant="div">
            <img src={homeimg} alt="image" style={{ width: "100%" }} />
          </Grid>
        </Grid>
      </Container>

      <Container maxWidth="xl" style={{ margin: "3rem auto" }}>
        <Box sx={{ flexGrow: 1 }}>
          <Grid
            container
            spacing={2}
            sx={{ flexDirection: { xs: "column", sm: "row-reverse" } }}
          >
            <Grid
              item
              xs={12}
              sm={6}
              sx={{ display: "flex", alignItems: "center" }}
            >
              <Typography variant="span">
                <Typography
                  variant="h4"
                  sx={{ marginBottom: "1rem", fontWeight: "600" }}
                >
                  Lend to start earning
                </Typography>
                <Typography variant="p" sx={ptag}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum
                  dolor sit amet, consectetur adipiscing elit.
                </Typography>{" "}
                <br />
                <Button variant="contained" style={{ margin: "1rem auto" }}>
                  <Link to='/ListNewitem' style={{textDecoration:'none',color:'white'}}>List and earn</Link>
                  
                </Button>
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <img src={homeimg2} alt="image" style={{ width: "100%" }} />
            </Grid>
          </Grid>
        </Box>
      </Container>

      <Container maxWidth="xl" style={{ margin: "4rem auto" }}>
        <Box
          variant="div"
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "10px",
            width: "100%",
          }}
        >
          <Box variant="div" style={{ display: "flex", alignItems: "center" }}>
            <Typography variant="span">
              <Typography
                variant="h4"
                sx={{ marginBottom: "1rem", fontWeight: "600" }}
              >
                Explore Item Categories
              </Typography>
              <Typography variant="p" sx={ptag}>
                Hover and select to view items available to be rented. From Film
                & Photography <br />
                to Drones to Clothes & Shoes. If you can think of it, you can
                find it.
              </Typography>
            </Typography>
          </Box>
          <Box variant="div" style={{ placeSelf: "flex-end" }}>
          <Link to='/SearchbyCatagory'>
          <Button variant="outlined">View all</Button>
          </Link>
          </Box>
        </Box>
      </Container>
      <Container maxWidth="xl" style={{ margin: "4rem auto" }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={5}>
            <img src={camra} alt="" style={{ width: "100%" }} />
          </Grid>
          <Grid
            item
            xs={12}
            md={7}
            style={{ display: "flex", alignItems: "center" }}
          >
            <Grid container spacing={2}>
              <Grid item xs={6} md={4}>
                <img src={phot1} alt="" style={photimg} />
              </Grid>
              <Grid item xs={6} md={4}>
                <img src={phot2} alt="" style={photimg} />
              </Grid>
              <Grid item xs={6} md={4}>
                <img src={phot3} alt="" style={photimg} />
              </Grid>
              <Grid item xs={6} md={4}>
                <img src={phot4} alt="" style={photimg} />
              </Grid>
              <Grid item xs={6} md={4}>
                <img src={phot5} alt="" style={photimg} />
              </Grid>
              <Grid item xs={6} md={4}>
                <img src={phot6} alt="" style={photimg} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>

      <Container maxWidth="xl">
        <Box
          variant="div"
          style={
            isLargeS6 === false
              ? {
                  background: "#ECF7FF",
                  borderRadius: "44px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-btween",
                  padding: "1rem",
                  position: "relative",
                }
              : bordRadus
          }
        >
          <Grid container spacing={2}>
            <Grid
              item
              xs={12}
              md={6}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography variant="span">
                <Typography
                  variant="h4"
                  sx={
                    isLargeS6 === false
                      ? { margin: "1rem auto", fontWeight: "600" }
                      : hfont
                  }
                >
                  Access on the go
                </Typography>
                <Typography
                  variant="p"
                  style={isLargeS6 === false ? ptag : pfont}
                >
                  Elephant Please is a responsive website, open it <br />
                  on any browser and use it on your devices. Rent <br />
                  more, save more. Lend more, earn more.
                </Typography>
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box variant="div">
                <img src={fun} alt="" style={{ width: "100%" }} />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>

      <Box
        variant="div"
        style={{
          background: "#ECF7FF",
          margin: "8rem auto",
          padding: "2rem 10px",
        }}
      >
        <Box variant="div" style={{ textAlign: "center" }}>
          <Typography
            variant="h4"
            style={{
              textTransform: "uppercase",
              fontSize: "40px",
              fontWeight: "600",
            }}
          >
            rental reviews
          </Typography>
          <Typography variant="p" style={ptag}>
            To an English person, it will seem like simplified English <br />,
            as a skeptical Cambridge friend of mine told me what Occidental is.
          </Typography>
        </Box>
        <Box style={{ marginTop: "5rem" }}>
          <Card />
        </Box>
      </Box>

      <Container maxWidth="xl">
        <Box
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography variant="h4" style={{ fontWeight: "600",textAlign:'center' }}>
            Sign Up For Our Newsletter
          </Typography>
          <Typography
            variant="p"
            color="#969696"
            style={{textAlign:'center',marginBottom:'1rem' }}>
            Sign up to receive information about our special offers and news.
            You can unsubscribe at any <br />
            time. For more details about how we use your information, view our{" "}
            <Typography variant="span" color="#005494">
              Privacy Policy.
            </Typography>
          </Typography>
          <Box
            style={
              isLargeS6 === false
                ? { margin: "2rem auto", width: "40%" }
                : inputdiv
            }
          >
           <Box style={{display:'flex',alignItems:'center',boxShadow:'0px 19px 29px rgba(62, 53, 120, 0.14)',width:'100%'}}> 
           <Input type="search" placeholder="email" style={{padding:'0px 10px',width:'100%'}}/>
           <Button variant="contained">
           Submit
           </Button>
           </Box>
            <Typography variant="p" color="#969696">
              We’ll never share your emaill with anyone else.
            </Typography>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default Home;
