"use client";
import React, { Component, Suspense } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Box, Stack, useTheme } from "@mui/material";
import PortfolioSlides from "./PortfolioSlides";
import { ErrorBoundary } from 'react-error-boundary';

const Carousel = ({ component }:{ component:React.ReactNode }) => {
  const theme = useTheme();
  const matches: boolean = useMediaQuery(theme.breakpoints.up("md"));

  const componentBoundary = (
    <ErrorBoundary fallback={<p>Something went wrong</p>}>
      <Suspense fallback={<div>Loading...</div>}>
        {component}
      </Suspense>
    </ErrorBoundary>
  );

  //if screensize is small, return component only - no carousel
  if (!matches) {
    return (
        componentBoundary
    );
  }

  //else return carousel
  return (
    <Stack
      direction={"row"}
      sx={{
        border: "10px solid red",
        width: "80%",
        overflowX: "scroll",
        scrollSnapType: "x mandatory",
        maxWidth: "100vw",
      }}
    >
     {componentBoundary}
    </Stack>
  );
};

export default Carousel;
