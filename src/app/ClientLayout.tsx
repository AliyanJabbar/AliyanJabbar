"use client";
import "./globals.css";
import Header from "@/components/mainComponents/header";
import ClickSpark from "../components/ui/ClickSpark";
import Footer from "@/components/mainComponents/Footer";
import { useEffect, useState, useRef, useCallback } from "react";
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
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [showEntryTransition, setShowEntryTransition] = useState(false);

  const isFirstMount = useRef(true);
  const lenisRef = useRef<Lenis | null>(null);
  const pathname = usePathname();
  const router = useRouter();

  const checkMobile = useCallback(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  // Initialize Lenis and mobile detection
  useEffect(() => {
    // Initialize Lenis once
    if (!lenisRef.current) {
      lenisRef.current = new Lenis({
        autoRaf: true,
      });
    }

    setMounted(true);
    checkMobile();

    // Use passive listener for better performance
    window.addEventListener("resize", checkMobile, { passive: true });

    return () => {
      window.removeEventListener("resize", checkMobile);
      // Cleanup Lenis on unmount
      if (lenisRef.current) {
        lenisRef.current.destroy();
        lenisRef.current = null;
      }
    };
  }, [checkMobile]);

  // Handle route changes
  useEffect(() => {
    if (!mounted) return;

    if (isFirstMount.current) {
      isFirstMount.current = false;
      return;
    }
  }, [pathname, mounted]);

  // Optimized route change handler
  const handleRouteChange = useCallback(
    (path: string) => {
      if (path === pathname || isTransitioning) return;

      setIsTransitioning(true);
      setShowEntryTransition(false);

      // Create exit animation element
      const exitAnimation = document.createElement("div");
      exitAnimation.className =
        "fixed inset-0 w-screen h-full z-[9999999] dark:bg-primaryDark bg-primary";
      exitAnimation.style.cssText = `
      transform: scaleX(0);
      transform-origin: left;
      transition: transform 1s cubic-bezier(0.65, 0, 0.35, 1);
      will-change: transform;
    `;

      document.body.appendChild(exitAnimation);

      // Start exit animation
      requestAnimationFrame(() => {
        exitAnimation.style.transform = "scaleX(1)";
      });

      // Handle animation sequence
      const exitTimer = setTimeout(() => {
        setShowEntryTransition(true);

        const routeTimer = setTimeout(() => {
          router.push(path);

          // Safe cleanup
          if (document.body.contains(exitAnimation)) {
            document.body.removeChild(exitAnimation);
          }

          const resetTimer = setTimeout(() => {
            setIsTransitioning(false);
            setShowEntryTransition(false);
          }, 1200);

          return () => clearTimeout(resetTimer);
        }, 1);

        return () => clearTimeout(routeTimer);
      }, 950);

      return () => clearTimeout(exitTimer);
    },
    [pathname, isTransitioning, router]
  );

  // Show loading state
  if (!mounted) {
    return <Loading />;
  }

  return (
    <div className="relative">
      {showEntryTransition && <TransitionEffect />}

      <div className="font-mont bg-transparent w-full min-h-screen scroll-smooth flex flex-col overflow-x-hidden">
        <ClickSpark
          sparkSize={isMobile ? 8 : 10}
          sparkRadius={isMobile ? 12 : 15}
          sparkCount={isMobile ? 6 : 8}
          duration={400}
        >
          <Header onRouteChange={handleRouteChange} />
          <ScrollToTop />
          <main className="flex-grow pt-28 px-4 sm:px-6 md:px-8">
            <AnimatePresence mode="wait">{children}</AnimatePresence>
          </main>
          <Footer />
        </ClickSpark>
      </div>
    </div>
  );
}
