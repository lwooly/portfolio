"use client"
import { Box } from "@mui/material";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger)

const AnimatedArrowHead = ({scrollContainerId} : {scrollContainerId: string}) => {
  const arrowHeadRef = useRef<HTMLInputElement | null>(null);

  console.log(arrowHeadRef.current, 'arrow head ref')

  useGSAP(() => {
    console.log('refreshed gsap')
    const el = arrowHeadRef.current;
    const animation = gsap.fromTo(el, {
        rotation: 0
    },
    {
        rotation: 180, backgroundColor: 'red', duration: 10, 
        scrollTrigger: {
            trigger: el,
            markers: true,
            scroller: `#${scrollContainerId}`,
            toggleActions: "restart pause resume pause",
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
