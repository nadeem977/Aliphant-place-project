import { Container, Typography, Box } from "@mui/material";
import Navbarscomponent from "../components/Navbar2/Navbarscomponent";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useMediaQuery } from "@mui/material";
import { Link } from "react-router-dom";
import { MdKeyboardArrowRight} from 'react-icons/md'
const PrivacyPolicy = () => {
  const isLargeS6 = useMediaQuery("(max-width:600px)");

  return (
    <>
      <Navbarscomponent />

      <Container maxWidth="xl">
        <Box style={{display:'flex',alignItems:'center',marginTop:'1rem'}}>
          <Link to='/' style={{textDecoration:'none',cursor:'pointer',color:"#6D6D6D",fontWeight:'600'}}>Home</Link>
          <MdKeyboardArrowRight/>
          <Typography variant="p" color="#005494" style={{fontWeight:'600'}}>
          Privacy Policy
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
          Elephant Please Privacy Policy
        </Typography>
        <Typography
          variant="h6"
          style={{ color: "black", fontWeight: "600", margin: "2rem auto" }}
        >
          Updated November 27, 2021
        </Typography>
        <Box
          style={{
            width: isLargeS6 ? "100%" : "60%",
            margin: "auto",
            color: "#9D9D9D",
          }}
        >
          <Typography variant="body1">
            Revision AI’s Privacy Policy describes how Revision AI Limited
            (Revision AI) or its subsidiary, Elephant Please, collects, uses and
            shares your personal data.
            <br />
            <br />
            Please take a moment to familiarise yourself with our privacy
            practices, accessible via the headings below and contact us if you
            have questions.
          </Typography>
        </Box>
      </Container>

      <Container maxWidth="xl" style={{ margin: "4rem auto" }}>
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
              What Is Personal Data At Revision AI, we strongly believe in
              privacy rights – and that those rights should not differ depending
              on where you live in the world. That’s why we treat any data that
              relates to an identified or identifiable individual or that is
              linked or linkable to them by Revision AI as “personal data”, no
              matter where the individual lives. This means that data that
              directly identifies you – such as your name – is personal data,
              and also data that does not directly identify you, but that can
              reasonably be used to identify you – such as the order number – is
              personal data. Aggregated is considered non-personal data for the
              purposes of this Privacy Policy.
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
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>Privacy Rights</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography color="#9D9D9D">
              At Revision AI, we respect your ability to know, access, correct,
              transfer, restrict the processing of, and delete your personal
              data. We have provided these rights to all our customers and if
              you choose to exercise these privacy rights, you have the right
              not to be treated in a discriminatory way nor to receive a lesser
              degree of service from Revision AI. Revision AI does not sell not
              “sale” your data.
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
            <Typography>Personal Data Access and Correction</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography color="#9D9D9D">
              Under the Personal Data (Privacy) Ordinance, you are entitled to
              be informed by us whether we hold your personal data, to have
              access to such data and to correct such data if they are
              inaccurate.
              <br />
              <br />
              Any such data access request has to be made in writing and be sent
              to our Data Protection Officer by e-mail to:
              dataprivacy@revisionai.com.
              <br />
              <br />
              A reasonable fee might be charged for all data access or related
              requests.
              <br />
              <br />
              There may be situations where we cannot grant your request – for
              example, if you ask us to delete your transaction data and
              Revision AI is legally obligated to keep a record of that
              transaction to comply with law. We may also decline to grant a
              request where doing so would undermine our legitimate use of data
              for anti-fraud and security purposes, such as when you request
              deletion of an account that is being investigated for security
              concerns. Other reasons your privacy request may be denied are if
              it jeopardises the privacy of other, is frivolous or vexatious, or
              would be extremely impractical.
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
            <Typography>Personal Data Collected from You</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography color="#9D9D9D">
              Personal Data Collected from You At Revision AI, we believe that
              you can have great services with great privacy. This means that we
              strive to collect only the personal data we need. The personal
              data Revision AI collects depends on how you interact with
              Revision AI. When you create an account, rent an item, list an
              item, search for an item, leave reviews for the other party,
              connect to our services, contact us, participate in online
              questionnaires, or otherwise interact with Revision AI, we may
              collect a variety of information, including: Account Information:
              Data including, but not limited to, name, email address, account
              status, age, connected social media accounts, and profile picture
              Device Information: Data from which your device could be
              identified, such as device operating system and browser used
              Contact Information: Data such as name, email address, region of
              residence, phone number or other contact information Payment
              Information: Data about your billing address and method of
              payment, such as bank details, credit, debit, or other payment
              card information Transaction Information: Data about items rented
              or lent, or other purchases on Revision AI platforms Fraud
              Prevention Information: Data used to help identify and prevent
              fraud. Usage Data: Data about your activity on and use of our
              offerings, such as movement on our websites, including browsing
              history, search history, product interaction, crash data,
              performance, and other diagnostic data and other usage data.
              Location Information: Data such as a general approximate location.
              Government ID Data: We may ask for a government-issued ID in
              certain circumstances, including when setting up certain accounts
              or managing rentals, or as required by law. Other Information You
              Provide to Us: Details such as the content of your communications
              with Revision AI, including interactions with customer support and
              contacts through social media channels.
              <br />
              <br />
              You are not required to provide the personal data that we have
              requested. However, if you choose not to do so, in many cases we
              will not be able to provide you with our services or respond to
              requests you may have.
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
            <Typography>Personal Data Received from Other Sources</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography color="#9D9D9D">
              Revision AI may receive personal data about you from other
              individuals, from businesses or third parties acting at your
              direction, from our partners who work with us to provide our
              services and assist us in security and fraud prevention, and from
              other lawful sources. Individuals: Revision AI may collect data
              about you from other individuals – for example, if that individual
              has sent you a promo code, link to participate in Revision AI
              events or shared content with you.
              <br />
              <br />
              At Your Direction: You may direct other individuals or third
              parties to share data with Revision AI. For example, you may
              direct your social media account provider to share data about your
              account with Revision AI for an account set up. Revision AI
              Partners: We may also validate the information you provide – for
              example, when creating an account, with a third party for security
              and for fraud-prevention purposes.
              <br />
              <br />
              For research and development purposes, we may use datasets such as
              those that contain images, voices or other data that could be
              associated with an identifiable person. When acquiring such
              datasets, we do so in accordance with applicable law, including
              law in the jurisdiction in which the dataset is hosted. When using
              such datasets for research and development, we do not attempt to
              reidentify individuals who may appear therein.
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
            <Typography>Use of Personal Data</Typography>
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
            <Typography>Sharing of Personal Data</Typography>
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
            <Typography>Commitment to Your Privacy</Typography>
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
            <Typography>Privacy Questions</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography color="#9D9D9D">
              If you have questions about Revision AI’s Privacy Policy or
              privacy practices, you can contact our Data Protection Officer at
              dataprivacy@revisionai.com, we will endeavor to help.
              <br />
              <br />
              Revision AI takes your privacy questions seriously. A dedicated
              team reviews your inquiry to determine how best to respond to your
              question or concern, including those inquiries received in
              response to an access or download request. In most cases, all
              substantive contacts receive a response within seven days. In
              other cases, we may require additional information or let you know
              that we need more time to respond.
              <br />
              <br />
              Where your complaint indicates an improvement could be made in our
              handling of privacy issues, we will take steps to make such an
              update at the next reasonable opportunity. In the event that a
              privacy issue has resulted in a negative impact on you or another
              person, we will take steps to address that with you or that other
              person.
              <br />
              <br />
              If you are not satisfied with Revision AI’s response, you may
              refer your complaint to the applicable regulator. If you ask us,
              we will endeavor to provide you with information about relevant
              complaint avenues which may be applicable to your circumstances.
              <br />
              <br />
              We reserve the right to revise, change or modify this Privacy
              Policy from time to time at our sole discretion by updating this
              Privacy Policy, posting or by inserting notices located on
              particular pages at this Website to that effect. Please remember
              to visit this page from time to time to review any amendments to
              the above Privacy Policy and their effect on your use of this
              Website. Your continued use of this Website implies your
              acceptance to such amendments.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Container>
    </>
  );
};

export default PrivacyPolicy;
