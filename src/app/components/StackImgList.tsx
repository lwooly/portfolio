"use client";
import React from "react";
import Image from "next/image";
import { Box, ListItem, List, useTheme } from "@mui/material";

const StackImgList = () => {
  const theme = useTheme();

  const imgSrcs: string[] = [
    "html.svg",
    "css.svg",
    "js.svg",
    "ts.svg",
    "react.svg",
    "redux.svg",
    "NodeJS-Dark.svg",
    "nextjs.svg",
    // "python.svg",
    // "django.svg",
    // "sass.svg",
    // "bootstrap.svg",
    // "mongodb.svg",
    // "PostgreSQL-Dark.svg",
  ];

  const techIcons = imgSrcs.map((src) => {
    return `/techIcons/joined/${src}`;
  });

  return (
    <List
      sx={{
        width: "100%",
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr 1fr",
        justifyContent: "center",
        [theme.breakpoints.up("sm")]: {
          gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr",
        },
      }}
    >
      {techIcons.map((src, index) => (
        <ListItem
          component={"li"}
          key={index}
          sx={{
            justifyContent: "center",
            padding: "0.5em",
            [theme.breakpoints.up("sm")]: {
              "&:hover": {
                transform: "scale(1.15) translate(0, -10px)",
                transition: "transform 0.5s ease-in-out",
              },
            },
          }}
        >
          <Image src={src} alt={src} width={45} height={45} />
        </ListItem>
      ))}
    </List>
  );
};

export default StackImgList;
