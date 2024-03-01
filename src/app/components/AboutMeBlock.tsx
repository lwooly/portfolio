import { Box, List, ListItem, Stack, Typography } from "@mui/material";
import Image from "next/image";
import AboutMeImage from "@/src/app/components/AboutMeImage";
import { Statement } from "./UpdatedAboutMe";
import { blockStyles } from "../styles/styles";

const AboutMeBlock = ({ statement }: { statement: Statement }) => {
  const { title, text } = statement;
  return (
    <Box
      sx={{
        display: "flex",
        width: "80%",
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
