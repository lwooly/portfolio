import { Box } from "@mui/material";
import React from "react";
import ProfileLinks from "./ProfileLinks";
import { createProfileLinks } from "../utils/links";

const Footer = () => {
  return (
    <Box
      component={"footer"}
      sx={{
        backgroundColor: "#3c3c3c",
        height: "8rem",
        maxHeight: "8rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "auto",
        overflowY: "visible",
      }}
    >
      <ProfileLinks isFooter links={createProfileLinks({ isFooter: true })} />
    </Box>
  );
};

export default Footer;
