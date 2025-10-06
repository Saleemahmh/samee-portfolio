import React from "react";
import { motion } from "framer-motion";
const Hero = () => {
  return (
    <section className="container relative h-100 border-2 border-aqua/40 rounded-md bg-beige/30 backdrop-blur-[1px] py-8">
      {/*Sun */}
      <div className="relative group">
        <div className="absolute blur-xl bg-gradient-to-r from-blue-400 via-sky-300 to-cyan-500 rounded-full w-[96px] h-[96px] right-40 animate-sun group-hover:blur transition duration-200"></div>
        <div className="absolute bg-white rounded-full w-[96px] h-[96px] right-40 animate-sun group-hover:transition duration-200"></div>
      </div>

      {/*Clouds */}
      <div className="absolute bg-[url(/src/assets/cloud1.png)] animate-clouds w-22 h-22 left-64 top-6  bg-no-repeat bg-contain z-10"></div>
      <div className="absolute bg-[url(/src/assets/cloud2.png)] animate-clouds w-22 h-22 right-24 bottom-46 bg-no-repeat bg-contain z-10"></div>
      <div className="absolute bg-[url(/src/assets/cloud3.png)] animate-clouds w-22 h-22 left-4 bottom-45 bg-no-repeat bg-contain z-10"></div>
      <div className="absolute bg-[url(/src/assets/cloud4.png)] animate-clouds w-22 h-22 right-140 bottom-60 bg-no-repeat bg-contain z-10"></div>
      <div className="absolute bg-[url(/src/assets/cloud1.png)] animate-clouds w-22 h-22 left-140 bottom-50 bg-no-repeat bg-contain z-10"></div>
      {/*Skyline */}
      <div className="absolute bg-[url(/src/assets/skylinel1.png)] animate-skyline2 w-[100%] h-60 bottom-0 left-0 top-[160px] right-5 bg-repeat-x z-30"></div>
      <div className="absolute bg-[url(/src/assets/skylinel2.png)] animate-skyline w-[100%] h-60 bottom-0 left-0 top-[156px] right-5 bg-repeat-x z-40"></div>

      <motion.div initial={{opacity:0,scale:0.5}} animate={{ opacity: 1, scale: 1 }}
            transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01],
            }} className="absolute inset-x-0 z-50 w-full top-1/12 flex flex-col items-center text-center px-4">
       <img src="/samee-pfp.png" className="w-55 h-55" alt="samee's pfp"></img>
        <h1 className="font-aladin text-blue text-3xl sm:text-4xl md:text-5xl lg:text-5xl drop-shadow-lg">
          🌈 Pastel Skies, Welcome to Samee’s World 🌈
        </h1>
        <p className="mt-3 font-aladin text-aqua text-lg sm:text-xl md:text-3xl">
          “Float with the clouds, stay for the magic”
        </p>
      </motion.div>
    </section>
  );
};

export default Hero;
