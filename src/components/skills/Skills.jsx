import React from "react";
import ProgressBar from "../../chip/ProgressBar";
import SkillBox from "../../chip/SkillBox";

import { IoLogoHtml5, IoLogoCss3 } from "react-icons/io";


import {
  SiJavascript,
  SiTailwindcss,
  SiJava,
  SiLinux
} from "react-icons/si";
import { FaAngular } from 'react-icons/fa';
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { SiCplusplus } from "react-icons/si";

const Skills = ({ darkMode }) => {
  return (
    <div id="skills">
      <div className=" container m-auto  mt-16">
        {/* heading */}
        <div data-aos="fade-up" className="relative mb-5">
          <h3 className=" text-3xl font-black text-gray-400 sm:text-2xl">
            My Skills
          </h3>
          <span className="h-[1.1px] right-0 absolute w-[90%] bg-gray-300 block"></span>
        </div>
        {/* content*/}
        <div className="flex md:flex-col ">
          <div className="left flex-1 w-full">
            <p
              data-aos="fade-up"
              className=" text-gray-700 font-medium w-[100%]"
            >
              Here are my skills.
            </p>
            {/* left box */}
            <div
              data-aos="zoom-in"
              className="progress flex items-center h-[100%] justify-end md:justify-center"
            >
              <div className=" flex flex-col gap-6  w-3/4  my-5 md:w-[90%]">
                <ProgressBar logo={<IoLogoHtml5 />} name={"HTML"} value={94} />
                <ProgressBar logo={<IoLogoCss3 />} name={"CSS"} value={80} />
                <ProgressBar
                  logo={<SiJavascript />}
                  name={"Javascript (DSA/Problem Solving)"}
                  value={80}
                />
                <ProgressBar logo={<SiCplusplus />} name={"C/C++ (DSA/Problem Solving)"} value={80} />
                <ProgressBar
                  logo={<FaJava />}
                  name={"Core Java"}
                  value={70}
                />
                
              </div>
            </div>
          </div>
          {/* right box */}
          <div className="right relative flex-1 flex flex-wrap p-5 gap-10 items-center justify-center sm:w-full">
            <div className="first2 flex flex-col gap-10">
              
                <SkillBox
                logo={<FaNodeJs />}
                black={"white"}
                white={"black"}
                skill={"Node.js"}
              />
              
              <SkillBox
                logo={<SiExpress />}
                black={"white"}
                white={"black"}
                skill={"Express.js"}
              />
            </div>
            <div className="last2 flex flex-col gap-10">
              <SkillBox
                logo={<FaReact />}
                black={"black"}
                white={"white"}
                skill={"React JS"}
              />
              <SkillBox
                className=""
                logo={
                  <FaAngular/>
                }
                black={"black"}
                white={"white"}
                skill={"Angular"}
              />
              {/* { <SkillBox
                className=""
                // logo={
                //   // <SiNextdotjs className=" text-white bg-black rounded-full h-fit border-white overflow-hidden" />
                // }
                black={"black"}
                white={"white"}
                skill={"Next Js"}
              /> } */}
            </div>
          </div>
        </div>

        {/* { icons } */}
        <div
  data-aos="fade-up"
  data-aos-duration="1200"
  className="container m-auto flex flex-wrap items-center justify-center mt-8 gap-4 md:gap-5"
>
  <img
    className="w-[40px] h-[40px] sm:w-[35px] sm:h-[35px]"
    src="https://img.icons8.com/?size=100&id=v8RpPQUwv0N8&format=png&color=000000"
  />
  <img
    className="w-[40px] h-[40px] sm:w-[35px] sm:h-[35px]"
    src="https://img.icons8.com/?size=100&id=7gdY5qNXaKC0&format=png&color=000000"
  />
  <img
    className="w-[40px] h-[40px] sm:w-[35px] sm:h-[35px]"
    src="https://img.icons8.com/?size=100&id=108784&format=png&color=000000"
  />
  <img
    className="w-[40px] h-[40px] sm:w-[35px] sm:h-[35px]"
    src="https://img.icons8.com/?size=100&id=bzf0DqjXFHIW&format=png&color=000000"
  />
  <img
    className="w-[40px] h-[40px] sm:w-[35px] sm:h-[35px]"
    src="https://img.icons8.com/?size=100&id=lTKW3iI3wIT0&format=png&color=000000"
  />
  <img
    className="w-[40px] h-[40px] sm:w-[35px] sm:h-[35px]"
    src="https://img.icons8.com/?size=100&id=kg46nzoJrmTR&format=png&color=000000"
  />
  <img
    className="w-[40px] h-[40px] sm:w-[35px] sm:h-[35px]"
    src="https://img.icons8.com/?size=100&id=20906&format=png&color=000000"
  />
  <img
    className="w-[40px] h-[40px] sm:w-[35px] sm:h-[35px]"
    src="https://img.icons8.com/?size=100&id=0OQR1FYCuA9f&format=png&color=000000"
  />
  <img
    className="w-[40px] h-[40px] sm:w-[35px] sm:h-[35px]"
    src="https://img.icons8.com/?size=100&id=71257&format=png&color=000000"
  />
  <img
    className="w-[40px] h-[40px] sm:w-[35px] sm:h-[35px]"
    src="https://img.icons8.com/color/48/null/nodejs.png"
  />
  <img
    className="w-[40px] h-[40px] sm:w-[35px] sm:h-[35px]"
    src="https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/24/null/external-mongodb-a-cross-platform-document-oriented-database-program-logo-shadow-tal-revivo.png"
  />
</div>

      </div>
    </div>
  );
};

export default Skills;
