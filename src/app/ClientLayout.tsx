"use client";
import "./globals.css";
import Header from "@/components/mainComponents/header";
import ClickSpark from "../components/ClickSpark";
import Footer from "@/components/mainComponents/Footer";
import HireMe from "@/components/mainComponents/HireMe";
import { useEffect, useState, useRef } from "react";
import Loading from "./loading";
import { usePathname, useRouter } from "next/navigation";
import { AnimatePresence } from "framer-motion";
import TransitionEffect from "@/components/Transition";

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // for hydration
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [showEntryTransition, setShowEntryTransition] = useState(false);
  const isFirstMount = useRef(true);
  const pathname = usePathname();
  const router = useRouter();

  // Only run on client side
  useEffect(() => {
    // Set mounted immediately
    setMounted(true);

    // Check if mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  // Handle first mount and route changes
  useEffect(() => {
    if (!mounted) return;

    // Skip transition on first mount
    if (isFirstMount.current) {
      isFirstMount.current = false;
      return;
    }
  }, [pathname, mounted]);

  // Function to handle navigation with transition
  const handleRouteChange = (path: string) => {
    // Don't transition if we're already on this page
    if (path === pathname || isTransitioning) return;

    // Set transitioning state
    setIsTransitioning(true);
    setShowEntryTransition(false);

    // Exit animation
    const exitAnimation = document.createElement("div");
    exitAnimation.className =
      "fixed inset-0 w-screen h-full z-[9999999] dark:bg-primaryDark bg-primary";
    exitAnimation.style.transform = "scaleX(0)";
    exitAnimation.style.transformOrigin = "left";
    exitAnimation.style.transition = "transform 0.8s ease-in-out";
    document.body.appendChild(exitAnimation);

    // Start exit animation
    setTimeout(() => {
      exitAnimation.style.transform = "scaleX(1)";
    }, 10);

    // After exit animation is almost complete, change route
    setTimeout(() => {
      router.push(path);

      // Immediately start entry animation
      setShowEntryTransition(true);

      // Remove exit animation element
      setTimeout(() => {
        document.body.removeChild(exitAnimation);
      }, 100);

      // Reset states after entry animation completes
      setTimeout(() => {
        setIsTransitioning(false);
        setShowEntryTransition(false);
      }, 1200); // Match with TransitionEffect duration
    }, 750); // Just before exit animation completes
  };

  return (
    <div className="relative">
      {/* Entry transition */}
      {mounted && showEntryTransition && <TransitionEffect />}
      {/* Main content */}
      {!mounted ? (
        <Loading />
      ) : (
        <div className="font-mont bg-transparent w-full min-h-screen flex flex-col overflow-x-hidden">
          <ClickSpark
            sparkSize={isMobile ? 8 : 10}
            sparkRadius={isMobile ? 12 : 15}
            sparkCount={isMobile ? 6 : 8}
            duration={400}
          >
            <div className="relative z-20">
              <HireMe />
            </div>
            <Header onRouteChange={handleRouteChange} />
            <main className="flex-grow pt-28 px-4 sm:px-6 md:px-8">
              <AnimatePresence mode="wait">{children}</AnimatePresence>
            </main>
            <Footer />
          </ClickSpark>
        </div>
      )}
    </div>
  );
}
