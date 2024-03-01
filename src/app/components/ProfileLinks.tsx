"use client";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TooltipOffset from "./TooltipOffset";
import ArrowButton from "./ArrowButton";

const links = [
  {
    link: "https://github.com/lwooly",
    title: "GitHub",
    icon: <GitHubIcon fontSize="medium" />,
  },
  {
    link: "https://www.linkedin.com/in/lloyd-woolacott-ceng-mice",
    title: "LinkedIn",
    icon: <LinkedInIcon fontSize="medium" />,
  },
];

const ProfileLinks = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: "flex",
        gap: "1em",
        justifyContent: { xs: "center", md: "start" },
      }}
    >
      {links.map(({ link, title, icon }) => (
        <a
          key={title}
          href={link}
          rel="noopener noreferrer"
          target="_blank"
          style={{ textDecoration: "none" }}
        >
          <ArrowButton backgroundColor={theme.palette.primary.main}>
            {icon}
            <Typography>{title}</Typography>
          </ArrowButton>
        </a>
      ))}
    </Box>
  );
};

export default ProfileLinks;
