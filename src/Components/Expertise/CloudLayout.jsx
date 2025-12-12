/* import React from 'react'
import {motion} from "framer-motion";

const CloudLayout = ({children}) => {
  return (
    <motion.div
    initial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0}}
    transition={{duration:0.6}}
    className='container relative min-h-screen overflow-hidden'>
        <div className="absolute inset-0 bg-[url('/Skyclouds.jpg')] bg-cover bg-no-repeat bg-center opacity-80 pointer-events-none"></div>



      <motion.div
        className="absolute inset-0 bg-[url('/src/assets/driftingcloud_1.png')] bg-contain bg-repeat-x opacity-60 pointer-events-none"
        animate={{ x: ["0%", "100%"] }}
        transition={{
          duration: 55,
          ease: "linear",
          repeat: Infinity,
        }}
      />
      

 
      <motion.div
        className="absolute inset-0 bg-[url('/src/assets/driftingcloud_3.png')] bg-contain bg-repeat-x opacity-40 pointer-events-none"
        animate={{ x: ["0%", "-100%"] }}
        transition={{
          duration: 80,
          ease: "linear",
          repeat: Infinity,
        }}
      />
      <motion.div
        className="absolute inset-0 bg-[url('/src/assets/driftingcloud_2.png')] bg-cover bg-center opacity-30 blur-xl pointer-events-none"
        animate={{ x: ["-10%", "10%", "-10%"] }}
        transition={{
          duration: 25,
          ease: "easeInOut",
          repeat: Infinity,
        }}
      />
       <div className="absolute left-0 bottom-[0px] w-full h-[250px] pointer-events-none overflow-hidden">
        <motion.div
          className="absolute left-0 top-0 w-[200%] h-full bg-[url('/src/assets/driftingcloud_4.png')] bg-cover bg-center opacity-30 blur-xl"
          animate={{ x: ["-10%", "10%", "-10%"] }}
          transition={{ duration: 25, ease: "easeInOut", repeat: Infinity }}
        />
      </div>
         <div className="relative z-20">
        {children}
      </div>
    </motion.div>
  )
}

export default CloudLayout */

import React from 'react'
import { motion } from "framer-motion";

const CloudLayout = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="relative min-h-screen overflow-hidden"
    >
      {/* STATIC SKY BACKGROUND */}
      <div className="absolute inset-0 bg-[url('/Skyclouds.jpg')] bg-cover bg-no-repeat bg-center opacity-80 pointer-events-none"></div>


      {/** -------------------------------------------
       *  FULL-SCREEN FLOATING LAYERS (your originals)
       * -------------------------------------------*/}
      
      {/* Layer A */}
      <motion.div
        className="absolute inset-0 bg-[url('/src/assets/driftingcloud_1.png')] bg-contain bg-repeat-x opacity-50 pointer-events-none"
        animate={{ x: ["0%", "100%"] }}
        transition={{ duration: 55, ease: "linear", repeat: Infinity }}
      />

      {/* Layer B */}
      <motion.div
        className="absolute inset-0 bg-[url('/src/assets/driftingcloud_3.png')] bg-contain bg-repeat-x opacity-40 pointer-events-none"
        animate={{ x: ["0%", "-100%"] }}
        transition={{ duration: 80, ease: "linear", repeat: Infinity }}
      />

      {/* Layer C */}
      <motion.div
        className="absolute inset-0 bg-[url('/src/assets/driftingcloud_2.png')] bg-cover bg-center opacity-25 blur-sm pointer-events-none"
        animate={{ x: ["-10%", "10%", "-10%"] }}
        transition={{ duration: 25, ease: "easeInOut", repeat: Infinity }}
      />


      {/** -------------------------------------------
       *  EXTRA TOP CLOUDS
       * -------------------------------------------*/}
      <div className="absolute top-[120px] left-0 w-full h-[200px] pointer-events-none overflow-hidden">
        <motion.div
          className="absolute w-[200%] h-full bg-[url('/src/assets/driftingcloud_1.png')] bg-contain bg-repeat-x opacity-35"
          animate={{ x: ["0%", "100%"] }}
          transition={{ duration: 70, ease: "linear", repeat: Infinity }}
        />
      </div>


      {/** -------------------------------------------
       *  EXTRA MIDDLE CLOUDS
       * -------------------------------------------*/}
      <div className="absolute top-[700px] left-0 w-full h-[250px] pointer-events-none overflow-hidden">
        <motion.div
          className="absolute w-[200%] h-full bg-[url('/src/assets/driftingcloud_2.png')] bg-contain bg-repeat-x opacity-45"
          animate={{ x: ["0%", "-100%"] }}
          transition={{ duration: 65, ease: "linear", repeat: Infinity }}
        />
      </div>


      {/** -------------------------------------------
       *  EXTRA BOTTOM CLOUDS (your existing one + 1 more)
       * -------------------------------------------*/}
      <div className="absolute bottom-[0px] left-0 w-full h-[250px] pointer-events-none overflow-hidden">
        <motion.div
          className="absolute w-[200%] h-full bg-[url('/src/assets/driftingcloud_4.png')] bg-cover bg-center opacity-30 blur-xl"
          animate={{ x: ["-10%", "10%", "-10%"] }}
          transition={{ duration: 25, ease: "easeInOut", repeat: Infinity }}
        />

        {/* New extra drifting bottom layer */}
        <motion.div
          className="absolute w-[200%] h-full bg-[url('/src/assets/driftingcloud_3.png')] bg-contain bg-repeat-x opacity-25"
          animate={{ x: ["0%", "100%"] }}
          transition={{ duration: 90, ease: "linear", repeat: Infinity }}
        />
      </div>


      {/* MAIN CONTENT */}
      <div className="relative z-20">
        {children}
      </div>
    </motion.div>
  );
};

export default CloudLayout;
