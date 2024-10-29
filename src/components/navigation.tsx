'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      className={`fixed w-full z-50 transition-colors duration-300 ${
        scrolled ? 'bg-white/80 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            className="text-2xl font-bold"
            whileHover={{ scale: 1.05 }}
          >
            Vk Codes
          </motion.div>
          <ul className="hidden md:flex space-x-8">
            {['Home', 'About', 'Projects', '3D', 'Contact'].map(item => (
              <motion.li key={item} whileHover={{ scale: 1.1 }}>
                <Link
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-800 hover:text-blue-600 transition-colors"
                >
                  {item}
                </Link>
              </motion.li>
            ))}
          </ul>
        </div>
      </nav>
    </motion.header>
  );
};

export default Navigation;
