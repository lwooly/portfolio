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
  return (
    <>
      <Box
        sx={{
          width: "100%",
          marginTop: "-70px", // height of navbar
          paddingTop: "70px", // height of navbar
          // overflowY: "scroll", - set to implement slide feature.
          // scroll snapping on sections at md breakpoint
          scrollSnapType: { xs: "y proximity", md: "y mandatory" },
          // maxHeight: { md: "100vh" },
        }}
        id={id}
      >
        {children}
      </Box>
    </>
  );
};

export default ScrollPageContainer;
