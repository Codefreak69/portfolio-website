'use client';

import { motion } from 'framer-motion';

import { Earth } from './earth';

const ThreeDSection = () => {
  return (
    <section id="3d" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 text-white">
            This is a 3d Earth Element
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            you can interact with it by dragging the mouse or touch on the
            screen(if the globe looks stretched please refresh the page :))
          </p>
        </motion.div>

        <div className="h-[500px] w-full bg-gray-800 rounded-lg overflow-hidden">
          <Earth />
        </div>
      </div>
    </section>
  );
};

export default ThreeDSection;
