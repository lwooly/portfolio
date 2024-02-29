import * as React from "react";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import { Typography } from "@mui/material";

export default function TooltipOffset({
  children,
  title,
  placement,
  offset = [0,0],
}: {
  children: React.ReactElement;
  title: string;
  placement:
    | "top"
    | "right"
    | "bottom"
    | "left"
    | "bottom-end"
    | "bottom-start"
    | "left-end"
    | "left-start"
    | "right-end"
    | "right-start"
    | "top-end"
    | "top-start"
    | undefined;
    offset?: [number, number]
}) {
  return (
    <Tooltip
      arrow
      placement={placement}
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
                offset,
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
