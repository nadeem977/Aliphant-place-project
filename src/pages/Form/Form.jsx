import React, { useState } from "react";
import {
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
  TextareaAutosize,
  Typography,
  Box
} from "@mui/material";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import  Navbarscomponent from '../../components/Navbar2/Navbarscomponent'

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  padding: "20px",
  bgcolor: "background.paper",
  borderRadius: "10px",
  boxShadow: 24,
  width:'50%',
  height:'40%'
};

const Form = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [text, setText] = useState("");

  const [open, setOpen] = React.useState(false);

  const handleOpen = () =>{
      setOpen(true);
  
  } 
  const handleClose = () => {
      setOpen(false);
      setEmail("");
      setPassword("");
      setText("");
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();

  
  };

  return (
    <>
      <Navbarscomponent/>
    <Box style={{background:'#b8d3ed',padding:'2rem'}}>
    <Box
      style={{
        width: "50%",
        paddingTop: "4rem",
        margin: "auto",
        textAlign: "center",
      }}
    >
      <form onSubmit={handleFormSubmit}>
        <FormControl sx={{ margin: "8px auto",width:'100%' }}>
          <InputLabel htmlFor="my-email">
            Email address
          </InputLabel>
          <Input
            id="my-email"
            type="email"
            aria-describedby="my-helper-text"
            sx={{ width: "100%" }}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <FormHelperText id="my-helper-text">
            We'll never share your email.
          </FormHelperText>
        </FormControl>
        <br />
        <FormControl sx={{ margin: "8px auto", width: '100%' }}>
          <InputLabel htmlFor="my-pass">
            Password
          </InputLabel>
          <Input
            type="password"
            id="my-pass"
            aria-describedby="my-helper-text"
            sx={{ width: "100%", margin: "auto" }}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <FormHelperText id="my-helper-text">
            Enter your password.
          </FormHelperText>
        </FormControl>

        <FormControl sx={{ width: "100%", mt: 2 }}>
          <TextareaAutosize
            id="my-textarea"
            aria-describedby="my-helper-text"
            minRows={3}
            style={{
              width: "100%",
              outline: "none",
              height: "200px",
              borderRadius: "10px",
              padding: "10px",
            }}
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </FormControl>

        <Typography variant="h6" id="my-helper-text">
          Enter your text here
        </Typography>
        <Button type="submit" variant="contained" onClick={handleOpen}>
          Data send
        </Button>
      </form>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Email: {email}
          </Typography>
         <Typography id="modal-modal-title" variant="h6">
            Password: {password}
         </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2,color:'gray' }}>
            Description
            <hr />
            {text}
          </Typography>
        </Box>
      </Modal>
    </Box>
    </Box>
    </>
  );
};

export default Form;
