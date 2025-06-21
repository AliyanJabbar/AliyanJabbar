import { ThemeProvider } from "@/components/ui/ThemeProvider";
import { Montserrat, Monsieur_La_Doulaise } from "next/font/google";
import "./globals.css";
import ClientLayout from "./ClientLayout";

export const metadata = {
  title: "Aliyan Jabbar - Frontend Developer",
  description:
    "Portfolio of Aliyan Jabbar - Frontend Developer specializing in highly interactive and responsive web applications",
  keywords:
    "frontend developer, react, nextjs, portfolio, web development, web developer portfolio, UI/UX design, frontend engineer, web applications, interactive websites",
  authors: [{ name: "Aliyan Jabbar" }],
};
export const viewport = {
  width: "device-width",
  initialScale: 1,
};

// Optimized font loading
const subFont = Monsieur_La_Doulaise({
  subsets: ["latin-ext"],
  weight: "400",
  variable: "--font-corinthia",
  display: "swap", // Better font loading performance
  preload: false, // Only load when needed
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-mont",
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className="scrollbar-none selection dark:selection"
    >
      <body
        className={`${montserrat.variable} ${subFont.variable} bg-light dark:bg-dark scroll-smooth antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <ClientLayout>{children}</ClientLayout>
        </ThemeProvider>
      </body>
    </html>
  );
}
