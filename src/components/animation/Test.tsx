"use client";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
gsap.registerPlugin(ScrollTrigger);

const Test = ({ scrollContainerId }: { scrollContainerId: string }) => {

    const testAnimation = useRef<HTMLInputElement | null>(null)

  useGSAP(() => {
      gsap.to(testAnimation.current, {
    x: 500,
    scrollTrigger: {
      trigger: "#testAnimation",
      scrub:true,
      scroller: `#${scrollContainerId}`,
    },
  });
  })


  return (
    <div ref={testAnimation} style={{ width: "100px", height: "100px", backgroundColor:'black' }}></div>
  );
};

export default Test;
