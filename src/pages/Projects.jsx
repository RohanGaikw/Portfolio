import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  Container,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Box,
  Chip,
  IconButton
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LanguageIcon from "@mui/icons-material/Language";
import StudentJob from '../assets/StudentJob.png';
import NotesAPP from '../assets/NotesApp.jpg';
import RealMap from '../assets/RealMap.png';
import WeatherApp from '../assets/WeatherApp.jpg';
import TravelBooking from '../assets/TravelBook.png';
import Amazon from '../assets/Amazon.jpg';
import oms from '../assets/oms.png'; // Assuming you have an image for oms

const projectData = [
  {
    title: "Student job Tracker",
    description:
      "Track student job applications with ease — manage roles, statuses, and updates all in one place.",
    image: StudentJob,
    tech: ["MERN", "CRUD", "BootStrap", ],
    github: "https://github.com/RohanGaikw/Student_Job_tracker",
    live: "https://student-job-tracker-fpti.vercel.app/"
  },
  {
    title: "Notes App",
    description:
      "A simple and effective app to create, manage, and organize your notes. Supports full CRUD operations and a sleek UI.",
    image: NotesAPP,
    tech: ["MERN", "CRUD","BootStrap"],
    github: "https://github.com/RohanGaikw/Notes-app",
    live: "https://notes-app-s1fw.vercel.app/"
  },
  {
    title: "Real Map",
    description:
      "Connect with professionals, search jobs, and network by skills or location.Connect with professionals, search jobs",
    image: RealMap,
    tech: ["Reactjs", "Hooks Concept", "Bootstrap"],
    github: "https://github.com/RohanGaikw/real-map",
    live: "https://real-map.vercel.app/"
  },
  {
    title: "Weather App",
    description:
      "Get real-time weather forecasts and conditions by city search. Intuitive UI with dynamic weather icons and responsive layout.",
    image: WeatherApp,
    tech: ["Reactjs", "Geolocation", "Bootstrap"],
    github: "https://github.com/RohanGaikw/real-map",
    live: "https://real-map.vercel.app/"
  },
  {
    title: "Travel Booking System",
    description:
      "A platform for users to explore and book travel destinations with date selection, secure booking, and admin management.",
    image: TravelBooking,
    tech: ["MERN", "CRUD", "Bootstrap" , "JWT"],
    github: "https://github.com/RohanGaikw/Travel_Booking_System",
    live: "https://travel-booking-system-xh15.vercel.app/"
  },
  {
    title: "Online Mens Wear Shop",
    description:
      "The Online Men's Wear Shop Application allows users to sign up or log in, browse and search men's clothing.",
    image: oms,
    tech: ["Node js","js", "Html", "Css" , "MysQL"],
    github: "https://github.com/RohanGaikw/Online-Mens-Wear-Shop-Application",
    live: ""
  },
  {
    title: "Amazon Clone",
    description:
      "A responsive clone of Amazon’s homepage built purely using HTML and CSS.",
    image: Amazon,
    tech: ["Html","Css"],
    github: "https://github.com/RohanGaikw/Amazone-Clone",
    live: "https://amazone-clone-ruby.vercel.app/"
  }
  // Add more projects here
];

const Projects = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section
      id="projects"
      style={{
        background: "linear-gradient(to right, #0f0f1c, #1e1e35)",
        color: "#fff",
        padding: "80px 20px",
        minHeight: "100vh"
      }}
    >
      <Container>
     <Typography
               variant="h3"
               sx={{ fontWeight: "bold", textAlign: "left", mb: 2 , marginLeft:"150px"}}
             >
              Projects
             </Typography>

        <Typography
          variant="body1"
          sx={{ mb: 6, maxWidth: "700px",  textAlign: "left" , marginLeft:'150px' }}
        >
          SOME OF MY WORKS THAT I’VE BUILT USING DIFFERENT TECH STACKS
        </Typography>

        <Grid container spacing={5}>
          {projectData.map((project, idx) => (
            <Grid item xs={12} sm={6} md={4} key={idx} data-aos="fade-up">
              <Card
                sx={{
                  background: `linear-gradient(135deg, #1f2937, #0f172a)`,
                  color: "#fff",
                  borderRadius: 3,
                  transition: "transform 0.4s",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.4)",
                  "&:hover": {
                    transform: "scale(1.05)",
                    background: "linear-gradient(135deg, #1e40af, #111827)"
                  }
                }}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image={project.image}
                  alt={project.title}
                />
                <CardContent>
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                  >
                    <Typography variant="h6">{project.title}</Typography>
                    <Box>
                      <IconButton
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{ color: "#38bdf8" }}
                      >
                        <GitHubIcon />
                      </IconButton>
                      <IconButton
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{ color: "#38bdf8" }}
                      >
                        <LanguageIcon />
                      </IconButton>
                    </Box>
                  </Box>
                  <Typography variant="body2" sx={{ mt: 1, mb: 2 }}>
                    {project.description}
                  </Typography>
                  <Box display="flex" flexWrap="wrap" gap={1}>
                    {project.tech.map((tag, i) => (
                      <Chip
                        key={i}
                        label={`#${tag}`}
                        size="small"
                        sx={{
                          bgcolor: "#334155",
                          color: "#38bdf8",
                          fontWeight: "bold"
                        }}
                      />
                    ))}
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </section>
  );
};

export default Projects;   