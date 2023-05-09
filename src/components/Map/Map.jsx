import React from "react";
import { Box } from "@mui/material";
const Map = () => {
  return (
    <>
      <Box>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d3402.9683919119957!2d74.27813027631086!3d31.470055649624975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x3919019f30000001%3A0x7ae9e70418a32fe1!2sHouse%20Number%20191%2C%20DexterSol%2C%20Block%20F2%20Block%20F%202%20Phase%201%20Johar%20Town%2C%20Lahore%2C%20Punjab%2054770%2C%20Pakistan!3m2!1d31.4700511!2d74.2807052!5e0!3m2!1sen!2s!4v1683525604748!5m2!1sen!2s"
          height="450"
          width="100%"
          style={{ borderRadius: "10px", border: "none", maxWidth: "600px" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </Box>
    </>
  );
};

export default Map;
