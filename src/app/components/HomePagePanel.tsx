"use client";
import { Box, useTheme } from "@mui/material";
import { ReactNode } from "react";

const HomePagePanel = ({ children, id }: { children: React.ReactNode, id:string }) => {

  return (
    <Box
      id={id}
      component={"section"}
      sx={{
        width: "100%",
        scrollSnapAlign: "start",
        height: {md: "100vh"},
        padding: "2em 2em 6em 2em",
        // display:'flex',
        // flexDirection:'column',
        // gap: "3rem",
        textAlign: "center",
        scrollMarginTop: '60px',
        ":nth-child(2n)": { backgroundColor:  'white'},
        ":first-child": {   paddingTop: '70px', /* use the height of your navbar */
        marginTop: '-70px', /* negative margin to offset the padding */
      },
      }}
    >
      {children}
    </Box>
  );
};

export default HomePagePanel;
