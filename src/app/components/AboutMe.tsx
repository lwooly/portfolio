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
          },
          gap: "3rem",
          marginTop: "3rem",
          marginBottom: "8rem",
          alignItems:'center'
        }}
      >
        <AboutMeImage />
        <Box sx={{ textAlign: "left" }}>
          <Typography variant="h5" component={"h5"}>
            Hi, I&apos;m Lloyd,
          </Typography>
          <Typography variant="body1" component={"p"}>
            A Chartered Structural Engineer specialising in full-stack
            development.
          </Typography>
          <List sx={{ listStyle: "disc", paddingLeft: "1em" }}>
            <ListItem sx={{ display: "list-item", paddingRight: 0 }}>
              <Typography variant="body1" sx={{ textAlign: "justify" }}>
                <span style={{ fontWeight: "bold" }}>Background: </span>Proven
                track record leading and sucessfully delivering significant and
                complex engineering projects in the UK Civil Nuclear sector.
              </Typography>
            </ListItem>
            <ListItem sx={{ display: "list-item", paddingRight: 0 }}>
              <Typography variant="body1" sx={{ textAlign: "justify" }}>
                <span style={{ fontWeight: "bold" }}>Skills: </span>Full-stack
                software development, integrated with my engineering
                problem-solving and mathematical ability.
              </Typography>
            </ListItem>
            <ListItem sx={{ display: "list-item", paddingRight: 0 }}>
              <Typography variant="body1" sx={{ textAlign: "justify" }}>
                <span style={{ fontWeight: "bold" }}>Focus: </span>Creating innovative tech solutions that bridge the gap
                between engineering theory and user-centric applications.
              </Typography>
            </ListItem>
          </List>
        </Box>
      </Box>
    </Box>
  );
};

export default AboutMe;
