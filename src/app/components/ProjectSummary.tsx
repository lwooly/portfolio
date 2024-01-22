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

  return (
    <Stack
      direction={"column"}
      spacing={3}
      component={"article"}
      sx={{ paddingBottom: "1rem", alignItems: "center" }}
    >
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
          priority
          style={{
            objectFit: "cover",
            objectPosition: "center",
          }}
        />
      </Box>
      <Box textAlign={"left"}>
        <Typography variant="h5">{title}</Typography>
        <Typography variant="body2" sx={{ mb: "1rem" }}>
          {description}
        </Typography>
        {/* links */}
        <Stack direction={"row"} gap={2}>
          <a
            href={gitHubLink}
            aria-label={`${title} source code`}
            style={{ textDecoration: "none" }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              {/* <Typography variant="subtitle1" fontWeight={500} component={"span"}>
                Code
              </Typography> */}
              <IconButton sx={{ padding: 0 }}>
                <GitHubIcon fontSize="large" />
              </IconButton>
            </Box>
          </a>

          <a
            href={liveDemoLink}
            aria-label={`${title} live demo`}
            style={{ textDecoration: "none" }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              {/* <Typography variant="subtitle1" fontWeight={500} component={"span"}>
                LiveDemo
              </Typography> */}
              <IconButton sx={{ padding: 0 }}>
                <OpenInNewIcon fontSize="large" />
              </IconButton>
            </Box>
          </a>
        </Stack>
      </Box>
    </Stack>
  );
};

export default ProjectSummary;
