import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Button,
  useTheme,
  useMediaQuery,
  Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const navItems = ["Home", "About Me", "Skills", "Projects", "Contact Me"];

  const handleScroll = (id) => {
    const section = document.getElementById(id.toLowerCase().replace(" ", ""));
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setOpen(false);
  };

  return (
    <>
      <AppBar position="fixed" sx={{  background: "linear-gradient(to right, #0f0f1c, #1e1e35)", boxShadow: "none" }}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h3" sx={{ fontWeight: "bold",background: "linear-gradient(to right, #00e6ff, #0072ff, #9f00ff)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    display: "inline-block", }}>
            Portfolio
          </Typography>

          {isMobile ? (
            <>
              <IconButton color="inherit" onClick={() => setOpen(true)}>
                <MenuIcon />
              </IconButton>
              <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
                <List>
                  {navItems.map((text) => (
                    <ListItem button key={text} onClick={() => handleScroll(text)}>
                      <ListItemText primary={text} />
                    </ListItem>
                  ))}
                </List>
              </Drawer>
            </>
          ) : (
            <Box display="flex" gap={3}>
              {navItems.map((text) => (
                <Button
                  key={text}
                  sx={{
                    color: "#00bfff",
                    fontWeight: "500",
                    textTransform: "none",
                    fontSize: "1.5rem",
                    background: "linear-gradient(to right, #00e6ff, #0072ff, #9f00ff)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    display: "inline-block",
                    "&:hover": { color: "#ffffff" },
                  }}
                  onClick={() => handleScroll(text)}
                >
                  {text}
                </Button>
              ))}
            </Box>
          )}
        </Toolbar>
      </AppBar>
      <Toolbar />
    </>
  );
};

export default Navbar;
