import { Box, Button, TextField, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import logoimg from "../assets/logo-white.png";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';


const Signup = () => {
  return (
    <>
      <Box style={{ height: "100vh" }}>
        <Box style={{ background: " #005494", height: "50vh" }}>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            height="100vh">
            <Box style={{ width: "400px" }}>
              <Box
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginBottom: "2rem",
                }}
              >
               <Link to='/'>
               <img src={logoimg} alt="logo" style={{ width: "100px" }} /></Link>
              </Box>
              <Box bgcolor="#fff" p={5} borderRadius="10px" style={{boxShadow:'0px 10px 40px rgba(0, 0, 0, 0.1)'}}>
                <Typography variant="h3" align="center" gutterBottom style={{fontWeight:'600'}}>
                  Sign Up
                </Typography>
                <form>
                <Box display="flex" alignItems="center" gap='10px' mt={3}>
                    <TextField
                    type="text"
                      label="Name"
                      id="standard-size-normal"
                      variant="standard"
                      placeholder="John"
                      style={{ width: "100%" }}
                    />
                    <TextField
                    type="text"
                      label="don"
                      id="standard-size-normal"
                      variant="standard"
                      placeholder="Last Name"
                      style={{ width: "100%" }}
                    />
                  </Box>
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
                 <br />
                 <br />
                    <Button
                      type="submit"
                      variant="contained"
                      style={{
                        width:'100%'
                      }}>
                      Sign In
                    </Button>
                    <Box style={{display:"flex",justifyContent:'center',alignItems:"center",margin:'1rem auto',gap:'5px'}}>
                    <GoogleIcon style={{border:"1px solid #ECEEF0",borderRadius:'4px',padding:'5px 20px',color:'#FF3D00'}} />
                    <TwitterIcon style={{border:"1px solid #ECEEF0",borderRadius:'4px',padding:'5px 20px',color:'#03A9F4'}} />
                    <FacebookOutlinedIcon style={{border:"1px solid #ECEEF0",borderRadius:'4px',padding:'5px 20px',color:'#03A9F4'}} />
                  </Box>
                   <Box style={{textAlign:'center'}}>
                   or <br />
                   <Typography variant="p">
                   Have an account?  <Link to='/Login' style={{textDecoration:'none',color:'#005494'}}>Sign In.</Link>
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

export default Signup;
