import React from "react";
import Box from "@mui/material/Box";
import Image from "next/image";

const AboutMeImage = () => {
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Box
        position={"relative"}
        sx={{
          flexGrow: 1,
          width: "100%",
          marginTop: "2em",
          maxWidth: "400px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        {/* Container for pylon image */}
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
            src={"/pylon.jpg"}
            fill
            sizes="100vw"
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
            paddingBottom: "min(60%, 200px)", // Equal to width for a square aspect ratio
            maxWidth: "200px", // Limit the maximum size
            borderRadius: "12.5%",
            overflow: "hidden",
            position: "absolute",
            bottom: "-7%",
            right: "-7%",
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