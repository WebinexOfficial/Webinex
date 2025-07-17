


//updated navbar 

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
  ListItemText,
  Divider,
  useMediaQuery,
  useTheme,
  Slide,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../Features/AuthSlice"; // adjust path if needed

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Our Services", to: "/OurServices" },
  { label: "Portfolio", to: "/Portfolio" },
  { label: "Contact Us", to: "/contact" },
];

const navLinkStyle = (scrolled) => ({
  textDecoration: "none",
  color: scrolled ? "#1e293b" : "#fff", // Light text by default, dark after scroll
  fontWeight: 500,
  fontSize: "1rem",
  transition: "color 0.3s",
  padding: "0.5rem 1rem",
  borderRadius: "0.375rem",
  position: "relative",
  letterSpacing: "0.01em",
  display: "inline-block",
});

const ctaBtnStyle = (scrolled) => ({
  fontWeight: 700,
  borderRadius: "0.75rem",
  textTransform: "none",
  boxShadow: "0 2px 8px 0 rgba(37, 99, 235, 0.08)",
  fontSize: "1rem",
  padding: "0.5rem 1.5rem",
  background: scrolled ? "#2563eb" : "#FBBF24",
  color: scrolled ? "#fff" : "#212121",
  border: scrolled
    ? "2px solid #2563eb"
    : "2px solid #FBBF24",
  transition: "all 0.3s",
  "&:hover": {
    background: scrolled ? "#1e40af" : "#ffe089",
    color: scrolled ? "#fff" : "#212121",
    border: scrolled
      ? "2px solid #1e40af"
      : "2px solid #ffe089",
    boxShadow: "0 4px 24px 0 rgba(37, 99, 235, 0.10)",
  },
});

export default function Navbar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isAuthenticated);

  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const theme = useTheme();

  // Listen for scroll to set navbar background
  React.useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 32);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleLogin = () => {
    navigate("/login");
    setDrawerOpen(false);
  };

  const handleLogout = () => {
    dispatch(logout());
    setDrawerOpen(false);
  };

  // Swap logo for contrast
  const logoSrc = scrolled ? "/webinex-logo-dark.png" : "/webinex-logo-dark.png";

  return (
    <Slide in direction="down">
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          elevation={scrolled ? 4 : 0}
          position="fixed"
          sx={{
            transition: "background 0.3s, box-shadow 0.3s",
            background: scrolled ? "#fff" : "#0C2228", // dark by default, light after scroll
            color: scrolled ? "#1e293b" : "#fff",
            boxShadow: scrolled
              ? "0 2px 32px 0 rgba(37, 99, 235, 0.07)"
              : "none",
            borderBottom: scrolled
              ? "1px solid #e5e7eb"
              : "1px solid #1a2c32",
            zIndex: 1201,
          }}
        >
          <Toolbar
            sx={{
              minHeight: { xs: 64, md: 80 },
              px: { xs: 2, md: 6 },
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            {/* Logo left */}
            <Typography
              variant="h5"
              noWrap
              component={Link}
              to="/"
              sx={{
                fontWeight: 800,
                letterSpacing: "0.03em",
                color: "inherit",
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
              }}
            >
              <img
                src={logoSrc}
                alt="Webinex"
                style={{
                  width: "120px",// changed size from 156 px to 120 px
                  height: "auto",
                  transition: "filter 0.3s",
                  filter: scrolled
                    ? "none"
                    : "drop-shadow(0 2px 8px #2563eb33)",
                }}
              />
            </Typography>

            {/* Navigation links centered (desktop only) */}
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                alignItems: "center",
                gap: 2.5,
                flexGrow: 1,
                justifyContent: "center",
              }}
            >
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  style={navLinkStyle(scrolled)}
                  className={
                    scrolled
                      ? "hover:bg-blue-50 hover:text-blue-700 transition-colors duration-200"
                      : "hover:bg-gray-900 hover:text-yellow-400 transition-colors duration-200"
                  }
                >
                  {link.label}
                </Link>
              ))}
            </Box>

            {/* Right-side button(s) (desktop only) */}
            <Box sx={{ display: { xs: "none", md: "flex" }, gap: 1 }}>
              {isLoggedIn ? (
                <Button
                  variant="contained"
                  sx={ctaBtnStyle(scrolled)}
                  onClick={handleLogout}
                >
                  Logout
                </Button>
              ) : (
                <Button
                  variant="contained"
                  sx={ctaBtnStyle(scrolled)}
                  onClick={handleLogin}
                >
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
                sx={{
                  color: scrolled ? "#1e293b" : "#fff",
                  transition: "color 0.3s",
                }}
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
            sx: {
              width: 275,
              background: scrolled ? "#fff" : "#0C2228",
              color: scrolled ? "#1e293b" : "#fff",
              transition: "background 0.3s, color 0.3s",
              pt: 2,
            },
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
            {/* Close Button */}
            <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
              <IconButton
                onClick={() => setDrawerOpen(false)}
                sx={{
                  color: scrolled ? "#1e293b" : "#fff",
                  transition: "color 0.3s",
                }}
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
                    sx={{
                      borderRadius: 2,
                      "&:hover": {
                        background: scrolled
                          ? "rgba(37,99,235,0.05)"
                          : "rgba(255,255,255,0.06)",
                        color: scrolled ? "#2563eb" : "#FBBF24",
                      },
                      mx: 0.5,
                      my: 0.25,
                      py: 1,
                    }}
                  >
                    <ListItemText
                      primary={link.label}
                      primaryTypographyProps={{
                        fontWeight: 600,
                        fontSize: "1rem",
                        letterSpacing: "0.01em",
                      }}
                    />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>

            {/* Login/Logout Button */}
            <Box sx={{ mt: "auto", mb: 2 }}>
              <Divider
                sx={{
                  borderColor: scrolled
                    ? "#e5e7eb"
                    : "rgba(255,255,255,0.12)",
                  my: 1,
                }}
              />
              {isLoggedIn ? (
                <Button
                  variant="contained"
                  fullWidth
                  sx={{
                    ...ctaBtnStyle(scrolled),
                    mb: 1,
                    fontWeight: 700,
                  }}
                  onClick={handleLogout}
                >
                  Logout
                </Button>
              ) : (
                <Button
                  variant="contained"
                  fullWidth
                  sx={{
                    ...ctaBtnStyle(scrolled),
                    mb: 1,
                    fontWeight: 700,
                  }}
                  onClick={handleLogin}
                >
                  Login
                </Button>
              )}
            </Box>
          </Box>
        </Drawer>
        {/* Spacer to prevent content behind fixed navbar */}
        <Box sx={{ height: { xs: 64, md: 80 } }} />
      </Box>
    </Slide>
  );
}

 