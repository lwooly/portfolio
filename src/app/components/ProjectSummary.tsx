"use client";

import React from "react";
import { Box, Divider, IconButton, Stack, Typography } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import Image from "next/image";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

export interface ProjectInfo {
  projectInfo: {
    title: string;
    description: string;
    gitHubLink: string;
    liveDemoLink: string;
    projectImage: {
      url: string;
    };
  };
}

const ProjectSummary = ({ projectInfo }: ProjectInfo) => {
  const {
    title,
    description,
    gitHubLink,
    liveDemoLink,
    projectImage: { url: homePageImageSrc },
  } = projectInfo;

  console.log(title, `project summary title`);
  return (
    <Stack direction={"column"} spacing={1} component={"article"}>
      <Box textAlign={"center"}>
        <Typography variant="h5" component={"h3"}>
          {title}
        </Typography>
        <Typography variant="body1" component="p" sx={{ marginTop: "1em" }}>
          {description}
        </Typography>
        <Stack direction={"row"} justifyContent={"center"}>
          <a href={gitHubLink} aria-label={`${title} source code`}>
            <Stack direction={"row"} spacing={1}>
              <Typography variant="h4" component={"span"}>
                Code
              </Typography>
              <IconButton>
                <GitHubIcon fontSize="medium" />
              </IconButton>
            </Stack>
          </a>
          <a href={liveDemoLink} aria-label={`${title} live demo`}>
            <Stack direction={"row"} spacing={1}>
              <Typography variant="h4" component={"span"}>
                LiveDemo
              </Typography>
              <IconButton>
                <OpenInNewIcon fontSize="medium" />
              </IconButton>
            </Stack>
          </a>
        </Stack>
      </Box>
      {/* Container for project image */}
      <Box
        sx={{
          width: "100%", // Make width responsive
          maxWidth: "400px", // Limit the maximum size
          position: "relative",
          paddingBottom: "min(400px, 100%)", // Equal to width for a square aspect ratio
          borderRadius: "12.5%",
          overflow: "hidden",
          //   border: '3px solid #000',
        }}
      >
        <Image
          alt={`${title} page image`}
          src={homePageImageSrc}
          fill
          sizes="100vw"
          style={{
            objectFit: "cover",
            objectPosition: "center",
          }}
        />
      </Box>
    </Stack>
  );
};

export default ProjectSummary;
