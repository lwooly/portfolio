import { Box, List, ListItem, Stack, Typography } from "@mui/material";
import Image from "next/image";
import AboutMeImage from "@/src/app/components/AboutMeImage";

const AboutMe = () => {
  return (
    <Box>
      <Typography variant="h3">About Me</Typography>
      <Typography variant="h4">Chartered Engineer & Full-Stack Dev</Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: {
            xs: "column",
            md: "row",
            gap: "2rem",
            marginTop: "3rem",
            marginBottom: "8rem",
          },
        }}
      >
        <AboutMeImage />
        <Box sx={{ flex: 3, display: "flex", alignItems: "center" }}>
          <List>
            <ListItem>
              <Typography variant="body1" sx={{ textAlign: "justify" }}>
                Proven track record trong engineering background by leading and
                sucessfully delivering significant and complex engineering
                projects in the UK Civil Nuclear sector.
              </Typography>
            </ListItem>
            <ListItem>
              <Typography variant="body1" sx={{ textAlign: "justify" }}>
                Expanded my skill set to include full-stack software
                development, integrating engineering problem-solving with
                technology.
              </Typography>
            </ListItem>
            <ListItem>
              <Typography variant="body1" sx={{ textAlign: "justify" }}>
                Focused on creating innovative solutions that bridge the gap
                between engineering theory and user-centric applications,
                leveraging modern tech stacks.
              </Typography>
            </ListItem>
          </List>
          </Box>
      </Box>
    </Box>
  );
};

export default AboutMe;
