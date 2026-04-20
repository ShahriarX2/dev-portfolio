import type { Metadata } from "next";
import { JetBrains_Mono, Montserrat } from "next/font/google";
import {
  VscHome,
  VscArchive,
  VscAccount,
  VscMail,
  VscTerminal,
  VscBriefcase,
  VscGithub,
} from "react-icons/vsc";
import "./globals.css";
import { cn } from "@/lib/utils";
import { FloatingDock } from "@/components/ui/floating-dock";
import ShapeGrid from "@/components/ShapeGrid";
import { SmoothScroll } from "@/components/ui/SmoothScroll";

const montserratHeading = Montserrat({
  subsets: ["latin"],
  variable: "--font-heading",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Shahariar Hossen",
  description: "Full-stack developer portfolio built with Next.js.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const items = [
    {
      icon: <VscHome size={18} />,
      title: "Home",
      href: "/",
    },
    {
      icon: <VscArchive size={18} />,
      title: "Projects",
      href: "/projects",
    },
    {
      icon: <VscTerminal size={18} />,
      title: "Skills",
      href: "/skills",
    },
    {
      icon: <VscBriefcase size={18} />,
      title: "Experiences",
      href: "/experiences",
    },
    {
      icon: <VscGithub size={18} />,
      title: "GitHub",
      href: "/github",
    },
    {
      icon: <VscAccount size={18} />,
      title: "Profile",
      href: "/profile",
    },
    {
      icon: <VscMail size={18} />,
      title: "Contact",
      href: "/contact",
    },
  ];

  return (
    <html
      lang="en"
      className={cn(
        "font-mono",
        jetbrainsMono.variable,
        montserratHeading.variable,
      )}
    >
      <body className="relative min-h-svh bg-black text-white">
        <SmoothScroll>
          <div className="grain-overlay" />
          <div className="hero-background fixed inset-0 h-full w-full -z-10 overflow-hidden">
            <div className="hero-left-vignette absolute inset-0" />
            <div className="hero-grid-mask absolute inset-0 opacity-35">
              <ShapeGrid
                speed={0.12}
                squareSize={24}
                direction="diagonal"
                borderColor="rgba(109, 145, 171, 0.22)"
                hoverFillColor="rgba(96, 224, 255, 0.18)"
                shape="hexagon"
                hoverTrailAmount={2}
                className="opacity-80"
              />
            </div>
            <div className="hero-grid-sheen absolute inset-0" />
          </div>

          {children}

          <FloatingDock
            items={items}
            desktopClassName="fixed bottom-6 left-1/2 z-50 -translate-x-1/2"
            mobileClassName="fixed right-6 bottom-6 z-50"
          />
        </SmoothScroll>
      </body>
    </html>
  );
}
