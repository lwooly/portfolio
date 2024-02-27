import * as React from "react";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import { Typography } from "@mui/material";

export default function TooltipOffset({
  children,
  title,
}: {
  children: React.ReactElement;
  title: string;
}) {
  return (
    <Tooltip
      arrow
      placement="right"
      title={
        <>
          <Typography variant="body1" component="p" sx={{ color: "white" }}>
            {title}
          </Typography>
        </>
      }
      slotProps={{
        popper: {
          modifiers: [
            {
              name: "offset",
              options: {
                offset: [0, -10],
              },
            },
          ],
        },
      }}
    >
      {children}
    </Tooltip>
  );
}
