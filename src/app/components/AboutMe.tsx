import { Box, List, ListItem, Stack, Typography } from "@mui/material";
import AboutMeBlock from "./AboutMeBlock";

import {
  QueryStats, // For "Analysis"
  BusinessCenter, // For "Management"
  Engineering, // For "Technicality"
  GroupWork, // For "Collaboration"
  Chat, // For "Communication"
  Visibility, // For "Interpretation"
  Autorenew, // Suggested for "Adaptability"
  Assessment, // For "Evaluation"
  FolderSpecial, // For "Organisation"
  EmojiEvents, // Suggested for "Leadership"
  Calculate, // For "Maths"
  FormatListBulleted, // Suggested for "Detail"
} from "@mui/icons-material";

export interface Statement {
  title: string;
  text: string;
}

const statements: Statement[] = [
  {
    title: "Background",
    text: "Proven track record leading and sucessfully delivering significant and complex engineering projects in the UK Civil Nuclear sector.",
  },
  {
    title: "Skills",
    text: "Full-stack software development integrated effectively with engineering problem-solving and mathematical ability.",
  },
  {
    title: "Future Focus",
    text: "Creating innovative tech solutions that bridge the gap between engineering theory and user-centric applications.",
  },
];

const skills = [
  { title: "Analysis", icon: <QueryStats /> },
  { title: "Management", icon: <BusinessCenter /> },
  { title: "Technicality", icon: <Engineering /> },
  { title: "Collaboration", icon: <GroupWork /> },
  { title: "Mathematics", icon: <Calculate /> },

  // { title: "Communication", icon: <Chat /> },
  // { title: "Interpretation", icon: <Visibility /> },
  // { title: "Adaptability", icon: <Autorenew /> },
  // { title: "Evaluation", icon: <Assessment /> },
  // { title: "Organisation", icon: <FolderSpecial /> },
  // { title: "Leadership", icon: <EmojiEvents /> },
  // { title: "Maths", icon: <Calculate /> },
  // { title: "Detail", icon: <FormatListBulleted /> },
];

const AboutMe = () => {
  return (
    <Box>
      <Typography variant="h3">About Me</Typography>
      <Box
        sx={{
          display: { xs: "block", sm: "flex" },
          textAlign: { xs: "center", sm: "left" },
          flexDirection: "row-reverse",
          gap: "2em",
          width: "100%",
        }}
      >
        <Box
          sx={{
            flex: 2,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Typography variant="h1" component="h3" sx={{}}>
            Full-stack Developer and Chartered Structural Engineer
          </Typography>
          <Typography
            variant="h4"
            component="h4"
            sx={{ lineHeight: "1.5em", fontWeight: 400 }}
          >
            Building on a strong analytical and mathematical background for
            technological innovation.
          </Typography>
          <List sx={{ display: "flex", gap: "1em", flexWrap: "wrap" }}>
            {skills.map((skill) => (
              <ListItem
                key={skill.title}
                sx={{
                  display: "flex",
                  flexBasis: "15%",
                  borderRadius: "1em",
                  padding: "0.5em",
                  lineHeight: "1em",
                  backgroundImage:
                    "linear-gradient(to right, #ff6e7f 0%, #bfe9ff  51%, #ff6e7f  100%)",
                  transition: "0.5s",
                  backgroundSize: "200% auto",
                  boxShadow: " 0 0 20px #eee",

                  "&:hover": {
                    backgroundPosition: "right center",
                    color: "#fff",
                    textDecoration: "none",
                  },
                }}
              >
                {skill.icon}
                <Typography
                  variant="h6"
                  component="p"
                  sx={{ marginLeft: "0.5em" }}
                >
                  {skill.title}
                </Typography>
              </ListItem>
            ))}
          </List>
        </Box>
        <Box
          sx={{
            minWidth: "45%",
            flex: 1,
            "> :nth-child(2)": {
              float: { lg: "right" },
            },
          }}
        >
          {statements.reverse().map((statement) => (
            <AboutMeBlock key={statement.title} statement={statement} />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default AboutMe;
