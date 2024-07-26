import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Element } from "react-scroll";

const Home = () => {
  return (
    <React.Fragment>
      <Element id="home" name="home">
        <div className="w-full h-screen banner">
          <div className="max-w-[1000px] mx-auto h-full px-8 flex flex-col justify-center">
            <p>Hi, my name is </p>
            <h1 className="text-4xl sm:text-7xl font-bold">Esther Asomaning</h1>
            <h2 className="text-4xl sm:text-7xl font-bold">
              I am a Scientific Software Developer
            </h2>
            <p className="py-4 max-w-[700px]">
              A scientific software developer is a person who develops science
              based software for research used by scientific
              organisation,institution or individual use. In addition of
              mastering React Js, C++ and Python, I am focus on building
              software infrastracture for Physics studies at the moment.
            </p>
            <div>
              <button className="bg-teal-600 text-white rounded-full border-2 px-6 py-3 my-2 group flex item-center hover:bg-teal-600 hover:border-teal-600 ">
                view work
                <span className="duration-300">
                  <HiArrowNarrowRight className="ml-3" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </Element>
    </React.Fragment>
  );
};

export default Home;
