"use client";
import { Box, useTheme } from "@mui/material";
import { ReactNode } from "react";

const handleScroll = (event) => {
  const scrollPosition = (event.target as HTMLDivElement).scrollTop;

  console.log("scroll" + name, scrollPosition);
};

const HomePagePanel = ({
  children,
  id,
}: {
  children: React.ReactNode;
  id: string;
}) => {
  return (
    <Box
      onScroll={(event) => handleScroll(event, "whole bloody page")}
      id={id}
      component={"section"}
      sx={{
        width: "100%",
        scrollSnapAlign: "start",
        height: { md: "100vh" },
        padding: {
          xs: "2em 2em 6em 2em",
          sm: "2em, 4rem 6em, 4rem",
          md: "2em 5em 2em 5em",
        }, //md: "2em 5em 6em 5em" },
        textAlign: "center",
        scrollMarginTop: "60px",
        ":nth-child(2n)": { backgroundColor: "white" },
        ":first-child": {
          paddingTop: "70px" /* height of navbar */,
          marginTop: "-70px" /* negative margin to offset the padding */,
          display: { md: "flex" },
          flexDirection: { md: "column" },
          justifyContent: { md: "space-around" },
        },
        //set 0 x padding for scroll container
        ":nth-child(3)": {
          paddingX: { md: "0" },
          height: { md: "auto" },
        },
      }}
    >
      {children}
    </Box>
  );
};

export default HomePagePanel;
