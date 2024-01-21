import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";
import AboutMeImage from "@/src/app/components/AboutMeImage";

const AboutMe = () => {
  return (
    <Stack direction={"column"}>
      <AboutMeImage />
      <Typography variant="h3">
        About Me
      </Typography>
      <Typography
        variant="h4"
      >
        Chartered Engineer & Full-Stack Dev
      </Typography>
      <Typography variant="body2" sx={{ marginTop: "1em" }}>
        Hi, I&apos;m Lloyd, a Chartered Structural Engineer venturing into
        full-stack technologies. With a solid foundation in engineering, I am
        now delving into the realms of software development, keen on integrating
        engineering problem solving ability with modern tech stacks. Currently,
        I&apos;m deeply engaged in learning and applying technologies such as
        React and Node.js. My ambition is to combine my robust engineering
        background with cutting-edge web development, focusing on creating
        software solutions that address real-world challenges. I am passionate
        about leveraging these skills to develop innovative, practical solutions
        that bridge the gap between theoretical engineering and tangible,
        user-centric applications. Through this journey, I aim to bring a unique
        perspective to software development, solving complex problems with a
        blend of structural insight and technological innovation.
      </Typography>
    </Stack>
  );
};

export default AboutMe;
