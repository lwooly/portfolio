import React, { Suspense } from "react";
const ProjectsList = React.lazy(() => import("./ProjectsList"));
import { ErrorBoundary } from "react-error-boundary";
import HorizontalScroll from "./HorizontalScroll";
import ProjectsTitle from "./ProjectsTitle";
import { Box } from "@mui/material";

//component to lazy load ProjectsList

const Projects = () => {
  return (
    <Box sx={{ maxWidth: "67.3125rem", width: {xs:"100%", sm: "90%"}, marginX: "auto" }}>
      {/* <HorizontalScroll title={<ProjectsTitle />}> */}
      <ProjectsTitle />
      <ErrorBoundary fallback={<p>Something went wrong</p>}>
        <Suspense fallback={<div>Loading...</div>}>
          <ProjectsList />
        </Suspense>
      </ErrorBoundary>
      {/* </HorizontalScroll> */}
    </Box>
  );
};

export default Projects;
