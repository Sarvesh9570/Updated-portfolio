import React from "react";
import vscode from "../assets/vscode.png";
import git from "../assets/git.jpg";
import netlify from "../assets/netlify.png";
import vercel from "../assets/vercel.png";
import postman from "../assets/postman.png";
import canva from "../assets/canva.png";

function Tools() {
  const skill = [
    {
      name: "VS Code",
      url: vscode,
    },
    {
      name: "Git",
      url: git,
    },
    {
      name: "Netlify",
      url: netlify,
    },
    {
      name: "Vercel",
      url: vercel,
    },
    {
      name: "Postman",
      url: postman,
    },
    {
      name: "Canva",
      url: canva,
    },
  ];

  return (
    <>
      <div className="bg-gray-900 w-[80%] h-fit  pb-28 m-auto">
        <div>
          <h1 className=" py-4 text-center bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
            Tools
          </h1>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 pt-4 items-center justify-center text-center gap-4 lg:grid-cols-6 bg-gray-900 sm:grid-cols-2 h-full lg:gap-8">
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

export default Tools;
