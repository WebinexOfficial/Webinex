import * as React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Button,
 
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../Features/AuthSlice"; // adjust path

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Our Services", to: "/OurServices" },
  { label: "Portfolio", to: "/Portfolio" },
  { label: "Contact Us", to: "/contact" },
];


const navLinkStyle = {
  textDecoration: "none",
  color: "#fff",
  fontWeight: 500,
  fontSize: "1rem",
  transition: "0.3s",
};

export default function Navbar() {
  const navigate = useNavigate();
 
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isAuthenticated);

  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const handleLogin = () => {
    navigate("/login");
    setDrawerOpen(false);

  };

  const handleLogout = () => {
    dispatch(logout());
 
    setDrawerOpen(false);

  };

  const handleProfile = () => {
    navigate("/profile");
    setDrawerOpen(false);
  };

 

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{ backgroundColor: "#0C2228", color: "#fff", boxShadow: "none" }}
      >
        <Toolbar>
          {/* Logo on the left */}
          <Typography
            variant="h5"
            noWrap
            component={Link}
            to="/"
            sx={{
              fontWeight: 700,
              letterSpacing: 1,
              color: "#fff",
              textDecoration: "none",
            }}
          >
          <img style={{ width:"20vh"}} src="webinex-logo.png" alt="" />
          </Typography>

 
          {/* Navigation links centered (desktop only) */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              justifyContent: "center",
              flexGrow: 1,
              gap: 3,
            }}
          >
            {navLinks.map((link) => (
              <Link key={link.to} to={link.to} style={navLinkStyle}>
                {link.label}
              </Link>
            ))}
          </Box>

          {/* Right-side buttons (desktop only) */}
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 1 }}>
            
            {isLoggedIn ? (
              <Button variant="outlined" color="inherit" onClick={handleLogout}>
                Logout
              </Button>
            ) : (
              <Button variant="outlined" color="inherit" onClick={handleLogin}>
                Login
              </Button>
            )}
          </Box>


          {/* Hamburger menu (mobile only) */}
          <Box sx={{ display: { xs: "flex", md: "none" }, ml: "auto" }}>

            <IconButton
              size="large"
              edge="end"
              color="inherit"
              aria-label="menu"
              onClick={() => setDrawerOpen(true)}
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        PaperProps={{
          sx: { width: 250, backgroundColor: "#0C2228", color: "#fff" },
        }}
      >
        <Box
          sx={{
            p: 2,
            height: "100%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/* Close Button at the top */}
          <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
            <IconButton
              onClick={() => setDrawerOpen(false)}
              sx={{ color: "#fff" }}
            >
              <CloseIcon />
            </IconButton>
          </Box>

          {/* Navigation links */}
          <List>
            {navLinks.map((link) => (
              <ListItem key={link.to} disablePadding>
                <ListItemButton
                  component={Link}
                  to={link.to}
                  onClick={() => setDrawerOpen(false)}
                >
                  <ListItemText primary={link.label} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          {/* Top: Profile icon (if logged in) OR Login button (if not) */}
          <Box sx={{ mb: 2 }}>
            {isLoggedIn ? (
              <Box sx={{ mt: "auto" }}>
                <Divider
                  sx={{ borderColor: "rgba(255,255,255,0.12)", my: 1 }}
                />
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  onClick={handleLogout}
                  sx={{ fontWeight: 600, textTransform: "none" }}
                >
                  Logout
                </Button>
              </Box>
            ) : (
              <Button
                variant="contained"
                color="primary"
                fullWidth
                onClick={handleLogin}
                sx={{ fontWeight: 600, textTransform: "none" }}
              >
                Login
              </Button>
            )}
          </Box>
          <Divider sx={{ borderColor: "rgba(255,255,255,0.12)", mb: 1 }} />
        </Box>
      </Drawer>
    </Box>
  );
}