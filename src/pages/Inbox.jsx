import React from "react";
import Navbarscomponent from "../components/Navbar2/Navbarscomponent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import dot from "../assets/doot.png";
import dp from "../assets/di.png";
import TextField from "@mui/material/TextField";
import send from "../assets/send-sms.png";
import tiks from "../assets/tik.png";
import sms from "../assets/sms.png";
import { useMediaQuery } from "@mui/material";

const Inbox = () => {

  const isLargeS6 = useMediaQuery("(max-width:600px)");


  return (
    <>
      <Navbarscomponent />
      <Container maxWidth="xl" style={{ margin: "3rem auto" }}>
        <Box
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "column",
            background: "#FFFFFF",
            boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
            borderRadius: "20px",
          }}
        >
          <Box style={{ display: "flex" }}>
            <Box
              style={{
                display: "flex",
                gap: "10px",
                padding: "2rem",
                width: "300px",
              }}
            >
              <Typography variant="h6" fontWeight={600}>
                Inbox
              </Typography>
              <Typography
                variant="caption"
                color="#005494"
                style={{
                  background: "rgba(0, 84, 148, 0.14)",
                  borderRadius: "16.9091px",
                  padding: "10px",
                }}
              >
                4 New
              </Typography>
            </Box>
            <Box
              style={{
                display:isLargeS6 ? 'none':"flex",
                justifyContent: "space-between",
                width: "100%",
                alignItems: "center",
                paddingRight: "20px",
              }}
            >
              <Box
                style={{ display: "flex", alignItems: "center", gap: "10px" }}
              >
                <img src={dp} alt="images" width={50} />
                <Box>
                  <Typography variant="h6">Emilia Asobi</Typography>
                  <Typography variant="caption" color="#969696">
                    Last seen recently
                  </Typography>
                </Box>
              </Box>
              <Box>
                <img src={dot} alt="images" />
              </Box>
            </Box>
          </Box>
          <Box style={{ display: "flex", gap: "10px" }}>
            <Box style={{ overflow: "auto", height: "600px" }}>
              {[0, 1, 3, 4, 5, 6, 7, 8, 9, 10].map((items) => (
                <Box key={items} style={{ overflow:'auto',width: "300px" }}>
                  <Box
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      padding: "10px 20px",
                    }}
                  >
                    <Box
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                      }}
                    >
                      <img src={dp} alt="images" width={50} />
                      <Box>
                        <Typography variant="h6" fontSize={17}>
                          Richard Kimberly
                        </Typography>
                        <Typography variant="caption" color="#969696">
                          I really like this work!
                        </Typography>
                      </Box>
                    </Box>
                    <Box>
                      <Typography variant="body1">08:13</Typography>
                      <img src={sms} alt="images" width={20} />
                    </Box>
                  </Box>
                </Box>
              ))}
            </Box>
            <Box
              style={{
                background: "#F1F3F9",
                width: "80%",
                display:isLargeS6 ? 'none':"flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <Box style={{padding:'20px'}}>
               <Box style={{width:'100%',margin:'1rem auto'}}>
               <Box style={{ display: "flex", gap: "10px" }}>
                  <Box>
                    <img src={dp} alt="images" width={30} />
                  </Box>
                  <Box>
                    <Typography variant="h6" fontSize={15}>
                      Emilia Asobi
                    </Typography>
                    <Box
                      style={{
                        background: "#FFFFFF",
                        borderRadius: "0px 16.9091px 16.9091px 16.9091px",
                        padding: "10px",
                      }}
                    >
                      <Typography variant="body1">
                        Would you like to <br />
                        chat about our product?
                      </Typography>
                      <Box
                        style={{ display: "flex", justifyContent: "flex-end" }}
                      >
                        <Typography variant="caption" color={"#969696"}>
                          05:12
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Box>
               </Box>


                <Box style={{display:'flex',justifyContent:"flex-end"}}>
                <Box style={{ display: "flex", gap: "10px" }}>
                  <Box>
                    <Box
                      style={{
                        background: "#005494",
                        borderRadius: "16.9091px 0px 16.9091px 16.9091px",
                        padding: "10px",
                        color: "white",
                      }}
                    >
                      <Typography variant="body1">
                      Yeah sure, let’s do it. 😁
                      </Typography>
                      <Box
                        style={{ display: "flex", justifyContent: "flex-end" }}
                      >
                        <Typography variant="caption" color={"white"}>
                          05:12
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Box>
                </Box>

                <Box style={{width:'100%',margin:'1rem auto'}}>
               <Box style={{ display: "flex", gap: "10px" }}>
                  <Box>
                    <img src={dp} alt="images" width={30} />
                  </Box>
                  <Box>
                    <Typography variant="h6" fontSize={15}>
                      Emilia Asobi
                    </Typography>
                    <Box
                      style={{
                        background: "#FFFFFF",
                        borderRadius: "0px 16.9091px 16.9091px 16.9091px",
                        padding: "10px",
                      }}
                    >
                      <Typography variant="body1">
                      let's find the right date to  <br />discuss it.
                      </Typography>
                      <Box
                        style={{ display: "flex", justifyContent: "flex-end" }}
                      >
                        <Typography variant="caption" color={"#969696"}>
                          05:12
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Box>
               </Box>


               <Box style={{display:'flex',justifyContent:"flex-end"}}>
                <Box style={{ display: "flex", gap: "10px" }}>
                  <Box>
                    <Box
                      style={{
                        background: "#005494",
                        borderRadius: "16.9091px 0px 16.9091px 16.9091px",
                        padding: "10px",
                        color: "white",
                      }}
                    >
                      <Typography variant="body1">
                      How about on 18th June 2021 at  <br />
                       Mr. Abdul's coffee cafe.
                      </Typography>
                      <Box
                        style={{ display: "flex", justifyContent: "flex-end" }}
                      >
                        <Typography variant="caption" color={"white"}>
                          05:12
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Box>
                </Box>

              </Box>
              <Box
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  padding: "20px",
                }}
              >
                <TextField
                  id="standard-basic"
                  placeholder="Write a messege..."
                  variant="standard"
                  style={{ width: "100%" }}
                />
                <img src={tiks} alt="images" />
                <img src={send} alt="" width={30} />
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default Inbox;
