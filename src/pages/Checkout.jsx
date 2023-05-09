import React, { useState } from "react";
import { Box, Container, Button, Typography } from "@mui/material";
import OutlinedInput from "@mui/material/OutlinedInput";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import { useMediaQuery } from "@mui/material";
import Navbarscomponent from "../components/Navbar2/Navbarscomponent";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";
import { Checkbox } from "@mui/material";
import { Divider } from '@mui/material';

const maindiv = {
  display: "flex",
  flexDirection: "column",
  width: "100%",
  gap: "20px",
};
const Checkout = () => {
  const isLargeS10 = useMediaQuery("(max-width:1200px)");
  const isLargeS50 = useMediaQuery("(max-width:750px)");
  const isLargeS40 = useMediaQuery("(max-width:450px)");

  const [file, setFile] = useState(null);
  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  return (
    <>
      <Navbarscomponent />
      <Container maxWidth="xl">
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
          <Typography variant="p" color="#005494" style={{ fontWeight: "500" }}>
            Checkout
          </Typography>
        </Box>
      </Container>


      <Container maxWidth="xl" style={{ margin: "3rem auto" }}>
      <Typography variant="h6" fontWeight={600} >Checkout</Typography>
        <Box
          style={
            isLargeS10 === false
              ? { display: "flex", gap: "20px", width: "100%" }
              : maindiv
          }
        >
          <Box
            style={{
              width: isLargeS10 === false ? "75%" : "100%",
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
                  />
                </FormControl>

                <FormControl sx={{ m: 1, width: "100%" }} variant="outlined">
                  <Typography variant="subtitle1">Email Address</Typography>
                  <OutlinedInput
                    id="outlined-adornment-weight"
                    aria-describedby="outlined-weight-helper-text"
                  />
                </FormControl>

                <Box style={{ width: "100%" }}>
                  <FormControl sx={{ m: 1, width: "100%" }} variant="outlined">
                    <Typography variant="h6">Address</Typography>
                    <OutlinedInput
                      type="text"
                      id="outlined-adornment-weight"
                      aria-describedby="outlined-weight-helper-text"
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
                }}
              >
                <FormControl sx={{ m: 1, width: "100%" }} variant="outlined">
                  <Typography variant="subtitle1">Last Name</Typography>
                  <OutlinedInput
                    id="outlined-adornment-weight"
                    type="text"
                    aria-describedby="outlined-weight-helper-text"
                  />
                </FormControl>

                <FormControl sx={{ m: 1, width: "100%" }} variant="outlined">
                  <Typography variant="subtitle1">
                    Mobile Phone Number
                  </Typography>
                  <OutlinedInput
                    id="outlined-adornment-weight"
                    aria-describedby="outlined-weight-helper-text"
                    type="number"
                  />
                </FormControl>
                <FormControl sx={{ m: 1, width: "100%" }} variant="outlined">
                  <Typography variant="subtitle1">Country or Region</Typography>
                  <OutlinedInput
                    type="text"
                    id="outlined-adornment-weight"
                    aria-describedby="outlined-weight-helper-text"
                  />
                </FormControl>
              </Box>
            </Box>

            <Box style={{ margin: "2rem auto" }}>
              <TextField
                id="outlined-multiline-static"
                label="Note to lender"
                multiline
                rows={4}
                style={{ width: "100%" }}
              />
            </Box>

            <Box>
              <Checkbox label="Label" defaultChecked />
              <Typography variant="p" color="initial">
                Add to address book
              </Typography>
            </Box>
          </Box>

          <Box
            style={{
              width: isLargeS10 === false ? "20%" : "auto",
              padding: "20px",
              border: "1px solid #D4D4D4",
              borderRadius: "12px",
              height: "fit-content",
            }}
          >
            <Typography variant="p" color="#005494">
              Low Rider Bikes For Set Props
            </Typography>
            <br />
            <Typography variant="caption" color="#969696">
              Bikes in Hong Kong
            </Typography>

            <Box
              style={{
                display: "flex",
                justifyContent: "space-between",
                margin: "1rem auto",
              }}
            >
              <Typography variant="p" color="initial">
                7 days 23 Nov - 30 Now
              </Typography>
              <Typography variant="p" color="#005494">
                Change
              </Typography>
            </Box>
            <Divider />
            <Box
              style={{
                display: "flex",
                justifyContent: "space-between",
                margin: "1rem auto",
              }}
            >
              <Typography variant="caption" color="#969696">
                $210.00 x 7days
              </Typography>
              <Typography variant="p">$1,952.66</Typography>
            </Box>
            <Box
              style={{
                display: "flex",
                justifyContent: "space-between",
                margin: "1rem auto",
              }}
            >
              <Typography variant="caption" color="#969696">
                Service fee
              </Typography>
              <Typography variant="p">$0</Typography>
            </Box>
            <Box
              style={{
                display: "flex",
                justifyContent: "space-between",
                margin: "1rem auto",
              }}
            >
              <Typography variant="caption" color="#969696">
                Extended rental discount
              </Typography>
              <Typography variant="p">$4.00</Typography>
            </Box>
            <Divider />
            <Box
              style={{
                display: "flex",
                justifyContent: "space-between",
                margin: "1rem auto",
              }}
            >
              <Typography variant="caption" color="#969696">
                Total
              </Typography>
              <Box>
                <Typography variant="p" color="#005494">
                  {" "}
                  $1,956.66
                </Typography>
                <br />
                <Typography variant="caption" color="#969696">
                  Have a promo code?
                </Typography>
              </Box>
            </Box>
            <Button variant="contained" style={{ width: "100%" }}>
              PLACE ORDER
            </Button>
            <Typography variant="caption" color="#969696">
              By pressing "place order" you agree to the Terms of Use and other
              relevant policies.
            </Typography>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default Checkout;
