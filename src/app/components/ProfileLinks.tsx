"use client";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TooltipOffset from "./TooltipOffset";
import ArrowButton from "./ArrowButton";
 

const ProfileLinks = ({ isFooter }: { isFooter?: boolean }) => {
  const theme = useTheme();

  const iconSize = isFooter ? 'inherit': 'medium'

  const links = [
    {
      link: "https://github.com/lwooly",
      title: "GitHub",
      icon: <GitHubIcon fontSize={iconSize}/>,
    },
    {
      link: "https://www.linkedin.com/in/lloyd-woolacott-ceng-mice",
      title: "LinkedIn",
      icon: <LinkedInIcon fontSize={iconSize}/>,
    },
  ];

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
          {isFooter ? (
            <IconButton
              sx={{
                color: 'white',
                fontSize: "40px",
              
                "&:hover": {
                  transform: "scale(1.2) translate(0, -2px)",

                  transition: "transform 0.5s ease-in-out",
                },
              }}
              aria-label="LinkedIn profile"
            >
             <Box fontSize={'40px'}>
              {icon}
              </Box>
            </IconButton>
          ) : (
            <ArrowButton backgroundColor={theme.palette.primary.main}>
              {icon}
              <Typography fontSize={"14px"} fontWeight={500}>
                {title}
              </Typography>
            </ArrowButton>
          )}
        </a>
      ))}
    </Box>
  );
};

export default ProfileLinks;
