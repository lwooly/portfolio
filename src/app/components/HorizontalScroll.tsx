import React, { RefObject, useEffect, useRef } from "react";
import { Box, Button,  Stack, Typography } from "@mui/material";
import { BoxProps } from "@mui/material";
import { set } from "react-hook-form";
import ProjectsTitle from "./ProjectsTitle";

interface OuterContainerProps extends BoxProps {
  dynamicHeight: number | null;
}

const TallOuterContainer: React.FC<OuterContainerProps> = ({
  dynamicHeight,
  children,
  ...boxProps
}) => (
  <Box
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
);

const StickyInnerContainer = React.forwardRef<HTMLDivElement, BoxProps>(
  ({ children, ...boxProps }, ref) => (
    <Box
      ref={ref}
      {...boxProps}
      sx={{
        position: "sticky",
        top: '190px',
        height: "100vh",
        width: "100%",
        overflowX: "hidden",
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
      scrollBehavior: 'smooth'
    }}
  >
    {children}
  </Box>
));
HorizontalTranslateContainer.displayName = "HorizontalTranslateContainer";

const calcHeight = (objectWidth: number) => {
  const vw = window.innerWidth;
  const vh = window.innerHeight;
  const height = objectWidth - vw + vh + 100;
  return height;
};

const handleDynamicHeight = (
  objectRef: RefObject<HTMLDivElement>,
  setDynamicHeight: Function
) => {
  if (!objectRef?.current) {
    console.log('no object ref')
    return;
  }
  const objectWidth = objectRef.current.scrollWidth;
  console.log(objectWidth)
  const dynamicHeight = calcHeight(objectWidth);
  console.log(dynamicHeight)
  setDynamicHeight(dynamicHeight);
};

const applyScrollListener = (
  containerRef: RefObject<HTMLDivElement>,
  setTranslateX: Function
) => {
  if (!containerRef.current) return;
  window.addEventListener("scroll", () => {
    const offsetTop = containerRef.current
      ? -containerRef.current.offsetTop
      : 0;
    setTranslateX(offsetTop);
  });
};

const HorizontalScroll = ({ children }: { children: React.ReactNode }) => {
  const [dynamicHeight, setDynamicHeight] = React.useState(null);
  const [translateX, setTranslateX] = React.useState(0);

  const objectRef = useRef(null);
  console.log(objectRef.current)
  const containerRef = useRef(null);

  const resizeHandler = () => {
    handleDynamicHeight(objectRef, setDynamicHeight);
  };

  useEffect(() => {
    handleDynamicHeight(objectRef, setDynamicHeight);
    applyScrollListener(containerRef, setTranslateX);
    window.addEventListener("resize", resizeHandler);
  }, [objectRef, containerRef]);

  

  return (
    <>
    <Box sx={{position:'sticky', top:'125px'}}>
    <ProjectsTitle />
    </Box>
    <TallOuterContainer id={'Tall'} dynamicHeight={dynamicHeight}>
      {/* sticky inner div to allow for horizontal scroll */}
      <StickyInnerContainer ref={containerRef}>
        {/* horizontal translate div to allow for horizontal scroll */}
        <HorizontalTranslateContainer translateX={translateX} ref={objectRef}>
          <Box id={'cardcontainer'} sx={{display:'flex', direction:'row', flexWrap:'noWrap', height:'100%', alignItems:'center'}}>{children}</Box>
        </HorizontalTranslateContainer>
      </StickyInnerContainer>
    </TallOuterContainer>
    </>
  );
};

export default HorizontalScroll;
