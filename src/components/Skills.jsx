import React from "react";
import html from "../assets/html.png";
import css from "../assets/css.png";
import boostrap from "../assets/boostrap.png";
import js from "../assets/js.jpg";
import reactjs from "../assets/reactjs.png";
import nodejs from "../assets/nodejs.png";
import expressjs from  "../assets/expressjs.webp";
import mongodb from "../assets/mongodb.png";
import tailwindcss from "../assets/tailwindcss.png";
import mysql from "../assets/mysql.png";
import java from "../assets/java.png";
import cpp from "../assets/cpp.png";


function Skills() {
  const skill = [
    {
      name: "HTML",
      url: html,
    },
    {
      name: "CSS",
      url: css,
    },
    {
      name: "Boostrap",
      url: boostrap,
    },
    {
      name: "Javascript",
      url: js,
    },
    {
      name: "React Js",
      url: reactjs,
    },
    {
      name: "Node js",
      url: nodejs,
    },
    {
      name: "Express Js",
      url: expressjs,
    },
    {
      name: "MongoDb",
      url: mongodb,
    },
    {
      name: "Tailwind Css",
      url: tailwindcss,
    },
    {
      name: "My Sql",
      url: mysql,
    },
    {
      name: "Java",
      url: java,
    },
    {
      name: "C++",
      url: cpp,
    },

  ];

  return (
    <>
      <div className="bg-gray-900 w-[80%] h-fit pb-40 m-auto">
        <div>
          <h1 className=" py-4 text-center bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
            Skills
          </h1>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 pt-4  gap-4 lg:grid-cols-6 bg-gray-900 sm:grid-cols-2 h-full lg:gap-8">
          {skill.map((item, index) => (
            <div
              key={index}
              className=" h-[11rem] rounded-3xl shadow-lg bg-[#213469] items-center px-8 py-4 m-auto"
            >
              <div className="h-24 w-24  ">
                <img src={item.url} alt={item.name} />
              </div>
              <div className="text-center p-2">
                <h3 className="font-semibold">{item.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Skills;
