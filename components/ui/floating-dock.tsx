"use client";
/**
 * Note: Use position fixed according to your needs
 * Desktop navbar is better positioned at the bottom
 * Mobile navbar is better positioned at bottom right.
 **/

import { cn } from "@/lib/utils";
import { IconLayoutNavbarCollapse } from "@tabler/icons-react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import {
  AnimatePresence,
  MotionValue,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "motion/react";

import { useRef, useState, useTransition, addTransitionType } from "react";
import { Magnetic } from "./Magnetic";

export const FloatingDock = ({
  items,
  desktopClassName,
  mobileClassName,
}: {
  items: { title: string; icon: React.ReactNode; href: string }[];
  desktopClassName?: string;
  mobileClassName?: string;
}) => {
  return (
    <>
      <FloatingDockDesktop items={items} className={desktopClassName} />
      <FloatingDockMobile items={items} className={mobileClassName} />
    </>
  );
};

const FloatingDockMobile = ({
  items,
  className,
}: {
  items: { title: string; icon: React.ReactNode; href: string }[];
  className?: string;
}) => {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const [, startTransition] = useTransition();

  const handleNavigate = (href: string) => {
    setOpen(false);
    if (pathname === href) return;

    const currentIndex = items.findIndex((item) => item.href === pathname);
    const targetIndex = items.findIndex((item) => item.href === href);
    const direction = targetIndex > currentIndex ? "nav-forward" : "nav-back";

    startTransition(() => {
      addTransitionType(direction);
      router.push(href);
    });
  };

  return (
    <div className={cn("relative block md:hidden", className)}>
      <AnimatePresence>
        {open && (
          <motion.div
            layoutId="nav"
            className="absolute inset-x-0 bottom-full mb-2 flex flex-col gap-2"
          >
            {items.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 10 }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  y: 10,
                  transition: {
                    delay: idx * 0.05,
                  },
                }}
                transition={{ delay: (items.length - 1 - idx) * 0.05 }}
              >
                <button
                  onClick={() => handleNavigate(item.href)}
                  key={item.title}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-neutral-900 text-neutral-100 shadow-lg shadow-black/30"
                >
                  <div className="h-4 w-4">{item.icon}</div>
                </button>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
      <button
        type="button"
        aria-label="Toggle navigation"
        onClick={() => setOpen(!open)}
        className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-neutral-900 text-neutral-100 shadow-lg shadow-black/30"
      >
        <IconLayoutNavbarCollapse className="h-5 w-5" />
      </button>
    </div>
  );
};

const FloatingDockDesktop = ({
  items,
  className,
}: {
  items: { title: string; icon: React.ReactNode; href: string }[];
  className?: string;
}) => {
  const mouseX = useMotionValue(Infinity);
  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className={cn(
        "mx-auto hidden h-16 items-end gap-4 rounded-2xl border border-white/10 bg-neutral-950/95 px-4 pb-3 text-neutral-100 shadow-2xl shadow-black/40 backdrop-blur-md md:flex",
        className,
      )}
    >
      {items.map((item) => (
        <Magnetic key={item.title} strength={0.2} radius={50}>
          <IconContainer mouseX={mouseX} items={items} {...item} />
        </Magnetic>
      ))}
    </motion.div>
  );
};

function IconContainer({
  mouseX,
  title,
  icon,
  href,
  items,
}: {
  mouseX: MotionValue;
  title: string;
  icon: React.ReactNode;
  href: string;
  items: { title: string; icon: React.ReactNode; href: string }[];
}) {
  const ref = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const pathname = usePathname();
  const [, startTransition] = useTransition();

  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };

    return val - bounds.x - bounds.width / 2;
  });

  const widthTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40]);
  const heightTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40]);

  const widthTransformIcon = useTransform(distance, [-150, 0, 150], [20, 40, 20]);
  const heightTransformIcon = useTransform(
    distance,
    [-150, 0, 150],
    [20, 40, 20],
  );

  const width = useSpring(widthTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });
  const height = useSpring(heightTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  const widthIcon = useSpring(widthTransformIcon, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });
  const heightIcon = useSpring(heightTransformIcon, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  const [hovered, setHovered] = useState(false);

  const handleNavigate = (e: React.MouseEvent) => {
    e.preventDefault();
    if (pathname === href) return;
    
    const currentIndex = items.findIndex((item) => item.href === pathname);
    const targetIndex = items.findIndex((item) => item.href === href);
    const direction = targetIndex > currentIndex ? "nav-forward" : "nav-back";

    startTransition(() => {
      addTransitionType(direction);
      router.push(href);
    });
  };

  return (
    <Link href={href} onClick={handleNavigate}>
      <motion.div
        ref={ref}
        style={{ width, height }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="relative flex aspect-square items-center justify-center rounded-full bg-neutral-800 text-neutral-100"
      >
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0, y: 10, x: "-50%" }}
              animate={{ opacity: 1, y: 0, x: "-50%" }}
              exit={{ opacity: 0, y: 2, x: "-50%" }}
              className="absolute -top-8 left-1/2 w-fit rounded-md border border-white/10 bg-neutral-900 px-2 py-0.5 text-xs whitespace-pre text-neutral-100 shadow-lg shadow-black/30"
            >
              {title}
            </motion.div>
          )}
        </AnimatePresence>
        <motion.div
          style={{ width: widthIcon, height: heightIcon }}
          className="flex items-center justify-center"
        >
          {icon}
        </motion.div>
      </motion.div>
    </Link>
  );
}
