"use client";
import AnimatedText from "@/components/ui/AnimatedText";
import Layout from "@/components/mainComponents/layout";
import CountUp from "../../components/ui/Count";
import Approach from "@/components/mainComponents/Approach";
import MainParallax from "@/components/mainComponents/MainParallax";
import ProfileCard from "@/components/ui/ProfileCard";
import SecondHeader from "@/components/ui/SecondHeader";
import dynamic from "next/dynamic";
// import Skills from "@/components/mainComponents/Skills";

const Skills = dynamic(() => import("@/components/mainComponents/Skills"), {
  ssr: false,
});

const About = () => {
  // stats for counters
  const Stats = [
    {
      count: 1,
      label: "Satisfied Clients",
      duration: 1,
    },
    {
      count: 15,
      label: "Projects Completed",
      duration: 1,
    },
    {
      count: 2,
      label: "Learning Years",
      duration: 1,
    },
  ];

  const Counters = Stats.map((stat, index) => {
    return (
      <div
        className="text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl xl:flex xl:flex-col xl:items-center xl:justify-center"
        key={index}
      >
        <div>
          <CountUp
            from={0}
            to={stat.count}
            separator=","
            direction="up"
            duration={stat.duration}
          />
          +
        </div>
        <h2 className="text-xl xl:text-nowrap md:text-wrap font-medium text-dark/75 dark:text-white/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
          {stat.label}
        </h2>
      </div>
    );
  });
  return (
    <main className="flex w-full flex-col items-center justify-center">
      <Layout className="pt-16">
        <AnimatedText
          text="Passion Drives Purpose"
          className="mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8 leading-[1.1]"
        />
        <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
          {/* text */}
          <div className="col-span-3 flex flex-col items-start justify-start md:text-center xl:col-span-4 md:order-2 md:col-span-8">
            <h2 className="mb-4 text-lg md:text-center md:w-full font-bold uppercase text-dark/75 dark:text-white/75">
              Biography
            </h2>
            <p className="font-medium text-dark dark:text-white">
              Hi, I'm <span className="font-bold">Aliyan</span> — a passionate
              Web Developer and UI/UX Designer dedicated to crafting beautiful,
              functional, and user-centered digital experiences. With over 2
              years of learning advance web technologies, I’m always seeking new
              and innovative ways to transform my clients' ideas into reality.
            </p>
            <p className="my-4 font-medium text-dark dark:text-white">
              For me, design isn't just about making things look good — it's
              about solving real problems and creating good looking, engaging
              experiences for users.
            </p>
            <p className="font-medium text-dark dark:text-white">
              Whether it’s a website, mobile application, or any other digital
              product, I bring a commitment to design excellence and
              user-centered thinking to every project. I'm excited about the
              opportunity to bring my skills, creativity, and passion to your
              next project!
            </p>
          </div>
          {/* image card */}
          <div className="col-span-3 xl:col-span-4 sm:order-first md:order-1 md:col-span-8">
            <ProfileCard
              name="Aliyan Jabbar"
              title="Frontend Developer"
              handle="aliyanjabbar"
              status="online"
              contactText="contact"
              avatarUrl="/assets/ProfilePicNoBg.png"
              miniAvatarUrl="/assets/ProfilePic.png"
              showUserInfo={true}
              enableTilt={true}
              showBehindGradient={true}
              grainUrl="/grain.jpg"
              behindGradient="bg-gradient-to-r from-primary to-primaryDark dark:from-primaryDark dark:to-primary"
              href="mailto:jabbaraliyan805@gmail.com"
              className="xl:col-span-4 md:order-1 md:col-span-8 flex items-center justify-center"
            />
          </div>
          {/* counters */}
          <div className="col-span-2 flex flex-col items-end text-right justify-between text-black dark:text-white xl:col-span-8 xl:flex-row xl:items-center md:order-3 ">
            {Counters}
          </div>
        </div>
        {/* Approach section */}
        <div className="mt-36 flex flex-col items-center justify-center w-full">
          <SecondHeader title="Followed" subtitle="Approach" />
          <Approach />
        </div>
        {/* offered services */}
        <div>
          <MainParallax />
        </div>
        {/* skills */}
        <div className="mt-32 mb-10">
          <SecondHeader title="Tech" subtitle="Stack" />
          <Skills />
        </div>
      </Layout>
    </main>
  );
};

export default About;
