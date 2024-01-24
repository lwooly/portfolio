import React, { RefObject, useEffect, useRef } from "react";
import { Box, Button, Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import { BoxProps } from "@mui/material";
import { set } from "react-hook-form";
import ProjectsTitle from "./ProjectsTitle";


//create containers for horizontal scrolling

//tall container to create vertical height for scroll
//dynamic height calculated based on width of horizontal object to scroll
interface OuterContainerProps extends BoxProps {
  dynamicHeight: number | null;
}

const TallOuterContainer: React.FC<OuterContainerProps> = ({
  dynamicHeight,
  children,
  ...boxProps
}) => {
  
  const theme = useTheme();
  
  return (
  <Box
    {...boxProps}
    sx={(theme) => ({
      [theme.breakpoints.up("md")]: {
        position: "relative",
        width: "100%",
        //   border: "3px solid red",
        height: dynamicHeight,
      },
    })}
  >
    {children}
  </Box>
)};

//sticky container to hold horizontal content
//this div is sticky so stays locked to viewport as the tall div is scrolled
const StickyInnerContainer = React.forwardRef<HTMLDivElement, BoxProps>(
  ({ children, ...boxProps }, ref) => {
  const theme = useTheme();
  return (
    <Box
      ref={ref}
      {...boxProps}
      sx={(theme) => ({
        [theme.breakpoints.up("md")]: {
          position: "sticky",
          top: "114px", //need to make this dynamic
          height: " calc(100vh - 100px)",
          width: "100%",
          overflowY: "hidden",
          overflowX: "hidden",
          // border: "solid blue",
          display: "flex",
          flexDirection: "column",
        },
      })}
    >
      {children}
    </Box>
  )
    });
StickyInnerContainer.displayName = "StickyInnerContainer";

//horizontal container which contains the project slides.
//this is moved/scrolled by the value transferX
///transfer x is calculated based on the scroll position
interface TranslateContainerProps extends BoxProps {
  translateX: number;
}

const HorizontalTranslateContainer = React.forwardRef<
  HTMLDivElement,
  TranslateContainerProps
>(({ translateX, children, ...boxProps }, ref) => {
const theme = useTheme();
return(
  <Box
    ref={ref}
    {...boxProps}
    sx={(theme) => ({
      [theme.breakpoints.up("md")]: {
        position: "absolute",
        height: "100%",
        willChange: "transform",
        transform: `translateX(${translateX}px)`,
        scrollBehavior: "smooth",
      },
    })}
  >
    {children}
  </Box>
)});
HorizontalTranslateContainer.displayName = "HorizontalTranslateContainer";

//functions to caculate inputs for horizontal scroll

//calc the height of the tall outer div based on the width of the content (horizontal translate div)

const calcHeight = (objectWidth: number) => {
  const vw = window.innerWidth;
  const vh = window.innerHeight;
  const height = objectWidth - vw + vh - 50;
  return height;
};

//sets the dynamic height - the height at which the tall div is set and saves this to state

const handleDynamicHeight = (
  objectRef: RefObject<HTMLDivElement>,
  setDynamicHeight: Function
) => {
  if (!objectRef?.current) {
    console.log("no object ref");
    return;
  }
  const objectWidth = objectRef.current.scrollWidth;
  const dynamicHeight = calcHeight(objectWidth);
  setDynamicHeight(dynamicHeight);
};

//apply a scroll listener to the sticky container to track how far it has moved.

const applyScrollListener = (
  containerRef: RefObject<HTMLDivElement>,
  setTranslateX: Function
) => {
  if (!containerRef.current) return;
  window.addEventListener("scroll", () => {
    const offsetTop = containerRef.current
      ? -containerRef.current.offsetTop
      : 0;
    //set translateX to be the distance the sticky container has moved down the tall div
    setTranslateX(offsetTop);
  });
};

const HorizontalScroll = ({ children }: { children: React.ReactNode }) => {
  const [dynamicHeight, setDynamicHeight] = React.useState(null);
  const [translateX, setTranslateX] = React.useState(0);

  const objectRef = useRef(null);
  const containerRef = useRef(null);

  const theme = useTheme();

  const resizeHandler = () => {
    handleDynamicHeight(objectRef, setDynamicHeight);
  };

  //check if window is wide enough to need horizontal scroll
  const isBreakpointMd: boolean = useMediaQuery(theme.breakpoints.up("md"));
  //apply on componenet mount

  useEffect(() => {
    handleDynamicHeight(objectRef, setDynamicHeight);
    applyScrollListener(containerRef, setTranslateX);
    window.addEventListener("resize", resizeHandler);

    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, []);

  return (
    <>
      <TallOuterContainer id={"Tall"} dynamicHeight={dynamicHeight}>
        <StickyInnerContainer ref={containerRef}>
          {/* horizontal translate div to allow for horizontal scroll */}
          <Box
            sx={(theme) => ({
              [theme.breakpoints.up("md")]: {
                position: "sticky",
                left: "0px",
                //   border: "solid orange 4px",
                display: "inline-block",
              },
            })}
          >
            <ProjectsTitle />
          </Box>
          <HorizontalTranslateContainer translateX={translateX} ref={objectRef}>
            <Box
              id={"cardcontainer"}
              sx={(theme) => ({
                [theme.breakpoints.up("md")]: {
                  display: "flex",
                  direction: "row",
                  flexWrap: "noWrap",
                  height: "100%",
                  alignItems: "center",
                  marginLeft: "50px",
                },
              })}
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
