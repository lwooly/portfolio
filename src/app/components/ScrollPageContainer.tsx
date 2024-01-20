import { Height } from "@mui/icons-material";
import { Box } from "@mui/material";
import { spec } from "node:test/reporters";
import { styled } from "@mui/material";

const ScrollPageContainer = ({
  id,
  children,
}: {
  id: string;
  children: React.ReactNode;
}) => {
  const StyledContainer = styled(Box)(({ theme }) => ({
    width: "100%",
    overflowY: "scroll",
    scrollSnapType: "y proximity",
    // scroll snapping on sections at md breakpoint
    [theme.breakpoints.up("md")]: {
      scrollSnapType: "y mandatory",
      maxHeight: "100vh",
    },
  }));
  return (
    <>
      <StyledContainer id={id}>{children}</StyledContainer>
    </>
  );
};

export default ScrollPageContainer;
