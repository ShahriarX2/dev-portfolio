"use client";

import {
  VscHome,
  VscArchive,
  VscAccount,
  VscSettingsGear,
} from "react-icons/vsc";
import { FloatingDock } from "@/components/ui/floating-dock";
import TerminalLogo from "@/components/TerminalLogo";

export default function Navbar() {
  const items = [
    {
      icon: <VscHome size={18} />,
      title: "Home",
      href: "/",
    },
    {
      icon: <VscArchive size={18} />,
      title: "Archive",
      href: "/archive",
    },
    {
      icon: <VscAccount size={18} />,
      title: "Profile",
      href: "/profile",
    },
    {
      icon: <VscSettingsGear size={18} />,
      title: "Settings",
      href: "/settings",
    },
  ];

  return (
    <nav className="fixed top-6 left-0 right-0 z-50 flex justify-center pointer-events-none">
      <div className="pointer-events-auto bg-neutral-950/50 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full">
        <TerminalLogo fontSize="text-sm" />
      </div>
      <FloatingDock items={items} />
    </nav>
  );
}
