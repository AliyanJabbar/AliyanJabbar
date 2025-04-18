"use client";
import React, { useEffect, useState } from "react";
import TiltedCard from "../../components/TiltedCard";
import Layout from "@/components/mainComponents/layout";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import { GithubIcon } from "@/components/icons";
import Button from "@/components/Button";

const FeaturedProject = ({
  type,
  title,
  summary,
  img: { path, width, height },
  link,
  github,
}: {
  type: string;
  title: string;
  summary: string;
  img: { path: string; width: number; height: number };
  link: string;
  github: string;
}) => {
  return (
    <article className="w-full flex lg:flex-col items-center justify-between rounded-3xl relative rounded-br-2xl xs:rounded-2xl xs:rounded-br-3xl border-[0.1px] border-solid border-dark bg-light shadow-lg shadow-dark dark:shadow-light dark:bg-dark dark:border-light py-8 px-10 lg:p-8 xs:p-4 text-dark dark:text-light transition-all duration-300 ease-in-out">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[40px] bg-dark dark:bg-light rounded-br-3xl xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[24px]" />
      <Link
        href={link}
        target="_blank"
        className="cursor-pointer w-1/2 lg:w-full flex items-center justify-start lg:justify-center rounded-lg"
      >
        <TiltedCard
          imageSrc={path}
          altText={title}
          containerHeight={`${height}px`}
          containerWidth={`${width}px`}
          imageHeight={`${height}px`}
          imageWidth={`${width}px`}
          rotateAmplitude={17}
          scaleOnHover={1.05}
          showTooltip={false}
          displayOverlayContent={false}
        />
      </Link>
      <div className="w-1/2 lg:w-full flex flex-col items-start justify-between pl-6 lg:pl-0 lg:pt-6">
        <span className="text-primary dark:text-primaryDark font-medium text-xl xs:text-base">
          {type}
        </span>
        <Link
          href={link}
          title={title}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold sm:text-sm">
            {title}
          </h2>
        </Link>
        <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">
          {summary}
        </p>
        <div className="mt-2 flex items-center justify-start gap-5">
          <div className="z-10">
            <GithubIcon link={github} size="40px" />
          </div>
          <Button text="Visit Project" link={link} target="_blank" />
        </div>
      </div>
    </article>
  );
};

const Project = ({
  type,
  title,
  summary,
  img: { path, width, height },
  link,
  github,
}: {
  type: string;
  title: string;
  summary: string;
  img: { path: string; width: number; height: number };
  link: string;
  github: string;
}) => {
  return (
    <article className="w-full flex flex-col items-center justify-center rounded-2xl rounded-bl-3xl relative border border-solid border-dark bg-light shadow-lg p-6 shadow-dark dark:shadow-light dark:bg-dark dark:border-light text-dark dark:text-light transition-all duration-300 ease-in-out">
      <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[102%] rounded-[32px] bg-dark dark:bg-light rounded-br-3xl md:-right-2 md:w-[101%] sm:h-[102%] xs:rounded-[24px]" />
      <Link
        href={link}
        target="_blank"
        className="cursor-pointer w-full flex justify-center rounded-lg"
      >
        <TiltedCard
          imageSrc={path}
          altText={title}
          containerHeight={`${height}px`}
          containerWidth={`${width}px`}
          imageHeight={`${height}px`}
          imageWidth={`${width}px`}
          rotateAmplitude={17}
          scaleOnHover={1.05}
          showTooltip={false}
          displayOverlayContent={false}
        />
      </Link>
      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-primary dark:text-primaryDark font-medium text-xl lg:text-lg md:text-base">
          {type}
        </span>
        <Link
          href={link}
          title={title}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold sm:text-sm lg:text-2xl">
            {title}
          </h2>
        </Link>
        <p className="my-1 font-medium text-dark dark:text-light sm:text-sm">
          {summary}
        </p>
        <div className="w-full mt-2 flex items-center justify-between">
          <Link
            href={link}
            className="underline text-dark dark:text-light md:text-base"
          >
            Visit
          </Link>
          <div className="z-10">
            <GithubIcon link={github} size="35px" />
          </div>
        </div>
      </div>
    </article>
  );
};

export default function Projects() {
  const [windowWidth, setWindowWidth] = useState(0);
  const [featureWidth, setFeatureWidth] = useState(0);
  const [projectWidth, setProjectWidth] = useState(0);
  // handling windows width resize
  useEffect(() => {
    // Set initial window width
    setWindowWidth(window.innerWidth);

    // Create handler function
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // setting the feature and project's windths
  useEffect(() => {
    setFeatureWidth(
      windowWidth <= 329
        ? 220
        : windowWidth >= 330 && windowWidth <= 359
        ? 250
        : windowWidth >= 360 && windowWidth <= 399
        ? 280
        : windowWidth >= 400 && windowWidth <= 449
        ? 330
        : windowWidth >= 450 && windowWidth <= 479
        ? 370
        : windowWidth >= 480 && windowWidth <= 519
        ? 320
        : windowWidth >= 520 && windowWidth <= 580
        ? 350
        : windowWidth >= 581 && windowWidth <= 719
        ? 430
        : windowWidth >= 720 && windowWidth <= 764
        ? 500
        : windowWidth >= 765 && windowWidth <= 819
        ? 550
        : windowWidth >= 820 && windowWidth <= 864
        ? 600
        : windowWidth >= 865 && windowWidth <= 919
        ? 650
        : windowWidth >= 920 && windowWidth <= 964
        ? 700
        : windowWidth >= 965 && windowWidth <= 1023
        ? 750
        : windowWidth >= 1024 && windowWidth <= 1099
        ? 350
        : windowWidth >= 1100 && windowWidth <= 1169
        ? 400
        : windowWidth >= 1170 && windowWidth <= 1249
        ? 430
        : windowWidth >= 1250 && windowWidth <= 1400
        ? 470
        : windowWidth >= 1401 && windowWidth <= 1450
        ? 520
        : windowWidth >= 1451
        ? 550
        : 100
    );
    setProjectWidth(
      windowWidth <= 329
        ? 220
        : windowWidth >= 330 && windowWidth <= 359
        ? 250
        : windowWidth >= 360 && windowWidth <= 399
        ? 280
        : windowWidth >= 400 && windowWidth <= 449
        ? 330
        : windowWidth >= 450 && windowWidth <= 479
        ? 370
        : windowWidth >= 480 && windowWidth <= 519
        ? 320
        : windowWidth >= 520 && windowWidth <= 580
        ? 350
        : windowWidth >= 581 && windowWidth <= 639
        ? 450
        : windowWidth >= 640 && windowWidth <= 719
        ? 200
        : windowWidth >= 720 && windowWidth <= 764
        ? 250
        : windowWidth >= 765 && windowWidth <= 819
        ? 270
        : windowWidth >= 820 && windowWidth <= 864
        ? 290
        : windowWidth >= 865 && windowWidth <= 919
        ? 310
        : windowWidth >= 920 && windowWidth <= 964
        ? 330
        : windowWidth >= 965 && windowWidth <= 1023
        ? 340
        : windowWidth >= 1024 && windowWidth <= 1099
        ? 350
        : windowWidth >= 1100 && windowWidth <= 1169
        ? 390
        : windowWidth >= 1170 && windowWidth <= 1249
        ? 430
        : windowWidth >= 1250 && windowWidth <= 1400
        ? 460
        : windowWidth >= 1401 && windowWidth <= 1450
        ? 490
        : windowWidth >= 1451
        ? 515
        : 100
    );
  }, [windowWidth]);
  return (
    <>
      <main className="w-full mb-16 flex flex-col items-center justify-center">
        <Layout className="pt-16 xs:p-0">
          {/* <AnimatedText text="Where Innovation Meets Code" /> */}
          <AnimatedText
            text="Where Innovation Meets Code"
            className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
            characterAnimation={true}
            animateChars={[
              { word: 0, char: 0 }, // W
            ]}
            animationInterval={2000} // Complete cycle every 2 seconds
          />

          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            <div className="col-span-12">
              <FeaturedProject
                title="Next.JS E-Commerce Website Food Chukh"
                summary="Developed during a GIAIC Hackathon, Food Chukh is a fully functional E-Commerce platform designed for food ordering. This Project has it's own Admin Dashboard for managing orders and customers. The project uses Sanity as a headless CMS to manage product data and blog content, while Next.js powers both the frontend and backend."
                github="https://github.com/AliyanJabbar/Hackathon-Food-Chukh"
                link="https://hackathon-ui-ux-nine.vercel.app/"
                img={{
                  path: "/assets/projects/Food_Chukh.png",
                  width: featureWidth,
                  height: 270,
                }}
                type="Featured Project"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Portfolio Website"
                summary="Single Page Portfolio Website made with Next.js and Tailwind CSS. This project is a showcase of my skills to convert a figma design to Real World Project."
                github="https://github.com/AliyanJabbar/Next.Js-Projects/tree/main/figma-project"
                link="https://figma-portfolio-next-js.vercel.app/"
                img={{
                  path: "/assets/projects/single_page_portfolio.png",
                  width: projectWidth,
                  height: 270,
                }}
                type="Portfolio Website"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Food Chukh Admin Dashboard"
                summary=" Admin Dashboard for Food Chukh E-Commerce Website. The project uses Sanity as a headless CMS to manage product's data and customer's orders."
                github="https://github.com/AliyanJabbar/Food-Chukh-Admin-Dashboard"
                link="https://food-chukh-admin-dashboard.vercel.app/"
                img={{
                  path: "/assets/projects/Food_chukh_admin_dashboard.png",
                  width: projectWidth,
                  height: 270,
                }}
                type="Admin Dashboard"
              />
            </div>
            <div className="col-span-12">
              <FeaturedProject
                title="TMC Model Colony Complaint Registration Portal"
                summary="A complaint registration portal for TMC Model Colony, designed to streamline the process of lodging complaints. The project uses Next.js for the frontend and backend, with a Sanity CMS connection for the management of complaints and user data. This complain portal also offers authentication and authorization features, ensuring secure access for users."
                github="https://github.com/AliyanJabbar/TMC-Model-Colony-Complain-Registration-Portal"
                link="https://tmc-model-colony-complain-registration.vercel.app/"
                img={{
                  path: "/assets/projects/tmc_model_colony.png",
                  width: featureWidth,
                  height: 270,
                }}
                type="Complaint Registration Portal"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Facebook Clone Login Page"
                summary="Facebook Clone Login Page made with Next.js and Tailwind CSS. This project showcases my skills to convert a figma design to Real World Project."
                github="https://github.com/AliyanJabbar/Next.Js-Projects/tree/main/facebook-login-clone/my-app"
                link="https://facebook-login-nextjs-clone.vercel.app/"
                img={{
                  path: "/assets/projects/facebook_login_page_clone.png",
                  width: projectWidth,
                  height: 270,
                }}
                type="Facebook Clone"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Portfolio Website with HTML CSS JS"
                summary="Portfolio Website made with HTML, CSS and JavaScript. This project is a showcase of my skills to convert a figma design to Real World Project."
                github="https://github.com/AliyanJabbar/Portfolio-HTML-CSS-JS"
                link="https://portfolio-html-css-js-blush.vercel.app/"
                img={{
                  path: "/assets/projects/html_css_js_portfolio.png",
                  width: projectWidth,
                  height: 270,
                }}
                type="Portfolio Website"
              />
            </div>
            <div className="col-span-12">
              <FeaturedProject
                title="Resume Builder For Free"
                summary="Developed during a GIAIC Hackathon, This Resume Builder provides 100% free resume building service, designed for Making Good Looking and professional Resume/CV. The project uses HTML as a markup, css for styling and javascript for interactions."
                github="https://github.com/AliyanJabbar/Hackathon/tree/master/MileStone-3%2C4%265"
                link="https://online-resume-builder-service.vercel.app/"
                img={{
                  path: "/assets/projects/resume_builder.jpg",
                  width: featureWidth,
                  height: 270,
                }}
                type="Featured Project"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Simple Resume Like Portfolio"
                summary="This is a simple resume-like portfolio website made with HTML, CSS, and JavaScript. It showcases my skills in a clean and professional format."
                github="https://github.com/AliyanJabbar/Hackathon/tree/master/MileStone-1&2"
                link="https://interactive-resume-html-css.vercel.app/"
                img={{
                  path: "/assets/projects/resume.png",
                  width: projectWidth,
                  height: 270,
                }}
                type="Resume Like Portfolio"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Next.JS Todo App"
                summary="This project allows users to create, read, update, and delete tasks. The app uses Neon DB for data storage and management."
                github="https://github.com/AliyanJabbar/Next.Js-Projects/tree/main/28-todo-app/my-todo-app"
                link="https://todo-app-nextjs-plum.vercel.app/"
                img={{
                  path: "/assets/projects/todo_app.png",
                  width: projectWidth,
                  height: 270,
                }}
                type="Featured Project"
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
}
