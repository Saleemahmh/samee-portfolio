import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import { Navbardata } from "../../data/Navbardata";
import React from "react";

const HamburgerMenu = ({ open }) => {
  return (
    <AnimatePresence mode="wait">
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.3 }}
          className="absolute top-20 left-0 w-full h-screen z-50"
        >
          <div className="text-xl font-aladin bg-aqua text-pastelblue py-10 m-6 rounded-3xl">
            <ul className="flex flex-col justify-center items-center gap-10">
              {Navbardata.map((item) => {
                return (
                  <li key={item.id}>
                    <a href={item.links}>{item.name}</a>
                  </li>
                );
              })}
            </ul>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default HamburgerMenu;
