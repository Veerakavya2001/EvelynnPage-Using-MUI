import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import React from "react";
import reactlogo from "../../assests/react-logo.svg";
import "./Header.css";
import CustomizedSwitches from "../switch";
const pages = [
  { component: "demos", id: "demo" },
  { component: "Home", id: "Home" },
  { component: "Works", id: "works" },
  { component: "Services", id: "services" },
  { component: "Pricing", id: "pricing" },
  { component: "contact", id: "contact" },
];

export default function Header() {
 
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = (event,id) => {
   setAnchorElNav(null)
  };

  return (
    <>
   
    <AppBar position="static" className="header">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <img src={reactlogo} alt="logo" className="logo"/>
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="black"
              >
                <MenuIcon className="menubutton" />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "Right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "Right",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                <img src={reactlogo} alt="logo" />
                {pages.map((page) => (
                  <MenuItem   href={page.id} key={page.component} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center" className="nav-items">{page.component}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <Box className="navbars" sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages.map((page) => (
                <Button
                className="nav-items"
                 href={`#${page.id}`}
                  key={page.component}
                  onClick={(e)=>handleCloseNavMenu(e)}
                  sx={{ my: 2, color: "black", display: "block" }}
                >
                  {page.component}
                </Button>
              ))}
            </Box>
             <CustomizedSwitches/>
          
            <Box className="buttons">
              <Button variant="outlined" className="loginbutton">
                Login
              </Button>
              <Button variant="outlined" className="signupbutton">
                Sign Up
              </Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
   
    </>  
  );
}

