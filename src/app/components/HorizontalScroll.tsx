import React, { RefObject, useEffect, useRef, useContext } from "react";
import { Box, Button, Stack, Typography } from "@mui/material";
import { BoxProps } from "@mui/material";
import { set } from "react-hook-form";
import ProjectsTitle from "./ProjectsTitle";
import { ScrollContext } from "./context/Scroll.context";
import ScrollPageContainer from "./ScrollPageContainer";


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
        top: "75px", //need to make this dynamic
        height: " calc(100vh - 75px)",
        width: "100%",
        overflowY: "hidden",
        overflowX: "hidden",
        // border: "solid blue",
        display: 'flex',
        flexDirection:'column'
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
  containerRef: RefObject<HTMLDivElement>,
  scrollContainerRef:HTMLDivElement,
  setTranslateX: Function
) => {
  if (!containerRef.current) return;
  if (!scrollContainerRef) return;
  console.log(scrollContainerRef)
  scrollContainerRef.addEventListener("scroll", () => {
    const offsetTop = containerRef.current
      ? -containerRef.current.offsetTop
      : 0;
    setTranslateX(offsetTop);
  });
};

const scrollHandler = (event, name) => {
    console.log(event.target.scrollTop)
    console.log(name)
}

const HorizontalScroll = ({ children }: { children: React.ReactNode }) => {
  const [dynamicHeight, setDynamicHeight] = React.useState(null);
  const [translateX, setTranslateX] = React.useState(0);

  const objectRef = useRef(null);
  const containerRef = useRef(null);

  //get ref to scroll container which wraps full page.
  const scrollContainerRef = useContext(ScrollContext)
  const scrollContainer = scrollContainerRef.current


  console.log(scrollContainerRef)

  const resizeHandler = () => {
    handleDynamicHeight(objectRef, setDynamicHeight);
  };

//   const testScrollContainer = document.getElementById('scrollContainer')
//   console.log(testScrollContainer)

applyScrollListener(containerRef, scrollContainer, setTranslateX);

  useEffect(() => {
    handleDynamicHeight(objectRef, setDynamicHeight);
    applyScrollListener(containerRef, scrollContainer, setTranslateX);
    window.addEventListener("resize", resizeHandler);

    return () => {
        window.removeEventListener('resize', resizeHandler)
    }
    
  }, []);

  return (
    <>
      <TallOuterContainer id={"Tall"} dynamicHeight={dynamicHeight} >
        <StickyInnerContainer ref={containerRef}>
          {/* horizontal translate div to allow for horizontal scroll */}
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
          <HorizontalTranslateContainer translateX={translateX} ref={objectRef}>
            <Box
              id={"cardcontainer"}
              sx={{
                display: "flex",
                direction: "row",
                flexWrap: "noWrap",
                height: "100%",
                alignItems: "center",
                marginLeft:'50px'
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
