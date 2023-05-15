import React, { useState } from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Navbarscomponent from "../components/Navbar2/Navbarscomponent";
import Container from "@mui/material/Container";
import imgbox from "../assets/box-img.png";
import Rating from "@mui/material/Rating";
import locan from "../assets/locan.png";
import Button from "@mui/material/Button";
import { useMediaQuery } from "@mui/material";
import { Link } from "react-router-dom";
import OutlinedInput from "@mui/material/OutlinedInput";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import FormControl from "@mui/material/FormControl";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const useStyles = {
  width: "250px",
  height: "50px",
  borderWidth: "2px",
  borderRadius: "5px",
  padding: "10px",
  cursor: "pointer",
};

const maindiv = {
  display: "flex",
  flexDirection: "column",
  width: "100%",
  gap: "20px",
};
const RentnewItems = () => {
  const isLargeS12 = useMediaQuery("(max-width:1500px)");
  const isLargeS10 = useMediaQuery("(max-width:1000px)");
  const isLargeS70 = useMediaQuery("(max-width:770px)");
  const isLargeS50 = useMediaQuery("(max-width:750px)");
  const isLargeS40 = useMediaQuery("(max-width:430px)");

  const [value, setValue] = React.useState(1);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [file, setFile] = useState(null);
  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  return (
    <>
      <Navbarscomponent />
      <Container maxWidth="xl" style={{ marginTop: "2rem" }}>
        <Box sx={{ width: "100%" }}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
            >
              <Tab label="My Rentals" {...a11yProps(0)} disabled />
              <Tab label="My Items" {...a11yProps(1)} />
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
            <Box
              style={{
                display: "flex",
                justifyContent: "flex-end",
                marginTop: "-4rem",
              }}
            >
              <Button variant="contained" style={{}}>
                Rent new item?
              </Button>
            </Box>
            <Box style={{ marginTop: "3rem" }}>
              {[0, 1].map((items) => (
                <Box
                  key={items}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    flexDirection: isLargeS70 ? "column" : "row",
                    padding: "10px",
                    background: "#FFFFFF",
                    borderRadius: "16px",
                    margin: "10px",
                    boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
                  }}
                >
                  <Box
                    style={{
                      display: isLargeS70 ? "block" : "flex",
                      gap: "10px",
                      flexDirection: isLargeS10 ? "column" : "row",
                      alignItems: "center",
                    }}
                  >
                    <img
                      src={imgbox}
                      alt=""
                      style={{
                        width:
                          isLargeS12 === true
                            ? isLargeS10
                              ? "100%"
                              : "40%"
                            : "40%",
                      }}
                    />
                    <Box>
                      <Typography variant="caption" color="#969696">
                        Owner: John Doe
                      </Typography>
                      <Typography variant="h5" fontWeight={600}>
                        SONY PXW-X200 Full Camera
                      </Typography>
                      <Typography variant="caption" color="#969696">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,{" "}
                        <br />
                        sed do eiusmod tempor consectetur adipiscing elit, sed{" "}
                        <br /> do eiusmod tempo et dolore magna aliqua.
                      </Typography>
                      <Typography
                        variant="body1"
                        color="#969696"
                        style={{ marginTop: "10px" }}
                      >
                        Category: Film & Photography
                      </Typography>
                      <Typography
                        variant="p"
                        style={{
                          display: "flex",
                          alignItems: "center",
                          marginTop: "10px",
                        }}
                      >
                        <Rating name="customized-10" defaultValue={2} max={1} />
                        4.8
                      </Typography>
                    </Box>
                  </Box>
                  <Box
                    style={{
                      display: "flex",
                      justifyContent: isLargeS10 ? "flex-end" : "center",
                      alignItems: "center",
                    }}
                  >
                    <Box
                      style={{ width: "fit-content", height: "fit-content" }}
                    >
                      <Typography
                        variant="caption"
                        color="text.secondary"
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "10px",
                          justifyContent: "flex-end",
                          marginBottom: "10px",
                        }}
                        fontWeight={500}
                      >
                        <img src={locan} alt="img" />
                        Ohio St. 16 H. 435 South Gate, California
                      </Typography>
                      <Typography
                        variant="subtitle1"
                        style={{
                          display: "flex",
                          justifyContent: "flex-end",
                          marginBottom: "10px",
                        }}
                      >
                        $350
                      </Typography>
                      <Typography
                        variant="subtitle1"
                        style={{
                          display: "flex",
                          justifyContent: "flex-end",
                          marginBottom: "20px",
                        }}
                      >
                        18/11/2021 - 23/11/2021
                      </Typography>
                      <Box
                        style={{
                          display: "flex",
                          gap: "10px",
                          width: isLargeS40 ? "100%" : "310px",
                          flexWrap: "wrap",
                        }}
                      >
                        <Button
                          variant="contained"
                          style={{
                            background: "#0BD537",
                            width: isLargeS40 ? "100%" : "auto",
                          }}
                        >
                          Active Rental
                        </Button>
                        <Button
                          variant="contained"
                          style={{ width: isLargeS40 ? "100%" : "auto" }}
                        >
                          Rental Details
                        </Button>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              ))}
            </Box>

            <Box>
              {[0, 1].map((items) => (
                <Box
                  key={items}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    flexDirection: isLargeS70 ? "column" : "row",
                    padding: "10px",
                    background: "#FFFFFF",
                    borderRadius: "16px",
                    margin: "10px",
                    boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
                  }}
                >
                  <Box
                    style={{
                      display: isLargeS70 ? "block" : "flex",
                      gap: "10px",
                      flexDirection: isLargeS10 ? "column" : "row",
                      alignItems: "center",
                    }}
                  >
                    <img
                      src={imgbox}
                      alt=""
                      style={{
                        width:
                          isLargeS12 === true
                            ? isLargeS10
                              ? "100%"
                              : "40%"
                            : "40%",
                      }}
                    />
                    <Box>
                      <Typography variant="caption" color="#969696">
                        Owner: John Doe
                      </Typography>
                      <Typography variant="h5" fontWeight={600}>
                        SONY PXW-X200 Full Camera
                      </Typography>
                      <Typography variant="caption" color="#969696">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,{" "}
                        <br />
                        sed do eiusmod tempor consectetur adipiscing elit, sed{" "}
                        <br /> do eiusmod tempo et dolore magna aliqua.
                      </Typography>
                      <Typography
                        variant="body1"
                        color="#969696"
                        style={{ marginTop: "10px" }}
                      >
                        Category: Film & Photography
                      </Typography>
                      <Typography
                        variant="p"
                        style={{
                          display: "flex",
                          alignItems: "center",
                          marginTop: "10px",
                        }}
                      >
                        <Rating name="customized-10" defaultValue={2} max={1} />
                        4.8
                      </Typography>
                    </Box>
                  </Box>
                  <Box
                    style={{
                      display: "flex",
                      justifyContent: isLargeS10 ? "flex-end" : "center",
                      alignItems: "center",
                    }}
                  >
                    <Box
                      style={{ width: "fit-content", height: "fit-content" }}
                    >
                      <Typography
                        variant="caption"
                        color="text.secondary"
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "10px",
                          justifyContent: "flex-end",
                          marginBottom: "10px",
                        }}
                        fontWeight={500}
                      >
                        <img src={locan} alt="img" />
                        Ohio St. 16 H. 435 South Gate, California
                      </Typography>
                      <Typography
                        variant="subtitle1"
                        style={{
                          display: "flex",
                          justifyContent: "flex-end",
                          marginBottom: "10px",
                        }}
                      >
                        $350
                      </Typography>
                      <Typography
                        variant="subtitle1"
                        style={{
                          display: "flex",
                          justifyContent: "flex-end",
                          marginBottom: "20px",
                        }}
                      >
                        18/11/2021 - 23/11/2021
                      </Typography>
                      <Box
                        style={{
                          display: "flex",
                          gap: "10px",
                          width: isLargeS40 ? "100%" : "326px",
                          flexWrap: "wrap",
                        }}
                      >
                        <Button
                          variant="contained"
                          style={{
                            background: "red",
                            width: isLargeS40 ? "100%" : "auto",
                          }}
                        >
                          Inactive Rental
                        </Button>
                        <Button
                          variant="contained"
                          style={{ width: isLargeS40 ? "100%" : "auto" }}
                        >
                          Rental Details
                        </Button>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              ))}
            </Box>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <Box
              style={{
                display: "flex",
                justifyContent: "flex-end",
                marginTop: "-4rem",
              }}
            >
              <Link to="/RentnewItems">
                <Button variant="contained">Save</Button>
              </Link>
            </Box>

            <Box>
              <Container maxWidth="xl" style={{ margin: "3rem auto" }}>
                <Box
                  style={
                    isLargeS10 === false
                      ? {
                          display: "flex",
                          gap: "10x",
                          width: "100%",
                          border: "1px solid #EAEAEA",
                          boxShadow: "0px 4px 24px rgba(0, 0, 0, 0.04)",
                          borderRadius: "8px",
                        }
                      : maindiv
                  }
                >
                  <Box
                    style={{
                      width: isLargeS10 === false ? "70%" : "100%",
                      padding: "10px",
                    }}
                  >
                     <Typography
                        variant="p"
                        style={{
                          display: "flex",
                          alignItems: "center",
                          marginTop: "10px",
                        }}
                      >
                        <Rating name="customized-10" defaultValue={2} max={1} />
                        4.8
                      </Typography>
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
                        <FormControl
                          sx={{ m: 1, width: "100%" }}
                          variant="outlined"
                        >
                          <Typography variant="subtitle1">Title</Typography>
                          <OutlinedInput
                            id="outlined-adornment-weight"
                            aria-describedby="outlined-weight-helper-text"
                            placeholder="SONY PXW-X200 Full Camera"
                            type="text"
                          />
                        </FormControl>

                        <Box
                          direction={"column"}
                          style={{ width: "100%", paddingLeft: "10px" }}
                        >
                          <Typography variant="h6">
                          Rental price (HKD)
                          </Typography>
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
                              <Button variant="outlined">30</Button>
                            </Box>
                            <Box variant="div">
                              <Typography variant="subtitle1">
                                Weekly
                              </Typography>
                              <Button variant="outlined">150</Button>
                            </Box>
                            <Box variant="div">
                              <Typography variant="subtitle1">
                                Monthly
                              </Typography>
                              <Button variant="outlined">350</Button>
                            </Box>
                          </Box>
                        </Box>

                        <Box style={{ width: "100%" }}>
                          <FormControl
                            sx={{ m: 1, width: "100%" }}
                            variant="outlined"
                          >
                            <Typography variant="h6">
                            Minimum rental period (Days)
                            </Typography>
                            <OutlinedInput
                              type="number"
                              id="outlined-adornment-weight"
                              aria-describedby="outlined-weight-helper-text"
                              placeholder="5"
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
                        <FormControl
                          sx={{ m: 1, width: "100%" }}
                          variant="outlined"
                        >
                          <Typography variant="subtitle1">Category</Typography>
                          <OutlinedInput
                            id="outlined-adornment-weight"
                            aria-describedby="outlined-weight-helper-text"
                            placeholder="Film & Photography"
                          />
                        </FormControl>

                        <Box
                          style={{
                            display: "flex",
                            flexDirection:
                              isLargeS40 === false ? "row" : "column",
                            gap: "10px",
                            width: "100%",
                          }}
                        >
                          <FormControl
                            sx={{ m: 1, width: "95%" }}
                            variant="outlined"
                          >
                            <Typography variant="subtitle1">
                            Market value (HKD)
                            </Typography>
                            <OutlinedInput
                              id="outlined-adornment-weight"
                              aria-describedby="outlined-weight-helper-text"
                              placeholder="4322"
                              type="number"
                            />
                          </FormControl>
                        </Box>
                        <FormControl
                          sx={{ m: 1, width: "100%" }}
                          variant="outlined"
                        >
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

                  <Box
                    style={{
                      width: isLargeS10 === false ? "30%" : "100%",
                      padding: "10px",
                    }}>
                   
                   <Typography
                        variant="caption"
                        color="text.secondary"
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "10px",
                          marginBottom: "10px",
                        }}
                        fontWeight={500}
                      >
                        <img src={locan} alt="img" />
                        Ohio St. 16 H. 435 South Gate, California
                      </Typography>
                    <Button variant="contained" style={{background:'#0BD537',marginBottom:'1rem'}}>
                    Active Rental
                    </Button>
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
                          {!file && (
                            <CameraAltIcon style={{ color: "#D2D2D2" }} />
                          )}
                        </Box>
                      ))}
                    </Box>
                  </Box>
                </Box>
              </Container>
            </Box>
            <Box style={{ marginTop: "3rem" }}>
              {[0, 1].map((items) => (
                <Box
                  key={items}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    flexDirection: isLargeS70 ? "column" : "row",
                    padding: "10px",
                    background: "#FFFFFF",
                    borderRadius: "16px",
                    margin: "10px",
                    boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
                  }}
                >
                  <Box
                    style={{
                      display: isLargeS70 ? "block" : "flex",
                      gap: "10px",
                      flexDirection: isLargeS10 ? "column" : "row",
                      alignItems: "center",
                    }}
                  >
                    <img
                      src={imgbox}
                      alt=""
                      style={{
                        width:
                          isLargeS12 === true
                            ? isLargeS10
                              ? "100%"
                              : "40%"
                            : "40%",
                      }}
                    />
                    <Box>
                      <Typography variant="caption" color="#969696">
                        Owner: John Doe
                      </Typography>
                      <Typography variant="h5" fontWeight={600}>
                        SONY PXW-X200 Full Camera
                      </Typography>
                      <Typography variant="caption" color="#969696">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,{" "}
                        <br />
                        sed do eiusmod tempor consectetur adipiscing elit, sed{" "}
                        <br /> do eiusmod tempo et dolore magna aliqua.
                      </Typography>
                      <Typography
                        variant="body1"
                        color="#969696"
                        style={{ marginTop: "10px" }}
                      >
                        Category: Film & Photography
                      </Typography>
                      <Typography
                        variant="p"
                        style={{
                          display: "flex",
                          alignItems: "center",
                          marginTop: "10px",
                        }}
                      >
                        <Rating name="customized-10" defaultValue={2} max={1} />
                        4.8
                      </Typography>
                    </Box>
                  </Box>
                  <Box
                    style={{
                      display: "flex",
                      justifyContent: isLargeS10 ? "flex-end" : "center",
                      alignItems: "center",
                    }}
                  >
                    <Box
                      style={{ width: "fit-content", height: "fit-content" }}
                    >
                      <Typography
                        variant="caption"
                        color="text.secondary"
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "10px",
                          justifyContent: "flex-end",
                          marginBottom: "10px",
                        }}
                        fontWeight={500}
                      >
                        <img src={locan} alt="img" />
                        Ohio St. 16 H. 435 South Gate, California
                      </Typography>
                      <Typography
                        variant="subtitle1"
                        style={{
                          display: "flex",
                          justifyContent: "flex-end",
                          marginBottom: "10px",
                        }}
                      >
                        $350
                      </Typography>
                      <Typography
                        variant="subtitle1"
                        style={{
                          display: "flex",
                          justifyContent: "flex-end",
                          marginBottom: "20px",
                        }}
                      >
                        18/11/2021 - 23/11/2021
                      </Typography>
                      <Box
                        style={{
                          display: "flex",
                          gap: "10px",
                          width: isLargeS40 ? "100%" : "310px",
                          flexWrap: "wrap",
                        }}
                      >
                        <Button
                          variant="contained"
                          style={{
                            background: "#0BD537",
                            width: isLargeS40 ? "100%" : "auto",
                          }}
                        >
                          Active Rental
                        </Button>
                        <Button
                          variant="contained"
                          style={{ width: isLargeS40 ? "100%" : "auto" }}
                        >
                          Rental Details
                        </Button>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              ))}
            </Box>
          </TabPanel>
        </Box>
      </Container>
    </>
  );
};

export default RentnewItems;
