import React from "react";
import { Container, Box, Typography, Grid, Button, Input } from "@mui/material";
import Navbarscomponent from "../components/Navbar2/Navbarscomponent";
import img1 from "../assets/-1.png";
import img2 from "../assets/-2.png";
import img3 from "../assets/-3.png";
import img4 from "../assets/4.png";
import img5 from "../assets/5.png";
import img6 from "../assets/6.png";
import img7 from "../assets/7.png";
import img8 from "../assets/8.png";
import img9 from "../assets/9.png";
import img10 from "../assets/10.png";
import img11 from "../assets/11.png";
import img12 from "../assets/12.png";
import img13 from "../assets/13.png";
import img14 from "../assets/14.png";
import img15 from "../assets/15.png";
import { Link } from "react-router-dom";
import { useMediaQuery } from "@mui/material";
import { MdKeyboardArrowRight} from 'react-icons/md'
const inputsx = {
    Padding: "1rem",
    width: "100%",
    height: " 40px",
    background: "#FFFFFF",
    boxShadow: " 0px 19px 29px rgba(62, 53, 120, 0.14)",
    bordeRadius: "12px",
    outline: "none",
  };
  const h4font = {
    fontSize: "55px",
    fontWeight: "600",
  };



const Search = () => {

    const isLargeS10 = useMediaQuery("(max-width:650px)")
    const isLargeS90 = useMediaQuery("(max-width:950px)")
    const isLargeS55 = useMediaQuery("(max-width:500px)")

    const h3font = {
        fontSize:isLargeS55? '30px':"55px",
        fontWeight: "600",
      };
  
    const imgwidth ={
        width:isLargeS10 ? '45%':'250px',
        margin:'auto'
      }

  return (
    <>
      <Navbarscomponent />
      <Container maxWidth="xl">
        <Box style={{display:'flex',alignItems:'center',marginTop:'1rem'}}>
          <Link to='/' style={{textDecoration:'none',cursor:'pointer',color:"#6D6D6D",fontWeight:'600'}}>
            Home
            </Link>
          <MdKeyboardArrowRight/>
          <Typography variant="p" color="#005494" style={{fontWeight:'600'}}>
          Search
          </Typography>
        </Box>
      </Container>
      <Container maxWidth="xl" style={{ margin: "5rem auto" }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={isLargeS90?8:6}>
            <Box
              style={{
                display: "flex",
                alignItems: "center",
                height: "100%",
              }}
            >
              <Typography variant="span">
                <Typography variant="h3" style={h3font}>
                  Rent{" "}
                  <Typography variant="span" color="#005494">
                    cameras
                  </Typography>{" "}
                  <br />
                  from{" "}
                  <Typography variant="span" color="#005494">
                    people
                  </Typography>{" "}
                  in <br /> your Community
                </Typography>
                <Typography variant="p" color="initial">
                  Enjoy the item without the burden to own <br /> and at a
                  fraction of the price.
                </Typography>
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={isLargeS90?4:6}>
            <Box
              style={{
                background: "rgba(0, 84, 148, 0.8)",
                borderRadius:isLargeS55? '10px':"32px",
                height: "350px",
              }}
            ></Box>
          </Grid>
        </Grid>
      </Container>

      <Container maxWidth="xl" style={{ margin: "7rem auto" }}>
        <Box style={{ width:isLargeS90=== true ?'100%':'50%',margin:'auto' }}>
          <Typography variant="h4" style={h4font}>
            Search By Term
          </Typography>
          <Box
            variant="div"
            style={{
              display: "flex",
              alignItems: "center",
              margin: "1rem auto",
              width: "100%",
            }}
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
        </Box>
      </Container>

      <Container maxWidth="xl" style={{margin:'10rem auto'}}>
        <Typography variant="h4" style={h4font}>
          Search By Category
          <Link to='/SearchbyCatagory'>
          <Box style={{ marginTop: "2rem",display:"flex",flexDirection:'column',gap:'20px'}}>
            <Box
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                flexWrap: "wrap",
                gap: "10px",
              }}>
              <img src={img1} alt="images" style={imgwidth}/>
              <img src={img2} alt="images" style={imgwidth} />
              <img src={img3} alt="images" style={imgwidth} />
              <img src={img4} alt="images" style={imgwidth} />
              <img src={img5} alt="images" style={imgwidth} />
            </Box>
  
            <Box
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                flexWrap: "wrap",
                gap: "10px",
              }}>
              <img src={img6} alt="images" style={imgwidth} />
              <img src={img7} alt="images" style={imgwidth} />
              <img src={img8} alt="images" style={imgwidth} />
              <img src={img9} alt="images" style={imgwidth} />
              <img src={img10} alt="images" style={imgwidth} />
            </Box>

            <Box
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                flexWrap: "wrap",
                gap: "10px",
              }}>
              <img src={img11} alt="images" style={imgwidth} />
              <img src={img12} alt="images" style={imgwidth} />
              <img src={img13} alt="images" style={imgwidth} />
              <img src={img14} alt="images" style={imgwidth} />
              <img src={img15} alt="images" style={imgwidth} />
            </Box>

          </Box>
          </Link>
        </Typography>
      </Container>
    </>
  );
};

export default Search;
