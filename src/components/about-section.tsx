// components/sections/AboutSection.tsx
"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Card } from "@/components/ui/card";

interface Skill {
  name: string;
  level: number;
  icon: string;
}

const skills: Skill[] = [
  { name: "React/Next.js", level: 90, icon: "⚛️" },
  { name: "TypeScript", level: 85, icon: "📘" },
  { name: "HTML/CSS", level: 95, icon: "🎨" },
  { name: "Three.js", level: 75, icon: "🎮" },
  { name: "Tailwind CSS", level: 88, icon: "🎯" },
  { name: "Framer Motion", level: 82, icon: "✨" },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-12"
        >
          <motion.div variants={itemVariants} className="text-center">
            <h2 className="text-4xl font-bold mb-4">About Me</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              I&apos;m a passionate frontend developer with a keen eye for
              creating beautiful, functional, and user-friendly websites. I love
              working with modern technologies and am always eager to learn
              more.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {skills.map((skill, index) => (
              <Card
                key={skill.name}
                className="p-6 hover:shadow-lg transition-shadow"
              >
                <motion.div
                  initial={{ width: 0 }}
                  animate={
                    isInView ? { width: `${skill.level}%` } : { width: 0 }
                  }
                  transition={{ duration: 1, delay: index * 0.2 }}
                  className="relative"
                >
                  <div className="flex items-center mb-3">
                    <span className="text-2xl mr-2">{skill.icon}</span>
                    <h3 className="font-semibold">{skill.name}</h3>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full">
                    <div
                      className="h-full bg-blue-600 rounded-full"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                  <span className="text-sm text-gray-600 mt-1 block">
                    {skill.level}%
                  </span>
                </motion.div>
              </Card>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
