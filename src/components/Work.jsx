import React from "react";
import work1 from "../assets/photo-.jpeg";
import work2 from "../assets/adam-sherez-PtgLGdMzi-Y-unsplash.jpg";
import work3 from "../assets/andrew-neel-cckf4TsHAuw-unsplash.jpg";
import work4 from "../assets/jorge-ramirez-nr3AmB4_B8g-unsplash.jpg";
import work5 from "../assets/kelly-sikkema-hLit2zL-Dhk-unsplash.jpg";
import work6 from "../assets/marcella-marcella-BXR9wvl29J8-unsplash.jpg";

import { Element } from "react-scroll";


const Work = () => {
  return (
    <React.Fragment>
      <Element id="work" name="work">
        <div name="Work" className="w-full h-screen skill">
          <div className="max-w-[1000px] mx-auto p-4 fex flex-col justify-center w-full h-full">
            <div className="pb-8">
              <p className="text-4xl font-bold inline border-b-4 border-teal-600 text-gray-800">
                Work
              </p>
              <p className="py-6">Please check some of my recent work</p>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              <div
                style={{ background: `url({work1})` }}
                className=" shadow-lg shadow-gray-600 group hover:scale-110 duration-500 container rounded-full flex justify-center items-center mx-auto content-div"
              >
                <div className="opacity-0 text-center group-hover:opacity-100">
                  <span className="font-bold text-white tracking-wider uppercase">
                    UX inspiration
                  </span>
                  <div className="pt-6 text-center ">
                    <a href="/">
                      <button className="text-center hover:scale-110 duration-500 opacity-70 rounded-full px-6 py-3 m-2 bg-white text-gray-700 font-bold">
                        Wireframes
                      </button>
                    </a>
                  </div>
                </div>
              </div>

              <div
                style={{background: `url({work2})`}}
                className=" shadow-lg shadow-gray-600 group hover:scale-110 duration-500 container rounded-full flex justify-center items-center mx-auto content-div"
              >
                <div className="opacity-0 text-center group-hover:opacity-100">
                  <span className="font-bold text-white tracking-wider uppercase">
                    Documetations
                  </span>
                  <div className="pt-6 text-center ">
                    <a href="/">
                      <button className="text-center hover:scale-110 duration-500 opacity-70 rounded-full px-6 py-3 m-2 bg-white text-gray-700 font-bold">
                        Samples
                      </button>
                    </a>
                  </div>
                </div>
              </div>

              <div
                style={{ background: `url({work3})` }}
                className=" shadow-lg shadow-gray-600 group hover:scale-110 duration-500 container rounded-full flex justify-center items-center mx-auto content-div"
              >
                <div className="opacity-0 text-center group-hover:opacity-100">
                  <span className="font-bold text-white tracking-wider uppercase">
                    Coding
                  </span>
                  <div className="pt-6 text-center ">
                    <a href="/">
                      <button className="text-center hover:scale-110 duration-500 opacity-70 rounded-full px-6 py-3 m-2 bg-white text-gray-700 font-bold">
                        Samples
                      </button>
                    </a>
                  </div>
                </div>
              </div>

              <div
                style={{ background: `url({work4})` }}
                className=" shadow-lg shadow-gray-600 group hover:scale-110 duration-500 container rounded-full flex justify-center items-center mx-auto content-div"
              >
                <div className="opacity-0 text-center group-hover:opacity-100">
                  <span className="font-bold text-white tracking-wider uppercase">
                    Tool
                  </span>
                  <div className="pt-6 text-center ">
                    <a href="/">
                      <button className="text-center hover:scale-110 duration-500 opacity-70 rounded-full px-6 py-3 m-2 bg-white text-gray-700 font-bold">
                        Sample
                      </button>
                    </a>
                  </div>
                </div>
              </div>

              <div
                style={{ background: `url({work5})` }}
                className=" shadow-lg shadow-gray-600 group hover:scale-110 duration-500 container rounded-full flex justify-center items-center mx-auto content-div"
              >
                <div className="opacity-0 text-center group-hover:opacity-100">
                  <span className="font-bold text-white tracking-wider uppercase">
                    Consulting
                  </span>
                  <div className="pt-6 text-center ">
                    <a href="/">
                      <button className="text-center hover:scale-110 duration-500 opacity-70 rounded-full px-6 py-3 m-2 bg-white text-gray-700 font-bold">
                        Sample
                      </button>
                    </a>
                  </div>
                </div>
              </div>

              <div
                style={{ background: `url({work6})` }}
                className=" shadow-lg shadow-gray-600 group hover:scale-110 duration-500 container rounded-full flex justify-center items-center mx-auto content-div"
              >
                <div className="opacity-0 text-center group-hover:opacity-100">
                  <span className="font-bold text-white tracking-wider uppercase">
                    R&D
                  </span>
                  <div className="pt-6 text-center ">
                    <a href="/">
                      <button className="text-center hover:scale-110 duration-500 opacity-70 rounded-full px-6 py-3 m-2 bg-white text-gray-700 font-bold">
                        Sample
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Element>
    </React.Fragment>
  );
};

export default Work;
