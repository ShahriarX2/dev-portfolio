"use client";

import {
  VscHome,
  VscArchive,
  VscAccount,
  VscSettingsGear,
} from "react-icons/vsc";
import { FloatingDock } from "@/components/ui/floating-dock";

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
    <nav>
      <FloatingDock items={items} />
    </nav>
  );
}
