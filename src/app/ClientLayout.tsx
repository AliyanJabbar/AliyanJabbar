"use client";
import "./globals.css";
import Header from "@/components/mainComponents/header";
import ClickSpark from "../components/ui/ClickSpark";
import Footer from "@/components/mainComponents/Footer";
import { useEffect, useState, useRef } from "react";
import Loading from "./loading";
import { usePathname, useRouter } from "next/navigation";
import { AnimatePresence } from "framer-motion";
import TransitionEffect from "@/components/ui/Transition";
import ScrollToTop from "@/components/mainComponents/ScrollToTop";
import Lenis from "lenis";

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
    // Initialize Lenis for better scroll
    new Lenis({
      autoRaf: true,
    });

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
    exitAnimation.style.transition =
      "transform 1s cubic-bezier(0.65, 0, 0.35, 1)";
    document.body.appendChild(exitAnimation);

    // Start exit animation
    requestAnimationFrame(() => {
      exitAnimation.style.transform = "scaleX(1)";
    });

    // After exit animation is complete
    setTimeout(() => {
      // First, trigger entry animation
      setShowEntryTransition(true);

      // Then immediately change route (1ms delay to ensure entry animation starts first)
      setTimeout(() => {
        router.push(path);

        // Remove exit animation element
        document.body.removeChild(exitAnimation);

        // Reset states after entry animation completes
        setTimeout(() => {
          setIsTransitioning(false);
          setShowEntryTransition(false);
        }, 1200); // Match with TransitionEffect duration
      }, 1);
    }, 950); // Wait until exit animation is fully complete
  };

  return (
    <div className="relative">
      {/* Entry transition */}
      {mounted && showEntryTransition && <TransitionEffect />}
      {/* Main content */}
      {!mounted ? (
        <Loading />
      ) : (
        <div className="font-mont bg-transparent w-full min-h-screen scroll-smooth flex flex-col overflow-x-hidden">
          <ClickSpark
            sparkSize={isMobile ? 8 : 10}
            sparkRadius={isMobile ? 12 : 15}
            sparkCount={isMobile ? 6 : 8}
            duration={400}
          >
            <Header onRouteChange={handleRouteChange} />
            <ScrollToTop />
            <main className="flex-grow pt-28 px-4 sm:px-6 md:px-8 ">
              <AnimatePresence mode="wait">{children}</AnimatePresence>
            </main>
            <Footer />
          </ClickSpark>
        </div>
      )}
    </div>
  );
}
