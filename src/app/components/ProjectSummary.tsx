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

export interface ProjectSummaryProps {
  projectInfo: ProjectInfo;
}

const ProjectSummary = ({ projectInfo }: ProjectSummaryProps) => {
  const theme = useTheme();
  const { title, description, techStack, gitHubLink, liveDemoLink } =
    projectInfo;

  console.log(title);

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
        paddingBottom: "2rem",
        paddingTop: "1rem",
        marginBottom: "10rem",
        alignItems: "center",
        flexDirection: { xs: "column", md: "row" },
        gap: "2rem",
        "&:hover": {
          backgroundColor: "#ecf3ff",
        },
      }}
    >
      <Box sx={{ flex: 2, minWidth: "60%", position: "relative" }}>
        <ProjectImages projectInfo={projectInfo} />
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {techStack.map((software) => (
            <Typography
              key={software}
              variant="body1"
              component="p"
              sx={{
                mb: 1,
                mx: 0.5,
                fontWeight: "bold",
                borderRadius: "1em",
                padding: "0.5em 0.75em",
                lineHeight: "1em ",
                backgroundColor: "black", //theme.palette.primary.light,
                color: "white",
                boxShadow: " 0 0 20px lightgrey",
                margin: "3px, 3px",
                transition:'0.3s',
              }}
            >
              {software}
            </Typography>
          ))}
        </Box>
      </Box>
      {/* </Box> */}
      <Box
        sx={{
          flex: 3,
        }}
      >
        <Typography variant="h1" component="h3" sx={{ mb: "0.6em" }}>
          {title}
        </Typography>
        <Box sx={{ mb: "1.5em" }}>
          <Typography variant="h5" component={"h5"} color={"black"}>
            Details:
          </Typography>
          <Typography variant="body1" component={"p"}>
            {description}
          </Typography>
        </Box>
        <ProfileLinks links={projectLinks} largeButtons={true} />
      </Box>
    </ListItem>
  );
};

export default ProjectSummary;
