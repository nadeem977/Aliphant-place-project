import React, { useState } from "react";
import { Box, Container, Button, Typography } from "@mui/material";
import OutlinedInput from "@mui/material/OutlinedInput";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import { useMediaQuery } from "@mui/material";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";
import mainlogo from "../../assets/main.logo.png";
import coins from "../../assets/coins.png";

const maindiv = {
  display: "flex",
  flexDirection: "column",
  width: "100%",
  gap: "20px",
};

const Profiledetails = (props) => {
  const isLargeS10 = useMediaQuery("(max-width:1200px)");
  const isLargeS50 = useMediaQuery("(max-width:750px)");
  const isLargeS40 = useMediaQuery("(max-width:450px)");

  const [file, setFile] = useState(null);
  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  return (
    <>
      {/* <Container maxWidth="xl">
        <Box
          style={{
            display: "flex",
            alignItems: "center",
            marginTop: "1rem",
            flexWrap: "wrap",
          }}
        >
          <Link
            to="/"
            style={{
              textDecoration: "none",
              cursor: "pointer",
              color: "#6D6D6D",
              fontWeight: "500",
            }}
          >
            Home
          </Link>
          <MdKeyboardArrowRight />
          <Link
            style={{
              textDecoration: "none",
              cursor: "pointer",
              color: "#6D6D6D",
              fontWeight: "500",
            }}
          >
            Camera{" "}
          </Link>{" "}
          <MdKeyboardArrowRight />
          <Typography variant="p" color="#6D6D6D" style={{ fontWeight: "500" }}>
            SONY PXW-X200 Full Camera Kit
          </Typography>
          <MdKeyboardArrowRight />
         <Link to='/Checkout' style={{textDecoration:'none'}}>
         <Typography variant="p" color="#005494" style={{ fontWeight: "500" }}>
            Checkout
          </Typography>
         </Link>
        </Box>
      </Container> */}

      <Container maxWidth="xl" >
        <Box style={{display:'flex',justifyContent:'space-between',marginTop:'3rem',flexWrap:'wrap'}}>
          <Typography
            variant="h6"
            style={{ marginBottom: "1rem", fontWeight: "600" }}
          >
            Profile Details
          </Typography>
          <Box
           style={{display:props.dpl ? 'flex':'none',gap:'20px',flexWrap:'wrap',alignItems:'center'}}
           >
          <Link to='/Passwordreset'>
          <Button variant="contained">
            Reset Password
            </Button>
          </Link>

         <Link to='/Profile'>
         <Button variant="contained" style={{padding:'7px 40px'}}>
            Save
            </Button>
         </Link>
         
          </Box>
          <Box style={{display:props.dpl ? 'none':'flex',alignItems:'center',justifyContent:'space-between',width:'74%',flexWrap:'wrap',gap:'20px'}}>
           <Link to='/Inbox'>
           <Button variant="contained" style={{padding:'7px 40px'}}>Inbox</Button>
           </Link>
            <Link to='/ProfileEdifing'>
            <Button variant="contained">Edit Profile</Button>
            </Link>

          </Box>
        </Box>
      </Container>

      <Container maxWidth="xl" style={{ margin: "3rem auto" }}>
        <Box
          style={
            isLargeS10 === false
              ? { display: "flex", gap: "20px", width: "100%" }
              : maindiv
          }
        >
          <Box
            style={{
              width: isLargeS10 === false ? "22%" : "auto",
              padding: "20px",
            }}
          >
            <Box style={{ textAlign: "center", margin: "2rem auto" }}>
              <img src={mainlogo} alt="images" width={70} />
              <Typography variant="h6" fontWeight={600} color="initial">
                John Doe
              </Typography>
              <Typography variant="caption" color="#969696">
                johndoe@gmail.com
              </Typography>
            </Box>
            <Typography variant="p" color="#969696">
              Your statistics
            </Typography>
            <Box
              style={{
                boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.04)",
                border: "1px solid #EAEAEA",
                borderRadius: "8px",
                padding: "10px",
              }}
            >
              <Typography variant="h5" fontWeight={600}>
                $0.00
              </Typography>
              <Box
                style={{
                  display: "flex",
                  gap: "10px",
                  justifyContent: "space-between",
                }}
              >
                <Typography variant="p" color="#969696">
                  Lifetime earnings
                </Typography>
                <img src={coins} alt="images" width={60} />
              </Box>
            </Box>
            <Box
              style={{
                display: "flex",
                gap: "10px",
                margin: "2rem auto",
                flexWrap: "wrap",
                justifyContent: "space-between",
              }}
            >
              <Box
                style={{
                  border: "1px solid #EAEAEA",
                  boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.04)",
                  borderRadius: "8px",
                  width:isLargeS40?'100%': "105px",
                  padding: "5px 10px",
                }}
              >
                <Typography variant="h6" color="initial">
                  0
                </Typography>
                <Typography variant="caption" color="initial">
                  Rentals
                </Typography>
              </Box>
              <Box
                style={{
                  border: "1px solid #EAEAEA",
                  boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.04)",
                  borderRadius: "8px",
                  width:isLargeS40?'100%': "105px",
                  padding: "5px 10px",
                }}
              >
                <Typography variant="h6" color="initial">
                  0
                </Typography>
                <Typography variant="caption" color="#969696">
                  Days with Us
                </Typography>
              </Box>
              <Box
                style={{
                  border: "1px solid #EAEAEA",
                  boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.04)",
                  borderRadius: "8px",
                  width:isLargeS40?'100%': "105px",
                  padding: "5px 10px",
                }}
              >
                <Typography variant="h6" color="initial">
                  0
                </Typography>
                <Typography variant="caption" color="#969696">
                  Lends
                </Typography>
              </Box>
              <Box
                style={{
                  border: "1px solid #EAEAEA",
                  boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.04)",
                  borderRadius: "8px",
                  width:isLargeS40?'100%': "105px",
                  padding: "5px 10px",
                }}
              >
                <Typography variant="h6" color="initial">
                  0
                </Typography>
                <Typography variant="caption" color="#969696">
                  Unread Messages
                </Typography>
              </Box>
            </Box>
          </Box>

          <Box
            style={{
              width: isLargeS10 === false ? "73%" : "100%",
              boxShadow: " 0px 4px 24px rgba(0, 0, 0, 0.04)",
              border: "1px solid #EAEAEA",
              borderRadius: "8px",
              padding: "10px",
            }}
          >
            <Box
              style={{
                width: "100%",
                display: "flex",
                flexDirection: isLargeS50 === false ? "row" : "column",
                gap: "10px",
                justifyContent: "space-between",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  width: isLargeS50 === false ? "48%" : "100%",
                }}
              >
                <FormControl sx={{ m: 1, width: "100%" }} variant="outlined">
                  <Typography variant="subtitle1">First Name</Typography>
                  <OutlinedInput
                    id="outlined-adornment-weight"
                    aria-describedby="outlined-weight-helper-text"
                    type="text"
                    placeholder="John"
                  />
                </FormControl>

                <FormControl sx={{ m: 1, width: "100%" }} variant="outlined">
                  <Typography variant="subtitle1">Email Address</Typography>
                  <OutlinedInput
                    id="outlined-adornment-weight"
                    aria-describedby="outlined-weight-helper-text"
                    type="email"
                    placeholder="johndoe@gmail.com"
                  />
                </FormControl>

                <Box style={{ width: "100%" }}>
                  <FormControl sx={{ m: 1, width: "100%" }} variant="outlined">
                    <Typography variant="h6">Location</Typography>
                    <OutlinedInput
                      type="text"
                      id="outlined-adornment-weight"
                      aria-describedby="outlined-weight-helper-text"
                      placeholder="Hong Kong
                      Kowloon
                      Yau Tsim Mong
                      Prince Edward"
                      style={{ width: "97%" }}
                    />
                  </FormControl>
                </Box>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  width: isLargeS50 === false ? "48%" : "100%",
                  height: "fit-content",
                }}
              >
                <FormControl sx={{ m: 1, width: "100%" }} variant="outlined">
                  <Typography variant="subtitle1">Last Name</Typography>
                  <OutlinedInput
                    id="outlined-adornment-weight"
                    type="text"
                    aria-describedby="outlined-weight-helper-text"
                    placeholder="Doe"
                  />
                </FormControl>

                <FormControl sx={{ m: 1, width: "100%" }} variant="outlined">
                  <Typography variant="subtitle1">Phone Number</Typography>
                  <OutlinedInput
                    id="outlined-adornment-weight"
                    aria-describedby="outlined-weight-helper-text"
                    placeholder="(852) 1234 5678"
                    type="number"
                  />
                </FormControl>
              </Box>
            </Box>

            <Box style={{ margin: "2rem auto" }}>
              <Typography variant="h6">Describe yourself</Typography>
              <TextField
                id="outlined-multiline-static"
                label="Example"
                multiline
                rows={4}
                style={{ width: "100%" }}
              />
            </Box>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default Profiledetails;
