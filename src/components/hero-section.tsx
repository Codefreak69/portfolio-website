// components/sections/HeroSection.tsx
'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Animated background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-100" />
        <motion.div
          className="absolute inset-0"
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
            backgroundSize: ['100% 100%', '120% 120%']
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            repeatType: 'reverse'
          }}
          style={{
            backgroundImage:
              'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'
          }}
        />
      </div>

      <motion.div
        className="container mx-auto px-6 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-6xl md:text-7xl font-bold mb-6"
          variants={itemVariants}
        >
          Hi, I&apos;m <span className="text-blue-600">Vikash Kumar</span>
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl text-gray-600 mb-8"
          variants={itemVariants}
        >
          Frontend Developer & UI/UX Enthusiast
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex justify-center gap-4"
        >
          <Button
            size="lg"
            className="bg-blue-600 hover:bg-blue-700"
            onClick={() =>
              document
                .getElementById('projects')
                ?.scrollIntoView({ behavior: 'smooth' })
            }
          >
            View My Work
          </Button>

          <Button
            size="lg"
            variant="outline"
            onClick={() =>
              document
                .getElementById('contact')
                ?.scrollIntoView({ behavior: 'smooth' })
            }
          >
            Contact Me
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
