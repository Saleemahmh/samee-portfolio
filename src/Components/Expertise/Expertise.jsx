import React from "react";
import { TbArrowBadgeRight } from "react-icons/tb";
import { TbArrowBadgeRightFilled } from "react-icons/tb";
import { motion } from "framer-motion";
import { Expertisedata } from "../../data/Expertisedata.js";
import { Link } from "react-router-dom";

const Expertise = () => {
  return (
    <div id="services" className="container h-fit">
      <h2 className="font-aladin text-blue text-3xl md:text-4xl mt-5 lg:text-5xl text-center"> Services</h2>
      <motion.div initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01],}}
      
      viewport={{ once: true, amount: 0.2 }} className="flex flex-col sm:flex-row sm:flex-wrap justify-center items-center gap-8 p-8">
        {Expertisedata.map((item) => {
          return (
            <motion.div
              whileHover={{
                boxShadow:
                  "0 0 15px rgba(0, 180, 216,0.8), 0 0 30px rgba(0, 180, 216,0.6), 0 0 45px rgba(144,224,239,0.4)",
                scale: 1.05,
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="flex flex-col flex-1 min-w-[250px] items-center w-72 h-[28rem] backdrop-blur-md bg-[linear-gradient(135deg,rgba(144,224,239,0.4),rgba(0,180,216,0.4))] shadow-md border-beige/20 rounded-md border-2 p-8"
              key={item.id}
            >
              <h1 className="font-aladin text-blue text-3xl">{item.name}</h1>
              <p className="font-playball text-xl  text-blue">{item.desc}</p>
              <motion.button
                animate={{
                  boxShadow: [
                    `0 0 6px rgba(0, 119, 182, 0.12)`,
                    `0 0 22px rgba(0, 119, 182, 0.55)`,
                    `0 0 6px rgba(0, 119, 182, 0.12)`,
                  ],
                  scale: [1, 1.02, 1],
                }}
                transition={{
                  duration: 2.2,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                }}
                whileHover={{
                  boxShadow: `0 0 24px rgba(253, 253, 150, 0.95), 0 0 48px rgba(0, 119, 182, 0.6), 0 0 96px rgba(0, 119, 182, 0.28)`,
                  scale: 1.06,
                }}
                whileTap={{ scale: 0.985 }}
                className="flex flex-col flex-wrap mt-3 md:mt-auto lg:mt-auto cursor-pointer bg-blue rounded-lg w-44 h-14 p-4 font-aladin text-lightblue text-xl"
                style={{ willChange: "transform, box-shadow" }}
              ><Link to={item.link}>
                Learn More 
                </Link>
              </motion.button>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default Expertise;
