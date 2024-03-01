import GitHubIcon from "@mui/icons-material/GitHub";
import { Box, IconButton } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TooltipOffset from "./TooltipOffset";
import { links } from "./ProfileLinks";

const FooterProfileLinks = ({
  color = "rgba(0, 0, 0, 0.54)",
}: {
  color?: string;
}) => {
  const styles = {
   
  };

  return (
    <Box
      sx={{
        display: "flex",
        gap: "1em",
        justifyContent: { xs: "center", md: "start" },
      }}
    >
        {links.map(({link, title, icon} => {}))}



      <a
        href="https://github.com/lwooly"
        rel="noopener noreferrer"
        target="_blank"
        
      >
        <IconButton sx={styles} aria-label="Github profile">
          <GitHubIcon fontSize="inherit" />
        </IconButton>
      </a>
      <a
        href="https://www.linkedin.com/in/lloyd-woolacott-ceng-mice-aa8245117/"
        rel="noopener noreferrer"
        target="_blank"
      >
         <TooltipOffset title={'LinkedIn'} placement={"bottom"}>
        
        </TooltipOffset>
      </a>
    </Box>
  );
};

export default ProfileLinks;