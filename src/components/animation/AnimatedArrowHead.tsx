import { Box } from "@mui/material";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger)

const AnimatedArrowHead = () => {
  const arrowHeadRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    const el = arrowHeadRef.current;
    gsap.fromTo(el, {
        rotation: 0
    },
    {
        rotation: 180, backgroundColor: 'red', duration: 10, 
        scrollTrigger: {
            trigger: el,
            markers: true,
        }
    })
  }, []);

  return (
    <Box
      ref={arrowHeadRef}
      sx={{
        width: "100px",
        height: "100px",
        background: "green",
        clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
      }}
    ></Box>
  );
};

export default AnimatedArrowHead;
