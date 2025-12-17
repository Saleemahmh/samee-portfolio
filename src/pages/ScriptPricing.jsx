import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'
import CloudLayout from "../Components/Expertise/CloudLayout";
import { motion } from "framer-motion";
import { Scriptpricedata } from "../data/Pricingdata";
import paypalicon from "../assets/icons8-paypal-100.png";
import phonepeicon from "../assets/icons8-phone-pe-100.png";
import kofiicon from "../assets/icons8-kofi-100.png";
const ScriptPricing = () => {
  return (
    <>
     <Navbar></Navbar>  
      <CloudLayout>
      <div className="p-6">
          <h2 className="font-aladin text-blue text-3xl md:text-4xl mt-5 lg:text-5xl text-center">
            {" "}
            Script Template Pricing
          </h2>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.9,
              delay: 0.8,
              ease: [0, 0.81, 0.4, 1.06],
            }}
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-col sm:flex-row sm:flex-wrap justify-center items-center gap-8 p-8"
          >
            {Scriptpricedata.map((item) => {
              return (
                <motion.div
                  whileHover={{
                    boxShadow:
                      "0 0 15px rgba(0, 180, 216,0.8), 0 0 30px rgba(0, 180, 216,0.6), 0 0 45px rgba(144,224,239,0.4)",
                    scale: 1.05,
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="flex flex-col flex-1 min-w-[250px] items-center w-72 h-[28rem] backdrop-blur-md bg-[linear-gradient(135deg,rgba(144,224,239,0.4),rgba(0,180,216,0.4))] shadow-md border-beige/20 rounded-md border-2 p-8"
                  key={item.id}
                >
                  <h1 className="font-aladin text-blue text-3xl md:text-4xl p-2">
                    {item.name}
                  </h1>
                  <div className="border-blue border-t pt-6 text-center mt-6">
                    <p className="font-playball text-xl md:text-2xl  text-blue">
                      {item.poundsprice}
                    </p>
                  </div>
                  <div className="border-blue border-t pt-6 text-center mt-6">
                    <p className="font-playball text-xl md:text-2xl  text-blue">
                      {item.dollarprice}
                    </p>
                  </div>
                   <div className="border-blue border-t pt-6 text-center mt-6">
                    <p className="font-playball text-2xl md:text-3xl  text-blue">
                      {item.desc}
                    </p>
                    
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
          <h2 className="font-aladin text-blue text-3xl md:text-4xl mt-5 lg:text-5xl text-center">
            {" "}
            Common Rules
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
              className="flex flex-col flex-1 min-w-[250px] items-center w-72 h-fit backdrop-blur-md bg-[linear-gradient(135deg,rgba(144,224,239,0.4),rgba(0,180,216,0.4))] shadow-md border-beige/20 rounded-md border-2 p-8"
            >
              <div className="font-playball text-3xl  text-blue">
                 <p className="p-2">
                  1. Please contact me here or on Instagram—whichever is
                  convenient—before placing a commission.
                </p>
                <p className="p-2">
                  2. All information you provide will remain confidential, as long as mutual privacy is respected.
                </p>
                <p className="p-2">
                  3. I reserve the right to decline any request that I am uncomfortable with or find problematic.
                </p>

                <p className="p-2">
                  4. Crediting me at the end of your story is mandatory, as it
                  helps me receive proper recognition for my work.
                </p>
                <p className="p-2">
                  5. I accept payments only through PayPal for commissions.
                </p>
                <p className="p-2">
                  6. Please note that PayPal charges a fee to the recipient.
                  Make sure your payment covers all associated fees and taxes.
                </p>
                <p className="p-2">
                  7. I will not accept payments that require me to pay any fees
                  from my side.
                </p>
                <p className="p-2">
                  8. Full payment is required upfront before I begin the work.
                </p>
                <p className="p-2">
                  9. Kindly share your deadline. Rush orders may incur
                  additional charges.
                </p>
                <p className="p-2">
                  10. I take coding commissions for official Episode stories as well. Prices for these may vary, so feel free to DM me for more information.
                </p>
                <p className="p-2">
                  11. I kindly ask that you be respectful when placing an order
                  and avoid rushing the process. I reserve the right to decline
                  commissions that are too complex or challenging.
                </p>
                 <p className="p-2">
                  12. Refunds are not possible once the work has started.
                </p>
                <p className="p-2">
                  13. Kindly explain your ideas in detail so I can bring them to life accurately. Please note that once the work is started and finished, major revisions or starting over will not be offered.
                </p>
              </div>
            </motion.div>
          </motion.div>
          <h2 className="font-aladin text-blue text-3xl md:text-4xl mt-5 lg:text-5xl text-center">
            {" "}
            Rules for Scene Directing 
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
              className="flex flex-col flex-1 min-w-[250px] items-center w-72 h-fit backdrop-blur-md bg-[linear-gradient(135deg,rgba(144,224,239,0.4),rgba(0,180,216,0.4))] shadow-md border-beige/20 rounded-md border-2 p-8"
            >
              <div className="font-playball text-3xl  text-blue">
                 <p className="p-2">
                  1. I offer minigame coding and scene directing services. Scene directing refers to simple or complex individual scenes and does not include directing a full chapter.
                </p>
                <p className="p-2">
                  2. I currently work exclusively with the Limelight and Cinematic versions of Episode.
                </p>
                <p className="p-2">
                  3. The final price will depend on the scene’s complexity. The mentioned prices indicate a minimum-to-maximum range.
                </p>
                <p className="p-2">
                  4. Please provide all necessary details for the scene to be directed, including information about the scene, overlays, and backgrounds.
                </p>
                <p className="p-2">
                  5. If you do not have an overlay or background, I can create them for you. Additional charges may apply based on overlay and background pricing.
                </p>
                <p className="p-2">
                  6. I handle character placement and movement, overlays, zooms, transitions, sounds, animations, and filters if required—everything to make your scene flow smoothly and look visually engaging.
                </p>
                <p className="p-2">
                  7. These templates are for your personal use only and may not be shared, redistributed, or posted for others to use. This is strictly prohibited.
                </p>
                <p className="p-2">
                  8. I will create the templates in my portal and later share them with you via Google Drive for use. Please note that outfits and characters must be created by you in your own portal for the code to function correctly, provided all required backgrounds and overlays are uploaded.
                </p>
                <p className="p-2">
                  9. The maximum deadline per script template is one week, though it may be completed earlier. I’ll keep you informed either way.
                </p>
                <p className="p-2">
                  10. If you would like me to use backgrounds that you have purchased, I can do so. Rest assured, they will not be used for any personal or other projects.
                </p>
              </div>
            </motion.div>
          </motion.div>
          <h2 className="font-aladin text-blue text-3xl md:text-4xl mt-5 lg:text-5xl text-center">
            {" "}
            Rules for Menu Template
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
              className="flex flex-col flex-1 min-w-[250px] items-center w-72 h-fit backdrop-blur-md bg-[linear-gradient(135deg,rgba(144,224,239,0.4),rgba(0,180,216,0.4))] shadow-md border-beige/20 rounded-md border-2 p-8"
            >
              <div className="font-playball text-3xl  text-blue">
                 <p className="p-2">
                  1. The menu template includes a fancy, eye-catching intro scene for your story, complete with all necessary overlays and backgrounds created by me. 
                </p>
                <p className="p-2">
                  2. If you’d like a matching outro scene, that can also be made. Simple outro scenes will not incur additional charges, while more complex ones may require an extra fee.
                </p>
                 <p className="p-2">
                  3.If you would like me to use backgrounds that you have purchased, I can do so. Rest assured, they will not be used for any personal or other projects.
                </p>
                 <p className="p-2">
                  4. The maximum deadline per script template is 3 to 4 days, though it may be completed earlier. I’ll keep you informed either way.
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

export default ScriptPricing