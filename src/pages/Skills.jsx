import React from "react";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGitAlt,
  FaBootstrap
} from "react-icons/fa";
import {
  SiExpress,
  SiMongodb,
  SiMui,
  SiTailwindcss,
  SiMysql,
  SiVite,
  SiVercel,
} from "react-icons/si";
import { Box, Typography, Grid } from "@mui/material";
import { keyframes } from "@emotion/react";

const float = keyframes`
  0% { transform: translateY(0); }
  50% { transform: translateY(-6px); }
  100% { transform: translateY(0); }
`;

const fadeIn = keyframes`
  from { opacity: 0; transform: scale(0.95); }
  to { opacity: 1; transform: scale(1); }
`;

const skills = [
  { name: "React.js", icon: <FaReact color="#61DBFB" /> },
  { name: "Node.js", icon: <FaNodeJs color="#3C873A" /> },
  { name: "Express.js", icon: <SiExpress color="#00bfff" /> },
  { name: "MongoDB", icon: <SiMongodb color="#4DB33D" /> },
  { name: "JavaScript", icon: <FaJs color="#F0DB4F" /> },
  { name: "HTML5", icon: <FaHtml5 color="#E34C26" /> },
  { name: "CSS3", icon: <FaCss3Alt color="#264de4" /> },
  { name: "Git", icon: <FaGitAlt color="#F1502F" /> },
  { name: "Bootstrap", icon: <FaBootstrap color="#563d7c" /> },
  { name: "Material UI", icon: <SiMui color="#007FFF" /> },
  { name: "Tailwind", icon: <SiTailwindcss color="#06B6D4" /> },
  { name: "MySQL", icon: <SiMysql color="#00758F" /> },
  { name: "Vite.js", icon: <SiVite color="#646CFF" /> },
  { name: "Vercel", icon: <SiVercel color="#000000" /> }
];

const Skills = () => {
  return (
    <section
      id="skills"
      style={{
        paddingTop: "10px",
        minHeight: "100vh",
        background: "linear-gradient(to right, #0f0f1c, #1e1e35)",
        color: "#fff"
      }}
    >
      <Box sx={{ maxWidth: "1200px", mx: "auto", px: 3, py: 5 }}>
        <Typography
          variant="h3"
          sx={{
            fontWeight: "bold",
            textAlign: { xs: "center", sm: "right" },
            mb: 2,
            mr: { xs: 0, sm: "40px", md: "180px" }
          }}
        >
          Skills
        </Typography>

        <Typography
          variant="subtitle1"
          sx={{
            textAlign: { xs: "center", sm: "right" },
            mb: 6,
            color: "#bbb",
            mr: { xs: 0, sm: "40px", md: "180px" }
          }}
        >
          TECHNOLOGIES I USE TO BUILD MODERN FULL-STACK WEB APPLICATIONS
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          {skills.map((skill, index) => (
            <Grid item xs={6} sm={4} md={2.4} key={index}>
              <Box
                sx={{
                  textAlign: "center",
                  p: 2,
                  animation: `${fadeIn} 0.5s ease-in-out ${index * 0.1}s both`,
                  transform: "scale(1.1)",
                  boxShadow: "2px 8px 20px rgb(250, 248, 247)",
                  borderRadius: "",
                  transition: "transform 0.4s, box-shadow 0.4s",
                  "&:hover": {
                    transform: "scale(1.15)",
                    boxShadow: "0 8px 28px rgba(0, 191, 255, 0.4)"
                  }
                }}
              >
                <Box
                  sx={{
                    fontSize: "3rem",
                    mb: 1,
                    animation: `${float} 2.5s ease-in-out infinite`,
                    transition: "color 0.3s"
                  }}
                >
                  {skill.icon}
                </Box>
                <Typography
                  variant="body1"
                  sx={{
                    color: "#00bfff",
                    fontWeight: "bold",
                    fontSize: "1.0rem"
                  }}
                >
                  {skill.name}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </section>
  );
};

export default Skills;
