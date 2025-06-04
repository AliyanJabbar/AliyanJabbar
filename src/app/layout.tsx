import { ThemeProvider } from "@/components/ui/ThemeProvider";
import { Montserrat, Monsieur_La_Doulaise } from "next/font/google";
import "./globals.css";
import ClientLayout from "./ClientLayout";
import dynamic from "next/dynamic";
const ClientParticles = dynamic(() => import("./ParticlesLayout"), {
  ssr: true,
});

export const metadata = {
  title: "Aliyan Jabbar",
  description: "Aliyan Jabbar Portfolio",
};

// Fonts
const sub_font = Monsieur_La_Doulaise({
  subsets: ["latin-ext"],
  weight: "400",
  variable: "--font-corinthia",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-mont",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${montserrat.className} ${sub_font.variable} select-none scroll-smooth`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {/* Particles are rendered at the root level */}
          <ClientParticles />
          <ClientLayout>{children}</ClientLayout>
        </ThemeProvider>
      </body>
    </html>
  );
}
