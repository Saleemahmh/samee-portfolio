import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'
import CloudLayout from "../Components/Expertise/CloudLayout";
import { motion } from "framer-motion";
import { Codingpricedata } from "../data/Pricingdata";
import paypalicon from "../assets/icons8-paypal-100.png";
import phonepeicon from "../assets/icons8-phone-pe-100.png";
import kofiicon from "../assets/icons8-kofi-100.png";
const CodingPricing = () => {
  return (
    <>
    <Navbar></Navbar>
     <CloudLayout>
          <div className="p-6">
              <h2 className="font-aladin text-blue text-3xl md:text-4xl mt-5 lg:text-5xl text-center">
                {" "}
                Coding Commission 
              </h2>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.5,
                  ease: [0, 0.71, 0.2, 1.01],
                }}
                viewport={{ once: true, amount: 0.2 }}
                className="flex flex-col sm:flex-row sm:flex-wrap justify-center items-center gap-8 p-8"
              >
                <motion.div
                  whileHover={{
                    boxShadow:
                      "0 0 15px rgba(0, 180, 216,0.8), 0 0 30px rgba(0, 180, 216,0.6), 0 0 45px rgba(144,224,239,0.4)",
                    scale: 1.05,
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="flex flex-col items-center w-[22rem] sm:w-[17rem] md:w-[14rem] lg:w-[40rem] h-[10rem] sm:h-[9rem] lg:h-[12rem] backdrop-blur-md bg-[linear-gradient(135deg,rgba(144,224,239,0.4),rgba(0,180,216,0.4))] shadow-md border-beige/20 rounded-2xl border-2 p-8"
                >
                   
                  <div className="flex justify-center items-center gap-3 lg:gap-5 flex-wrap p-4">
                    
                    <p className="font-aladin text-2xl md:text-3xl  text-blue">In Pounds: 19 GBP to 42 GBP</p>
                    <p className="font-aladin text-2xl md:text-3xl  text-blue">In Dollars: 25 USD to 55 USD</p>
                  </div>
                </motion.div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.5,
                  ease: [0, 0.71, 0.2, 1.01],
                }}
                viewport={{ once: true, amount: 0.2 }}
                className="flex flex-col sm:flex-row sm:flex-wrap justify-center items-center gap-8 p-8"
              >
                <motion.div
                  whileHover={{
                    boxShadow:
                      "0 0 15px rgba(0, 180, 216,0.8), 0 0 30px rgba(0, 180, 216,0.6), 0 0 45px rgba(144,224,239,0.4)",
                    scale: 1.05,
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="flex flex-col flex-1 min-w-[250px] items-center w-72 h-fit backdrop-blur-md bg-[linear-gradient(135deg,rgba(144,224,239,0.4),rgba(0,180,216,0.4))] shadow-md border-beige/20 rounded-md border-2 p-8"
                >
                  <h1 className="font-aladin text-blue text-3xl md:text-4xl p-2">
                      Chapter Directing- Rules
                      </h1>
                  <div className="font-playball text-3xl  text-blue">
                    <p className="p-2">
                      1. All information you provide will remain confidential, as long as mutual privacy is respected.
                    </p>
                    <p className="p-2">
                      2. I reserve the right to decline any request that I am uncomfortable with or find problematic.
                    </p>
    
                    <p className="p-2">
                      3. Crediting me at the end of your story is mandatory, as it
                      helps me receive proper recognition for my work.
                    </p>
                    <p className="p-2">
                      4. I accept payments only through PayPal for commissions.
                    </p>
                    <p className="p-2">
                      5. Please note that PayPal charges a fee to the recipient.
                      Make sure your payment covers all associated fees and taxes.
                    </p>
                    <p className="p-2">
                      6. I will not accept payments that require me to pay any fees
                      from my side.
                    </p>
                    <p className="p-2">
                      7. Full payment is required upfront before I begin the work.
                    </p>
                    <p className="p-2">
                      8. Kindly share your deadline. Rush orders may incur
                      additional charges.
                    </p>
                    <p className="p-2">
                      9. I take coding commissions for official Episode stories as well. Prices for these may vary, so feel free to DM me for more information.
                    </p>
                    <p className="p-2">
                      10. I kindly ask that you be respectful when placing an order
                      and avoid rushing the process. I reserve the right to decline
                      commissions that are too complex or challenging.
                    </p>
                     <p className="p-2">
                      11. Refunds are not possible once the work has started.
                    </p>
                    <p className="p-2">
                      12. Kindly explain your ideas in detail so I can bring them to life accurately. Please note that once the work is started and finished, major revisions or starting over will not be offered.
                    </p>
                  </div>
                </motion.div>
              </motion.div>
             
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.5,
                  ease: [0, 0.71, 0.2, 1.01],
                }}
                viewport={{ once: true, amount: 0.2 }}
                className="flex flex-col sm:flex-row sm:flex-wrap justify-center items-center gap-8 p-8"
              >
                <motion.div
                  whileHover={{
                    boxShadow:
                      "0 0 15px rgba(0, 180, 216,0.8), 0 0 30px rgba(0, 180, 216,0.6), 0 0 45px rgba(144,224,239,0.4)",
                    scale: 1.05,
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="flex flex-col flex-1 min-w-[250px] items-center w-72 h-fit backdrop-blur-md bg-[linear-gradient(135deg,rgba(144,224,239,0.4),rgba(0,180,216,0.4))] shadow-md border-beige/20 rounded-md border-2 p-8"
                > <h1 className="font-aladin text-blue text-3xl md:text-4xl p-2">
                      Chapter Directing- Commission Guidelines
                      </h1>
                  <div className="font-playball text-3xl  text-blue">
                     <p className="p-6 gap-4">
                      1. You are required to share your script containing only the dialogue, along with the necessary background and overlay details. All required backgrounds and overlays for your story must be provided. Rest assured, your content will remain completely private—no spoilers, previews, or materials will be shared publicly, and everything will stay strictly confidential.
                    </p>
                    <p className="p-6 gap-4">
                      2. I currently work exclusively with the Limelight and Cinematic versions of Episode.
                    </p>
                    <p className="p-6 gap-4">
                      3. Episode direction includes full scene execution such as placing and moving characters and overlays, managing transitions and zooms, adding speech bubbles, music, sound effects, animations, and any necessary filters or text effects.
                    </p>
                    <p className="p-6 gap-4">
                      4. Please provide all necessary details for the scene to be directed, including information about the scene, overlays, and backgrounds.
                    </p>
                    <p className="p-6 gap-4">
                      5. The following are not included in my services: grammar edits, introductory disclaimer scenes (such as music or advanced directing notices), and outro scenes like author support or gem choice prompts. If you require these, additional charges will apply. You can refer to the menu template under my script template services for more details.
                    </p>
                    <p className="p-6 gap-4">
                      6. You may send your script via Google Docs—there is no need to share your portal credentials. I will work on my own portal; however, please note that characters and outfits must be created by you in your portal. Once completed, I will share the code with you through Google Docs for you to copy and use.
                    </p>
                    
                    
                    <p className="p-6 gap-4">
                      7. The maximum deadline per chapter is 3 weeks, though it may be completed earlier. I’ll keep you informed either way.
                    </p>
                    <p className="p-6 gap-4">
                      8. If you would like me to use backgrounds that you have purchased, I can do so. Rest assured, they will not be used for any personal or other projects.
                    </p>
                  </div>
                </motion.div>
              </motion.div>
             
              <h2 className="font-aladin text-blue text-3xl md:text-4xl mt-5 lg:text-5xl text-center">
                {" "}
                Payment methods
              </h2>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.5,
                  ease: [0, 0.71, 0.2, 1.01],
                }}
                viewport={{ once: true, amount: 0.2 }}
                className="flex flex-col sm:flex-row sm:flex-wrap justify-center items-center gap-8 p-8"
              >
                <motion.div
                  whileHover={{
                    boxShadow:
                      "0 0 15px rgba(0, 180, 216,0.8), 0 0 30px rgba(0, 180, 216,0.6), 0 0 45px rgba(144,224,239,0.4)",
                    scale: 1.05,
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="flex flex-col items-center w-[22rem] sm:w-[17rem] md:w-[14rem] lg:w-[40rem] h-[10rem] sm:h-[9rem] lg:h-[12rem] backdrop-blur-md bg-[linear-gradient(135deg,rgba(144,224,239,0.4),rgba(0,180,216,0.4))] shadow-md border-beige/20 rounded-2xl border-2 p-8"
                >
                  <div className="flex justify-center items-center gap-5 lg:gap-10 flex-wrap">
                    <img
                      src={paypalicon}
                      alt="paypal icon"
                      className="w-20 h-20 sm:w-14 sm:h-14 lg:w-32 lg:h-32 object-contain"
                    ></img>
    
                    <img
                      src={phonepeicon}
                      alt="paypal icon"
                      className="w-20 h-20 sm:w-14 sm:h-14 lg:w-32 lg:h-32 object-contain"
                    ></img>
    
                    <img
                      src={kofiicon}
                      alt="paypal icon"
                      className="w-14 h-14 sm:w-12 sm:h-12 lg:w-32 lg:h-32 object-contain"
                    ></img>
                  </div>
                </motion.div>
              </motion.div>
            </div>
        </CloudLayout>
    <Footer></Footer>
    </>
  )
}

export default CodingPricing