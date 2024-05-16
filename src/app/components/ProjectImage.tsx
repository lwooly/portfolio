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
        border: "1px solid #dde1e6",
        borderRadius: "0.7em",
        backgroundColor: "white",
        overflow: "hidden",
        boxShadow: "6",
        "&:hover": {
          border: "1px solid black",
        },
        width: "100%",
        display:'flex',
        alignItems:'center'
      }}
    >
      <Image
        alt={`${title} page image`}
        src={homePageImageSrc}
        width={1500}
        height={968}
        style={{ width: "102%", height: "auto", }}
        priority
      />
    </Box>
  );
}

export default ProjectImages;
