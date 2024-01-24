'use client'
import { Height } from "@mui/icons-material";
import { Box, useTheme } from "@mui/material";
import { spec } from "node:test/reporters";
import { styled } from "@mui/material";
import { useRef } from "react";
import { ScrollContext } from "./context/Scroll.context";

const scrollHandler = (event, name) => {
  // console.log(event.target.scrollTop)
  // console.log(name)
}

const ScrollPageContainer = ({
  id,
  children,
}: {
  id: string;
  children: React.ReactNode[];
}) => {

  const scrollContainerRef = useRef();

  return (
    <>
    <ScrollContext.Provider value={scrollContainerRef}>
      <Box 
      ref={scrollContainerRef}
      onScroll={(e) => scrollHandler(e, 'page')}
        sx={{
          width: "100%",
          marginTop: "-70px", // height of navbar
          paddingTop: "70px", // height of navbar
          overflowY: "scroll",
          scrollBehavior:'smooth',

          // scroll snapping on sections at md breakpoint

          scrollSnapType: { xs: "y proximity", md: "y mandatory" },
          maxHeight: { md: "100vh" },
        }}
        id={id}
      >
        {children}
      </Box>
      </ScrollContext.Provider>
    </>
  );
};

export default ScrollPageContainer;
