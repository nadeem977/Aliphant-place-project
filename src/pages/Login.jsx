import React from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import logoimg from "../assets/logo-white.png";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';

const Login = () => {
  return (
    <>
      <Box style={{ height: "100vh" }}>
        <Box style={{ background: " #005494", height: "50vh" }}>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            height="100vh"
          >
            <Box style={{ width: "400px" }}>
              <Box
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginBottom: "2rem",
                }}
              >
                <Link to="/">
                  <img src={logoimg} alt="logo" style={{ width: "100px" }} />
                </Link>
              </Box>
              <Box
                bgcolor="#fff"
                p={5}
                borderRadius="10px"
                style={{ boxShadow: "0px 10px 40px rgba(0, 0, 0, 0.1)" }}
              >
                <Typography
                  variant="h3"
                  align="center"
                  gutterBottom
                  style={{ fontWeight: "600" }}
                >
                  Sign In
                </Typography>
                <form>
                  <Box display="flex" alignItems="center" mt={3}>
                    <TextField
                      type="email"
                      label="Email Address"
                      id="standard-size-normal"
                      variant="standard"
                      placeholder="johndoe@gmail.com"
                      style={{ width: "100%" }}
                    />
                  </Box>
                  <Box display="flex" alignItems="center" mt={3}>
                    <TextField
                      type="Password"
                      label="Password"
                      id="standard-size-normal"
                      variant="standard"
                      placeholder="Password"
                      style={{ width: "100%" }}
                    />
                  </Box>
                  <Box
                    style={{
                      marginTop: "10px",
                      display: "flex",
                      justifyContent: "flex-end",
                    }}
                  >
                    <Link
                      to="/Forgetpassword"
                      style={{ textDecoration: "none", color: "#005494" }}
                    >
                      Forget Password
                    </Link>
                    <br />
                    <br />
                    <br />
                  </Box>
                  <Button
                    type="submit"
                    variant="contained"
                    style={{
                      width: "100%",
                    }}
                  >
                    Sign In
                  </Button>
                  <Box style={{display:"flex",justifyContent:'center',alignItems:"center",margin:'1rem auto',gap:'5px'}}>
                    <GoogleIcon style={{border:"1px solid #ECEEF0",borderRadius:'4px',padding:'5px 20px',color:'#FF3D00'}} />
                    <TwitterIcon style={{border:"1px solid #ECEEF0",borderRadius:'4px',padding:'5px 20px',color:'#03A9F4'}} />
                    <FacebookOutlinedIcon style={{border:"1px solid #ECEEF0",borderRadius:'4px',padding:'5px 20px',color:'#03A9F4'}} />
                  </Box>
                  <Box style={{ textAlign: "center" }}>
                    or <br />
                    <Typography variant="p">
                      Don’t have an account yet?{" "}
                      <Link
                        to="/Signup"
                        style={{ textDecoration: "none", color: "#005494" }}
                      >
                        Sign Up.
                      </Link>
                    </Typography>
                  </Box>
                </form>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Login;
