import { Typography, useTheme } from "@mui/material";
import ProfileImage from "./ProfileImage";
import Box from "@mui/material/Box";
import ProfileLinks from "./ProfileLinks";

const HeroMain = () => {

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "2em",
        marginBottom: "4em",
      }}
    >
      <ProfileImage />
      <Box>
        <Typography variant="h1" my={"0.3em"}>
          Lloyd Woolacott
        </Typography>
        <Typography
          variant="body1"
          // fontWeight={"bold"}
        >
          About me Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        </Typography>
      </Box>
      <ProfileLinks />
    </Box>
  );
};

export default HeroMain;
