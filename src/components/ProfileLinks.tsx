import GitHubIcon from "@mui/icons-material/GitHub";
import { Box, IconButton } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const ProfileLinks = () => {
  return (
    <Box sx={{ display: "flex", gap: "1em", justifyContent:"center"}}>
      <a href="https://github.com/lwooly" aria-label="Github profile">
        <IconButton>
          <GitHubIcon fontSize="large"/>
        </IconButton>
      </a>
      <a href="https://www.linkedin.com/in/lloyd-woolacott-ceng-mice-aa8245117/" aria-label="LinkedIn profile">
        <IconButton>
          <LinkedInIcon fontSize="large" />
        </IconButton>
      </a>
    </Box>
  );
};

export default ProfileLinks;
