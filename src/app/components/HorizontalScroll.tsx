"use client";
import React, { Component, Suspense, useState, useEffect, useRef } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Box, Stack, styled, useTheme } from "@mui/material";
import PortfolioSlides from "./PortfolioSlides";
import { ErrorBoundary } from "react-error-boundary";
import { BoxProps } from "@mui/material";
import { ref } from "yup";

//scroll functions
const calcDynamicHeight = (objectWidth) => {
  const vw = window.innerWidth;
  const vh = window.innerHeight;
  return objectWidth - vw + vh + 150;
};

const handleDynamicHeight = (ref, setDynamicHeight) => {
  if (!ref.current) return;
  const objectWidth = ref.current.scrollWidth;
  const dynamicHeight = calcDynamicHeight(objectWidth);
  setDynamicHeight(dynamicHeight);
};

const applyScrollListener = (ref, setTranslateX) => {
  if (!ref.current) return;
  window.addEventListener("scroll", () => {
    const offsetTop = -ref.current.offsetTop;
    setTranslateX(offsetTop);
  });
};




const HorizontalScroll = ({ component }: { component: React.ReactNode }) => {
  //horizontal scroll
  const [dynamicHeight, setDynamicHeight] = React.useState(null);
  const [translateX, setTranslateX] = React.useState(0);

  const containerRef = useRef(null);
  const objectRef = useRef(null);

  const resizeHandler = () => {
    handleDynamicHeight(objectRef, setDynamicHeight);
  };

  useEffect(() => {
      handleDynamicHeight(objectRef, setDynamicHeight);
      window.addEventListener("resize", resizeHandler);
      applyScrollListener(containerRef, setTranslateX);
  }, [objectRef, containerRef]);

  //else return horizontal scroll viewport
  return (
    <ErrorBoundary fallback={<p>Something went wrong</p>}>
      <Box
        sx={{
          height: `${dynamicHeight}px`,
          position: "relative",
          width: "100%",
        }}
      >
        <Box
          sx={{
            position: "sticky",
            top: 0,
            height: "100vh",
            width: "100%",
            overflowX: "hidden",
          }}
          ref={containerRef}
        >
          <Box
            sx={{
              transform: `translateX(${translateX}px)`,
              position: "absolute",
              height: "100%",
              willChange: "transform",
            }}
            // translateX={translateX}
            ref={objectRef}
          >
            <Stack direction={"row"} gap={2}>
            <Suspense fallback={<div>Loading...</div>}>
            {component}
            </Suspense>
            </Stack>
          </Box>
        </Box>
      </Box>
    </ErrorBoundary>
  );
};

export default HorizontalScroll;

{
  /* // <Stack
    //   direction={"row"}
    //   sx={{
    //     border: "10px solid red",
    //     width: "100%",

    //     maxWidth: "100vw",
    //     maxHeight: "100vh",
    //     paddingTop: '2rem',
    //   }}
    // >

    // </Stack> */
}
