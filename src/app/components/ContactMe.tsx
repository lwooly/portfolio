"use client";
import { Box, Stack, TextField, Typography } from "@mui/material";
import Image from "next/image";
import AboutMeImage from "@/src/app/components/AboutMeImage";
import { use } from "react";
import ContactMeForm from "./forms/ContactMeForm";

const ContactMe = () => {


  return (
    <Stack direction={"column"}>
      <Typography variant="h3">
        Contact Me
      </Typography>
      <Typography
        variant="h4"
      >
        Get In Touch
      </Typography>
      <ContactMeForm />
    </Stack>
  );
};

export default ContactMe;
