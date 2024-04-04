import { Typography, useTheme } from "@mui/material";
import ProfileImage from "./ProfileImage";
import Box from "@mui/material/Box";
import ProfileLinks from "./ProfileLinks";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { createProfileLinks } from "../utils/links";

const HeroMain = () => {
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "center",
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
              fontSize: "18px",
              color: "black",
              marginX: { sm: "auto" },
            }}
            fontWeight={"bold"}
          >
            Software Engineer
          </Typography>
          <Typography
            variant="body1"
            sx={{
              width: { sm: "80%", md: "100%" },
              mb: "1rem",
              fontSize: "18px",
              marginX: { sm: "auto" },
            }}
            // fontWeight={"bold"}
          >
            (TypeScript, React, Redux, Next.js, MongoDB, SQL)
          </Typography>

          <Box sx={{ marginTop: "auto" }}>
            <ProfileLinks links={createProfileLinks({ isFooter: false })} />
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default HeroMain;
