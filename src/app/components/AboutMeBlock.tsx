import { Box, List, ListItem, Stack, Typography } from "@mui/material";
import Image from "next/image";
import AboutMeImage from "@/src/app/components/AboutMeImage";
import { Statement } from "./UpdatedAboutMe";

const AboutMeBlock = ({ statement }: { statement: Statement }) => {
  const { title, text } = statement;
  return (
    <Box
      sx={{
        display: "flex",
        width: "80%",
        padding: "1.5em",
        border: "1px solid #dde1e6",
        borderRadius: "0.7em",
        backgroundColor: "white",
        marginY:'1em',
        "&:hover": {
          borderColor: "black",
        },  
      }}
    >
      <Box>
        <Typography variant="h5" component={"h5"}>
          {title}
        </Typography>
        <Typography variant="body1">{text}</Typography>
      </Box>
    </Box>
  );
};

export default AboutMeBlock;
