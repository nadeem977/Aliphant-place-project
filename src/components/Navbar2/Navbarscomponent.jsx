import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import { MenuItem } from "@mui/material";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import Typography from "@mui/material/Typography";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import alfint from "../../assets//main.logo.png";
import { HiInbox } from "react-icons/hi";
import Input from "@mui/material/Input";
import Button from "@mui/material/Button";

const pages = ["Rent", "Lend"];
const link = {
  textDecoration: "none",
  color: "inherit",
  margin: "0px 10px",
};
const lstlinf = {
  textDecoration: "none",
  color: "inherit",
  margin: "5px 10px",
  display: "flex",
  alignItems: "center",
  gap: "10px",
};

const Navbarscomponent = (props) => {
  
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      position="static"
      style={{
        background: "#F4F9FF",
        boxShadow: "none",
        color: "black",
        paddingTop: "1rem",
      }}
    >
      <Container maxWidth="xl" style={{ zIndex: "100" }}>
        <Toolbar disableGutters>
          <Link to={"/"}>
            <img src={logo} alt="My Image" />
          </Link>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
              justifyContent: { xs: "flex-end" },
            }}
          >
            <Typography
              variant="span"
              color="black"
              style={{ marginTop: "10px" }}
            >
              Sign in
            </Typography>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Link
                    to={`/${page}`}
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    {page}
                  </Link>
                </MenuItem>
              ))}
            
              <Link
                to='/Inbox'
                style={{
                  textDecoration: "none",
                  color: "inherit",
                  margin: "5px 10px",
                  display: props.no ? "none" : "flex",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <HiInbox style={{ color: "#005494" }} /> Inbox
              </Link>
              <Link to='/Profile' style={lstlinf}>
                <img src={alfint} alt="image" width={30} />
                John Doe
              </Link>

              <Link>
                <Box sx={{ width: "fit-content", color: "black" }}>
                  <FormControl variant="standard" sx={{ m: 1, minWidth: 80 }}>
                    <InputLabel id="demo-simple-select-standard-label">
                      EN
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-standard-label"
                      id="demo-simple-select-standard"
                      value={age}
                      onChange={handleChange}
                      label="Age"
                    >
                      <MenuItem value={10}>Urdu</MenuItem>
                      <MenuItem value={20}>English</MenuItem>
                      <MenuItem value={30}>Punjabi</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </Link>
            </Menu>
          </Box>

          <Box
            sx={{
              flexGrow: 1,
              alignItems: "center",
              display: { xs: "none", md: "flex" },
              justifyContent: "space-between",
            }}
          >
            <Box>
              {pages.map((page) => (
                <Link
                  to={`/${page}`}
                  style={link}
                  onClick={handleCloseNavMenu}
                  key={page}
                >
                  {page}
                </Link>
              ))}
            </Box>

            <Box
              style={{
                alignItems: "center",
                boxShadow: "0px 19px 29px rgba(62, 53, 120, 0.14)",
                width: "40%",
                display: props.dsy ? "flex" : "none",
              }}
            >
              <Input
                type="search"
                placeholder="her search"
                style={{ padding: "0px 10px", width: "100%" }}
              />
              <Button variant="contained">
                <Link
                  to="/search"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Search
                </Link>
              </Button>
            </Box>

            <Box component={"div"} sx={{ display: "flex", gap: "20px" }}>
              <Link
              to='/Inbox'
                style={{
                 
                  textDecoration: "none",
                  color: "inherit",
                  margin: "5px 10px",
                  display: props.no ? "none" : "flex",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <HiInbox style={{ color: "#005494" }} /> Inbox
              </Link>
              <Link to='/Profile'  style={lstlinf}>
                <Typography
                  variant="p"
                  style={{
                    width: "120px",
                    display: "flex",
                    alignItems: "center",
                    gap: "5px",
                  }}
                >
                  <img src={alfint} alt="image" width={30} />
                  John Doe
                </Typography>
              </Link>
              <Link>
                <Box sx={{ width: "fit-content", color: "black" }}>
                  <FormControl variant="standard" sx={{ m: 1, minWidth: 80 }}>
                    <InputLabel id="demo-simple-select-standard-label">
                      EN
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-standard-label"
                      id="demo-simple-select-standard"
                      value={age}
                      onChange={handleChange}
                      label="Age">
                      <MenuItem value={10}>Urdu</MenuItem>
                      <MenuItem value={20}>English</MenuItem>
                      <MenuItem value={30}>Punjabi</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </Link>
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbarscomponent;
