"use client";

import React from "react";
import { Box, Divider, IconButton, Stack, Typography } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import Image from "next/image";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { ProjectInfo } from "./ProjectsList";

interface ProjectSummaryProps {
  projectInfo: ProjectInfo;
}

const ProjectSummary = ({ projectInfo }: ProjectSummaryProps) => {
  const {
    title,
    description,
    gitHubLink,
    liveDemoLink,
    projectImage: { url: homePageImageSrc },
  } = projectInfo;

  return (
    <Stack
      component={"article"}
      sx={{
        paddingBottom: "1rem",
        alignItems: "center",
        flexDirection: { xs: "column", md: "row" },
        maxWidth: {xs: '40rem', md:'100%'} ,
        margin: "auto",
        gap: "2rem",
      }}
    >
      {/* Container for project image */}
      <Box
        sx={{
          width: "100%", // Make width responsive
          maxWidth: { xs: "400px", md: "50%" }, // Limit the maximum size
          position: "relative",
          paddingBottom: "min(400px, 100%)", // Equal to width for a square aspect ratio
          borderRadius: "12.5%",
          overflow: "hidden",
          // flexGrow: 1,
          minWidth: { md: "40vw" },
          //   border: '3px solid #000',
        }}
      >
        <Image
          alt={`${title} page image`}
          src={homePageImageSrc}
          fill
          sizes="80%"
          priority
          style={{
            objectFit: "cover",
            objectPosition: "center",
          }}
        />
      </Box>
      <Box
        textAlign={"left"}
        sx={{
          display: { md: "flex" },
          flexDirection: { md: "column" },
          // minHeight: "400px",
        }}
      >
        <Typography variant="h5">{title}</Typography>
        <Typography variant="body2" sx={{ mb: "1rem" }}>
          {description}
        </Typography>
        {/* links */}
        <Stack direction={"row"} gap={2}>
          <a
            href={gitHubLink}
            rel="noopener noreferrer" target="_blank"
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
            rel="noopener noreferrer" target="_blank"
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
