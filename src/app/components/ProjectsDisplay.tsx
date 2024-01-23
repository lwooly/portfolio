"use client";
import React, { Component, Suspense, useState, useEffect, useRef } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Box, Stack, styled, useTheme } from "@mui/material";
import PortfolioSlides from "./PortfolioSlides";
import { ErrorBoundary } from 'react-error-boundary';
import { BoxProps } from '@mui/material';
import HorizontalScroll from "./HorizontalScroll";


const ProjectsDisplay = ({ component }:{ component:React.ReactNode }) => {
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

  //else return horizontal scroll viewport
  return (
    <HorizontalScroll>
        {componentBoundary}
    </HorizontalScroll>
  );
};

export default ProjectsDisplay;
