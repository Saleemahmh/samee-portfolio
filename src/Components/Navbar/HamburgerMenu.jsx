import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import React from "react";

const HamburgerMenu = ({ open }) => {
  return (
    <AnimatePresence mode="wait">
      {open && (
      <motion.div
        initial={{ opacity: 0, y:-100 }}
        animate={{ opacity: 1, y:0 }}
        exit={{opacity:0, y:-100}}
        transition={{duration:0.3}}
        className="absolute top-20 left-0 w-full h-screen z-20"
      >
        <div className="text-xl font-aladin bg-aqua text-pastelblue py-10 m-6 rounded-3xl">
            <ul className="flex flex-col justify-center items-center gap-10">
                <li>Home</li>
                <li>Services</li>
                <li>Testimonials</li>
                <li>Projects</li>
                <li>My Stories</li>
            </ul>
        </div>
      </motion.div>
      )}
    </AnimatePresence>
  );
};

export default HamburgerMenu;
