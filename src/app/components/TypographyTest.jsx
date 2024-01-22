import { Stack, Typography } from "@mui/material";
import React from "react";

const TypographyTest = () => {
  return (
    <Stack direction={"column"}>
      <Typography component="h1" variant="h1">
        h1 - Heading
      </Typography>
      <Typography component="h2" variant="h2">
        h2 - heading
      </Typography>
      <Typography component="h3" variant="h3">
        h3 - heading
      </Typography>
      <Typography component="h4" variant="h4">
        h4 - heading
      </Typography>
      <Typography component="h5" variant="h5">
        h5 - heading
      </Typography>
      <Typography component="h6" variant="h6">
        h6 - heading
      </Typography>
      <Typography component="subtitle1" variant="subtitle1">
        subtitle1 - subtitle
      </Typography>
      <Typography component="subtitle2" variant="subtitle2">
        subtitle2 - subtitle
      </Typography>
      <Typography component="body1" variant="body1">
        body1 - body
      </Typography>
      <Typography component="body2" variant="body2">
        body2 - body
      </Typography>
    </Stack>
  );
};

export default TypographyTest;
