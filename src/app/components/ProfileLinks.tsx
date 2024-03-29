"use client";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
// import ArrowButton from "./ArrowButton";
import ArrowButtonTest from "./ArrowButton";
import Link from "next/link";

interface Link {
  link: string;
  title: string;
  icon?: JSX.Element;
}

const ProfileLinks = ({
  isFooter,
  links,
  largeButtons = false,
}: {
  isFooter?: boolean;
  largeButtons?: boolean;
  links: Link[];
}) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "100%",
        display: "flex",
        gap: { xs: "0.5em", sm: "1em" },
        justifyContent: { xs: "center", md: isFooter ? "center" : "start" },
        flexShrink: 0,
        flexWrap: { xs: "nowrap", sm: "nowrap" },
        margin: "auto",
      }}
    >
      {links.map(({ link, title, icon }) => (
        <Link
          key={title}
          href={link}
          rel="noopener noreferrer"
          target="_blank"
          tabIndex={-1}
          style={{ textDecoration: "none" }}
        >
          {isFooter ? (
            <IconButton
              sx={{
                color: "white",
                fontSize: "40px",
                "&:hover": {
                  transform: "scale(1.2) translate(0, -2px)",
                  transition: "transform 0.5s ease-in-out",
                },
              }}
              aria-label="LinkedIn profile"
            >
              <Box fontSize={"40px"}>{icon}</Box>
            </IconButton>
          ) : (
            <ArrowButtonTest isLarge={largeButtons}>
              {icon && icon}
              <Typography
                variant={"body1"}
                fontWeight={500}
                sx={{
                  color: "white",
                }}
              >
                {title}
              </Typography>
            </ArrowButtonTest>
          )}
        </Link>
      ))}
    </Box>
  );
};

export default ProfileLinks;
