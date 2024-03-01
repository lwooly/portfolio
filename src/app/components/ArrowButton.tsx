"use client";

import React, { ReactNode, useState } from "react";
import { Button, ButtonProps } from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import EastIcon from "@mui/icons-material/East";

// Extend the ButtonProps to include any custom props
interface ArrowButtonProps extends ButtonProps {
  children: ReactNode;
  isLarge?: boolean;
}

function ArrowButton({
  children,
  isLarge,
  ...props
}: ArrowButtonProps) {
  const [isHover, setIsHover] = useState(false);

  // Apply button styles based on isLarge prop
  const buttonSizeStyle = isLarge
  ? {
    // large btn styles
      height: "3rem",
      padding: "2rem 1rem",
      marginX: "0.5rem",
      borderRadius: "6px",
      border: "1px solid black",
      background: "black",
      fontSize: '1.2rem',
      "&:hover": {
        backgroundColor: "white",
        "& *": {
          color: "black !important",
        },
      },
    }
  : { // small btn styles
      backgroundColor: "#1976d2", //backgroundColor={theme.palette.primary.main}
      color: "white",
      "&:hover": {
        backgroundColor: "black !important",
      },
    };

  const buttonStyle = {
    display:'flex',
    gap:'0.7em',
    minHeight: '2em',
    ...buttonSizeStyle,
    ...(props.sx as object), // allow independant styling
  };

  return (
    <Button
      variant="contained"
      sx={buttonStyle}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      {...props} // Spread remaining props here
    >
      {children}
      {isHover ? (
        <EastIcon sx={{ marginLeft: "5px" }} />
      ) : (
        <ChevronRightIcon sx={{ marginRight: "5px" }} />
      )}
    </Button>
  );
}

export default ArrowButton;
