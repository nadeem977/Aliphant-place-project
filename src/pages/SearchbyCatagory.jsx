import React from "react";
import { Container, Box, Typography, Grid, Button, Input } from "@mui/material";
import Navbarscomponent from "../components/Navbar2/Navbarscomponent";
import { Link } from "react-router-dom";
import { useMediaQuery } from "@mui/material";
import { MdKeyboardArrowRight } from "react-icons/md";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";
import line from "../assets/line.png";
import box from "../assets/box.png";
import loc from "../assets/loc.png";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import boximg from "../assets/box-img.png";
import locan from "../assets/locan.png";
import Rating from '@mui/material/Rating';
import Pagination from '@mui/material/Pagination';


const fontsizehtag = {
  fontSize: "40px",
  fontWeight: "800",
};

const inputsx = {
  Padding: "1rem",
  width: "100%",
  height: " 40px",
  background: "#FFFFFF",
  boxShadow: " 0px 19px 29px rgba(62, 53, 120, 0.14)",
  bordeRadius: "12px",
  outline: "none",
};

const SearchbyCatagory = () => {


    
  const isLargeS40 = useMediaQuery("(max-width:400px)");
  const isLargeS90 = useMediaQuery("(max-width:900px)");

  


  return (
    <>
      <Navbarscomponent />
      <Container maxWidth="xl">
        <Box
          style={{ display: "flex", alignItems: "center", marginTop: "1rem" }}
        >
          <Link
            to="/"
            style={{
              textDecoration: "none",
              cursor: "pointer",
              color: "#6D6D6D",
              fontWeight: "600",
            }}
          >
            Home
          </Link>
          <MdKeyboardArrowRight />
          <Typography variant="p" color="#005494" style={{ fontWeight: "600" }}>
            Camera
          </Typography>
        </Box>
      </Container>

      <Container maxWidth="xl">
        <Box
          style={{
            background: "rgba(0, 84, 148, 0.8)",
            borderRadius: isLargeS40 ? "10px" : "32px",
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
              Rent Cameras in Hong Kong <br /> with Elephant Please
            </Typography>
            <Typography variant="p">
              Rent a Camera from a fellow photographer in Hong Kong. Over 50%{" "}
              <br />
              Cheaper Than Traditional Rental Spend less & Enjoy more
            </Typography>
            <Box
              variant="div"
              style={{
                display: "flex",
                alignItems: "center",
                margin: "1rem auto",
                width: "80%",
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
          </Typography>
        </Box>
      </Container>

      <Container maxWidth="xl" style={{ margin: "3rem auto" }}>
        <Typography variant="h4" fontWeight={600}>
          Browse Cameras
        </Typography>
        <Box
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "20px",
          }}
        >
          <Typography variant="p" color={"#969696"}>
            Displaying 18 Results
          </Typography>
          <Box
            style={{
              display: "flex",
              gap: "20px",
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            <Box sx={{ minWidth: 150 }}>
              <FormControl fullWidth style={{ border: "none" }}>
                <NativeSelect
                  defaultValue={30}
                  inputProps={{
                    name: "age",
                    id: "uncontrolled-native",
                  }}
                  style={{ border: "none" }}
                >
                  <option value={10}>one</option>
                  <option value={20}>Twenty</option>
                  <option value={30}> Sort by: Default Order</option>
                </NativeSelect>
              </FormControl>
            </Box>
            <img src={line} alt="images" />
            <img src={box} alt="images" />
            <img src={loc} alt="images" />
          </Box>
        </Box>
      </Container>

      <Container maxWidth="xl" style={{ margin: '5rem auto' }}>

    <Box sx={{ margin: "5rem auto" }}>
      <Grid container spacing={2}>
        {[...Array(16)].map((_, index) => (
          <Grid item xs={12} sm={6} md={4} xl={3} key={index}>
            <Card sx={{ maxWidth: 345, padding: "10px", margin:'auto' }}>
              <CardActionArea>
                <CardMedia component="img" height="230" width="200" image={boximg} alt="green iguana" />
                <CardContent>
                  <Typography variant="caption" fontWeight={500}>
                    John Doe
                  </Typography>
                  <Typography gutterBottom variant="h6" fontWeight={600} component="div">
                    SONY PXW-X200 Full Camera
                  </Typography>
                  <Typography
                    variant="caption"
                    color="text.secondary"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                    }}
                    fontWeight={500}
                  >
                    <img src={locan} alt="img" />
                    Ohio St. 16 H. 435 South Gate, California
                  </Typography>
                  <Box
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      fontWeight: 600,
                      fontSize: "17px",
                      marginTop: "1rem",
                    }}
                  >
                    <Typography variant="p">$350</Typography>
                    <Typography variant="p" style={{ display: "flex", alignItems: "center" }}>
                      <Rating name="customized-10" defaultValue={2} max={1} />
                      4.8
                    </Typography>
                  </Box>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
        </Container>;


      <Container maxWidth="xl" style={{margin:'5rem auto'}}>
        <Box style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
        <Pagination count={10} shape="rounded"  sx={{ "& .Mui-selected":{ backgroundColor: "#005494"}}} />

        </Box>
      </Container>
    </>
  );
};

export default SearchbyCatagory;
