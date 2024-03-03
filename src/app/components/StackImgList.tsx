"use client";
import React from "react";
import Image from "next/image";
import { Box, ListItem, List, useTheme } from "@mui/material";
import TooltipOffset from "./TooltipOffset";

const StackImgList = () => {
  const theme = useTheme();

  interface ImageSrc {
    title: string;
    src: string;
  }

  const techIcons: ImageSrc[] = [
    { title: "HTML", src: "html.svg" },
    { title: "CSS", src: "css.svg" },
    { title: "JavaScript", src: "js.svg" },
    { title: "TypeScript", src: "ts.svg" },
    { title: "React", src: "react.svg" },
    { title: "Redux", src: "redux.svg" },
    { title: "Node.js", src: "NodeJS-Dark.svg" },
    { title: "Next.js", src: "nextjs.svg" },
    {title: "MongoDB", src: "mongodb.svg"},
    {title:"SQL", src: "PostgreSQL-Dark.svg"}
  ];

  // map icon src to directory location

  techIcons.map((imageSrc) => {
    imageSrc.src = `/techIcons/joined/${imageSrc.src}`;
  });

  return (
    <List
      sx={{
        width: "100%",
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr",
        justifyContent: "center",
        [theme.breakpoints.up("sm")]: {
          gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr",
        },
      }}
    >
      {techIcons.map(({ title, src }, index) => (
        <ListItem
          component={"li"}
          key={index}
          sx={{
            justifyContent: "center",
            padding: "0.5em",
            [theme.breakpoints.up("sm")]: {
              "&:hover": {
                transform: "scale(1.15)",
                transition: "transform 0.5s ease-in-out",
              },
            },
          }}
        >
          <TooltipOffset title={title} placement={"bottom"}>
            <Image src={src} alt={title} width={40} height={40} />
          </TooltipOffset>
        </ListItem>
      ))}
    </List>
  );
};

export default StackImgList;
