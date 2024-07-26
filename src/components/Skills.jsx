import React from "react";
import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import REACTIMG from "../assets/reactjs.png";
import PYTHON from "../assets/python.webp";
import GITHUB from "../assets/github-logo.webp";
import { Element } from "react-scroll";

const Skills = () => {
  return (
    <React.Fragment>
      <Element id="skills" name="skills">
        <div name="skills" className="w-full h-screen skill text-gray-800">
          <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full -h-full">
            <div>
              <p className=" text-4xl font-bold inline border-b-4 border-teal-600">
                {" "}
                Skills
              </p>
              <p className="py-4">
                {" "}
                your design portfolio should should shoucase your best work.
                Include and interactive prototype. A website in motion not just
                static images
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
                <img className="w-20 mx-auto" src={PYTHON} alt="" />
                <p className="my-4">Python</p>
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
