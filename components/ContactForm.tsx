"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";

const STEPS = [
  { id: "name", label: "INITIALIZE NAME", placeholder: "IDENTIFY YOURSELF..." },
  { id: "email", label: "ESTABLISH COMMS", placeholder: "EMAIL FOR HANDSHAKE..." },
  { id: "message", label: "TRANSMIT INTENT", placeholder: "WHAT IS THE MISSION?..." },
];

export const ContactForm = () => {
  const [isBooting, setIsBooting] = useState(true);
  const [bootLines, setBootLines] = useState<string[]>([]);
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);

  useEffect(() => {
    if (isBooting) {
      const lines = [
        "SECURE_LINE_INIT...",
        "ENCRYPTING_CHANNELS...",
        "HANDSHAKE_PROTOCOL_ACCEPTED",
        "TERMINAL_READY",
      ];
      let i = 0;
      const interval = setInterval(() => {
        if (i < lines.length) {
          setBootLines((prev) => [...prev, lines[i]]);
          i++;
        } else {
          setTimeout(() => setIsBooting(false), 500);
          clearInterval(interval);
        }
      }, 300);
      return () => clearInterval(interval);
    }
  }, [isBooting]);

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    if (currentStep < STEPS.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      handleSend();
    }
  };

  const handleSend = async () => {
    setIsSending(true);
    // Simulate transmission
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsSending(false);
    setIsSent(true);
  };

  const step = STEPS[currentStep];

  if (isBooting) {
    return (
      <div className="flex h-full flex-col justify-center space-y-2 font-mono text-[10px] tracking-widest text-cyan-400/60 uppercase">
        {bootLines.map((line, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            &gt; {line}
          </motion.div>
        ))}
        <motion.div
          animate={{ opacity: [0, 1] }}
          transition={{ repeat: Infinity, duration: 0.5 }}
          className="h-3 w-1.5 bg-cyan-400"
        />
      </div>
    );
  }

  if (isSent) {
    return (
      <div className="flex h-full flex-col items-center justify-center space-y-6 text-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="h-20 w-20 rounded-full bg-cyan-500/20 flex items-center justify-center border border-cyan-500/50"
        >
          <div className="h-3 w-3 rounded-full bg-cyan-400 animate-pulse" />
        </motion.div>
        <div className="space-y-2">
          <h2 className="text-2xl font-bold text-white tracking-widest">SIGNAL RECEIVED</h2>
          <p className="text-cyan-400/60 font-mono text-sm uppercase tracking-tighter">
            TRANSMISSION SECURED. STANDBY FOR RESPONSE.
          </p>
        </div>
        <button 
          onClick={() => { setIsSent(false); setCurrentStep(0); setFormData({ name: "", email: "", message: "" }); }}
          className="text-xs text-white/40 hover:text-white underline underline-offset-4 font-mono"
        >
          NEW TRANSMISSION?
        </button>
      </div>
    );
  }

  return (
    <div className="relative h-full font-mono">
      <div className="mb-8 flex items-center justify-between border-b border-white/10 pb-4">
        <div className="flex items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-cyan-500" />
          <span className="text-[10px] tracking-[0.3em] text-white/40 uppercase">Terminal v1.0.4</span>
        </div>
        <span className="text-[10px] tracking-[0.3em] text-white/40 uppercase">
          STEP {currentStep + 1} / {STEPS.length}
        </span>
      </div>

      <form onSubmit={handleNext} className="space-y-12">
        <AnimatePresence mode="wait">
          <motion.div
            key={step.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
          >
            <label className="block text-xs font-bold tracking-[0.4em] text-cyan-400 uppercase">
              {step.label}
            </label>
            {step.id === "message" ? (
              <textarea
                autoFocus
                required
                className="w-full border-none bg-transparent p-0 text-xl text-white outline-none ring-0 placeholder:text-white/10 sm:text-2xl"
                placeholder={step.placeholder}
                value={formData[step.id as keyof typeof formData]}
                onChange={(e) => setFormData({ ...formData, [step.id]: e.target.value })}
                rows={4}
              />
            ) : (
              <input
                autoFocus
                required
                type={step.id === "email" ? "email" : "text"}
                className="w-full border-none bg-transparent p-0 text-xl text-white outline-none ring-0 placeholder:text-white/10 sm:text-2xl"
                placeholder={step.placeholder}
                value={formData[step.id as keyof typeof formData]}
                onChange={(e) => setFormData({ ...formData, [step.id]: e.target.value })}
              />
            )}
          </motion.div>
        </AnimatePresence>

        <div className="flex items-center justify-between pt-10">
          <button
            type="button"
            disabled={currentStep === 0}
            onClick={() => setCurrentStep(currentStep - 1)}
            className="text-[10px] font-bold tracking-widest text-white/30 transition hover:text-white disabled:opacity-0"
          >
            [ PREV ]
          </button>
          
          <button
            type="submit"
            className={cn(
              "group flex items-center gap-4 text-xs font-bold tracking-widest uppercase",
              isSending ? "text-cyan-400" : "text-white"
            )}
          >
            {isSending ? (
              <span className="flex items-center gap-2">
                TRANSMITTING
                <span className="flex gap-1">
                  <span className="h-1 w-1 bg-cyan-400 animate-bounce" style={{ animationDelay: "0ms" }} />
                  <span className="h-1 w-1 bg-cyan-400 animate-bounce" style={{ animationDelay: "150ms" }} />
                  <span className="h-1 w-1 bg-cyan-400 animate-bounce" style={{ animationDelay: "300ms" }} />
                </span>
              </span>
            ) : (
              <>
                <span>{currentStep === STEPS.length - 1 ? "[ BROADCAST ]" : "[ NEXT ]"}</span>
                <div className="h-px w-8 bg-white/20 transition-all group-hover:w-12 group-hover:bg-cyan-400" />
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
};
