import { Box, Typography } from "@mui/material";
import React from "react";
import ProjectsList from "./ProjectsList";

const Portfolio = () => {
  return (
    <Box textAlign={"left"}>
      <Typography variant="h4" component={"h2"}>
        Portfolio
      </Typography>
      <Typography variant="h5" component={"h2"}>
        Full stack development projects
      </Typography>
      <ProjectsList />
    </Box>
  );
};

export default Portfolio;
