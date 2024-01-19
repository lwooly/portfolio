import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";

const AboutMe = () => {
  return (
    <Stack direction={"column"}>
      <Box
        sx={{
          width: "100%", // Make width responsive
          maxWidth: "400px", // Limit the maximum size
          margin: "auto",
          position: "relative",
          paddingBottom: "min(400px, 100%)", // Equal to width for a square aspect ratio
          borderRadius: "12.5%",
          overflow: "hidden",
          //   border: '3px solid #000',
          marginTop: "2em",
        }}
      >
        <Image
          alt="Pylon"
          src={"/pylon.jpg"}
          priority
          fill
          sizes="100vw"
          style={{
            objectFit: "cover",
            objectPosition: "center",
          }}
        />
      </Box>
      <Typography variant="h3" component="h2" sx={{ marginTop: "1em" }}>
        About Me
      </Typography>
      <Typography variant="body1" component="p" sx={{ marginTop: "1em" }}>
        Chartered Engineer & Full-Stack Tech
      </Typography>
      <Typography variant="body1" component="p" sx={{ marginTop: "1em" }}>
        Hi, I&apos;m Lloyd, a Chartered Structural Engineer venturing into full-stack
        technologies. With a solid foundation in engineering, I am now delving
        into the realms of software development, keen on integrating engineering
        problem solving ability with modern tech stacks. Currently, I&apos;m deeply
        engaged in learning and applying technologies such as React and Node.js.
        My ambition is to combine my robust engineering background with
        cutting-edge web development, focusing on creating software solutions
        that address real-world challenges. I am passionate about leveraging
        these skills to develop innovative, practical solutions that bridge the
        gap between theoretical engineering and tangible, user-centric
        applications. Through this journey, I aim to bring a unique perspective
        to software development, solving complex problems with a blend of
        structural insight and technological innovation.
      </Typography>
    </Stack>
  );
};

export default AboutMe;
