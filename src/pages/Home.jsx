import React, { useState, useEffect } from "react";
import { Box, Button, Typography, Stack } from "@mui/material";
import { GitHub, LinkedIn } from "@mui/icons-material";
import { motion } from "framer-motion";
import { SiGmail } from "react-icons/si";
import profileImg from "../assets/profile.jpg";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3 },
  },
};

const child = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Home = () => {
  const words = ["I", "am", "SOFTWARE", "DEVELOPER"];

  const fullText = `I'm a passionate Full Stack MERN developer with experience building full stack web applications using React.js, JavaScript, Node.js, MongoDB, and Express.js. I enjoy learning new technologies and implementing them in real-world projects. I’m self-motivated, hardworking, and always ready to grow and collaborate.`;

  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      setDisplayedText((prev) => prev + fullText.charAt(index));
      index++;
      if (index === fullText.length) clearInterval(typingInterval);
    }, 18);

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <section
      id="home"
      style={{
        background: "linear-gradient(to right, #0f0f1c, #1e1e35)",
        color: "#fff",
        minHeight: "100vh",
        width: "100%",
        overflowX: "hidden",
      }}
    >
      <Box
        sx={{
          maxWidth: "1200px",
          mx: "auto",
          px: { xs: 2, sm: 3 },
          py: { xs: 8, sm: 10 },
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          alignItems: "center",
          gap: 4,
        }}
      >
        {/* LEFT SIDE */}
        <Box sx={{ flex: { xs: "1 1 100%", md: "0 0 60%" } }}>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <Typography variant="h5" sx={{ color: "#00bfff" }}>
              Hey! It's Me
            </Typography>

            <Typography
              variant="h2"
              sx={{
                fontFamily: "'Great Vibes', cursive",
                fontSize: { xs: "2.5rem", md: "4rem" },
                mt: 2,
                fontWeight: 700,
                background: "linear-gradient(to right, #00e6ff, #0072ff, #9f00ff)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                display: "inline-block",
              }}
            >
              Rohan Gaikwad
            </Typography>

            <motion.div
              variants={container}
              initial="hidden"
              animate="visible"
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "8px",
                marginTop: "16px",
              }}
            >
              {words.map((word, index) => (
                <motion.span
                  key={index}
                  variants={child}
                  style={{
                    fontSize: "clamp(1.5rem, 6vw, 3.2rem)",
                    fontFamily: "cursive",
                    color: "#fff",
                  }}
                >
                  {word}
                </motion.span>
              ))}
            </motion.div>

            <Typography variant="subtitle1" sx={{ mt: 4, mb: 1 }}>
              Follow me:
            </Typography>

            <Stack direction="row" spacing={2}>
              <a href="https://github.com/RohanGaikw" target="_blank" rel="noopener noreferrer">
                <GitHub sx={{ fontSize: 30, color: "#fff", "&:hover": { color: "#333" } }} />
              </a>
              <a href="https://www.linkedin.com/in/rohan-gaikwad-4999a7265" target="_blank" rel="noopener noreferrer">
                <LinkedIn
                  sx={{
                    fontSize: 30,
                    color: "#0077B5",
                    "&:hover": { color: "#0a66c2", transform: "scale(1.1)" },
                  }}
                />
              </a>
              <a href="mailto:gaikwadrohan8916@email.com">
                <SiGmail
                  size={30}
                  style={{
                    color: "#D14836",
                    cursor: "pointer",
                    transition: "transform 0.3s",
                  }}
                  onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
                  onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
                />
              </a>
            </Stack>

            <Stack direction="row" spacing={3} sx={{ mt: 4 }}>
              <Button
                variant="outlined"
                href="mailto:gaikwadrohan8916@email.com"
                sx={{
                  color: "#00bfff",
                  borderColor: "#00bfff",
                  borderRadius: "20px",
                }}
              >
                E-MAIL ME
              </Button>
              <Button
                variant="contained"
                href="https://drive.google.com/file/d/1ywO1kskEdXM-rR-BtjCPkyalPwAtv4GG/view?usp=sharing"
                target="_blank"
                sx={{
                  background: "#00bfff",
                  color: "#000",
                  fontWeight: "bold",
                  borderRadius: "20px",
                }}
              >
                RESUME
              </Button>
            </Stack>
          </motion.div>
        </Box>

        {/* RIGHT SIDE */}
        <Box sx={{ flex: { xs: "1 1 100%", md: "0 0 40%" }, textAlign: "center" }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <img
              src={profileImg}
              alt="Profile"
              loading="lazy"
              style={{
                width: "200px",
                height: "200px",
                borderRadius: "50%",
                objectFit: "cover",
                boxShadow: "0 0 20px rgba(0, 191, 255, 0.4)",
                marginBottom: "20px",
              }}
            />

            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: "1rem", sm: "1.1rem" },
                lineHeight: 1.8,
                maxWidth: "550px",
                margin: "0 auto",
                fontFamily: "'Dancing Script', cursive",
                color: "#ccc",
                textAlign: "left",
              }}
            >
              {displayedText}
            </Typography>
          </motion.div>
        </Box>
      </Box>
    </section>
  );
};

export default Home;