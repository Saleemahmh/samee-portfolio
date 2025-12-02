import React from 'react'
import logo from "../../assets/logo2.png";
import Lottie from "lottie-react";
import logoanimation from "../../assets/Butterfly Lottie Animation.json";
import { Footerdata } from "../../data/Footerdata";
const Footer = () => {
  return (
    <footer className="container rounded-md border-2 border-aqua flex justify-between items-center bg-blue py-8">
      <div className="grid grid-flow-col grid-rows-3 sm:grid-rows-2 gap-8">
        <div className='row-span-3'>
         <div className="flex items-center">
            <img src={logo} className="relative w-48 h-44"></img>
             <Lottie animationData={logoanimation} loop={true} className="w-30 h-30" />
          </div>
        </div>
        <div className='col-span-3 text-3xl font-aladin text-pastelblue '>Follow me on
          <ul className='flex items-center'>
            {Footerdata.map((item)=>{
              return(
                   <li key={item.id}>{item.icon}</li>
              )
            })}
            
           

          </ul>
        </div>

      </div>
    </footer>
  )
}

export default Footer