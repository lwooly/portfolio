import { Box, Typography } from "@mui/material";
import React from "react";
import ProjectsList from "./ProjectsList";

const Portfolio = () => {
  return (
    <Box>
      <Typography variant="h3" component={"h2"}>
        Portfolio
      </Typography>
      <Typography variant="h4">
        Full stack development projects
      </Typography>
      <ProjectsList />
    </Box>
  );
};

export default Portfolio;
