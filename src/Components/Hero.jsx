import { Box, Typography } from "@mui/material";
import React from "react";
import bgimage from "../Assets/Images/image1.jpg"; // Adjust path as needed

import "@fontsource/poppins"; // Modern clean font
import "@fontsource/lobster"; // Stylish decorative font
import "@fontsource/montserrat"; // Elegant bold font

function HomePage() {
  return (
    <Box
      sx={{
        width: "1000px",
        height: "50vh",
        backgroundImage: `url(${bgimage})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        margin: "auto",
        color: "white",
      }}
    >
      {/* Title */}
      <Typography 
        variant="h2" 
        sx={{ 
          fontFamily: "'Lobster', cursive", // Fancy unique font
          fontWeight: "bold",
          letterSpacing: "2px",
          backgroundColor: "rgb(0, 0, 0)",
          padding: "15px",
          borderRadius: "12px",
          boxShadow: "0px 4px 10px rgba(26, 217, 251, 0.23)",
          width: "fit-content",
        }}
      >
        Welcome to ShopSphere
      </Typography>

      {/* Subtitle */}
      <Typography 
        variant="h5" 
        sx={{ 
          marginTop: "15px", 
          fontFamily: "'Poppins', sans-serif",
          fontWeight: 700,
          letterSpacing: "1.5px",
          backgroundColor: "rgba(16, 58, 53, 0.48)",
          padding: "12px",
          borderRadius: "10px",
          boxShadow: "0px 3px 8px rgba(250, 242, 14, 0.56)",
          width: "fit-content",
        }}
      >
       Endless Choices, Effortless Shopping
      </Typography>

      {/* Address */}
      <Typography 
        variant="h6" 
        sx={{ 
          marginTop: "25px", 
          fontFamily: "'Montserrat', sans-serif",
          fontWeight: "bold",
          color:"black",
          backgroundColor: "rgba(110, 110, 110, 0.65)",
          padding: "10px",
          borderRadius: "8px",
          width: "fit-content",
          textTransform: "uppercase",
          letterSpacing: "1px",
        }}
      >
       MANGALORE KARNATAKA INDIA
      </Typography>
    </Box>
  );
}

export default HomePage;