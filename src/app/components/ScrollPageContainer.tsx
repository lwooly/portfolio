import { Box } from "@mui/material";

// Not used

const ScrollPageContainer = ({
  id,
  children,
}: {
  id: string;
  children: React.ReactNode[];
}) => {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          marginTop: "-70px", // height of navbar
          paddingTop: "70px", // height of navbar
          overflowY: "scroll", //- set to implement slide feature.
          scrollBehavior: "smooth",
          // scroll snapping on sections at md breakpoint
          scrollSnapType: { xs: "y proximity", md: "y mandatory" },
          height: { md: "100vh" },
        }}
        id={id}
      >
        {children}
      </Box>
    </>
  );
};

export default ScrollPageContainer;
