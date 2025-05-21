// import * as React from 'react';
// import {
//   AppBar,
//   Box,
//   Toolbar,
//   IconButton,
//   Typography,
//   InputBase,
//   Badge,
//   MenuItem,
//   Menu,
// } from '@mui/material';
// import { styled, alpha } from '@mui/material/styles';
// import MenuIcon from '@mui/icons-material/Menu';
// import SearchIcon from '@mui/icons-material/Search';
// import AccountCircle from '@mui/icons-material/AccountCircle';
// import MailIcon from '@mui/icons-material/Mail';
// import NotificationsIcon from '@mui/icons-material/Notifications';
// import MoreIcon from '@mui/icons-material/MoreVert';
// import { Link } from 'react-router-dom';

// const Search = styled('div')(({ theme }) => ({
//   position: 'relative',
//   borderRadius: theme.shape.borderRadius,
//   backgroundColor: alpha('#073D44', 0.05),
//   '&:hover': {
//     backgroundColor: alpha('#073D44', 0.15),
//   },
//   marginRight: theme.spacing(2),
//   marginLeft: 0,
//   width: '100%',
//   [theme.breakpoints.up('sm')]: {
//     marginLeft: theme.spacing(3),
//     width: 'auto',
//   },
// }));

// const SearchIconWrapper = styled('div')(({ theme }) => ({
//   padding: theme.spacing(0, 2),
//   height: '100%',
//   position: 'absolute',
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'center',
// }));

// const StyledInputBase = styled(InputBase)(({ theme }) => ({
//   color: 'inherit',
//   '& .MuiInputBase-input': {
//     padding: theme.spacing(1, 1, 1, 0),
//     paddingLeft: `calc(1em + ${theme.spacing(4)})`,
//     transition: theme.transitions.create('width'),
//     width: '100%',
//     [theme.breakpoints.up('md')]: {
//       width: '20ch',
//     },
//   },
// }));

// export default function Navbar() {
//   const [anchorEl, setAnchorEl] = React.useState(null);
//   const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

//   const isMenuOpen = Boolean(anchorEl);
//   const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

//   const handleProfileMenuOpen = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleMobileMenuClose = () => {
//     setMobileMoreAnchorEl(null);
//   };

//   const handleMenuClose = () => {
//     setAnchorEl(null);
//     handleMobileMenuClose();
//   };

//   const handleMobileMenuOpen = (event) => {
//     setMobileMoreAnchorEl(event.currentTarget);
//   };

//   const menuId = 'primary-search-account-menu';
//   const renderMenu = (
//     <Menu
//       anchorEl={anchorEl}
//       anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
//       id={menuId}
//       keepMounted
//       transformOrigin={{ vertical: 'top', horizontal: 'right' }}
//       open={isMenuOpen}
//       onClose={handleMenuClose}
//     >
//       <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
//       <MenuItem onClick={handleMenuClose}>My account</MenuItem>
//     </Menu>
//   );

//   const mobileMenuId = 'primary-search-account-menu-mobile';
//   const renderMobileMenu = (
//     <Menu
//       anchorEl={mobileMoreAnchorEl}
//       anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
//       id={mobileMenuId}
//       keepMounted
//       transformOrigin={{ vertical: 'top', horizontal: 'right' }}
//       open={isMobileMenuOpen}
//       onClose={handleMobileMenuClose}
//     >
//       <MenuItem>
//         <IconButton size="large" aria-label="show 4 new mails" color="inherit">
//           <Badge badgeContent={4} color="error">
//             <MailIcon />
//           </Badge>
//         </IconButton>
//         <p>Messages</p>
//       </MenuItem>
//       <MenuItem>
//         <IconButton size="large" aria-label="show 17 new notifications" color="inherit">
//           <Badge badgeContent={17} color="error">
//             <NotificationsIcon />
//           </Badge>
//         </IconButton>
//         <p>Notifications</p>
//       </MenuItem>
//       <MenuItem onClick={handleProfileMenuOpen}>
//         <IconButton
//           size="large"
//           aria-label="account of current user"
//           aria-controls="primary-search-account-menu"
//           aria-haspopup="true"
//           color="inherit"
//         >
//           <AccountCircle />
//         </IconButton>
//         <p>Profile</p>
//       </MenuItem>
//     </Menu>
//   );

//   return (
//     <Box sx={{ flexGrow: 1 }}>
//       <AppBar position="static" sx={{ backgroundColor: '#0C2228', color: '#fff', boxShadow: 'none' }}>
//         <Toolbar>
//           <Typography
//             variant="h5"
//             noWrap
//             component="div"
//             sx={{ flexGrow: 1, fontWeight: 700, letterSpacing: 1 }}
//           >
//             MUI Logo
//           </Typography>

//           {/* Navigation Links */}
//           <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 3, alignItems: 'center' }}>
//             <Link to="/" style={navLinkStyle} >Home</Link>
//             <Link to="/OurServices" style={navLinkStyle}>Our Services</Link>
//             <Link to="/Portfolio" style={navLinkStyle}>Portfolio</Link>
//             <Link to="/Portfolio" style={navLinkStyle}>ContactUs</Link>
//           </Box>

//           <Search sx={{ display: { xs: 'none', md: 'flex' }, border: "1px solid #fff" }}>
//             <SearchIconWrapper>
//               <SearchIcon />
//             </SearchIconWrapper>
//             <StyledInputBase placeholder="Search…" inputProps={{ 'aria-label': 'search' }} />
//           </Search>

//           {/* Icons Section */}
//           <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 1 }}>
            
//             <IconButton
//               size="large"
//               edge="end"
//               aria-label="account of current user"
//               aria-controls={menuId}
//               aria-haspopup="true"
//               onClick={handleProfileMenuOpen}
//               color="inherit"
//             >
//               <AccountCircle />
//             </IconButton>
//           </Box>

//           {/* Mobile Menu Icon */}
//           <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
//             <IconButton
//               size="large"
//               aria-label="show more"
//               aria-controls={mobileMenuId}
//               aria-haspopup="true"
//               onClick={handleMobileMenuOpen}
//               color="inherit"
//             >
//               <MoreIcon />
//             </IconButton>
//           </Box>
//         </Toolbar>
//       </AppBar>

//       {renderMobileMenu}
//       {renderMenu}
//     </Box>
//   );
// }

// // Styled link styles
// const navLinkStyle = {
//   textDecoration: 'none',
//   color: '#fff',
//   fontWeight: 500,
//   fontSize: '1rem',
//   transition: '0.3s',
// };


 

 // src/components/Navbar.jsx
 // latedt code without mui 

// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { Menu, X } from 'lucide-react'; // or use Heroicons
// import { FaUserCircle } from 'react-icons/fa';

// export default function Navbar() {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

//   const navLinks = [
//     { name: 'Home', path: '/' },
//     { name: 'Our Services', path: '/OurServices' },
//     { name: 'Portfolio', path: '/Portfolio' },
//     { name: 'Contact Us', path: '/Contact' },
//   ];

//   return (
//     <header className="sticky top-0 z-50 bg-white shadow-sm">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-16">
//           {/* Logo */}
//           <Link to="/" className="text-2xl font-bold text-[#073D44]">
//             YourBrand
//           </Link>

//           {/* Desktop Nav Links */}
//           <nav className="hidden md:flex gap-8 items-center">
//             {navLinks.map((link) => (
//               <Link
//                 key={link.name}
//                 to={link.path}
//                 className="text-gray-700 hover:text-[#073D44] transition font-medium"
//               >
//                 {link.name}
//               </Link>
//             ))}

//             {/* Search Input */}
//             <div className="relative">
//               <input
//                 type="text"
//                 placeholder="Search..."
//                 className="border border-gray-300 rounded-full px-4 py-1 pl-10 text-sm focus:outline-none focus:border-[#073D44] transition"
//               />
//               <svg
//                 className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500"
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
//               </svg>
//             </div>

//             {/* Profile Icon */}
//             <FaUserCircle className="text-2xl text-gray-700 hover:text-[#073D44] cursor-pointer" />
//           </nav>

//           {/* Hamburger for Mobile */}
//           <div className="md:hidden">
//             <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-gray-800">
//               {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {mobileMenuOpen && (
//         <div className="md:hidden bg-white shadow-md px-4 pt-2 pb-4 space-y-2">
//           {navLinks.map((link) => (
//             <Link
//               key={link.name}
//               to={link.path}
//               className="block text-gray-700 hover:text-[#073D44] transition font-medium"
//               onClick={() => setMobileMenuOpen(false)}
//             >
//               {link.name}
//             </Link>
//           ))}

//           <div className="flex items-center gap-2 pt-2">
//             <FaUserCircle className="text-xl text-gray-700" />
//             <span className="text-sm text-gray-700">Account</span>
//           </div>
//         </div>
//       )}
//     </header>
//   );
// }



import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes, FaUserCircle } from 'react-icons/fa';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Our Services', path: '/OurServices' },
    { name: 'Portfolio', path: '/Portfolio' },
    { name: 'Contact Us', path: '/ContactUs' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 text-[#073D44] font-bold text-2xl tracking-wide">
            YourLogo
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="relative text-gray-700 hover:text-[#073D44] font-medium transition after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 hover:after:w-full after:bg-[#073D44] after:transition-all after:duration-300"
              >
                {link.name}
              </Link>
            ))}

            {/* Search */}
            <div>
              <input
                type="text"
                placeholder="Search..."
                className="border border-gray-300 rounded-full px-4 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-[#073D44]"
              />
            </div>

            {/* Profile Dropdown */}
            <div className="relative group cursor-pointer">
              <FaUserCircle className="text-2xl text-gray-700 hover:text-[#073D44]" />
              <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 shadow-lg rounded-md opacity-0 group-hover:opacity-100 scale-95 group-hover:scale-100 transition-all duration-200 pointer-events-none group-hover:pointer-events-auto z-50">
                <Link
                  to="/signup"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#F0F9F7] hover:text-[#073D44]"
                >
                  Sign Up
                </Link>
                <Link
                  to="/login"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#F0F9F7] hover:text-[#073D44]"
                >
                  Login
                </Link>
              </div>
            </div>
          </nav>

          {/* Mobile Hamburger */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? (
                <FaTimes className="text-xl text-gray-700" />
              ) : (
                <FaBars className="text-xl text-gray-700" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 px-4 py-4 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-gray-700 hover:text-[#073D44] font-medium"
            >
              {link.name}
            </Link>
          ))}

          <div className="flex flex-col gap-2 pt-2 border-t border-gray-200">
            <Link
              to="/signup"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-gray-700 hover:text-[#073D44]"
            >
              Sign Up
            </Link>
            <Link
              to="/login"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-gray-700 hover:text-[#073D44]"
            >
              Login
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
