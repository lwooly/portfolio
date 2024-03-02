"use client";

import React, { ReactNode, useState } from "react";
import { Button, ButtonProps, styled } from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import EastIcon from "@mui/icons-material/East";

interface ArrowButtonProps extends ButtonProps {
  children: ReactNode;
  isLarge?: boolean;
}

export const StyledButton = styled(Button, {
  shouldForwardProp: (prop) => prop !== "isLarge",
  name: "StyledButton",
  slot: "Root",
  overridesResolver: (props, styles) => [
    styles.root,
    props.isLarge && styles.large,
    !props.isLarge && styles.small,
  ],
})<ArrowButtonProps>(({ theme, isLarge }) => ({
  ...(isLarge ? theme?.components?.MuiButton?.styleOverrides?.large : theme?.components?.MuiButton?.styleOverrides?.small),
}));

function ArrowButtonTest({
  children,
  isLarge = false,
  ...props
}: ArrowButtonProps) {
  const [isHover, setIsHover] = useState(false);

  return (
    <StyledButton
      isLarge={isLarge}
      variant="contained"
      sx={props.sx} // Directly apply any passed sx styles.
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      {...props}
    >
      {children}
      {isHover ? <EastIcon sx={{ marginLeft: "5px" }} /> : <ChevronRightIcon sx={{ marginRight: "5px" }} />}
    </StyledButton>
  );
}


export default ArrowButtonTest