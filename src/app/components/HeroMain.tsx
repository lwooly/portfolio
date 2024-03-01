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
          paddingTop: { xs: "1em", sm: "2em" },
          marginBottom: "4em",
          height: "100%",
          maxWidth: { lg: "80%" },
          marginX: "auto",
          textAlign: { xs: "center", md: "left" },
        }}
      >
        <ProfileImage />
        <Box
          sx={{
            display: { md: "flex" },
            flexDirection: { md: "column" },
            justifyContent: "center",
            height: { md: "300px" },
          }}
        >
          <Typography
            variant="h1"
            component="h1"
            mt={"0.75em"}
            mb={"0.5em"}
            // sx={{ fontSize: { md: "3.5rem" } }}
          >
            Lloyd Woolacott
          </Typography>
          <Typography
            variant="h5"
            sx={{
              width: { sm: "80%", md: "100%" },
              // marginx: { sm: "auto", md: "none" },
              fontSize: "18px",
            }}
            fontWeight={"bold"}
          >
            Full Stack Developer | Chartered Engineer
          </Typography>
          <Typography
            variant="body1"
            sx={{
              width: { sm: "80%", md: "100%" },
              // marginx: { sm: "auto", md: "none" },
              fontSize: "18px",
            }}
            // fontWeight={"bold"}
          >
            (TypeScript, React, Redux, Next.js, MongoDB, SQL)
          </Typography>

          <Box sx={{ marginTop: "auto" }}>
            <ProfileLinks />
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default HeroMain;
