import { Box } from "@mui/material";
import Image from "next/image";
import { blockStyles } from "../styles/styles";
import { ProjectSummaryProps } from "./ProjectSummary";

function ProjectImages({ projectInfo }: ProjectSummaryProps) {
  const {
    title,
    projectImage: { url: homePageImageSrc },
  } = projectInfo;

  return (
    <Box
      sx={{
        position: "relative",
        paddingBottom: "min(400px, 100%)", // Equal to width for a square aspect ratio
        ...blockStyles,
        marginY: "0em",
        boxShadow: "6",
      }}
    >
      <Image
        alt={`${title} page image`}
        src={homePageImageSrc}
        fill
        sizes="80%"
        priority
        style={{
          objectFit: "cover",
          objectPosition: "25% 50%",
        }}
      />
    </Box>
  );
}

export default ProjectImages;
