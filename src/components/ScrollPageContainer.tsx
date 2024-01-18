import { Height } from "@mui/icons-material";
import { Box } from "@mui/material";
import { spec } from "node:test/reporters";

const ScrollPageContainer = ({
  id,
  children,
}: {
  id: string;
  children: React.ReactNode;
}) => {
  return (
    <>
     <Box
      id={id}
      sx={{
        width: "100%",
        maxHeight: "100vh",
        overflowY: "scroll",
        scrollSnapType: "y mandatory",
      }}
    >
      {children}
    </Box>
    </>
  );
};

export default ScrollPageContainer;
