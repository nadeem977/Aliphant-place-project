import React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Navbarscomponent from "../components/Navbar2/Navbarscomponent";
import Container from "@mui/material/Container";
import imgbox from "../assets/box-img.png";
import Rating from "@mui/material/Rating";
import locan from "../assets/locan.png";
import Button from '@mui/material/Button'
import { useMediaQuery } from "@mui/material";
import { Link } from "react-router-dom";

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

const MyItems = () => {
  const isLargeS12 = useMediaQuery("(max-width:1500px)");
  const isLargeS10 = useMediaQuery("(max-width:1000px)");
  const isLargeS70 = useMediaQuery("(max-width:770px)");
  const isLargeS40 = useMediaQuery("(max-width:430px)");
  console.log(isLargeS12);
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Navbarscomponent />
      <Container maxWidth="xl" style={{marginTop:'2rem'}}>
        <Box sx={{ width: "100%" }}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
            >
         <Tab label="My Rentals" {...a11yProps(0)} />
              <Tab label="My Items" {...a11yProps(1)} />
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
           <Box style={{display:'flex',justifyContent:'flex-end',marginTop:'-4rem'}}>
           <Button variant="contained" style={{}}> 
            Rent new item?
            </Button>
           </Box>
      <Box style={{marginTop:'3rem'}}>
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
                  <Box style={{ width: "fit-content", height: "fit-content" }}>
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
                  <Box style={{ width: "fit-content", height: "fit-content" }}>
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
          <Box style={{display:'flex',justifyContent:'flex-end',marginTop:'-4rem'}}>
          <Link to='/RentnewItems'>
          <Button variant="contained"> 
           List new item?
            </Button>
          </Link>
           </Box>
         <Box style={{marginTop:'3rem'}}>
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
                  <Box style={{ width: "fit-content", height: "fit-content" }}>
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

export default MyItems;
