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

const Termsofuse = () => {

  const isLargeS6 = useMediaQuery("(max-width:600px)");


  return (
    <>
      <Navbarscomponent/>

      <Container maxWidth="xl">
        <Box style={{display:'flex',alignItems:'center',marginTop:'1rem'}}>
          <Link to='/' style={{textDecoration:'none',cursor:'pointer',color:"#6D6D6D",fontWeight:'600'}}>Home</Link>
          <MdKeyboardArrowRight/>
          <Typography variant="p" color="#005494" style={{fontWeight:'600'}}>
          Terms of Use
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
          Elephant Please Terms of Use
        </Typography>
        <Typography
          variant="h6"
          style={{ color: "black", fontWeight: "600", margin: "2rem auto" }}
        >
          Updated November 27, 2021
        </Typography>
        <Box style={{ width:isLargeS6? '100%': "70%", margin: "auto", color: "#9D9D9D" }}>
          <Typography variant="body1">
            Revision AI’s Terms of Use set forth below (“terms”) govern you
            while on this website and are legally binding on you. If you do not
            agree with any of the listed conditions, do not access or otherwise
            use this website or any information contained on this website. Your
            use of the website shall be deemed to be your agreement to each of
            the terms set forth below.
          </Typography>
          <Typography variant="body1" style={{ margin: "20px 0px" }}>
            By registering this website or submitting any information through
            this website, you represent and warrant that you have the capacity
            to understand, agree to and comply with these Terms of Use. You
            shall provide true, accurate and complete information. All
            information submitted to or received through this website will
            equally be treated in accordance with these Terms of Use.
          </Typography>
          <Typography variant="body1">
            Please take a moment to familiarise yourself with our Terms of Use,
            accessible via the headings below and contact us if you have
            questions.
          </Typography>
        </Box>
      </Container>

      <Container maxWidth="xl" style={{margin:'4rem auto'}}>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>General Use Restrictions</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="p" color="#9D9D9D">
              All information, documents, products and services, trademarks,
              logos, graphics, and images ("Materials") provided on this site
              are copyrighted or trademarked and are the property of Revision AI
              Limited (“Revision AI”) and its subsidiaries. Any unauthorized use
              of any material contained on the site may violate copyright laws,
              trademark laws, the laws of privacy and communications statutes.
              Revision AI Limited grants you the limited right to display the
              Materials only on your personal computer for your personal use.
              You agree not to use the materials for any other purpose without
              the prior written consent of Revision AI. Without limitation, you
              agree not to reproduce, re-distribute, sell, publish, broadcast or
              circulate any information contained in the materials to anyone,
              including others in the same company or organization. You may not
              post content from this site to news groups, mail lists, or
              bulletin boards. You acknowledge and agree that, except as set
              forth herein, you have no right to modify, edit, alter or enhance
              any of the materials in any manner. This limited license
              terminates automatically, without notice to you, if you breach any
              of these terms. Upon termination you agree to immediately destroy
              any printed or downloaded materials. You agree not to "frame" or
              "mirror" any materials or third-party content contained on this
              site on any other server or internet based device without the
              advanced written permission of Revision AI or its licensors,
              respectively. This site may be linked to other sites on the
              Internet which are not under the control of or maintained by
              Revision AI. Such links do not constitute an endorsement by
              Revision AI. You acknowledge that Revision AI is providing these
              links to you only as a convenience, you further agree that
              Revision AI is not responsible for the content of such sites.
              <br />
              <br />
              Certain areas of this site are password restricted to authorized
              users ("Restricted Areas") If you are an authorized user of the
              Restricted Areas, you agree that you are entirely responsible for
              the confidentiality of your password and account information, and
              agree to notify Revision AI immediately if your password is lost,
              stolen, disclosed to an unauthorized third party, or otherwise may
              have been compromised. You agree that you are entirely responsible
              for any and all activities which occur under your account,
              including any fees which may incur under your password protected
              account whether or not you are the individual who undertakes such
              activities. You agree to immediately notify Revision AI of any
              unauthorized use of your account or any other breach of security
              in relation thereof known to you.
              <br />
              <br />
              You acknowledge that this site may include certain inaccuracies or
              typographical errors which may affect the quality of materials and
              third-party content. You acknowledge that the materials or any
              third-party content have not been independently verified or
              authenticated in whole or in part by Revision AI, and agree that
              Revision AI does not warrant the accuracy or timeliness of
              materials or the third-party content, and further agree that
              Revision AI has no liability for any omissions in the materials
              and content, whether provided by Revision AI or any third-party.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <br />
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>General Disclaimer</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography color="#9D9D9D">
              The service and materials are provided by Revision AI on an as is
              basis and for general reference only, and Revision AI expressly
              disclaims any and all warranties, express or implied, including
              without limitation warranties of merchantability and fitness for a
              particular purpose, with respect to any service or materials. In
              particular, we do not make any express or implied warranty as to
              the accuracy, fitness for a particular purpose, non-infringement,
              reliability, security, timeliness or freedom from computer virus
              in relation to such contents. We shall not be liable for any
              errors in, omissions from, or misstatements or misrepresentations
              (whether express or implied) concerning any such information, and
              shall not have or accept any liability, obligation or
              responsibility whatsoever for any loss, destruction or damage
              (including but not limited to consequent Services and Materials
              are intended only for Revision AI’s customers and are provided
              only for your convenience. Revision AI grants you no license or
              property rights to any such Services and Materials. Revision AI
              does not warrant the accuracy, completeness, or reliability of
              Services and Materials and other items contained on this server or
              any other server. Therefore, you are not to rely on any Services
              and Materials provided in this site unless we expressly advise you
              in writing that you can. ial loss, destruction or damage)
              howsoever arising from or in respect of any use or misuse of or
              reliance on any information from this website, or the inability to
              use this website, and without having to offer any reason or notice
              delete or edit such information at any time, without prior notice.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <br />
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3a-content"
            id="panel2a-header"
          >
            <Typography>Limitation of Liability</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography color="#9D9D9D">
              To the maximum extent permitted by applicable law, Revision AI
              shall not be liable to you or third-party claiming through you for
              any damage suffered as a result of your displaying, copying or
              downloading information or material contained on this site. In no
              event shall Revision AI be liable to you or any third-party for
              any indirect, extraordinary, exemplary, punitive, special
              incidental or consequential damages (including loss of data,
              revenue, profits or other economic advantage) however arising,
              whether for breach or in tort even if Revision AI has previously
              advised of the possibility of such possible damage.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <br />
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel4a-content"
            id="panel2a-header"
          >
            <Typography>Applicable Law</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography color="#9D9D9D">
              These Terms of Use shall be governed by and construed in
              accordance with the laws of Hong Kong Special Administrative
              Region of the People's Republic of China. If you use this site
              from outside the Hong Kong Special Administrative Region of the
              People's Republic of China, you are entirely responsible for
              compliance with applicable local laws, including but not limited
              to the export and import laws of other countries in relation to
              the materials and third-party content.
              <br />
              <br />
              <br />
              The parties irrevocably agree that the courts of Ho Hong Kong
              Special Administrative Region of the People's Republic of China
              shall have exclusive jurisdiction. A person who is not a party to
              these Terms of Use has no right to enforce any terms of this
              Agreement under the Contract (Rights of Third Parties) Ordinance
              (Cap. 623).
              <br />
              <br />
              If any term(s) of these Terms of Use is declared illegal, invalid
              or unenforceable, the illegality, invalidity or unenforceability
              of such term(s) shall not affect the legality, validity and
              enforceability of any other terms of these Terms of Use, and shall
              continue to be valid. All interpretations of these Terms of Use
              shall be at the sole and absolute discretion of Revision AI.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <br />
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel5a-content"
            id="panel2a-header"
          >
            <Typography>Indemnity</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography color="#9D9D9D">
              You agree to indemnify and hold Revision AI, its officers,
              directors, shareholders, predecessors, successors in interest,
              employees, agents, subsidiaries and affiliates, harmless from any
              demands, loss, liability, claims or expenses (including attorneys’
              fees), made against Revision AI by any third party due to or
              arising out of or in connection with your use of the Site.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <br />
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel6a-content"
            id="panel2a-header"
          >
            <Typography>Violation of Terms of This Site</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography color="#9D9D9D">
              If you violate the terms of this site, Revision AI reserves the
              right to terminate service to you without further notice or
              explanation. Revision AI’s preferred course of action is to advise
              you of your inappropriate behavior and advise you of any
              corrective action. However, flagrant violations of these Terms as
              determined by Revision AI in its sole discretion, will result in
              immediate termination of service.
              <br />
              <br />
              <br />
              You agree that Revision AI and its licensors may make improvements
              and/or changes in the services and prices described in this site,
              if any, at any time without notice, and further agree that
              Revision AI can revise these Terms at any time without notice by
              updating this posting. Your continued use of the site after such
              modifications have been made constitutes your acceptance of such
              revised Terms.
              <br />
              <br />
              Any action related to these Terms will be governed by the laws of
              the Hong Kong Special Administrative Region of the People's
              Republic of China, without regard to the choice or conflicts of
              law provisions of any jurisdiction. You agree to the jurisdiction
              of the courts located in Hong Kong Special Administrative Region
              of the People's Republic of China for the resolution of all
              disputes arising from or related to these Terms and/or your use of
              the site.
              <br />
              <br />
              The failure of Revision AI to enforce any right or provision in
              these Terms shall not constitute a waiver of such right or
              provision unless acknowledged and agreed to by Revision AI in
              writing. The Terms comprises the entire agreement between you and
              Revision AI and supersede all prior or contemporaneous
              negotiations, discussions or agreements, if any, between the
              parties regarding the subject matter contained herein. Your use of
              the Site, however, is subject to the additional disclaimers and
              caveats that may appear throughout the site.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <br />
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel6a-content"
            id="panel2a-header"
          >
            <Typography>Privacy Policy</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography color="#9D9D9D">
              Our Privacy Policy shall apply to any personal data which is
              voluntari ly submitted by you when registering and/or using this
              website to conf irm service. Such personal data collected from you
              will be used for pro cessing your account and following up your
              confirmed service and for other directly related purposes. You can
              <br />
              <br />
              subsequently change your personal data. Please refer to our
              Privacy Policy on our website (which forms part of these Terms of
              Use) <br /> in order to understand how we collect or use your
              personal information.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <br />
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel7a-content"
            id="panel2a-header"
          >
            <Typography>Intellectual Property</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography color="#9D9D9D">
              "Revision AI", "RevisionAI.com", “Elephant Please”,
              “ElephantPlease.com” and other relevant figure are trademarks of
              Revision AI Limited. Unauthorized use or duplication of these
              marks is strictly prohibited by law.
              <br />
              <br />
              All contents of this website are protected by copyright, trademark
              and other intellectual property rights owned or controlled by us
              and/or our affiliated companies. This website is intended only for
              personal use. Before you obtain our prior written consent, you
              shall not copy, reproduce, upload, download, transmit, modify,
              alter, decompile, reverse engineer, decode, resell or distribute
              the contents of this website or any part thereof, or for any other
              purpose.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <br />

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel7a-content"
            id="panel2a-header"
          >
            <Typography>Contact Us</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography color="#9D9D9D">
            In case you have any questions about these Terms of Use, please contact us via email at: termsofuse@revisionai.com.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Container>
    </>
  );
};

export default Termsofuse;
