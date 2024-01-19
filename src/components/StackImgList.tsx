import React from "react";
import Image from "next/image";
import { Box } from "@mui/material";

const StackImgList = () => {
  const imgSrcs: string[] = [
    "html5.svg",
    "css3.svg",
    "javascript.svg",
    "typescript.svg",
    "react.svg",
    "redux.svg",
    "nodejs.svg",
    "nextjs.svg",
    "python.svg",
    "django.svg",
    "sass.svg",
    "bootstrap.svg",
    "mongodb.svg",
    "postgresql.svg",
  ];
  const techIcons = imgSrcs.map((src) => {
    return `/techIcons/${src}`;
  });

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "1em",
        justifyContent: "center",
      }}
    >
      {techIcons.map((src, index) => (
        <Box
        key={index}
          sx={{
            "&:hover": {
              transform: "scale(1.15) translate(0, -10px)",

              transition: "transform 0.5s ease-in-out",
            },
          }}
        >
          <Image  src={src} alt="" width={50} height={50} />
        </Box>
      ))}
    </div>
  );
};

export default StackImgList;
