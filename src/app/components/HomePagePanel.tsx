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
    <Box // sets width, section ids, and alternating background colour
      id={id}
      component={"section"}
      sx={{
        width: "100%",
        paddingTop: { xs: "4rem", lg: "5rem" },
        paddingBottom: { xs: "4rem", lg: "7.5rem" },
        marginBottom:"6rem",
        ":last-child":{
          marginBottom: 0
        },
        ":nth-child(2n)": { backgroundColor: "#f5f5f5" },
      }}
    >
    {children}
    </Box>
  );
};

export default HomePagePanel;
