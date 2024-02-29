import React from "react";
import Box from "@mui/material/Box";
import Image from "next/image";

const AboutMeImage = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: { xs: "row", lg: "column" },
        flex: 2,
        flexShrink: 2,
      }}
    >
      {/* container for images */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent:'left',
          position: "relative",
          width: { xs: "250px", md: "300px" , lg:'400px'},
          height: { xs: "250px", md: "300px", lg:'400px' },
        }}
      >
        {/* Container for pylon image */}
        <Box
          sx={{
            width: { xs: "250px", md: "300px" , lg:'400px'},
            height: { xs: "250px", md: "300px" , lg:'400px'},
            position: "relative",

            // Equal to width for a square aspect ratio
            borderRadius: "12.5%",
            overflow: "hidden",
          }}
        >
          <Image
            alt="Pylon"
            src={"/pylon.jpg"}
            priority
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
            flexShrink: 1,
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
