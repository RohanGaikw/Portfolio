import React from "react";
import { Box, Typography, Grid, Stack } from "@mui/material";
import {
  SiJavascript,
  SiReact,
  SiMongodb,
  SiExpress,
  SiGithub,
  SiRedux,
  SiBootstrap,
  SiVercel,
} from "react-icons/si";

const About = () => {
  return (
    <section
      id="about"
      style={{
        background: "linear-gradient(to right, #0f0f1c, #1e1e35)",
        color: "#fff",
        padding: "80px 10px",
        minHeight: "100vh",
      }}
    >
      <Box
        sx={{
          maxWidth: "1200px",
          mx: "auto",
          px: { xs: 2, sm: 4, md: 6 },
        }}
      >
        <Typography
          variant="h3"
          sx={{
            fontWeight: "bold",
            textAlign: { xs: "center", md: "left" },
            mb: 2,
          }}
        >
          What I do
        </Typography>

        <Typography
          variant="subtitle1"
          sx={{
            textAlign: { xs: "center", md: "left" },
            color: "#bbb",
            mb: 6,
          }}
        >
          CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK
        </Typography>

        <Grid container spacing={6} alignItems="center">
          {/* Left image/illustration */}
          <Grid item xs={12} md={6}>
            <img
              src="/assets/developer-illustration.jpg" // 👈 Replace with your image path
              alt="developer illustration"
              style={{
                width: "100%",
                maxWidth: "500px",
                display: "block",
                margin: "auto",
              }}
            />
          </Grid>

          {/* Right content */}
          <Grid item xs={12} md={6}>
            <Typography
              variant="h5"
              sx={{ fontWeight: "bold", mb: 2, textAlign: { xs: "center", md: "left" } }}
            >
              Full Stack Development
            </Typography>

            {/* Tech Icons */}
            <Stack
              direction="row"
              spacing={2}
              flexWrap="wrap"
              justifyContent={{ xs: "center", md: "flex-start" }}
              sx={{ mb: 4 }}
            >
              {[SiReact, SiJavascript, SiExpress, SiMongodb, SiGithub, SiRedux, SiBootstrap, SiVercel].map((Icon, i) => (
                <Box
                  key={i}
                  sx={{
                    width: 50,
                    height: 50,
                    borderRadius: "50%",
                    background: "#fff",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    m: 1,
                  }}
                >
                  <Icon size={24} color="#000" />
                </Box>
              ))}
            </Stack>

            {/* Skills */}
            <Box sx={{ fontSize: "1.07rem", color: "#ccc", textAlign: { xs: "center", md: "left" } }}>
              <Typography sx={{ mb: 1 }}>
                ⚡ Building responsive Single-Page-Apps (SPA) in React.js
              </Typography>
              <Typography sx={{ mb: 1 }}>
                ⚡ Building responsive websites using React.js & Material-UI, Frame-Motion.
              </Typography>
              <Typography sx={{ mb: 1 }}>
                ⚡ Integrating RESTful APIs and dynamic frontends with MongoDB and React.
              </Typography>
              <Typography sx={{ mb: 1 }}>
                ⚡ Handling full CRUD operations with MongoDB Atlas and Express.js.
              </Typography>
              <Typography sx={{ mb: 1 }}>
                ⚡ Creating reusable React components and managing state with Redux/Context API.
              </Typography>
              <Typography>
                ⚡ Deploying responsive and optimized full stack projects on Vercel with continuous integration.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </section>
  );
};

export default About;
