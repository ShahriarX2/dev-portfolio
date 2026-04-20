"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface TerminalLogoProps {
  className?: string;
  fontSize?: string;
}

export default function TerminalLogo({ className, fontSize = "text-lg" }: TerminalLogoProps) {
  return (
    <div className={cn("font-mono flex items-center gap-1 select-none", className)}>
      <span className="text-cyan-400 font-bold">$</span>
      <span className={cn("text-white", fontSize)}>
        shahriarx2
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{
            duration: 0.8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="text-cyan-400"
        >
          _
        </motion.span>
      </span>
    </div>
  );
}
