import { motion } from "motion/react";

export default function Hero() {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center">
      <h1 className="text-4xl font-bold">Full Stack Developer</h1>
      <p className="text-gray-400 mt-4">
        I build scalable web applications with Next.js
      </p>
    </section>
  );
}
