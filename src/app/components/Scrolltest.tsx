"use client";
import React from "react";
import { Box } from "@mui/material";

const ScrollableBox = () => {
  const handleScroll = (event) => {
    // Log the vertical scroll position
    console.log(event.target.scrollTop);
  };

  return (
    <Box
      sx={{
        width: 300,
        height: 200,
        overflowY: "auto",
        border: "1px solid #ccc",
        padding: "8px",
      }}
      onScroll={handleScroll}
    >
      {Array.from({ length: 50 }).map((_, index) => (
        <p key={index}>Item {index + 1}</p>
      ))}
    </Box>
  );
};

export default ScrollableBox;
