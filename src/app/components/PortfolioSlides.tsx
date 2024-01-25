import { Box, Typography } from "@mui/material";
import React, { Suspense } from "react";
const ProjectsList = React.lazy(() => import("./ProjectsList"));
import ProjectsDisplay from "./ProjectsDisplay";
import { ErrorBoundary } from "react-error-boundary";
import HorizontalScroll from "./HorizontalScroll";
import ProjectsTitle from "./ProjectsTitle";

//component to lazy load ProjectsList

const PortfolioSlides = () => {
  return (
    <>
      <HorizontalScroll title={<ProjectsTitle />}>
        <ErrorBoundary fallback={<p>Something went wrong</p>}>
          <Suspense fallback={<div>Loading...</div>}>
            <ProjectsList />
          </Suspense>
        </ErrorBoundary>
      </HorizontalScroll>
    </>
  );
};

export default PortfolioSlides;
