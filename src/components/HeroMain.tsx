import { Typography } from "@mui/material";
import ProfileImage from "./ProfileImage";
import Box from "@mui/material/Box";
import ProfileLinks from "./ProfileLinks";

const HeroMain = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "1em" }}>
      <ProfileImage />
      <Box>
        <Typography variant="h1" my={"0.3em"} fontWeight={'900'}>
          Lloyd Woolacott
        </Typography>
        <Typography variant="h4" component="p" fontWeight={'bold'}>
          About me Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        </Typography>
      </Box>
      <ProfileLinks />
    </Box>
  );
};

export default HeroMain;
