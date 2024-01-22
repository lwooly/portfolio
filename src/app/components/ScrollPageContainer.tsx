"use client";
import { Height } from "@mui/icons-material";
import { Box, useTheme } from "@mui/material";
import { spec } from "node:test/reporters";
import { styled } from "@mui/material";


const ScrollPageContainer = ({
  id,
  children,
}: {
  id: string;
  children: React.ReactNode[];
}) => {

  const theme = useTheme();

  return (
    <>
      <Box
      sx={{width: "100%",
      marginTop: "-70px", // height of navbar
      paddingTop: "70px", // height of navbar
      // scrollPaddingTop: "-140px", // height of navbar
      overflowY: "scroll",
      scrollSnapType: "y proximity",
      // scroll snapping on sections at md breakpoint
      [theme.breakpoints.up("md")]: {
        scrollSnapType: "y mandatory",
        maxHeight: "100vh",
      },}}
       id={id}>{children}</Box>
    </>
  );
};

export default ScrollPageContainer;
