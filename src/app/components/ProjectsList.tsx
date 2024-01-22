import "server-only";
import { Box, Divider, IconButton, Stack, Typography } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import Image from "next/image";
import React from "react";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import ProjectSummary, { ProjectInfo } from "./ProjectSummary";
import { fetchProjectsFromHygraph } from "../lib/api-functions/server/hygraph";
import Carousel from "./Carousel";

// //define project info - this could be stored in a database or hygraph - hardcode for now
// const projectsInfoArray = [
//   {
//     title: "Commerce app",
//     description: `A sleek and efficient e-commerce app with a smooth user interface
//       seamlessly integrated with robust backend technologies including Auth0
//       for secure user authentication, Stripe for smooth payment
//       transactions, and SendGrid for reliable email communications. Designed
//       to offer a hassle-free shopping experience for users and streamlined
//       management for vendors.`,
//     gitHubLink: "https://github.com/lwooly/commerce-app",
//     liveDemoLink: "https://commerce-app-lwooly.vercel.app/",
//     homePageImageSrc: "/plant.jpeg",
//   },
//   {
//     title: "Bike app",
//     description: `A sleek and efficient e-commerce app with a smooth user interface
//       seamlessly integrated with robust backend technologies including Auth0
//       for secure user authentication, Stripe for smooth payment
//       transactions, and SendGrid for reliable email communications. Designed
//       to offer a hassle-free shopping experience for users and streamlined
//       management for vendors.`,
//     gitHubLink: "https://github.com/lwooly/commerce-app",
//     liveDemoLink: "https://commerce-app-lwooly.vercel.app/",
//     homePageImageSrc: "/bikes.jpeg",
//   },
// ];

const ProjectsList = async () => {
  const projectsInfoArray: ProjectInfo[] = await fetchProjectsFromHygraph();

  const projectsSummaryArr = projectsInfoArray.map(
    (projectInfo: ProjectInfo, index: number) => (
      //slides at md breakpoint
      <Box key={index}
      sx={{
        minWidth: "100%",
        flexBasis: "
      }}>
        <ProjectSummary projectInfo={projectInfo} />
      </Box>
    )
  );

  return (
    <>
      {!projectsInfoArray ? (
        <Typography variant="h4" component={"h2"}>
          Watch this space!
        </Typography>
      ) : (
        projectsSummaryArr
      )}
    </>
  );
};

export default ProjectsList;
