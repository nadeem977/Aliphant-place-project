import React, { useState } from "react";
import Navbarscomponent from "../components/Navbar2/Navbarscomponent";
import { Box, Container, Button, Typography } from "@mui/material";
import OutlinedInput from "@mui/material/OutlinedInput";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import { useMediaQuery } from "@mui/material";
import { Link } from "react-router-dom";


const useStyles = {
  width: "250px",
  height: "50px",
  borderWidth: "2px",
  borderRadius: "5px",
  padding: "10px",
  cursor: "pointer",
 
};

const maindiv ={
    display:'flex',
    flexDirection:'column',
    width:'100%',
    gap:'20px'

}
const ListNewitem = () => {

    const isLargeS10 = useMediaQuery("(max-width:1200px)");
    const isLargeS50 = useMediaQuery("(max-width:750px)");
    const isLargeS40 = useMediaQuery("(max-width:450px)");

  const [file, setFile] = useState(null);
  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  return (
    <>
      <Navbarscomponent  no={true}/>
      <Container maxWidth="xl">
        <Box style={{ borderBottom: "1px solid #CCCCCC", margin: "4rem auto" }}>
          <Typography
            variant="subtitle1"
            style={{
              borderBottom: "2px solid #005494",
              width: "fit-content",
              marginBottom: "-2px",
            }}
          >
            List an item
          </Typography>
        </Box>
      </Container>
      <Container maxWidth="xl" style={{margin:'3rem auto'}}>
        <Box style={isLargeS10 === false ?{ display:"flex", gap: "10x", width: "100%" }:maindiv}>
          <Box
            style={{
              width: isLargeS10 === false? "80%" : '100%',
              border: "1px solid #EAEAEA",
              boxShadow: "0px 4px 24px rgba(0, 0, 0, 0.04)",
              borderRadius: "8px",
              padding: "10px",
            }}
          >
            <Box
              style={{
                width: "100%",
                display: "flex",
                flexDirection: isLargeS50===false?'row':'column',
                gap: "10px",
                justifyContent: "space-between",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  width: isLargeS50===false? "48%":'100%',
                }}
              >
                <FormControl sx={{ m: 1, width: "100%" }} variant="outlined">
                  <Typography variant="subtitle1">Title</Typography>
                  <OutlinedInput
                    id="outlined-adornment-weight"
                    aria-describedby="outlined-weight-helper-text"
                    placeholder="Input Title"
                  />
                </FormControl>

                <Box
                  direction={"column"}
                  style={{ width: "100%", paddingLeft: "10px" }}
                >
                  <Typography variant="h6">Rental price (HKD)</Typography>
                  <Box
                    variant="div"
                    style={{
                      display: "flex",
                      gap: "20px",
                      flexWrap: "wrap",
                      width: "100%",
                    }}
                  >
                    <Box variant="div">
                      <Typography variant="subtitle1">Daily</Typography>
                      <Button variant="outlined">Daily</Button>
                    </Box>
                    <Box variant="div">
                      <Typography variant="subtitle1">Weekly</Typography>
                      <Button variant="outlined">Weekly</Button>
                    </Box>
                    <Box variant="div">
                      <Typography variant="subtitle1">Monthly</Typography>
                      <Button variant="outlined">Monthly</Button>
                    </Box>
                  </Box>
                </Box>

                <Box style={{width:'100%'}}>
                  <FormControl sx={{ m: 1, width: "100%" }} variant="outlined">
                    <Typography variant="h6">
                      Minimum rental period (Days)
                    </Typography>
                    <OutlinedInput
                      type="text"
                      id="outlined-adornment-weight"
                      aria-describedby="outlined-weight-helper-text"
                      placeholder="Input Title"
                      style={{ width: "97%" }}
                    />
                  </FormControl>
                </Box>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  width: isLargeS50===false? "48%":'100%',
                }}
              >
                <FormControl sx={{ m: 1, width: "100%" }} variant="outlined">
                  <Typography variant="subtitle1">Category</Typography>
                  <OutlinedInput
                    id="outlined-adornment-weight"
                    aria-describedby="outlined-weight-helper-text"
                    placeholder="Click to select category"
                  />
                </FormControl>

                <Box style={{ display: "flex",flexDirection:isLargeS40===false?'row':'column', gap: "10px", width: "100%" }}>
                  <FormControl sx={{ m: 1, width: "95%" }} variant="outlined">
                    <Typography variant="subtitle1">
                      Market value (HKD)
                    </Typography>
                    <OutlinedInput
                      id="outlined-adornment-weight"
                      aria-describedby="outlined-weight-helper-text"
                      placeholder="Input Market Value (HKD)"
                    />
                  </FormControl>
                  <FormControl sx={{ m: 1, width: "95%" }} variant="outlined">
                    <Typography variant="subtitle1">Quantity</Typography>
                    <OutlinedInput
                      type="number"
                      id="outlined-adornment-weight"
                      aria-describedby="outlined-weight-helper-text"
                      placeholder="1"
                    />
                  </FormControl>
                </Box>
                <FormControl sx={{ m: 1, width: "100%" }} variant="outlined">
                  <Typography variant="subtitle1">Location</Typography>
                  <OutlinedInput
                    type="text"
                    id="outlined-adornment-weight"
                    aria-describedby="outlined-weight-helper-text"
                    placeholder="Click to select location"
                  />
                </FormControl>
              </Box>
            </Box>

            <Box style={{ margin: "2rem auto" }}>
              <TextField
                id="outlined-multiline-static"
                label="Description"
                multiline
                rows={4}
                placeholder="Input Description"
                style={{ width: "100%" }}
              />
            </Box>
          </Box>

          <Box style={{ 
            
            width: isLargeS10 === false? "20%" : '100%', 
            padding: "10px" }}>
            <Box
              style={{
                border: " 2px dashed #C4C4C4",
                height: "200px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <TextField
                variant="outlined"
                type="file"
                onChange={handleFileChange}
                style={useStyles}
              />
            </Box>
            <Box
              style={{
                display: "flex",
                width: "100%",
                justifyContent: "space-between",
                gap: "10px",
              }}
            >
              {[0, 1, 2].map((item) => (
                <Box
                  key={item}
                  style={{
                    border: "2px dashed #C4C4C4",
                    maxWidth: "60px",
                    maxHeight: "60px",
                    margin: "1rem auto",
                    padding: "10px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "60px",
                    width: "100%",
                  }}
                >
                  {file && typeof file === "object" && (
                    <img
                      src={URL.createObjectURL(file)}
                      alt="Selected file"
                      style={{ width: "100%", borderRadius: "5px" }}
                    />
                  )}
                  {!file && <CameraAltIcon style={{ color: "#D2D2D2" }} />}
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </Container>

      <Container maxWidth="xl" style={{margin:'3rem auto'}}>
        <Box style={{display:"flex",justifyContent:'flex-end'}}>
            <Link to='/RentnewItems'>
            <Button variant="contained">
            List new item
            </Button>
            </Link>


        </Box>
      </Container>
    </>
  );
};
export default ListNewitem;
