import React, { useEffect } from "react";
import { Box, Typography, Grid, Paper, Container } from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";
import AOS from "aos";
import "aos/dist/aos.css";

const educationData = [
  {
    degree: "Master of Computer Applications (MCA)",
    institution: "Savitribai Phule Pune University",
    year: "2020 - 2025",
    grade: "First Class with Distinction",
  },
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "Savitribai Phule Pune University",
    year: "2020 - 2023",
    grade: "First Class with Distinction",
  },
  {
    degree: "HSC (Science)",
    institution: "Maharashtra State Board",
    year: "2018 - 2020",
    grade: "Passed with First Class",
  },
  {
    degree: "SSC",
    institution: "Maharashtra State Board",
    year: "2017 - 2018",
    grade: "Passed with First Class",
  },
];

const Education = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section
      id="education"
      style={{
        background: "linear-gradient(to right, #0f0f1c, #1e1e35)",
        color: "#fff",
        padding: "80px 10px",
        minHeight: "100vh",
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          sx={{ fontWeight: "bold", textAlign: "center", mb: 2 }}
        >
          Education
        </Typography>

        <Typography
          variant="subtitle1"
          sx={{
            color: "#bbb",
            textAlign: { xs: "center", md: "left" },
            mb: 5,
            ml: { md: "460px" },
          }}
        >
          MY ACADEMIC QUALIFICATIONS
        </Typography>

        <Grid container spacing={5}>
          {educationData.map((edu, index) => (
            <Grid
              item
              xs={12}
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 200}
            >
              <Paper
                elevation={6}
                sx={{
                  background: "linear-gradient(145deg, #1c1c2b, #111120)",
                  border: "1px solid #2e2e3e",
                  p: 4,
                  borderRadius: "29px",
                  display: "flex",
                  flexDirection: { xs: "column", sm: "row" },
                  alignItems: "flex-start",
                  gap: 2,
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-6px)",
                    boxShadow: "0 10px 25px rgba(0, 191, 255, 0.2)",
                  },
                }}
              >
                <SchoolIcon sx={{ color: "#00bfff", fontSize: 40, mt: 1 }} />
                <Box>
                  <Typography
                    variant="h6"
                    sx={{ color: "#fff", fontWeight: "bold", mb: 0.5 }}
                  >
                    {edu.degree}
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    sx={{ color: "#9ca3af", fontSize: "0.95rem" }}
                  >
                    {edu.institution} &nbsp; | &nbsp; {edu.year}
                  </Typography>
                  <Typography sx={{ color: "#bbb", fontSize: "0.9rem", mt: 1 }}>
                    {edu.grade}
                  </Typography>
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </section>
  );
};

export default Education;