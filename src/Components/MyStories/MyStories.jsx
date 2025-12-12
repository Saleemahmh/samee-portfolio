import React from "react";
import { motion } from "framer-motion";
import { MyStoriesdata } from "../../data/Mystoriesdata";
const MyStories = () => {
  return (
    <div id="mystories" >
      <h2  className="font-aladin text-blue text-3xl md:text-4xl m-5 lg:text-5xl text-center">
        {" "}
        My Stories
      </h2>

      <motion.div
       
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        whileHover={{
          boxShadow:
            "0 0 15px rgba(0, 180, 216,0.8), 0 0 30px rgba(0, 180, 216,0.6), 0 0 45px rgba(144,224,239,0.4)",
          scale: 1.05,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="container relative group w-full h-[600px] md:max-w-5xl max-w-sm backdrop-blur-xl bg-[linear-gradient(135deg,#2CCEEE,#7FEAF7)] p-6 mb-8 md:p-10 rounded-3xl shadow-xl overflow-hidden border border-white/20 grid grid-cols-1 md:grid-cols-3 gap-8"
      >
        {/* LEFT: BOOK COVERS */}
        <div className="col-span-2 flex flex-col sm:flex-row gap-6 items-center relative z-10">
          {/* BOOK COVER COMPONENT */}
          {MyStoriesdata.map((book, index) => (
            <motion.div key={index} className="relative">
              <motion.div
                className="rounded-xl shadow-xl w-44 h-64 sm:w-64 sm:h-96 overflow-hidden"
                whileHover={{
                  boxShadow:
                    "0 0 15px rgba(0, 180, 216,0.8), 0 0 30px rgba(0, 180, 216,0.6), 0 0 45px rgba(144,224,239,0.4)",
                  scale: 1.05,
                }}
                transition={{ type: "spring", stiffness: 200, damping: 18 }}
              >
                <motion.img
                  src={book.img}
                  alt={book.title}
                  className="w-full h-full object-cover rounded-xl"
                  initial="initial"
                  whileHover="hover"
                  style={{
                    backgroundImage:
                      "linear-gradient(110deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.5) 50%, rgba(255,255,255,0) 100%)",
                    backgroundSize: "250% 100%",
                  }}
                />
              </motion.div>

              {/* DETAILS ON HOVER */}
              <motion.div
                className="absolute top-0 left-0 w-full h-full bg-lightblue/95 font-aladin text-blue rounded-xl shadow-xl p-4 opacity-0 hover:opacity-100"
                initial={{ x: 40 }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.4 }}
              >
                <h3 className="text-md lg:text-2xl font-semibold mb-1">
                  {book.title}
                </h3>
                <p className="text-sm font-playball lg:text-lg ">{book.desc}</p>
                <motion.button
                  animate={{
                    boxShadow: [
                      `0 0 6px rgba(0, 119, 182, 0.12)`,
                      `0 0 22px rgba(0, 119, 182, 0.55)`,
                      `0 0 6px rgba(0, 119, 182, 0.12)`,
                    ],
                    scale: [1, 1.02, 1],
                  }}
                  whileHover={{
                    boxShadow: `0 0 24px rgba(253, 253, 150, 0.95), 0 0 48px rgba(0, 119, 182, 0.6), 0 0 96px rgba(0, 119, 182, 0.28)`,
                    scale: 1.06,
                  }}
                  whileTap={{ scale: 0.985 }}
                  className="flex flex-cols justify-between cursor-pointer bg-blue rounded-lg w-32 h-11 px-7 py-2 mt-2 mx-3 lg:mt-5 lg:mx-9 font-aladin text-lightblue text-xl"
                  style={{ willChange: "transform, box-shadow" }}
                >
                  <a href={book.link}>Read now</a>
                </motion.button>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* RIGHT: AUTHOR */}
        <motion.div
          className="hidden md:flex flex-col relative col-span-1 justify-center items-center z-10"
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        >
          <div className="w-32 h-32 md:w-60 md:h-60 rounded-full overflow-hidden shadow-xl bg-aqua/60 border border-white/40">
            <img
              src="/src/assets/Authorpfp.png"
              alt="Author"
              className="w-full h-full object-cover"
            />
          </div>

          <h3 className="mt-4 text-xl font-bold font-aladin text-beige text-center">
            Samee
          </h3>
          <p className="text-sm text-blue font-aladin text-center">
            Author | Background Creator{" "}
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default MyStories;
