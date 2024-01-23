import React, { RefObject, useEffect, useRef } from "react";
import { Box, Button, Stack, Typography } from "@mui/material";
import { BoxProps } from "@mui/material";
import { set } from "react-hook-form";
import ProjectsTitle from "./ProjectsTitle";

interface OuterContainerProps extends BoxProps {
  dynamicHeight: number | null;
}

const TallOuterContainer = React.forwardRef<
  HTMLDivElement,
  OuterContainerProps
>(({ dynamicHeight, children, ...boxProps }, ref) => (
  <Box
    ref={ref}
    {...boxProps}
    sx={{
      position: "relative",
      width: "100%",
      //   border: "3px solid red",
      height: dynamicHeight,
    }}
  >
    {children}
  </Box>
));
TallOuterContainer.displayName = "TallOuterContainer";

const StickyInnerContainer = React.forwardRef<HTMLDivElement, BoxProps>(
  ({ children, ...boxProps }, ref) => (
    <Box
      ref={ref}
      {...boxProps}
      sx={{
        position: "sticky",
        top: "75px", //need to make this dynamic
        height: " calc(100vh - 75px)",
        width: "100%",
        overflowY: "hidden",
        overflowX: "hidden",
        // border: "solid blue",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {children}
    </Box>
  )
);
StickyInnerContainer.displayName = "StickyInnerContainer";

interface TranslateContainerProps extends BoxProps {
  translateX: number;
}

const HorizontalTranslateContainer = React.forwardRef<
  HTMLDivElement,
  TranslateContainerProps
>(({ translateX, children, ...boxProps }, ref) => (
  <Box
    ref={ref}
    {...boxProps}
    sx={{
      position: "absolute",
      height: "100%",
      willChange: "transform",
      transform: `translateX(${translateX}px)`,
      scrollBehavior: "smooth",
      overflowX: "auto",
    }}
  >
    {children}
  </Box>
));
HorizontalTranslateContainer.displayName = "HorizontalTranslateContainer";

const calcHeight = (objectWidth: number) => {
  const vw = window.innerWidth;
  const vh = window.innerHeight;
  const height = objectWidth - vw + vh - 50;
  return height;
};

const handleDynamicHeight = (
  objectRef: RefObject<HTMLDivElement>,
  setDynamicHeight: Function
) => {
  if (!objectRef?.current) {
    console.log("no object ref");
    return;
  }
  const objectWidth = objectRef.current.scrollWidth;
  console.log(objectWidth);
  const dynamicHeight = calcHeight(objectWidth);
  console.log(dynamicHeight);
  setDynamicHeight(dynamicHeight);
};

const applyScrollListener = (
  stickyContainerRef: RefObject<HTMLDivElement>,
  tallContainerRef: RefObject<HTMLDivElement>,
  setTranslateX: Function
) => {
  //check refs are valid
  if (!stickyContainerRef.current) return;
  if (!tallContainerRef.current) return;

  //apply scroll listener to check offset of scroll from top of tall container
tallContainerRef.current.addEventListener("scroll", () => scrollHandler(stickyContainerRef, tallContainerRef, setTranslateX));
};

const scrollHandler = (
  stickyContainerRef: RefObject<HTMLDivElement>,
  tallContainerRef: RefObject<HTMLDivElement>,
  setTranslateX: Function
) => {
  const offsetTop = stickyContainerRef.current
    ? -stickyContainerRef.current.offsetTop
    : 0;
  setTranslateX(offsetTop);
};

const HorizontalScroll = ({ children }: { children: React.ReactNode }) => {
  const [dynamicHeight, setDynamicHeight] = React.useState(null);
  const [translateX, setTranslateX] = React.useState(0);

  console.log(translateX);

  const objectRef = useRef(null);
  const stickyContainerRef = useRef(null);
  const tallContainerRef = useRef(null);

  console.log(tallContainerRef);

  const resizeHandler = () => {
    handleDynamicHeight(objectRef, setDynamicHeight);
  };

  useEffect(() => {
    handleDynamicHeight(objectRef, setDynamicHeight);
    applyScrollListener(stickyContainerRef, tallContainerRef, setTranslateX);
    window.addEventListener("resize", resizeHandler);

    return () => {
      window.removeEventListener("resize", resizeHandler);
    //   tallContainerRef.current.removeEventListener("scroll", () => scrollHandler);
    };
  }, [objectRef, tallContainerRef, stickyContainerRef]);

  return (
    <>
      <TallOuterContainer
        id={"Tall"}
        dynamicHeight={dynamicHeight}
        ref={tallContainerRef}
      >
        <StickyInnerContainer ref={stickyContainerRef}>
          <Box
            sx={{
              position: "sticky",
              left: "0px",
              //   border: "solid orange 4px",
              display: "inline-block",
            }}
          >
            <ProjectsTitle />
          </Box>
          {/* horizontal translate div to allow for horizontal scroll */}
          <HorizontalTranslateContainer translateX={translateX} ref={objectRef}>
            <Box
              id={"cardcontainer"}
              sx={{
                display: "flex",
                direction: "row",
                flexWrap: "noWrap",
                height: "100%",
                alignItems: "center",
                marginLeft: "50px",
              }}
            >
              {children}
            </Box>
          </HorizontalTranslateContainer>
        </StickyInnerContainer>
      </TallOuterContainer>
    </>
  );
};

export default HorizontalScroll;
