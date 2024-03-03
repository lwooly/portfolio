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
import ProjectImages from "./ProjectImage";
import TextBlock from "./TextBlock";
import { useTheme } from "@mui/material";
import ProjectStack from "./ProjectStack";

export interface ProjectSummaryProps {
  projectInfo: ProjectInfo;
  index: number;
}

const backgroundColors = ["#ecf3ff", " #effdee", "#fff9e9", "#ffebea"];

const ProjectSummary = ({ projectInfo, index }: ProjectSummaryProps) => {
  const theme = useTheme();
  const { title, description, techStack, gitHubLink, liveDemoLink } =
    projectInfo;

  const projectLinks = [];
  if (gitHubLink) {
    projectLinks.push({
      title: "GitHub",
      link: gitHubLink,
      icon: <GitHubIcon fontSize="medium" />,
    });
  }
  if (liveDemoLink) {
    projectLinks.push({ title: "Live Demo", link: liveDemoLink });
  }

  return (
    <ListItem
      component={"article"}
      sx={{
        ...blockStyles,
        display: { xs: "block", md: "grid" },
        gridTemplateColumns: "6fr 4fr",
        padding: { xs: "1rem 0.5rem", sm: "2rem 1rem" },
        marginBottom: { xs: "3rem", sm: "10rem" },
        marginTop: "none",
        gap: "2rem",
        backgroundColor: { xs: backgroundColors[index], sm: "none" },
        "&:hover": {
          backgroundColor: backgroundColors[index],
        },
      }}
    >
      <Box
        sx={{
          height: "100%",
          minWidth: "60%",
          position: "relative",
          display: "flex",
          flexDirection: "column",
          justifyContent: "start",
          gap: "1rem",
        }}
      >
        <ProjectImages projectInfo={projectInfo} index={index} />
        <ProjectStack techStack={techStack} />
      </Box>
      {/* </Box> */}
      <Box
        sx={{
          flex: 3,
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "start",
        }}
      >
        <Typography variant="h1" component="h3" sx={{ mb: "0.3em", flex: 1 }}>
          {title}
        </Typography>
        <Box sx={{ mb: "1em", flex: 1 }}>
          <Typography variant="h5" component={"h5"} color={"black"}>
            Details:
          </Typography>
          <Typography variant="body1" component={"p"}>
            {description}
          </Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", flex: 1 }}>
          <ProfileLinks links={projectLinks} largeButtons={true} />
        </Box>
      </Box>
    </ListItem>
  );
};

export default ProjectSummary;
