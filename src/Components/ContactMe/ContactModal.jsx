import React from 'react'
import {motion,AnimatePresence} from 'framer-motion'
import ContactForm from './ContactMe'

export default function ContactModal ({isOpen, onClose}) {
  return (
   <AnimatePresence>
    {isOpen &&(
        <>
        {/*backdrop*/}
        <motion.div
        className='fixed inset-0 bg-pastleblue/60 backdrop-blur-sm z-40'
        initial={{opacity:0}}
        animate={{opacity:1}}
        exit={{opacity:0}}
        onClick={onClose}
        />
        {/*Modal*/}
        <motion.div
        className='fixed inset-0 flex justify-center items-center z-50 p-4'
        initial={{opacity:0, scale:0.9,y:20}}
        animate={{opacity:1, scale:1, y:0}}
        exit={{opacity:0, scale:0.9,y:20}}
        transition={{duration:0.25}}
        >

       <div className='relative w-full max-w-3xl'>
        <button className="absolute top-2 right-1 text-biege hover:bg-blue px-2.5 py-1.5 rounded-xl" onClick={onClose}>
         ✕
        </button>
        <ContactForm></ContactForm>

       </div>
       </motion.div>
        </>
    )}
   </AnimatePresence>
  )
}

