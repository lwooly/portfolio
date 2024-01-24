import React from "react";
import Box from "@mui/material/Box";
import Image from "next/image";

const AboutMeImage = () => {
  return (
    <Box
      sx={{ display: "flex", justifyContent: "center", flex: 2, flexShrink: 2 }}
    >
      {/* container for images */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          // marginBottom: 'auto',
          width: "100%",
          // maxWidth: "400px",
          position: "relative",
          maxWidth: { xs: "300px", md: "50vh" },
          height: "auto",
        }}
      >
        {/* Container for pylon image */}
        <Box
          sx={{
            width: "100%", // Make width responsive
            height: 0,
            // Limit the maximum size
            position: "relative",
            paddingBottom: "min(300px, 100%)",
            // Equal to width for a square aspect ratio
            borderRadius: "12.5%",
            overflow: "hidden",
            // flexGrow: 1,
            // minWidth: { md: "30vw" },
            //   border: '3px solid #000',
          }}
        >
          <Image
            alt="Pylon"
            src={"/pylon.jpg"}
            fill
            sizes="50%"
            style={{
              objectFit: "cover",
              objectPosition: "center",
            }}
          />
        </Box>
        {/* Container for spinning text */}
        <Box
          sx={{
            width: "60%", // Make width responsive
            paddingBottom: "min(60%, 150px)", // Equal to width for a square aspect ratio
            maxWidth: "150px", // Limit the maximum size
            borderRadius: "12.5%",
            overflow: "hidden",
            position: "absolute",
            bottom: "-6%",
            right: "-6%",
          }}
        >
          <Image
            src={"/circular-text.svg"}
            alt={"Full stack developer - chartered engineer"}
            fill
            sizes="100vw"
            style={{
              zIndex: 1,
              animation: "rotation 8s infinite linear",
              objectFit: "cover",
              objectPosition: "center",
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default AboutMeImage;
