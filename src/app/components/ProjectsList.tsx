import "server-only";
import { Box, Divider, IconButton, Stack, Typography } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import Image from "next/image";
import React from "react";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import ProjectSummary from "./ProjectSummary";
import { fetchProjectsFromHygraph } from "../lib/api-functions/server/hygraph";
import Carousel from "./HorizontalScroll";

export interface ProjectInfo {
  title: string;
  description: string;
  gitHubLink: string;
  liveDemoLink: string;
  techStack: string[];
  projectImage: {
    url: string;
  };
}

const ProjectsList = async () => {
  const projectsInfoArray: ProjectInfo[] = await fetchProjectsFromHygraph();

  const projectsSummaryArr = projectsInfoArray.map(
    (projectInfo: ProjectInfo, index: number) => (
      //slides at md breakpoint
      <Box
        key={index}
        sx={{
          minWidth: "80vw",
          maxWidth: "100%",
          marginX: { md: "5rem" },
        }}
      >
        <ProjectSummary projectInfo={projectInfo} />
      </Box>
    ),
  );

  return (
    <>
      {!projectsInfoArray ? (
        <Typography variant="h4" component={"h2"}>
          Watch this space!
        </Typography>
      ) : (
        projectsSummaryArr
      )}
    </>
  );
};

export default ProjectsList;
