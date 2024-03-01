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
        ":nth-child(2n)": { backgroundColor: "#f5f5f5" },
      }}
    >
      <Box
        sx={{

            maxWidth: "67.3125rem",
            width: "90%",
            margin: "auto",
            paddingY: "7.5rem",
          }}
        >
        {children}
      </Box>
    </Box>
  );
};

export default HomePagePanel;
