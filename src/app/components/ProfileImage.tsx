import { Box } from "@mui/material";
import Image from "next/image";
import { blockStyles } from "../styles/styles";

const ProfileImage = () => {
  return (
    <Box
      sx={{
        width: {xs: '250px', md: '300px'},
        minWidth: {xs: '250px', md: '300px'},
        height:{xs: '250px', md: '300px'},
        minHeight:{xs: '250px', md: '300px'},
        position: "relative",
        ...blockStyles
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
  );
};

export default ProfileImage;
