import { Box } from "@mui/material";
import Image from "next/image";

const ProfileImage = () => {
  return (
    <Box
    sx={{
      width: '100%',         // Make width responsive
      maxWidth: '500px',     // Limit the maximum size
      margin: 'auto',
      position: 'relative',
      paddingBottom: "min(500px, 100%)", // Equal to width for a square aspect ratio
      borderRadius: '50%', 
      overflow: 'hidden',
      border: '3px solid #000',
    }}
  >
    <Image
      alt="Lloyd Woolacott profile image"
      src={"/profile-image.jpg"}
      layout="fill"
      objectFit="cover"
      objectPosition="center"
      priority
    />
  </Box>
  
  );
};

export default ProfileImage;
