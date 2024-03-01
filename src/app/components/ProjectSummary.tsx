"use client";

import React from "react";
import {
  Box,
  Divider,
  IconButton,
  ListItem,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import Image from "next/image";
import { ProjectInfo } from "./ProjectsList";
import TooltipOffset from "./TooltipOffset";
import { blockStyles } from "../styles/styles";
import GitHubIcon from "@mui/icons-material/GitHub";
import ProfileLinks from "./ProfileLinks";


interface ProjectSummaryProps {
  projectInfo: ProjectInfo;
}

const ProjectSummary = ({ projectInfo }: ProjectSummaryProps) => {
  const {
    title,
    description,
    techStack,
    gitHubLink,
    liveDemoLink,
    projectImage: { url: homePageImageSrc },
  } = projectInfo;

  const projectLinks = []
  if (gitHubLink) {
    projectLinks.push({title: 'GitHub', link: gitHubLink, icon: <GitHubIcon fontSize='medium' /> })
  }
  if (liveDemoLink) {
    projectLinks.push({title: 'Live Demo', link: liveDemoLink })
  }

  return (
    <ListItem
      component={"article"}
      sx={{
        paddingBottom: "1rem",
        alignItems: "center",
        flexDirection: { xs: "column", md: "row" },
        gap: "2rem",
        ...blockStyles,
      }}
    >
      {/* Container for project image */}
      <Box  
        sx={{
          minWidth: "45%", // Make width responsive
          flex: 2,
          position: "relative",
          paddingBottom: "min(400px, 100%)", // Equal to width for a square aspect ratio
          ...blockStyles,
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
            objectPosition: "25% 50%",  
          }}
        />
      </Box>
      <Box
        textAlign={"left"}
        sx={{
          flex: 3,
          display: { md: "flex" },
          flexDirection: { md: "column" },
        }}
      >
             <Typography variant="h1" component="h3" sx={{}}>
             {title}
          </Typography>
        <Typography variant="body2" sx={{ mb: "1rem" }}>
          {description}
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "start",
          }}
        >
          {techStack.map((software) => (
            <Typography
              key={software}
              variant="body1"
              component="p"
              sx={{ mb: 1, mx: 0.5, fontWeight: "bold" }}
            >
              {software}
            </Typography>
          ))}
        </Box>
        <ProfileLinks links={projectLinks} />
      </Box>
    </ListItem>
  );
};

export default ProjectSummary;
