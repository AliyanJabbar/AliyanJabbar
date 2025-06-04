import React from "react";
import Parallax from "../ui/Parallax";
const MainParallax = () => {
  return (
    <div className="mt-36 -mx-40 xl:-mx-28 lg:-mx-18 sm:-mx-14">
      <h2 className="flex flex-col w-fit mx-auto mb-[10vh]">
        <span className="text-[7vw] md:text-[10vw] leading-none text-dark dark:text-light font-sub_font -translate-x-[10%]">
          Offered
        </span>
        <span className="text-[7vw] md:text-[10vw] leading-none text-primary dark:text-primaryDark font-mont font-extrabold self-end translate-x-[10%]">
          Services
        </span>
      </h2>
      <Parallax
        title="UI/UX"
        subtitle="Devlopment"
        url="/img5.jpg"
        bottomtext="UI/UX Developer"
      />
      <Parallax
        title="Chatbots"
        subtitle="Development"
        url="/img1.jpg"
        maincolor="dark"
        bottomtext="Chatbots Developer"
      />
      <Parallax
        title="Next.js"
        subtitle="Development"
        url="/img4.jpg"
        bottomtext="Next.js Developer"
      />
      <Parallax
        title="Website"
        subtitle="Development"
        url="/img2.jpg"
        maincolor="dark"
        bottomtext="Website Developer"
      />
      <Parallax
        title="AI Agents"
        subtitle="Development"
        url="/img3.jpg"
        bottomtext="Agents Developer"
      />
      <Parallax
        title="Website"
        subtitle="Customization"
        url="/img6.jpg"
        maincolor="dark"
        bottomtext="Website Customization"
      />
      <Parallax
        title="Frontend"
        subtitle="Development"
        url="/img7.jpg"
        bottomtext="Frontend Developer"
      />
    </div>
  );
};

export default MainParallax;
