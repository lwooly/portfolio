import { Typography, useTheme } from "@mui/material";
import ProfileImage from "./ProfileImage";
import Box from "@mui/material/Box";
import ProfileLinks from "./ProfileLinks";

const HeroMain = () => {
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          gap: "2em",
          paddingTop: { xs: "1em", sm: "2em", md: "3em", lg: "4em" },
          marginBottom: "4em",
          height: '100%'
        }}
      >
        <ProfileImage />
        <Box
          sx={{
            // height: "100%",
            display: { md: "flex" },
            flexDirection: { md: "column" },
            justifyContent: { md: "start" },
            height: { md: '300px' },
            textAlign: { md: "left" },
          }}
        >
          <Typography
            variant="h1"
            my={"0.3em"}
            sx={{ fontSize: { md: "3.5rem" } }}
          >
            Lloyd Woolacott
          </Typography>
          <Typography
            variant="body1"
            // fontWeight={"bold"}
          >
            About me Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </Typography>
          <Box sx={{marginTop:{md:'auto'}}}>
          <ProfileLinks color="" />
          </Box>

        </Box>
      </Box>
    </div>
  );
};

export default HeroMain;
