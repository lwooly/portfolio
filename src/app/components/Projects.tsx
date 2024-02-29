import React, { Suspense } from "react";
const ProjectsList = React.lazy(() => import("./ProjectsList"));
import { ErrorBoundary } from "react-error-boundary";
import HorizontalScroll from "./HorizontalScroll";
import ProjectsTitle from "./ProjectsTitle";

//component to lazy load ProjectsList

const Projects = () => {
  return (
    <>
      <HorizontalScroll title={<ProjectsTitle />}>
        {/* <ProjectsTitle /> */}
        <ErrorBoundary fallback={<p>Something went wrong</p>}>
          <Suspense fallback={<div>Loading...</div>}>
            <ProjectsList />
          </Suspense>
        </ErrorBoundary>
      </HorizontalScroll>
    </>
  );
};

export default Projects;
