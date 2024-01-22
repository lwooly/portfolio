import { Box, Typography } from "@mui/material";
import React, { Suspense } from "react";
import Carousel from "./HorizontalScroll";
import { ErrorBoundary } from "next/dist/client/components/error-boundary";
import ProjectsDisplay from "./ProjectsDisplay";
const ProjectsList = React.lazy(() => import("./ProjectsList"));

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
