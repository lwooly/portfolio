"use client";

import React, { ReactNode, useState } from "react";
import { Button, ButtonProps } from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import EastIcon from "@mui/icons-material/East";

// Extend the ButtonProps to include any custom props
interface ArrowButtonProps extends ButtonProps {
  children: ReactNode;
  backgroundColor?: string; // Correct the type definition here
}

function ArrowButton({
  children,
  backgroundColor = "hsl(143.9deg, 75.46% 31.96%)",

  ...props
}: ArrowButtonProps) {
  const [isHover, setIsHover] = useState(false);

  // Apply the backgroundColor dynamically and spread the rest of the props
  const buttonStyle = {

    backgroundColor: backgroundColor,
    "& *": {
      color: "white !important",
    },

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
