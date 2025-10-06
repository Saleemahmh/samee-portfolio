import React from "react";
import { Testimonialdata } from "../../data/Testimonialdata";
import Lottie from "lottie-react";
import ratingprofile from "../../assets/Review Lottie Animation.json";
import { motion } from "framer-motion";
const Testimonials = () => {
  return (
    <div className="container h-fit ">
      <div className="gradient">
        <div className="flex">
          {Testimonialdata.map((item, index) => {
            return (
              <>
                <motion.div
                  initial={{ x: 0 }}
                  animate={{ x: "-100%" }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "linear",
                  }}
            
                  className="flex flex-shrink-0 flex-col flex-1 min-w-[250px] items-center w-72 h-56 p-2 m-4 bg-beige/40 border-2 rounded-md border-aqua/50"
                  key={index}
                >
                  <Lottie
                    animationData={ratingprofile}
                    loop={true}
                    className="w-20 h-20"
                  />
                  <h2 className="font-aladin text-blue text-xl">{item.name}</h2>
                  <p className="font-aladin text-aqua text-xl">
                    {item.instgramid}
                  </p>
                  <p className="font-aladin text-blue ">
                    {item.message}
                  </p>
                </motion.div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
