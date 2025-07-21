import React from "react";
import { FaArrowUpRightFromSquare, FaGithub } from "react-icons/fa6";
import { Link } from "react-router-dom";
import project1 from "../assets/project11.png";
import project2 from "../assets/nodeproject1.png";
import project3 from "../assets/project3.png";
import project4 from "../assets/project4.png"

function Projects() {
  const projectList = [
    {
      
      title: "FullStack CRUD Application",
      dec: "A full-stack CRUD application using React, Node.js, and MongoDB that allows users to create, read, update, and delete records with a clean and responsive UI..",
      tools: "HTML, CSS, JavaScript, React, Node.js, Express.js, MongoDB.",
      github_code: "https://github.com/Sarvesh9570/CRUD-OPERATION-FULL-STACK",
      diploy_link: "https://github.com/Sarvesh9570/CRUD-OPERATION-FULL-STACK",
      image: project1,
    },
    {
      title: "Node.js Backend API with JWT Auth & MongoDB",
      dec: "A backend project built with Node.js and Express, featuring user authentication, JWT-based security, and MongoDB integration. It demonstrates robust API development with modular routing and middleware structure.",
      tools: "Node.js, Express.js, MongoDB with Mongoose ORM, Passport.js, JWT, bcrypt",
      github_code: "https://github.com/Sarvesh9570/Backend_with_Node.js",
      diploy_link: "https://hotel-kh8i.onrender.com/",
      image: project2,
    },
    {
      title: "Sorting Visualizer",
      dec: "A simple Sorting Visualizer built using HTML, CSS, and JavaScript that demonstrates how various sorting algorithms work through visual animations for better understanding of algorithm behavior and efficiency.",
      tools: "HTML, CSS, JavaScript, React ",
      github_code: "https://github.com/Sarvesh9570/Sorting-Visualizer",
      diploy_link: "https://sarvesh9570.github.io/Sorting-Visualizer/",
      image: project3,
    },
    {
      
      title: "Personal portfolio",
      dec: "A responsive personal portfolio website built using HTML, CSS, JavaScript, and Bootstrap to showcase projects, skills, and contact information, with smooth navigation and a clean, modern user interface.",
      tools: "HTML, CSS, JavaScript, React, Redux",
      github_code: "https://github.com/Sarvesh9570/",
      diploy_link: "https://github.com/Sarvesh9570/",
      image: project4,
    },
  ];
  return (
    <div>
      <div className="pb-12">
        <h1 className=" py-4 pb-10 text-center bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
          Projects
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2  gap-12 w-[80%] m-auto">
        {projectList.map((item, index) => (
          <div
            key={index}
            className="block rounded-lg p-4 shadow-md  m-2 shadow-indigo-100"
          >
            <img
              alt=""
              src={item.image}
              className="h-56 w-full rounded-md object-cover"
            />

            <div className="mt-2">
              <dl>
                <div>
                  <dt className="text-center mt-10 text-2xl font-bold  bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-transparent bg-clip-text">
                    {item.title}
                  </dt>
                </div>

                <div>
                  <dt className="text-center text-md  font-semibold">
                    {item.dec}
                  </dt>

                  <dd className="font-medium text-md">
                    <span className="text-red-600 text-md">Tech Stack :</span>{" "}
                    {item.tools}
                  </dd>
                </div>
              </dl>

              <div className="mt-6 flex items-center gap-8 justify-between text-xl">
                {/* <div className="sm:inline-flex sm:shrink-0 sm:items-center  sm:gap-2"> */}
                {/* logo */}
                <div className="flex m-auto mt-6 mb-0 pb-0 gap-[120px] md:gap-[250px] ">
                  <Link to={item.github_code} target="_blank">
                    <FaGithub className="w-4 h-4" />
                  </Link>
                  <Link to={item.diploy_link} target="_blank">
                    <FaArrowUpRightFromSquare className="w-4 h-4" />
                  </Link>
                </div>
                {/* </div> */}

                {/* <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                  <div className="mt-1.5 sm:mt-0"></div>
                </div> */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
