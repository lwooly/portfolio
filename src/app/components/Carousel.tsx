"use client";
import React from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Box, Stack, useTheme } from "@mui/material";
import PortfolioSlides from "./PortfolioSlides";

const Carousel = ({ children }: { children: React.ReactNode }) => {
  const theme = useTheme();
  const matches: boolean = useMediaQuery(theme.breakpoints.up("md"));

  //if screensize is small, return children only - no carousel
  if (!matches) {
    return <>{children}</>;
  }

  if (!children) {
    return <Box>Loading...</Box>;
  }
  //else return carousel
  return (
    <Stack
      direction={"row"}
      sx={{
        width: "80%",
        overflowX: "scroll",
        scrollSnapType: "x mandatory",
        maxWidth: "100vw",
      }}
    >
      {React.Children.map(children, (child, index) => {
        return <Box key={index}>{child}</Box>;
      })}
    </Stack>
  );
};

export default Carousel;
