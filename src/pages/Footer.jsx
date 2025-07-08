import React from "react";
import { Box, Typography } from "@mui/material";
import { keyframes } from "@emotion/react";

// Limited slide animation inside 200px
const runText = keyframes`
  0% { transform: translateX(100%); opacity: 0; }
  30% { opacity: 1; }
  70% { opacity: 1; }
  100% { transform: translateX(-100%); opacity: 0; }
`;

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        background: "linear-gradient(to right, #0f0f1c, #1e1e35)",
        color: "#fff",
        height: "60px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Signature container limited to 200px on right */}
      <Box
        sx={{
          position: "absolute",
          bottom: 10,
          right: 20,
          width: "200px",
          overflow: "hidden",
          height: "40px",
        }}
      >
        <Typography
          sx={{
            fontFamily: "'Great Vibes', cursive",
            fontSize: "2rem",
            fontWeight: 500,
            color: "#00bfff",
            whiteSpace: "nowrap",
            animation: `${runText} 6s linear infinite`,
            textShadow: "0 0 6px rgba(0,191,255,0.5)",
          }}
        >
          Rohan Gaikwad
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
