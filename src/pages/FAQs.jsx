import React from "react";
import { Container, Typography, Box } from "@mui/material";
import Navbarscomponent from "../components/Navbar2/Navbarscomponent";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useMediaQuery } from "@mui/material";
import { Link } from "react-router-dom";
import { MdKeyboardArrowRight} from 'react-icons/md'
const FAQs = () => {
  const isLargeS6 = useMediaQuery("(max-width:600px)");
  return (
    <>
      <Navbarscomponent />

      <Container maxWidth="xl">
        <Box style={{display:'flex',alignItems:'center',marginTop:'1rem'}}>
          <Link to='/' style={{textDecoration:'none',cursor:'pointer',color:"#6D6D6D",fontWeight:'600'}}>Home</Link>
          <MdKeyboardArrowRight/>
          <Typography variant="p" color="#005494" style={{fontWeight:'600'}}>
          Frequently Asked Questions
          </Typography>
        </Box>
      </Container>

      <Container
        maxWidth="xl"
        style={{ marginTop: "4rem", textAlign: "center" }}
      >
        <Typography
          variant="h4"
          style={{ fontWeight: "600", fontSize: " 64px" }}
        >
          Frequently Asked Questions
        </Typography>
      </Container>

      <Container maxWidth="xl" style={{margin:"5rem auto"}}>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>What Is Personal Data</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="p" color="#9D9D9D">
              At Revision AI, we strongly believe in privacy rights – and that
              those rights should not differ depending on where you live in the
              world. That’s why we treat any data that relates to an identified
              or identifiable individual or that is linked or linkable to them
              by Revision AI as “personal data”, no matter where the individual
              lives. This means that data that directly identifies you – such as
              your name – is personal data, and also data that does not directly
              identify you, but that can reasonably be used to identify you –
              such as the order number – is personal data. Aggregated is
              considered non-personal data for the purposes of this Privacy
              Policy.
              <br />
              <br />
              This Privacy Policy covers how Revision AI Limited or its
              subsidiary (collectively, “Revision AI”) handles personal data
              when you interact with us on our websites. Revision AI may also
              link to third parties on our services. Revision AI’s Privacy
              policy does not apply to how third parties define personal data or
              how they use it. We encourage you to read their privacy policies
              and know your privacy rights before interacting with them.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <br />
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Privacy Rights</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="p" color="#9D9D9D">
            At Revision AI, we respect your ability to know, access, correct, transfer, restrict the processing of, and delete your personal data. We have provided these rights to all our customers and if you choose to exercise these privacy rights, you have the right not to be treated in a discriminatory way nor to receive a lesser degree of service from Revision AI. Revision AI does not sell not “sale” your data.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Container>
    </>
  );
};

export default FAQs;
