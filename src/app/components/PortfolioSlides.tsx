import { Box, Typography } from "@mui/material";
import React, { Suspense } from "react";
const ProjectsList = React.lazy(() => import("./ProjectsList"));
import ProjectsDisplay from "./ProjectsDisplay";

//component to lazy load ProjectsList

const PortfolioSlides = () => {
  return (
    <>
      <ProjectsDisplay component={<ProjectsList />} />
    </>
  );
};

export default PortfolioSlides;
