import React from "react";
import logo from "../../assets/logo2.png";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import logoanimation from "../../assets/Butterfly Lottie Animation.json";
import { Footerdata } from "../../data/Footerdata";
const Footer = () => {
  return (
    <footer className="container rounded-md border-2 border-aqua bg-blue px-4 md:px-16 lg:px-28 py-4">
      <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-10">
        <div className="flex items-center">
          <img src={logo} className="relative w-48 h-44"></img>
          <Lottie
            animationData={logoanimation}
            loop={true}
            className="w-30 h-30"
          />
        </div>
        <div>
          <h2 className="text-2xl font-aladin text-pastelblue  fontbold mb-4">
            {" "}
            Quick Links
          </h2>
          <ul className="font-aladin text-pastelblue">
            <li>Home</li>
            <li>Terms and Conditions</li>
            <li><a href="#services">Services</a></li>
            <li></li>
          </ul>
        </div> 

        <div className="text-2xl font-aladin text-pastelblue ">
          Follow me on
          <ul className="flex space-x-4">
            {Footerdata.map((item) => {
              return (
                <motion.li key={item.id}  whileHover={{ scale: 1.12, rotate: 0 }} 
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 18 }}>
                  <a href={item.link}>{item.icon}</a>
                </motion.li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="border-pastelblue font-aladin text-pastelblue border-t pt-6 text-center mt-6">
        <p>@2025 Made by Saleemah. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
