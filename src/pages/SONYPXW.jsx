import React from "react";
import Navbarscomponent from "../components/Navbar2/Navbarscomponent";
import { useMediaQuery } from "@mui/material";
import { Link } from "react-router-dom";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Container, Box, Typography, Button, Grid } from "@mui/material";
import boximg from "../assets/box-img.png";
import locan from "../assets/locan.png";
import logoimg from "../assets/second-logo.png";
import arows from "../assets/arows.png";
import Rating from "@mui/material/Rating";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Map from "../components/Map/Map";
import { CardActionArea } from "@mui/material";

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

const SONYPXW = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const isLargeS90 = useMediaQuery("(max-width:1000px)");
  const isLargeS40 = useMediaQuery("(max-width:450px)");

  return (
    <>
      <Navbarscomponent dsy={"block"} />
      <Container maxWidth="xl">
        <Box
          style={{ display: "flex", alignItems: "center", marginTop: "1rem",flexWrap:'wrap' }}
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
          <Link
            style={{
              textDecoration: "none",
              cursor: "pointer",
              color: "#6D6D6D",
              fontWeight: "600",
            }}
          >
            Camera{" "}
          </Link>{" "}
          <MdKeyboardArrowRight />
          <Typography variant="p" color="#005494" style={{ fontWeight: "600" }}>
            SONY PXW-X200 Full Camera Kit
          </Typography>
        </Box>
      </Container>
      <Container maxWidth="xl" style={{ margin: "3rem auto" }}>
        <Box style={{ width: "100%", display: "flex", gap: "10px",flexDirection:isLargeS90?'column':'row' }}>
          <Box style={{ width: isLargeS90?'100%':"65%" }}>
            <Box
              style={{
                width: "100%",
                borderRadius: "16px",
                background: "#E6E6E6",
                height: isLargeS40? "200px":"600px",
              }}
            ></Box>
            <Box
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                margin: "2rem auto",
                gap: "10px",
                flexWrap:isLargeS90?'wrap':"inherit"
              }}
            >
              {[0, 1, 3, 4, 5].map((items) => (
                <Box
                  key={items}
                  style={{
                    width:isLargeS40?'100%': "200px",
                    height: "200px",
                    background: "#E6E6E6",
                    borderRadius: "10px",
                  }}
                ></Box>
              ))}
            </Box>
          </Box>
          <Box
            style={{
              width:isLargeS90?'auto': "30%",
              border: "2px solid #E6E6E6",
              borderRadius: "16px",
              padding: "20px",
              height: "fit-content",
              marginTop:"6rem"
            }}
          >
            <Typography variant="h5" fontWeight={600} style={{fontSize:isLargeS90?'20px': "34px",}}>
              SONY PXW-X200 Full <br /> Camera Kit
            </Typography>
            <Typography
              variant="caption"
              color="text.secondary"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                margin: "1rem auto",
              }}
              fontWeight={500}
            >
              <img src={locan} alt="img" />
              Ohio St. 16 H. 435 South Gate, California
            </Typography>
            <Box
              style={{
                display: "flex",
                gap: "10px",
                alignItems: "center",
                margin: "1rem auto",
              }}
            >
              <img
                src={logoimg}
                alt="images"
                style={{ width: "30px", height: "30px" }}
              />
              <Typography variant="p">Ben in shek O</Typography>
              <img
                src={arows}
                alt="images"
                style={{ width: "20px", height: "20px" }}
              />
            </Box>
            <Box
              style={{
                display: "flex",
                gap: "10px",
                alignItems: "center",
                margin: "1rem auto",
                flexWrap:'wrap'
              }}
            >
              <Typography
                variant="p"
                style={{ display: "flex", alignItems: "center" }}
              >
                <Rating name="customized-10" defaultValue={2} max={1} />
                4.8
              </Typography>
              <Typography variant="p" color="#CCCCCC">
                (120 Review)
              </Typography>
              <Typography variant="p" color="#005494">
                Write a review
              </Typography>
            </Box>

            <Box style={{ display: "flex", gap: "10px",justifyContent:'space-between',flexWrap:'wrap' }}>
              <Box
                style={{
                  border: "1px solid #CCCCCC",
                  width:isLargeS40?'100%': "fit-content",
                  borderRadius: "8px",
                  textAlign: "center",
                  padding: "2rem 1rem",
                }}
              >
                <Typography variant="p" color="#969696">
                  Daily
                </Typography>
                <Box>
                  <Typography variant="p" color="#005494">
                    $60.00
                  </Typography>
                  <Typography variant="p" color="#969696">
                    /day
                  </Typography>
                </Box>
              </Box>
              <Box
                style={{
                  border: "1px solid #CCCCCC",
                  width:isLargeS40?'100%': "fit-content",
                  borderRadius: "8px",
                  textAlign: "center",
                  padding: "2rem 1rem",}}>
                <Typography variant="p" color="#969696">
                  Weekly
                </Typography>
                <Box>
                  <Typography variant="p" color="#005494">
                    $60.00
                  </Typography>
                  <Typography variant="p" color="#969696">
                    /day
                  </Typography>
                </Box>
              </Box>

              <Box
                style={{
                  border: "1px solid #CCCCCC",
                  width:isLargeS40?'100%': "fit-content",
                  borderRadius: "8px",
                  textAlign: "center",
                  padding: "2rem 1rem",
                }}
              >
                <Typography variant="p" color="#969696">
                  Monthly
                </Typography>
                <Box>
                  <Typography variant="p" color="#005494">
                    $60.00
                  </Typography>
                  <Typography variant="p" color="#969696">
                    /day
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Button
              variant="contained"
              style={{ width: "100%", margin: "1rem auto" }}
            >
              Check price and availability
            </Button>
          </Box>
        </Box>
      </Container>

      <Container maxWidth="xl">
        <Box sx={{ width: "100%" }}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
            >
              <Tab label="Description" {...a11yProps(0)} />
              <Tab label="Reviews" {...a11yProps(1)} />
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
            <Typography variant="p" color="#969696">
              PXW-X200 Camera Kit
              <br />
              <br />
              This is the successor to the PMW200. (Please note: Last minute
              requests to hire the camera won’t work. It’s often out on jobs and
              <br />
              working out logistics needs some lead time. Please allow minimum
              24 hours notice)
              <br />
              <br />
              Product Highlights
              <br />
              Three 1/2" Exmor CMOS Sensors Resolutions up to 1080p at 50 fps
              <br />
              10-Bit 4:2:2 XAVC Intra/Long Codecs MPEG HD422, HD420, IMX, & DV
              <br />
              Codecs 17x Zoom Lens 29.3-499mm (35mm Equivalent) Dual SxS Memory
              Card Slots 3G-SDI Output / HDMI Output Genlock In, Time Code
              In/Out
              <br />
              <br />
              The Kit includes: 1 x Sony PXW-X200 Camcorder with carry case 1 x
              <br />
              Manfrotto tripod with carry case 2 x Swit Batteries 1 x Battery
              <br />
              charger / power supply 2 x Sony Express Card Convertors 3 x 64GB
              SD
              <br />
              Cards 3 x 32GB SD Cards 1 x Rode Filmakers Lapel Mic (receiver +
              transmitter) 1 x Rode top mic 1 x Micro Pro Panel Lite
              <br />
              NOTE: You will need your own headphones to monitor audio but if
              you
              <br />
              absolutely do not have them and require them then we can provide
              <br />
              these, but you must request this when booking the kit. The entire
              <br />
              kit comes with batteries charged up ready to go. All batteries
              supplied for radio mics.
              <br />
              <br />
              <br />
              The kit is in perfect working order and may have some minor
              <br />
              scratches but everything is checked and is in full operational
              <br />
              order. The minor issues include: 1. The plastic protector that
              cover
              <br />
              the audio meters is missing. 2. The top mic / directional mic sits
              a little loosely in the holder.
              <br />
              <br />
              Drop off and pick up are possible around London / Brighton on
              request as we are around a lot.
            </Typography>
          </TabPanel>
          <TabPanel value={value} index={1}>
            Item Two
          </TabPanel>
        </Box>
      </Container>
      <Container maxWidth="xl">
        <Box>
          <Typography variant="h6" fontWeight={600}>
            Address
          </Typography>
          <Map/>
        </Box>
      </Container>

      <Container maxWidth="xl" style={{ marginTop: "2rem" }}>
        <Box style={{display:'flex',justifyContent:'space-between',flexWrap:"wrap"}}>
          <Typography variant="h6" color="initial" fontWeight={600}>
          Other items from Ben
          </Typography>
          <Button variant="contained">
          View All
          </Button>
        </Box>
      </Container>

      <Container maxWidth="xl" style={{ margin: "2rem auto" }}>
        <Box sx={{ margin: "2rem auto" }}>
          <Grid container spacing={2}>
            {[...Array(4)].map((_, index) => (
              <Grid item xs={12} sm={6} md={4} xl={3} key={index}>
                <Card sx={{ maxWidth: 345, padding: "10px", margin: "auto" }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="230"
                      width="200"
                      image={boximg}
                      alt="green iguana"
                    />
                    <CardContent>
                      <Typography variant="caption" fontWeight={500}>
                        John Doe
                      </Typography>
                      <Typography
                        gutterBottom
                        variant="h6"
                        fontWeight={600}
                        component="div"
                      >
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
                        <Typography
                          variant="p"
                          style={{ display: "flex", alignItems: "center" }}
                        >
                          <Rating
                            name="customized-10"
                            defaultValue={2}
                            max={1}
                          />
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
      </Container>
   
    </>
  );
};

export default SONYPXW;
