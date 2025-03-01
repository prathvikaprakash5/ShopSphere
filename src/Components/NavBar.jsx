import * as React from "react";
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
import { Link } from "react-router-dom";

const pages = [
  { title: "Home", path: "/home" },
  { title: "About Us", path: "/about" },
  { title: "Shop", path: "/shop" },
];

function NavBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      position="static"
      elevation={1}
      sx={{ backgroundColor: "white", p: 2 }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Left Logo */}
          <Box sx={{ display: { xs: "none", md: "flex" }, mr: 2 }}>
            <img
              style={{ width: "100px", height: "100px", color: "black" }}
              src="./lo.webp"
              alt="logo"
            />
          </Box>

          {/* Title Centered */}
          <Box sx={{ flexGrow: 1, textAlign: "center" }}>
          <Typography
  variant="h1"
  sx={{
    fontFamily: "'Playfair Display', serif",
    fontWeight: "bold",
    fontStyle: "italic",
    letterSpacing: "3px",
    color: "#2C3E50",
    textShadow: "3px 3px 8px rgba(91, 104, 126, 0.57)",
    borderBottom: "2px solidrgb(204, 229, 246)",
    display: "inline-block",
    paddingBottom: "5px",
    mx: "auto",
  }}
>
 SHOPSPHERE
</Typography>

          </Box>

          {/* Right Menu Buttons */}
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 3 }}>
            {pages.map((page, index) => (
             <Button
             component={Link}
             to={page.path}
             key={index}
             onClick={handleCloseNavMenu}
             sx={{
               my: 2,
               color: "white",
               background: "linear-gradient(45deg,rgb(4, 74, 71),rgb(97, 152, 120))",
               fontWeight: "bold",
               fontSize: "18px",
               fontFamily: "'Poppins', sans-serif",
               padding: "10px 20px",
               borderRadius: "30px",
               textTransform: "uppercase",
               transition: "0.3s ease-in-out",
               "&:hover": {
                 background: "linear-gradient(45deg,rgb(39, 88, 59),rgb(53, 70, 82))",
                 transform: "scale(1.05)",
               },
             }}
           >
             {page.title}
           </Button>
           
            ))}
          </Box>

          {/* Mobile Menu */}
          <Box sx={{ display: { xs: "flex", md: "none" }, ml: "auto" }}>
            <IconButton
              size="large"
              onClick={handleOpenNavMenu}
              sx={{ color: "black" }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorElNav}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: "block", md: "none" } }}
            >
              {pages.map((page, index) => (
                <MenuItem
                  component={Link}
                  to={page.path}
                  key={index}
                  onClick={handleCloseNavMenu}
                >
                  <Typography>{page.title}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default NavBar;