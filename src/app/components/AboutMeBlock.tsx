import { Box, List, ListItem, Stack, Typography } from "@mui/material";
import { Statement } from "./AboutMe";
import { blockStyles } from "../styles/styles";

const AboutMeBlock = ({ statement }: { statement: Statement }) => {
  const { title, text } = statement;
  return (
    <Box
      sx={{
        display: "flex",
        width: {xs:'100%', lg:"80%"},
        textAlign:'left',
        padding: "1.5em",
        ...blockStyles,
        '&:hover':
        {
          border: 'solid black 1px'
        }
      }}
    >
      <Box>
        <Typography variant="h5" component={"h5"} color={'black'}>
          {title}
        </Typography>
        <Typography variant="body1">{text}</Typography>
      </Box>
    </Box>
  );
};

export default AboutMeBlock;
