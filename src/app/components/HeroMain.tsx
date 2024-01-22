import { Typography, useTheme } from "@mui/material";
import ProfileImage from "./ProfileImage";
import Box from "@mui/material/Box";
import ProfileLinks from "./ProfileLinks";

const HeroMain = () => {

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: {xs: "column", md: "row"},
        gap: "2em",
        paddingTop: {xs: "1em", sm: "2em", md: "3em", lg: "4em"},
        marginBottom: "4em",
      }}
    >
      <ProfileImage />
      <Box>
        <Typography variant="h1" my={"0.3em"} sx={{fontSize: {md: '3.5rem'}}}>
          Lloyd Woolacott
        </Typography>
        <Typography
          variant="body1"
          // fontWeight={"bold"}
        >
          About me Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        </Typography>
        <ProfileLinks color=""/>
      </Box>

    </Box>
  );
};

export default HeroMain;
