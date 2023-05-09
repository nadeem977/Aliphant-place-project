import React from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import logoimg from "../assets/logo-white.png";

const Passwordreset = () => {
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
                  variant="h5"
                  align="center"
                  gutterBottom
                  style={{ fontWeight: "600" }}
                >
                  Password Reset
                </Typography>
                <form>
                  <Box display="flex" alignItems="center" mt={3}>
                    <TextField
                      type="password"
                      label="New Password"
                      id="standard-size-normal"
                      variant="standard"
                      placeholder="New Password"
                      style={{ width: "100%" }}
                    />
                  </Box>
                  <Box display="flex" alignItems="center" mt={3}>
                    <TextField
                      type="password"
                      label="Confirm New Password"
                      id="standard-size-normal"
                      variant="standard"
                      placeholder="Confirm New Password"
                      style={{ width: "100%" }}
                    />
                  </Box>
                  <br />
                  <Button
                    type="submit"
                    variant="contained"
                    style={{
                      width: "100%",
                    }}
                  >
                    Reset Password
                  </Button>
                </form>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Passwordreset;
