"use client";

import React, { ReactNode, useState } from "react";
import { Button, ButtonProps, styled, useTheme } from "@mui/material";
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
    props.isLarge && styles.sizeLarge,
    !props.isLarge && styles.sizeSmall,
  ],
})<ArrowButtonProps>(({ theme, isLarge }) => ({
  ...(isLarge
    ? ((theme?.components?.MuiButton?.styleOverrides?.sizeLarge ||
        {}) as object)
    : ((theme?.components?.MuiButton?.styleOverrides?.sizeSmall ||
        {}) as object)),
}));

function ArrowButton({
  children,
  isLarge = false,
  ...props
}: ArrowButtonProps) {
  const [isHover, setIsHover] = useState(false);

  const theme = useTheme();

  theme.components?.MuiButton?.styleOverrides?.sizeLarge;

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
      {isHover ? (
        <EastIcon sx={{ marginLeft: "5px" }} />
      ) : (
        <ChevronRightIcon sx={{ marginRight: "5px" }} />
      )}
    </StyledButton>
  );
}

export default ArrowButton;
