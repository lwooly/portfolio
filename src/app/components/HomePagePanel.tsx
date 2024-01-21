"use client";
import { Box, useTheme } from "@mui/material";
import { ReactNode } from "react";

const HomePagePanel = ({ children }: { children: React.ReactNode }) => {
  const theme = useTheme();

  return (
    <Box
      component={"section"}
      sx={{
        width: "100%",
        scrollSnapAlign: "start",
        padding: "2em 2em 6em 2em",
        // display:'flex',
        // flexDirection:'column',
        // gap: "3rem",
        textAlign: "center",
        ":nth-child(2n)": { backgroundColor: theme.palette.common.white },
        [theme.breakpoints.up("md")]: {
          height: "100vh",
        },
      }}
    >
      {children}
    </Box>
  );
};

export default HomePagePanel;
