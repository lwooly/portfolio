import React from "react";
import Image from "next/image";
import { Box, ListItem, List } from "@mui/material";

const StackImgList = () => {
  const imgSrcs: string[] = [
    "html.svg",
    "css.svg",
    "js.svg",
    "ts.svg",
    "react.svg",
    "redux.svg",
    "NodeJS-Dark.svg",
    "nextjs.svg",
    "python.svg",
    "django.svg",
    "sass.svg",
    "bootstrap.svg",
    "mongodb.svg",
    "PostgreSQL-Dark.svg",
  ];
  const techIcons = imgSrcs.map((src) => {
    return `/techIcons/joined/${src}`;
  });

  return (
    <List
      style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        gap: "0.7em",
        justifyContent: "center",
      }}
    >
      {techIcons.map((src, index) => (
        <ListItem
          component={"li"}
          key={index}
          sx={{
            flexBasis: "calc(100% / 7 - 0.7em)",
            justifyContent: "center",
            // maxWidth: '50px',
            padding: "0",
            "&:hover": {
              transform: "scale(1.15) translate(0, -10px)",

              transition: "transform 0.5s ease-in-out",
            },
          }}
        >
          <Image src={src} alt={src} width={50} height={50} />
        </ListItem>
      ))}
    </List>
  );
};

export default StackImgList;
