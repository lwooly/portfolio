import { Box, Typography } from "@mui/material";
import React, { Suspense } from "react";
const ProjectsList = React.lazy(() => import("./ProjectsList"));

const Portfolio = () => {
  return (
    <Box>
      <Typography variant="h3" component={"h2"}>
        Portfolio
      </Typography>
      <Typography variant="h4">Full stack development projects</Typography>
      <Suspense fallback={<Box>Loading...</Box>}>
        <ProjectsList />
      </Suspense>
    </Box>
  );
};

export default Portfolio;
