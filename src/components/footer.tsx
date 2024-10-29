// components/Footer.tsx
'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const socialLinks = [
  { icon: Github, href: 'https://github.com/Codefreak69', label: 'GitHub' },
  {
    icon: Linkedin,
    href: 'https://linkedin.com/in/iamvikashkum',
    label: 'LinkedIn'
  },
  { icon: Twitter, href: 'https://x.com/iamvikashkum', label: 'Twitter' },
  { icon: Mail, href: 'mailto:iamvikashkumar30@gmail.com', label: 'Email' }
];

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <motion.div
        className="container mx-auto px-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="flex flex-col items-center space-y-8">
          {/* Scroll to top button */}
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <Button
              variant="outline"
              size="icon"
              onClick={scrollToTop}
              className="rounded-full bg-white/10 hover:bg-white/20 border-none"
            >
              <ArrowUp className="h-6 w-6" />
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div className="flex space-x-6" variants={containerVariants}>
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-colors"
                variants={itemVariants}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon className="h-6 w-6" />
                <span className="sr-only">{label}</span>
              </motion.a>
            ))}
          </motion.div>

          {/* Copyright */}
          <motion.div
            variants={itemVariants}
            className="text-center text-gray-400"
          >
            <p className="text-sm">
              © {new Date().getFullYear()} Vikash. All rights reserved.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
