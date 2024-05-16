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

const backgroundColors = [
  "#ecf3ff",
  "#ecf3ff",
  " #effdee",
  "#fff9e9",
  "#ffebea",
];

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
        display: { xs: "block", md: "grid" },
        gridTemplateColumns: "6fr 4fr",
        padding: { xs: "2rem 0.69rem", sm: "6rem 2rem" },
        marginBottom: { xs: "8rem", sm: "10rem" },
        marginTop: "none",
        gap: "4rem",
        backgroundColor: { xs: backgroundColors[index], sm: "white" },
        borderTop: "1px solid #dde1e6",
        borderBottom: "1px solid #dde1e6",
        borderLeft: { xs: "none", sm: "1px solid #dde1e6" },
        borderRight: { xs: "none", sm: "1px solid #dde1e6" },
        borderRadius: { xs: "none", sm: "0.7em" },
        marginY: "1em",
        overflow: "hidden",
        "&:hover": {
          backgroundColor: backgroundColors[index],
        },
      }}
    >
      <Typography
        variant="h1"
        component="h3"
        sx={{
          mb: "1rem",
          textAlign: "center",
          display: { xs: "block", md: "none" },
        }}
      >
        {title}
      </Typography>
      <Box
        sx={{
          height: "100%",
          minWidth: "60%",
          position: "relative",
          display: "flex",
          flexDirection: "column",
          justifyContent: "start",
          gap: "1.5rem",
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
          justifyContent: { xs: "center", sm: "start" },
        }}
      >
        <Typography
          variant="h1"
          component="h3"
          sx={{
            mb: "1rem",
            textAlign: { xs: "center", sm: "start" },
            display: { xs: "none", md: "block" },
          }}
        >
          {title}
        </Typography>
        <Box sx={{ mb: "1em", flex: 1 }}>
          <Typography
            variant="body1"
            component={"p"}
            sx={{
              mb: "1rem",
              pt: "1rem",
              textAlign: { xs: "center", md: "start" },
            }}
          >
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
