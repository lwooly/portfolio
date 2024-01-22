import { Box, Divider, Stack, Typography } from "@mui/material";
import StackImgList from "./StackImgList";

const StackIconSection = () => {

  const imgSrcs: string[] = [
    "html.svg",
    "css.svg",
    "js.svg",
    "ts.svg",
    "react.svg",
    "redux.svg",
    "NodeJS-Dark.svg",
    "nextjs.svg",
    // "python.svg",
    // "django.svg",
    // "sass.svg",
    // "bootstrap.svg",
    // "mongodb.svg",
    // "PostgreSQL-Dark.svg",
  ];


  return (
    <Stack
      component={"article"}
      direction={"column"}
      spacing={1}
      divider={<Divider orientation="horizontal" flexItem />}
      sx={{  maxWidth: "650px", marginX:"auto", padding:"0 1em"}}
    >
      <Typography variant="body2" component={"h3"} sx={{fontWeight:500}}>
        Tech Stack
      </Typography>
      <StackImgList />
    </Stack>
  );
};

export default StackIconSection;
