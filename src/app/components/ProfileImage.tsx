import { Box } from "@mui/material";
import Image from "next/image";
import { blockStyles } from "../styles/styles";

const ProfileImage = () => {
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
          backgroundImage:'white',
          "&:hover": {
            scaleY: "90%",
            backgroundImage:
            "radial-gradient(circle, rgba(191,233,255,0.8814119397759104) 0%, rgba(191,233,255,0.42482930672268904) 72%, rgba(255,255,255,0.7357536764705883) 100%);",
            transition: '0.35s',
            height: { xs: "240px", md: "290px" },
          },
        }}
      >
        <Image
          alt="Lloyd Woolacott profile image"
          src={"/profileimage.png"}
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
