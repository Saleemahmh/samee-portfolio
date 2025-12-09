/* import React, { useState } from "react";
import { motion } from "framer-motion";
import background1 from "/Pink exterior cafe-day base.png";
import background2 from "/shopfront walkway-day.png";
import background3 from "/Spooky hotel halloween.png";
import background4 from "/Stone cottage winter-night.png";
import background5 from "/Walkway-day.png";
import background6 from "/winter day.png";
import background7 from "/Witch house.png";
const Projects = () => {
  const [positionIndexes, setPositionIndexes] = useState([0, 1, 2, 3, 4, 5, 6]);
  const images = [
    background1,
    background2,
    background3,
    background4,
    background5,
    background6,
    background7,
  ];
  const positions = [
    "center",
    "left",
    "left1",
    "left2",
    "right",
    "right1",
    "right2",
  ];
  const imageVariants = {
    center: { x: "0%", scale: 1, zIndex: 5 },
    left: { x: "-40%", scale: 0.7, zIndex: 4 },
    left1: { x: "-80%", scale: 0.5, zIndex: 3 },
    left2: { x: "-100%", scale: 0.3, zIndex: 2 },
    right: { x: "40%", scale: 0.7, zIndex: 4 },
    right1: { x: "80%", scale: 0.5, zIndex: 3 },
    right2: { x: "100%", scale: 0.3, zIndex: 1 },
  };
  

  const handleNext = () => {
    setPositionIndexes((prevIndexes) => {
      const updatedIndexes = prevIndexes.map(
        (prevIndex) => (prevIndex + 1) % positions.length
      );
      return updatedIndexes;
    });
  };
  const handleBack = () => {
    setPositionIndexes((prevIndexes) => {
      const updatedIndexes = prevIndexes.map(
        (prevIndex) => (prevIndex + 6) % positions.length
      );
      return updatedIndexes;
    });
  };
  return (
    <div className="containe gradient  border-beige/20 rounded-md border-2 bg-lightblue">
      <div className="flex items-center flex-col justify-center h-fit">
        {images.map((image, index) => (
          <motion.img
            key={index}
            src={image}
            alt={image}
            className="rounded-[12px]"
            initial="center"
            animate={positions[positionIndexes[index]]}
            variants={imageVariants}
            transition={{ duration: 0.5 }}
            style={{ width: "40%", position: "absolute" }}
          ></motion.img>
        ))}
        <div className="flex flex-row gap-3 z-[20]"> 
           <button
          className="mt-[450px] cursor-pointer bg-blue rounded-lg w-28 h-14 p-4 font-aladin text-lightblue text-xl"
          onClick={handleBack}
        >
          Back
        </button><button
          className=" mt-[450px] cursor-pointer bg-blue rounded-lg w-28 h-14 p-4 font-aladin text-lightblue text-xl"
          onClick={handleNext}
        >
          Next
        </button>
       </div>
       
      </div>
    </div>
  );
};

export default Projects;
 */
import React, { useState } from "react";
import { motion } from "framer-motion";
import background1 from "/Pink exterior cafe-day base.png";
import background2 from "/shopfront walkway-day.png";
import background3 from "/Spooky hotel halloween.png";
import background4 from "/Stone cottage winter-night.png";
import background5 from "/Walkway-day.png";
import background6 from "/winter day.png";
import background7 from "/Witch house.png";
const Projects = () => {
  const [positionIndexes, setPositionIndexes] = useState([0, 1, 2, 3, 4, 5, 6]);
  const images = [
    background1,
    background2,
    background3,
    background4,
    background5,
    background6,
    background7,
  ];
  const positions = [
    "center",
    "left",
    "left1",
    "left2",
    "right",
    "right1",
    "right2",
  ];
  const mobileVariants = {
    center: { x: "0%", scale: 1, zIndex: 5 },
    left: { x: "-30%", scale: 0.8, zIndex: 4 },
    left1: { x: "-60%", scale: 0.65, zIndex: 3 },
    left2: { x: "-80%", scale: 0.5, zIndex: 2 },
    right: { x: "30%", scale: 0.8, zIndex: 4 },
    right1: { x: "60%", scale: 0.65, zIndex: 3 },
    right2: { x: "80%", scale: 0.5, zIndex: 1 },
  };

  const desktopVariants = {
    center: { x: "0%", scale: 1, zIndex: 5 },
    left: { x: "-40%", scale: 0.7, zIndex: 4 },
    left1: { x: "-80%", scale: 0.5, zIndex: 3 },
    left2: { x: "-100%", scale: 0.3, zIndex: 2 },
    right: { x: "40%", scale: 0.7, zIndex: 4 },
    right1: { x: "80%", scale: 0.5, zIndex: 3 },
    right2: { x: "100%", scale: 0.3, zIndex: 1 },
  };
  
//determine screen width
const isMobile= window.innerWidth < 768;
const imageVariants = isMobile? mobileVariants : desktopVariants;


  const handleNext = () => {
    setPositionIndexes((prevIndexes) => {
      const updatedIndexes = prevIndexes.map(
        (prevIndex) => (prevIndex + 1) % positions.length
      );
      return updatedIndexes;
    });
  };
  const handleBack = () => {
    setPositionIndexes((prevIndexes) => {
      const updatedIndexes = prevIndexes.map(
        (prevIndex) => (prevIndex + 6) % positions.length
      );
      return updatedIndexes;
    });
  };
  return (
    <div id="projects" className="container gradient border-beige/20 rounded-md border-2 bg-lightblue">
       <h2 className="font-aladin text-blue text-3xl md:text-4xl mt-5 lg:text-5xl text-center"> Projects</h2>
      <motion.div initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5, ease: [0, 0.71, 0.2, 1.01] }}
        viewport={{ once: true, amount: 0.2 }} className="relative flex items-center flex-col justify-center h-[300px] sm:h-[450px] md:h-[550px]">
        {images.map((image, index) => (
          <motion.img
            key={index}
            src={image}
            alt={image}
            className="rounded-[12px] absolute w-[80%] sm:w-[60%] md:w-[50%]"
            initial="center"
            animate={positions[positionIndexes[index]]}
            variants={imageVariants}
            transition={{ duration: 0.5 }}
          
          ></motion.img>
        ))}
        <div className="absolute bottom-0 sm:bottom-3 flex gap-4 z-[20]"> 
           <button
          className="cursor-pointer bg-blue rounded-lg px-6 py-3 font-aladin text-lightblue text-xl"
          onClick={handleBack}
        >
          Back
        </button><button
          className="cursor-pointer bg-blue rounded-lg  px-6 py-3 font-aladin text-lightblue text-xl"
          onClick={handleNext}
        >
          Next
        </button>
       </div>
       
      </motion.div>
    </div>
  );
};

export default Projects;
