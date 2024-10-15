import React from "react";
import {
  AiFillTwitterCircle,
  AiFillGithub,
} from "react-icons/ai";
import { FaCode, FaHackerrank, FaLinkedinIn } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import { FaPlay } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import resumePDF from "../../assets/Avneesh-Kaushik-Resume.pdf";



const Hero = () => {
  
  return (
    <div id="home" className={` bg-gradient-to-r from-green-200 to-blue-200 `}>
      <div className=" container mx-auto pt-5 h-[750px] md:h-[100vh] md:flex-col-reverse sm:h-[780px]  flex sm:flex-col-reverse sm:pt-0 ">
        <div className=" left mt-4 md:mt-0 flex-1 flex flex-col justify-center gap-5 w-1/2 md:w-full md:py-2 sm:py-0">
          <div className="info w-fit flex flex-col items-start justify-center gap-3 sm:gap-2">
            <h2
              data-aos="fade-up"
              className=" text-3xl font-bold sm:text-[2rem]"
            >
              Hello, I am Avneesh Kaushik
            </h2>
            <TypeAnimation
              data-aos="fade-up"
              sequence={[
                "Software Developer",
                2000,
                "Web Developer",
                2000,
                "Software Engineer",
                2000
              ]}
              speed={20}
              wrapper="h2"
              repeat={Infinity}
              className="text-yellow-500 text-4xl font-bold sm:text-3xl"
            />
            <p
              // data-aos="fade-up"
              className="md:w-full text-gray-600 sm:text-[.95rem]"
            >
              Coding is not just a hobby, it's a way of life - and I'm living it to the fullest.
            </p>
          </div>
          <div data-aos="fade-up" className="buttons flex gap-5">
            <a
              href="mailto:avikaushik000@gmail.com?subject=Your%20Subject&body=Your%20Message%20Here"
              className=" bg-black text-[1rem] text-white px-10 py-2 sm:px-8 rounded-lg font-bold  hover:text-yellow-500"
            >
              <span> Hire Me</span>
            </a>
            <a
              href={resumePDF}
              className="flex items-center gap-2 border- text-[1rem] bg-white border-black px-7 py-2 sm:px-6 rounded-lg font-bold  hover:text-yellow-500"
              download
            >
              <div className="flex items-center gap-1">
                Resume <FiDownload />
              </div>
            </a>
          </div>
          <div className="icons flex mt-5">
            <ul
              data-aos="fade-up"
              data-aos-duration="1500"
              className=" flex gap-5"
            >
              <li title="Leetcode">
                <a href="https://leetcode.com/u/avneesh_2001/" target="_blank">
                  {" "}
                  <FaCode className=" h-[1.8rem] w-[1.8rem] text-xl hover:scale-125  " />{" "}
                </a>
              </li>
              <li title="Github">
                <a href="https://github.com/avneesh9908" target="_blank">
                  {""}
                  <AiFillGithub className=" h-[1.8rem] w-[1.8rem] text-xl hover:scale-125 al"/>{" "}
                </a>
              </li>
              <li title="Linkedin">
                <a href="https://www.linkedin.com/in/avneesh-kaushik-7a42b91a5/" target="_blank">
                  {" "}
                  <FaLinkedinIn className="a h-[1.8rem] w-[1.8rem] text-xl hover:scale-125 " />{" "}
                </a>
              </li>
              <li title="codechef">
                <a href="https://www.codechef.com/users/avneesh_000" target="_blank">
                  {" "}
                  <FaHackerrank className=" h-[1.8rem] w-[1.8rem] text-xl hover:scale-125  " />{" "}
                </a>
              </li>
              <li title="geeksforgeeks">
                <a href="https://auth.geeksforgeeks.org/user/avikaushik000/practice" target="_blank">
                  {" "}
                  <FaCode className=" h-[1.8rem] w-[1.8rem] text-xl hover:scale-125  " />{" "}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="right  top-5 flex-1 flex items-center justify-center md:items-end sm:items-end">
          <div className="relative h-[88%] w-fit flex items-center sm:items-end">
            <img
              data-aos="fade-up"
             className="h-[100%] w-[100%] object-cover md:h-[95%] md:m-auto sm:m-0 mt-20 mx-auto"
              // src='https://i.postimg.cc/pTn61Gr1/Untitled-design222-modified.png'
              // src='https://i.postimg.cc/13nN5pRX/Untitled-1.png'
              src='https://i.postimg.cc/j24F0QJs/IMG-20240319-175657-removebg-1.png'
              // src={mine}
              alt="mine"
            />
            <div className=" absolute bottom-2 md:bottom-3 right-2 md:right-2">
              <div data-aos="zoom-in" data-aos-duration="1000" className=" relative cursor-pointer">
                <img
                  className=" w-[135px] md:w-[90px] circle-text"
                  src="https://ik.imagekit.io/imgkitt/tr:w-400/Full_Stack_Developer2.png?updatedAt=1683134009107"
                  alt=""
                />  
                <FaPlay
                  className=" text-black absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
