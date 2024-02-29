"use client";
import { Box, useTheme } from "@mui/material";
import { ReactNode } from "react";

const HomePagePanel = ({
  children,
  id,
}: {
  children: React.ReactNode;
  id: string;
}) => {
  return (
    <Box
      id={id}
      component={"section"}
      sx={{
        width: "100%",
        scrollSnapAlign: "start",
        height: { md: "100vh" },
        padding: {
          xs: "3em 2em 6em 2em",
          sm: "5em 6rem 5em 6rem",
          md: "5em 8rem 5em 8rem",
          lg: "5em 12rem 5em 12rem",
        },
        // textAlign: "center",
      

        ":nth-child(2n)": { backgroundColor: "white" },
        //set 0 x padding for scroll container
        ":nth-child(n+2)": {
          height: { md: "auto" },
        },
        // scroll container to have
        ":nth-child(3)": {
          paddingX: { md: "0" },
        },
      }}
    >
      {children}
    </Box>
  );
};

export default HomePagePanel;
