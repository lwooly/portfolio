"use client";

import React, { ReactNode, useState } from "react";
import { Button, ButtonProps, Typography } from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import EastIcon from "@mui/icons-material/East";
import theme from "@/src/theme";
import { StyledButton } from "./ArrowButtonTest";

// Extend the ButtonProps to include any custom props
interface ArrowButtonProps extends ButtonProps {
  isSending: boolean;
  isSent: boolean;
  isSendingError: boolean;
}

function SubmitButton({
  isSending,
  isSent,
  isSendingError,
  ...props
}: ArrowButtonProps) {
  const [isHover, setIsHover] = useState(false);

  let buttonText = "Submit";
  if (isSending && !isSent && !isSendingError) {
    buttonText = "Sending...";
  } else if (isSent && !isSending && !isSendingError) {
    buttonText = "Sent!";
  } else if (!isSent && !isSending && isSendingError) {
    ("Try again");
  }

    return (
      <StyledButton
        isLarge={true}
        variant="contained"
        sx={props.sx} // Directly apply any passed sx styles to the button
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        {...props}
      >
        <Typography fontSize={"body1"} fontWeight={500} sx={{ color: "white" }}>
        {buttonText}
      </Typography>
      {isHover ? (
        <EastIcon sx={{ marginLeft: "5px" }} />
      ) : (
        <ChevronRightIcon sx={{ marginRight: "5px" }} />
      )}
      </StyledButton>
    );
  }

export default SubmitButton;
