"use client";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import AnimatedText from "@/components/ui/AnimatedText";
import RocketMoon from "@/components/ui/rocketMoon";
import Layout from "@/components/mainComponents/layout";
import styles from "../../../components/moduleCSS/rocket-moon.module.css";
import ContactStyles from "../../../components/moduleCSS/contact.module.css";
import SanitizeInput from "@/components/utils/sanitizeInput";
const contactSchema = z.object({
  name: z.string().min(2, "Please enter a valid name"),
  email: z.string().email("Please enter a valid email"),
  txt: z.string().min(2, "Please enter a valid message"),
});

const inputStyles =
  "w-full bg-slate-700/90 text-white px-4 h-14 text-lg rounded-xl focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-primaryDark placeholder:text-gray-400 placeholder:select-none";

type ContactFormData = z.infer<typeof contactSchema>;

export default function Contact() {
  // delay function
  const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

  // handle astronaut animations
  const handleAstronautAnimation = async () => {
    // Exit animation
    setAnimationClass("exit-astronaut");

    await delay(4000);
    setIsSend(true);
    setAnimationClass("enter-astronaut");

    await delay(1500); // Wait for enter animation
    setAnimationClass(null);

    await delay(4000); // Wait before triggering exit
    setAnimationClass("exit-astronaut");

    await delay(1500); // Wait for exit animation
    setIsSend(false);
    setAnimationClass("enter-astronaut");

    await delay(1500); // Wait for re-enter animation
    setAnimationClass(null);
  };

  const formRef = useRef<HTMLFormElement | null>(null);
  const [loading, setLoading] = useState(false);
  const [isSend, setIsSend] = useState(false);
  const [animationClass, setAnimationClass] = useState<string | null>(null);

  // destructuring from useFrom, react hook form
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  // handle form submit
  const onSubmit = async (data: ContactFormData) => {
    setLoading(true);

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          from_name: SanitizeInput(data.name) || "nothing to show",
          from_email: SanitizeInput(data.email) || "nothing to show",
          message: SanitizeInput(data.txt) || "nothing to show",
          to_name: "Aliyan Jabbar Portfolio",
          to_email: "jabbaraliyan805@gmail.com",
          time: new Date().toLocaleString(),
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );

      // handling astronaut coming and going
      handleAstronautAnimation();

      reset();
    } catch (error) {
      alert("Something went wrong. Please try again.");
      setIsSend(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout className="py-16 sm:py-5 xs:px-0">
      <AnimatedText
        text="Launch me a Rocket"
        className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
      />
      <div className="flex gap-16 justify-center md:justify-between md:gap-3">
        {/* Left - Contact Form */}
        <div
          className={`group relative bg-gradient-to-br from-neutral-800 via-black to-black rounded-3xl p-10 lg:px-5 md:px-2 md:py-5 sm:mx-auto sm:px-5 xs:px-1 overflow-hidden shadow-xl transition-all duration-1000 hover:from-neutral-800 hover:via-black hover:to-black ${styles.card}`}
        >
          {/* Rocket Background Layer */}
          <RocketMoon />
          {/* Foreground form content */}
          <p className="text-gray-400 mb-10 text-lg z-10 relative">
            Fill the form to{" "}
            <strong className="text-primary dark:text-primaryDark">
              shoot me a message
            </strong>
            . I'll get back to you quickly.
          </p>
          {/* form */}
          <form
            ref={formRef}
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-6 z-10 relative w-full"
          >
            <div className="relative">
              <input
                {...register("name")}
                type="text"
                placeholder="Your Name"
                className={inputStyles}
              />
              <p className="absolute -bottom-[1px] right-1 text-red-400 text-nowrap">
                {errors.name && errors.name.message}
              </p>
            </div>

            <div className="relative">
              <input
                {...register("email")}
                type="email"
                placeholder="Your Email"
                className={inputStyles}
              />
              <p className="absolute -bottom-[1px] right-1 text-red-400 text-nowrap">
                {errors.email && errors.email.message}
              </p>
            </div>

            <div className="relative">
              <textarea
                {...register("txt")}
                placeholder="Your Message"
                rows={5}
                className="w-full bg-slate-700/90 text-white px-4 py-4 text-lg rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-primaryDark placeholder:text-gray-400 placeholder:select-none"
              />
              <p className="absolute bottom-1 right-1 text-red-400 text-nowrap">
                {errors.txt && errors.txt.message}
              </p>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="bg-primary hover:bg-purple-500 dark:bg-primaryDark dark:hover:bg-cyan-400 text-light dark:text-dark font-semibold h-14 text-lg rounded-xl transition disabled:opacity-50 flex items-center justify-center gap-2 select-none text-nowrap"
            >
              {loading ? "Sending to the moon..." : "Send it to the moon"}
            </button>
          </form>
        </div>

        {/* Right - Astronaut Image */}
        <div className={`${ContactStyles["float-astronaut"]}`}>
          <div
            className={`${
              animationClass ? ContactStyles[animationClass] : ""
            } flex items-center justify-center xl:flex-1 w-[30vw] select-none pointer-events-none sm:hidden visible`}
          >
            <Image
              src={
                !isSend
                  ? "/contact/spaceman.png"
                  : "/contact/spaceman_after.png"
              }
              alt="Astronaut"
              width={700}
              height={700}
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}
