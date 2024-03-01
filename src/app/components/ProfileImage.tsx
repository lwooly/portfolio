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
            "linear-gradient(128deg, rgba(191,233,255,0.5676864495798319) 35%, rgba(20,143,69,0.444437149859944) 92%)",
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
