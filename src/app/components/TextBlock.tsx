import { Box, List, ListItem, Stack, Typography } from "@mui/material";
import { blockStyles } from "../styles/styles";
import { ReactNode } from "react";

const TextBlock = ({ children }: { children: ReactNode }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        padding: "1.5em",
        ...blockStyles,
        "&:hover": {
          border: "solid black 1px",
        },
      }}
    >
      {children}
    </Box>
  );
};

export default TextBlock;
