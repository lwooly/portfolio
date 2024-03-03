import "server-only";
import { Box, Divider, IconButton, List, Stack, Typography } from "@mui/material";
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
        <ProjectSummary key={index} projectInfo={projectInfo} index={index} />
    ),
  );

  return (
    <>
      {!projectsInfoArray ? (
        <Typography variant="h4" component={"h2"} sx={{xs: '1rem', sm: '2rem'}}>
          Watch this space!
        </Typography>
      ) : (
        <List
  sx={{
    '> :nth-child(2n + 1)': {
      flexDirection: 'row-reverse',
    },
    '> :last-child': {
      mb: 0,  // Remove bottom margin
    },
  }}
>
  {projectsSummaryArr}
</List>
        
      )}
    </>
  );
};

export default ProjectsList;
