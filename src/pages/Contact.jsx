import React, { useEffect } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Grid,
  IconButton,
  Paper,
  Container,
} from "@mui/material";
import {
  GitHub,
  LinkedIn,
  Instagram,
  Facebook,
  Twitter,
  Email,
  Phone,
  LocationOn,
  WhatsApp,
} from "@mui/icons-material";
import { keyframes } from "@emotion/react";
import AOS from "aos";
import "aos/dist/aos.css";

const fadeInUp = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const socialLinks = [
  { icon: <GitHub />, color: "#333", url: "https://github.com/RohanGaikw" },
  { icon: <LinkedIn />, color: "#0077B5", url: "https://www.linkedin.com/in/rohan-gaikwad-4999a7265" },
  { icon: <Instagram />, color: "#E1306C", url: "https://instagram.com/" },
  { icon: <Facebook />, color: "#1877F2", url: "https://facebook.com/" },
  { icon: <Twitter />, color: "#1DA1F2", url: "https://twitter.com/" },
  { icon: <WhatsApp />, color: "#25D366", url: "https://wa.me/919322132972" },
];

const runText = keyframes`
  0% { transform: translateX(100%); opacity: 0 }
  20% { opacity: 1 }
  100% { transform: translateX(-100%); opacity: 0 }
`;

const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section
      id="contact"
      style={{
        background: "linear-gradient(to right, #0f0f1c, #1e1e35)",
        color: "#fff",
        padding: "40px 20px",
        minHeight: "70vh",
      }}
    >
      <Container maxWidth="lg">
        <Typography
                      variant="h3"
                      sx={{ fontWeight: "bold", textAlign: "right", mb: 2 , marginRight:"150px"}}
                    >
                     Contact Me
                    </Typography>

        <Typography
          variant="subtitle1"
        sx={{ mb: 6,   textAlign: "right" , marginRight:'150px' }}
        >
          HAVE A QUESTION OR WANT TO WORK TOGETHER? SEND ME A MESSAGE!
        </Typography>

        <Grid container spacing={6} alignItems="flex-start">
          {/* Left: Form */}
          <Grid item xs={12} md={6}>
            <Paper
              elevation={3}
              sx={{
                p: 4,
                borderRadius: 3,
                backgroundColor: "#181828",
              }}
              data-aos="fade-right"
            >
              <form action="https://formspree.io/f/your-form-id" method="POST">
                <Grid container spacing={3}>
                  {["name", "email"].map((field, i) => (
                    <Grid item xs={12} sm={6} key={i}>
                      <TextField
                        fullWidth
                        label={field.charAt(0).toUpperCase() + field.slice(1)}
                        name={field}
                        variant="outlined"
                        required
                        InputLabelProps={{ style: { color: "#bbb" } }}
                        sx={{
                          input: { color: "#fff" },
                          "& fieldset": { borderColor: "#00bfff" },
                        }}
                      />
                    </Grid>
                  ))}
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Subject"
                      name="subject"
                      variant="outlined"
                      InputLabelProps={{ style: { color: "#bbb" } }}
                      sx={{
                        input: { color: "#fff" },
                        "& fieldset": { borderColor: "#00bfff" },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Message"
                      name="message"
                      multiline
                      rows={4}
                      required
                      InputLabelProps={{ style: { color: "#bbb" } }}
                      sx={{
                        textarea: { color: "#fff" },
                        "& fieldset": { borderColor: "#00bfff" },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      type="submit"
                      variant="contained"
                      fullWidth
                      sx={{
                        backgroundColor: "#00bfff",
                        fontWeight: "bold",
                        py: 1.5,
                        borderRadius: "8px",
                        "&:hover": { backgroundColor: "#0099cc" },
                      }}
                    >
                      Send Message
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </Paper>
          </Grid>

          {/* Right: Info & Social */}
          <Grid item xs={12} md={6} data-aos="fade-left">
           <Box
  sx={{
    mb: 4,
    backgroundColor: "#1e1e35",
    p: 3,
    borderRadius: 2,
    boxShadow: "0px 4px 20px rgba(0, 191, 255, 0.1)"
  }}
>
  {/* Email */}
  <Box display="flex" alignItems="center" mb={4}>
    <Email sx={{ color: "#00bfff", mr: 2, fontSize: 28 }} />
    <Typography sx={{ color: "#ddd", fontSize: "1rem" }}>
      gaikwadrohan8916@email.com
    </Typography>
  </Box>

  {/* Phone */}
  <Box display="flex" alignItems="center" mb={4}>
    <Phone sx={{ color: "#00bfff", mr: 2, fontSize: 28 }} />
    <Typography sx={{ color: "#ddd", fontSize: "1rem" }}>
      +91 9322132972
    </Typography>
  </Box>

  {/* Location */}
  <Box display="flex" alignItems="center">
    <LocationOn sx={{ color: "#00bfff", mr: 2, fontSize: 28 }} />
    <Typography sx={{ color: "#ddd", fontSize: "1rem" }}>
      Pune, Maharashtra ,India
    </Typography>
  </Box>
</Box>

         <Typography
  variant="subtitle1"
  sx={{
    mt: 9,
    fontWeight: "bold",
    fontSize: "1.2rem",
    color: "#bbb",
    fontFamily: "'Segoe UI', sans-serif", // 'revert-layer' isn't a real font family
    textAlign: "center",
    letterSpacing: "1px",
  }}
>
  ── Connect with me ──
</Typography>

<Box
  display="flex"
  gap={4}
  flexWrap="wrap"
  sx={{
    mt: 3,
    justifyContent: "center",
    alignItems: "center",
    px: 2,
  }}
>
  {socialLinks.map((item, idx) => (
    <IconButton
      key={idx}
      href={item.url}
      target="_blank"
      sx={{
        backgroundColor: item.color,
        color: "#fff",
        width: 50,
        height: 50,
        borderRadius: "12px",
        transition: "all 0.3s ease-in-out",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
        "&:hover": {
          transform: "scale(1.1)",
          boxShadow: "0 6px 14px rgba(0, 0, 0, 0.5)",
        },
      }}
    >
      {item.icon}
    </IconButton>
  ))}
</Box>


          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default Contact;


   