import { Box, Typography } from "@mui/material";
import React, { Suspense } from "react";
const ProjectsList = React.lazy(() => import("./ProjectsList"));
import ProjectsDisplay from "./ProjectsDisplay";

const PortfolioSlides = () => {

  return (
    <Box>
      <Typography variant="h3" component={"h2"}>
        Portfolio
      </Typography>
      <Typography variant="h4">Full stack development projects</Typography>
      <ProjectsDisplay component={<ProjectsList/>} />
    </Box>
  );
};

export default PortfolioSlides;
