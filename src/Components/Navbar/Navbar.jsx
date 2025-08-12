import React, { useState } from "react";
import logo from "../../assets/logo2.png";
import { ImBubbles } from "react-icons/im";
import { Navbardata } from "../../data/Navbardata";
import Lottie from "lottie-react";
import { IoMenuOutline } from "react-icons/io5";
import logoanimation from "../../assets/Butterfly Lottie Animation.json";
import HamburgerMenu from "./HamburgerMenu";
const Navbar = () => {
  const [open,setOpen] = useState(false);
  return (
    <>
      <nav>
        <div className="container rounded-md border-2 border-aqua flex justify-between items-center bg-blue py-8">
          {/* Logo section */}

          <div className="flex items-center">
            <img src={logo} className="relative w-30 h-20"></img>
             <Lottie animationData={logoanimation} loop={true} className="w-15 h-15" />
          </div>
          {/*  Menu section */}
          <div className="hidden md:block">
            <ul className="flex items-center gap-6 font-aladin text-2xl text-pastelblue">
              {Navbardata.map((item) => {
                return (
                  <li key={item.id}>
                    <a
                      href={item.links}
                      className="inline-block py-1 px-3 hover:text-beige"
                    >
                      {item.name}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
          {/* Contact me section */}
          <div>
            <button className="hidden md:flex gap-2 items-center text-xl text-blue bg-pastelblue font-aladin hover:bg-beige rounded-sm px-6 py-2 duration-200 border-aqua border-3 hover:border-lightblue">
              <ImBubbles></ImBubbles> Contact Me
            </button>
          </div>
              
          {/* Mobile humburger section */}
          <div className="md:hidden" onClick={() => setOpen(!open)}> <IoMenuOutline className="text-4xl text-pastelblue" /></div>
            
        </div>
      </nav>
      {/* Mobile sidebar */}
       <HamburgerMenu open={open}></HamburgerMenu>
    </>
  );
};

export default Navbar;
