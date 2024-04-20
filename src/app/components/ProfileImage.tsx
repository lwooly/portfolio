"use client";
import { Box, useTheme } from "@mui/material";
import Image from "next/image";
import { blockStyles } from "../styles/styles";

const ProfileImage = () => {
  const theme = useTheme();

  const hoverBackground = `radial-gradient(circle, ${theme.palette.primary.light} 0%, rgba(255,255,255,0.7357536764705883) 100%);`;
  return (
    <Box
      sx={{
        width: { xs: "250px", md: "300px" },
        height: { xs: "250px", md: "300px" },
      }}
    >
      <Box
        sx={{
          width: { xs: "250px", md: "300px" },
          height: { xs: "250px", md: "300px" },
          position: "relative",
          ...blockStyles,
          backgroundImage: "white",
          "&:hover": {
            scaleY: "90%",
            backgroundImage: hoverBackground,

            transition: "0.35s",
            height: { xs: "240px", md: "290px" },
          },
        }}
      >
        <Image
          alt="Lloyd Woolacott profile image"
          src={"/lwoolyprofile.jpg"}
          priority
          fill
          sizes="50%"
          style={{
            objectFit: "cover",
            objectPosition: "center",
          }}
        />
      </Box>
    </Box>
  );
};

export default ProfileImage;
