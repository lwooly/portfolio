import { Box, Divider, Stack, Typography } from "@mui/material";
import StackImgList from "./StackImgList";

const StackIconSection = () => {
  return (
    <Stack
      component={"article"}
      direction="column"
      spacing={2}
      divider={<Divider orientation="horizontal" flexItem />}
    >
      <Typography variant="h4" component={"h2"}>
        Tech Stack
      </Typography>
      <StackImgList />
    </Stack>
  );
};

export default StackIconSection;
