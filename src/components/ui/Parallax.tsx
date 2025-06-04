"use client";
import Image from "next/image";
import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap/gsap-core";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Parallax = ({
  title,
  subtitle,
  url,
  bottomtext,
  maincolor = "light",
}: {
  title: string;
  subtitle: string;
  url: string;
  bottomtext: string;
  maincolor?: "light" | "dark";
}) => {
  const container = useRef(null);
  const imageRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);

  useGSAP(() => {
    // Image parallax animation
    gsap.fromTo(
      imageRef.current,
      {
        y: "-25vh",
      },
      {
        y: "25vh",
        ease: "none",
        scrollTrigger: {
          trigger: container.current,
          scrub: true,
        },
      }
    );

    // Title moving left and up
    gsap.fromTo(
      titleRef.current,
      {
        x: "0%",
        y: "0%",
      },
      {
        x: "-30%", // Move left
        y: "-20%", // Move up slightly
        ease: "none",
        scrollTrigger: {
          trigger: container.current,
          scrub: 1, // Smooth scrubbing
          start: "top bottom",
          end: "bottom top",
        },
      }
    );

    // Subtitle moving right and down
    gsap.fromTo(
      subtitleRef.current,
      {
        x: "0%",
        y: "0%",
      },
      {
        x: "30%", // Move right
        y: "20%", // Move down slightly
        ease: "none",
        scrollTrigger: {
          trigger: container.current,
          scrub: 1, // Smooth scrubbing
          start: "top bottom",
          end: "bottom top",
        },
      }
    );

    // Optional: Add rotation effect
    // rotation effect for title
    gsap.fromTo(
      titleRef.current,
      {
        rotation: 0,
      },
      {
        rotation: -5, // Slight counter-clockwise rotation
        ease: "none",
        scrollTrigger: {
          trigger: container.current,
          scrub: 2,
          start: "top bottom",
          end: "bottom top",
        },
      }
    );

    // rotation effect for subtitle
    gsap.fromTo(
      subtitleRef.current,
      {
        rotation: 0,
      },
      {
        rotation: 5, // Slight clockwise rotation
        ease: "none",
        scrollTrigger: {
          trigger: container.current,
          scrub: 2,
          start: "top bottom",
          end: "bottom top",
        },
      }
    );
  }, []);

  return (
    <div ref={container} className="relative h-screen w-full overflow-hidden">
      <Image
        ref={imageRef}
        className="w-full h-full object-cover scale-[1.5]"
        src={url}
        alt={title}
        width={1000}
        height={1500}
      />
      <h2 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col w-fit mx-auto">
        <span
          ref={titleRef}
          className={`text-[7vw] md:text-[10vw] leading-none font-mont text-${maincolor} font-extrabold -translate-x-[10%] will-change-transform`}
        >
          {title}
        </span>
        <span
          ref={subtitleRef}
          className={`text-[7vw] md:text-[10vw] leading-none font-sub_font text-${maincolor} self-end translate-x-[10%] will-change-transform`}
        >
          {subtitle}
        </span>
      </h2>
      <span
        className={`absolute bottom-10 left-1/2 -translate-x-1/2 text-${maincolor} text-xs opacity-50`}
      >
        {bottomtext}
      </span>
    </div>
  );
};

export default Parallax;


