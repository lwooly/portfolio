import { Box } from "@mui/material";
import React from "react";

const LargeBPMargin = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box sx={{ margin: "auto", maxWidth: "100%", width: "80vh" }}>
      {children}
    </Box>
  );
};

export default LargeBPMargin;
