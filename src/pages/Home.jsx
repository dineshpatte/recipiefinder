import React from "react";
import bg from "../assets/bg.jpg";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div
      className="p-4 sm:p-6 text-white mt-8 flex flex-col items-center justify-center bg-cover bg-center min-h-screen"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <motion.h1
        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        Welcome to the Recipe App 🍽️
      </motion.h1>

      <motion.p
        className="mt-6 sm:mt-8 text-lg sm:text-xl md:text-2xl text-center text-white"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut", delay: 0.3 }}
      >
        Discover amazing recipes from around the world!
      </motion.p>
    </div>
  );
};

export default Home;
