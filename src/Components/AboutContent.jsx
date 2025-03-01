import { Box, Typography, Grid } from "@mui/material";
import React from "react";

export default function AboutContent() {
  return (
    <Box
      sx={{
        flexGrow: 1,
        p: 4,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Grid
        container
        spacing={4}
        sx={{
          background: "linear-gradient(135deg, #f3f4f6, #e2e8f0)",
          borderRadius: "20px",
          boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
          padding: "30px",
          maxWidth: "1200px",
        }}
      >
        {/* Left Side - Image */}
        <Grid item xs={12} md={6} sx={{ display: "flex", justifyContent: "center" }}>
          <img
            src="./image3.jpg"
            alt="ShopSpere"
            style={{
              width: "100%",
              maxWidth: "500px",
              height: "auto",
              borderRadius: "20px",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.15)",
            }}
          />
        </Grid>

        {/* Right Side - Content */}
        <Grid item xs={12} md={6} sx={{ display: "flex", alignItems: "center" }}>
          <Box sx={{ textAlign: "justify", px: 3 }}>
            <Typography
              variant="h3"
              sx={{
                fontWeight: "900",
                fontSize: "36px",
                color: "#333",
                mb: 1,
                textTransform: "uppercase",
                textAlign: "center",
              }}
            >
              Shop <span style={{ color: "#5a0c4a" }}>Sphere</span>
            </Typography>

            <Typography
              variant="h5"
              sx={{
                fontWeight: "700",
                color: "#5a0c4a",
                textAlign: "center",
                mb: 2,
              }}
            >
              Where Trends Meet Convenience!
            </Typography>

            <Typography
              variant="body1"
              sx={{ fontSize: "18px", color: "#444", lineHeight: 1.6 }}
            >
              Welcome to <strong>ShopSphere</strong>, your one-stop destination for *quality products at unbeatable prices*.  
              We are committed to providing a *seamless shopping experience* with a diverse range of products,  
              from *daily essentials* to the *latest trends*.
            </Typography>

            <Typography
              variant="h6"
              sx={{
                mt: 3,
                fontWeight: "bold",
                color: "#5a0c4a",
                textTransform: "uppercase",
              }}
            >
              Why Shop with Us?
            </Typography>
            <ul style={{ paddingLeft: "20px", marginTop: "10px", fontSize: "16px", color: "#333" }}>
              <li>✔ Wide Range of Products</li>
              <li>✔ Best Prices & Great Deals</li>
              <li>✔ Secure Payments & Fast Shipping</li>
              <li>✔ Dedicated Customer Support</li>
            </ul>

            <Typography
              variant="body1"
              sx={{ fontSize: "18px", color: "#444", mt: 3, lineHeight: 1.6 }}
            >
              We believe in *building lasting relationships* with our customers  
              by ensuring *top-notch service and satisfaction*.  
              Thank you for choosing <strong>ShopShere</strong> – Happy Shopping! 🎉
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}