"use client";
import React from "react";
import TiltedCard from "../../components/TiltedCard";
import Layout from "@/components/mainComponents/layout";
import AnimatedText from "@/components/AnimatedText";

export default function Projects() {
  return (
    <>
    {/* <div className="min-h-screen flex items-center justify-center flex-col space-y-6"> */}
      {/* <TiltedCard
        imageSrc="https://i.scdn.co/image/ab67616d0000b273d9985092cd88bffd97653b58"
        altText="Kendrick Lamar - GNX Album Cover"
        captionText="Kendrick Lamar - GNX"
        containerHeight="300px"
        containerWidth="300px"
        imageHeight="300px"
        imageWidth="300px"
        rotateAmplitude={12}
        scaleOnHover={1.2}
        showMobileWarning={false}
        showTooltip={true}
        displayOverlayContent={true}
        overlayContent={
          <p className="tilted-card-demo-text text-center mt-5">Kendrick Lamar - GNX</p>
        }
        /> */}
      <main className="w-full mb-16 flex flex-col items-center justify-center">
        <Layout className="pt-16">
          <AnimatedText text="Where Innovation Meets Code" />
        </Layout>
      </main>
      {/* </div> */}
    </>
  );
}
