import { Box, Divider, IconButton, Stack, Typography } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import Image from "next/image";
import React from "react";
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

const ProjectsList = () => {
  return (
    <Stack direction={"column"} spacing={1}>
      {/* Container for project image */}
      <Box
        sx={{
          width: "100%", // Make width responsive
          maxWidth: "400px", // Limit the maximum size
          position: "relative",
          paddingBottom: "min(400px, 100%)", // Equal to width for a square aspect ratio
          borderRadius: "12.5%",
          overflow: "hidden",
          //   border: '3px solid #000',
        }}
      >
        <Image
          alt="Pylon"
          src={"/plant.jpeg"}
          fill
          sizes="100vw"
          style={{
            objectFit: "cover",
            objectPosition: "center",
          }}
        />
      </Box>
      <Box textAlign={"center"}>
        <Typography variant="h5" component={"h3"}>
          Commerce app
        </Typography>
        <Typography variant="body1" component="p" sx={{ marginTop: "1em" }}>
          A sleek and efficient e-commerce app with a smooth user interface,
          seamlessly integrated with robust backend technologies including Auth0
          for secure user authentication, Stripe for smooth payment
          transactions, and SendGrid for reliable email communications. Designed
          to offer a hassle-free shopping experience for users and streamlined
          management for vendors.
        </Typography>
        <Stack direction={"row"} justifyContent={'center'}>
        <a href="https://github.com/lwooly/commerce-app" aria-label="Commerce app source code">
            <Stack direction={"row"} spacing={1}>
              <Typography variant="h4" component={'span'}>Code</Typography>
                <IconButton>
                  <GitHubIcon fontSize="medium" />
                </IconButton>
            </Stack>
          </a>
          <a href="https://commerce-app-kappa.vercel.app/" aria-label="Commerce app live demo">
            <Stack direction={"row"} spacing={1}>
              <Typography variant="h4" component={'span'}>LiveDemo</Typography>
                <IconButton>
                  <OpenInNewIcon fontSize="medium" />
                </IconButton>
            </Stack>
          </a>
        </Stack>
      </Box>
    </Stack>
  );
};

export default ProjectsList;
