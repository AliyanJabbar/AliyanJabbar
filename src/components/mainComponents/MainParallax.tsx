import React from "react";
import Parallax from "../ui/Parallax";
import SecondHeader from "../ui/SecondHeader";
import BackGroundParallax from "../ui/BackGroundParallax";
const MainParallax = () => {
  return (
    <div className="mt-36 -mx-40 xl:-mx-28 lg:-mx-18 sm:-mx-14">
      <SecondHeader title="Offered" subtitle="Services" />
      <Parallax
        title="UI/UX"
        subtitle="Devlopment"
        url="/about/img5.jpg"
        bottomtext="UI/UX Developer"
      />
      <BackGroundParallax
        title="Chatbots"
        subtitle="Development"
        url="/about/img1.webp"
        maincolor="dark"
      />

      <Parallax
        title="Next.js"
        subtitle="Development"
        url="/about/img4.jpg"
        maincolor="light"
        bottomtext="Next.js Developer"
      />
      <BackGroundParallax
        title="Website"
        subtitle="Development"
        url="/about/img3.jpg"
        maincolor="light"
      />

      <Parallax
        title="AI Agents"
        subtitle="Development"
        url="/about/img2.jpg"
        maincolor="light"
        bottomtext="Agents Developer"
      />
      <BackGroundParallax
        title="Website"
        subtitle="Customization"
        url="/about/img6.jpg"
        maincolor="dark"
      />

      <Parallax
        title="Frontend"
        subtitle="Development"
        url="/about/img7.jpg"
        bottomtext="Frontend Developer"
      />
    </div>
  );
};

export default MainParallax;
