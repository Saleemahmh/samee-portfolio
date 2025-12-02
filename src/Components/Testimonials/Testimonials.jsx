import React, { useEffect } from "react";
import { Testimonialdata } from "../../data/Testimonialdata";
import Lottie from "lottie-react";
import ratingprofile from "../../assets/Review Lottie Animation.json";
import { motion, useAnimation, useMotionValue } from "framer-motion";

const Testimonials = () => {
  const duplicated = [...Testimonialdata, ...Testimonialdata];

  const x = useMotionValue(0);
  const controls = useAnimation();

  const startAnimation = ()=>{
    controls.start({
      x:-50 +"%",
      transition:{
        duration:20,
        repeat: Infinity,
        ease:"linear",
      },
    });
  };
useEffect(()=>{
  startAnimation();
},[]);

const handleMouseEnter = () =>{
  controls.stop();
};
const handleMouseExit = ()=>{
  startAnimation();
};

  return (
    <div id="testimonials" className="w-full overflow-hidden py-8">
      <div className="gradient">
      <motion.div
        className="flex"
         animate={controls}
       style={{x}}
       onMouseEnter={handleMouseEnter}
       onMouseLeave={handleMouseExit}
      >
        {duplicated.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center
              min-w-[250px] sm:min-w-[300px] md:min-w-[350px]
              bg-beige/40 border-2 border-aqua/50 rounded-md
              mx-3 p-4 h-auto"
          >
            <Lottie animationData={ratingprofile} loop className="w-20 h-20" />

            <h2 className="font-aladin text-blue text-xl">{item.name}</h2>

            <p className="font-aladin text-aqua text-lg">
              {item.instgramid}
            </p>

            <p className="font-aladin text-blue mt-2">
              {item.message}
            </p>
          </div>
        ))}
      </motion.div>
      </div>
    </div>
  );
};

export default Testimonials;

