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
            Background Pricing
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
                </motion.div>
              );
            })}
          </motion.div>
          <h2 className="font-aladin text-blue text-3xl md:text-4xl mt-5 lg:text-5xl text-center">
            {" "}
            Rules
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
                  1.These are base prices. If the background is highly detailed
                  or complex, the final price may vary.
                </p>
                <p className="p-2">
                  2. Please contact me here or on Instagram—whichever is
                  convenient—before placing a commission.
                </p>
                <p className="p-2">
                  3. Provide all necessary details for your background,
                  including references, descriptions, and any specific elements
                  you want included.
                </p>
                <p className="p-2">
                  4. If you have a deadline, please inform me in advance. Once
                  payment is completed, I will keep you updated throughout the
                  process. Your approval is required at each stage for the work
                  to continue.
                </p>
                <p className="p-2">
                  5. The estimated completion time for a background is between 1
                  to 2 weeks from the time I begin your commission.
                </p>
                <p className="p-2">
                  6. Crediting me at the end of your story is mandatory, as it
                  helps me receive proper recognition for my work.
                </p>
                <p className="p-2">
                  7. I accept payments only through PayPal for commissions.
                </p>
                <p className="p-2">
                  8. Please note that PayPal charges a fee to the recipient.
                  Make sure your payment covers all associated fees and taxes.
                </p>
                <p className="p-2">
                  9. I will not accept payments that require me to pay any fees
                  from my side.
                </p>
                <p className="p-2">
                  10. Full payment is required upfront before I begin the work.
                </p>
                <p className="p-2">
                  11. Kindly share your deadline. Rush orders may incur
                  additional charges.
                </p>
                <p className="p-2">
                  12. I kindly ask that you be respectful when placing an order
                  and avoid rushing the process. I reserve the right to decline
                  commissions that are too complex or challenging.
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