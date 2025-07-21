import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import profile from "../assets/profile_img.png";

const words = [
  "React Js Developer.",
  "Full Stack Developer.",
  "MERN Stack Developer.",
];

function Homepage() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2500); // Wait 2.5 seconds before switching words
    return () => clearTimeout(timeout);
  }, [index]);

  return (
    <div className="mx-auto max-w-screen-xl px-4 mt-4 sm:mt-0 py-8 sm:px-6 sm:py-12 lg:px-9 lg:py-16">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-44">
        <div className="relative h-64 w-64 mx-auto md:mx-0 items-center overflow-hidden rounded-full md:w-[330px] lg:mt-5 lg:order-last lg:h-[75%]">
          <img
            alt="myprofile"
            src={profile}
            className="absolute md:h-[361px] w-full object-cover"
          />
        </div>

        <div className="lg:py-24">
          <h2 className="text-2xl">Hi, my name is</h2>
          <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 text-transparent bg-clip-text">
            Sarvesh Pratap
          </h2>

          <h1 className="text-3xl font-semibold flex gap-2 items-center h-12 overflow-hidden">
            I'm a{" "}
            <AnimatePresence mode="wait">
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="ml-2 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-transparent bg-clip-text"
              >
                {words[index]}
              </motion.span>
            </AnimatePresence>
          </h1>

          <p className="mt-4 text-gray-300">
            Anyone can write code that a computer can understand. Good
            programmers write code that humans can understand..... -Martin Fowler
          </p>

          <NavLink
            className="group mt-8 inline-block rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-[2px] hover:text-white focus:outline-none focus:ring active:text-opacity-75"
            to="https://drive.google.com/file/d/15468dW4tYMd1K_ToR2n6_ZUcE-EO18aS/view"
            target="_blank"
          >
            <span className="block rounded-full dark:bg-gray-900 px-8 py-3 text-sm font-medium group-hover:bg-transparent">
              Resume Download
            </span>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
