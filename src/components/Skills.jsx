import React from "react";
import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import REACTIMG from "../assets/reactjs.png";
import PYTHON from "../assets/python.webp";
import CPP from "../assets/C++-Logo.wine.png";
import GITHUB from "../assets/github-logo.webp";
import JAVASCRIPT  from "../assets/javascript.webp";
import GIT from "../assets/Git-Icon-1788C.png";
import { Element } from "react-scroll";

const Skills = () => {
  return (
    <React.Fragment>
      <Element id="skills" name="skills">
        <div name="skills" className="w-full h-screen text-gray-800 about">
          <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full -h-full">
            <div>
              <p className=" text-4xl font-bold inline border-b-4 border-teal-600">
                {" "}
                Skills
              </p>
              <p className="py-4">
                {" "}
                I present my skills and competencies to you. Best at the following stacks
                Hover over the images to feel a smooth motion , not just static images
              </p>
            </div>
            <div className="w-full text-center py-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="hover:scale-110 duration-500">
                <img className="w-20 mx-auto" src={HTML} alt="" />
                <p className="my-4">HTLM</p>
              </div>

              <div className="hover:scale-110 duration-500">
                <img className="w-20 mx-auto" src={CSS} alt="" />
                <p className="my-4">CSS</p>
              </div>

              <div className="hover:scale-110 duration-500">
                <img className="w-20 mx-auto" src={REACTIMG} alt="" />
                <p className="my-4">ReactJS</p>
              </div>

              <div className="hover:scale-110 duration-500">
                <img className="w-20 mx-auto" src={JAVASCRIPT} alt="" />
                <p className="my-4">Javascript</p>
              </div>

              <div className="hover:scale-110 duration-500">
                <img className="w-20 mx-auto" src={PYTHON} alt="" />
                <p className="my-4">Python</p>
              </div>

              <div className="hover:scale-110 duration-500">
                <img className="w-20 mx-auto" src={CPP} alt="" />
                <p className="my-4">C++</p>
              </div>

              <div className="hover:scale-110 duration-500">
                <img className="w-20 mx-auto" src={GIT} alt="" />
                <p className="my-4">git</p>
              </div>

              <div className="hover:scale-110 duration-500">
                <img className="w-20 mx-auto" src={GITHUB} alt="" />
                <p className="my-4">Github</p>
              </div>
            </div>
          </div>
        </div>
      </Element>
    </React.Fragment>
  );
};

export default Skills;
