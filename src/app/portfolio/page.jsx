"use client";
import Database from "@/components/database";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import ImageLoader from "../../../imageLoader";

const items = [
  {
    id: 1,
    color: "from-purple-300 to-blue-300",
    title: "React Library Management Frontend",
    tech: ["React", "Redux", "Redux toolkit", "Material UI", "TypeScript" , "Jest"],
    desc: "This project is a library management app with not just commonly expected functionalities like listing, sorting, searching, modifying, adding, and borrowing/returning books. It also tracks the books inventory and tell users when a book had ran out. Different type of users will get access to different functions.",
    imgCheck: true,
    img: "/library.png",
    codeCheck: true,
    demoCheck: true,
    demoLink: "https://frozen-potato.github.io/fs16-front-end-lib/",
    codeLink: "https://github.com/Frozen-Potato/Library-Management-FE",
  },
  {
    id: 2,
    color: "from-blue-300 to-violet-400",
    title: "ExpressJS backend for the React Library project",
    tech: ["ExpressJS", "MongoDB", "NodeJS", "TypeScript", "Jest"],
    desc: "This is the backend powered by ExpressJS and MongoDB for the library frontend. This is where all the magic happens, from getting, modifying , paginating, filtering and searching to verifying books data each with proper verification of user roles.",
    imgCheck: false,
    img: "",
    codeCheck: true,
    demoCheck: false,
    codeLink: "https://github.com/Frozen-Potato/Library-Management-BE",
    demoLink: "",
  }
];

const PortfolioPage = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-[600vh] relative" ref={ref}>
        <div className="w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-8xl text-center">
          My Works
        </div>
        <div className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden">
          <motion.div style={{ x }} className="flex">
            <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-purple-300 to-red-300" />
            {items.map((item) => (
              <div
                className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color}`}
                key={item.id}
              >
                <div className="flex flex-col gap-8 text-white">
                  <h1 className="text-xl font-bold md:text-4xl lg:text-4xl xl:text-6xl">
                    {item.title}
                  </h1>
                  <div className="relative w-80 h-56 md:w-96 md:h-64 lg:w-[500px]  xl:w-[600px]">
                    { item.imgCheck ?  (                  
                      <Image loader={ImageLoader} src={item.img} alt="" fill />                  
                    ) : (
                      <Database />
                    )}
                  </div>
                  <div className="flex gap-4 flex-wrap">
                    { item.tech && (
                      item.tech.map((tech) => (
                        <div key={tech} className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                          {tech}
                        </div>
                      ))
                    )}
                  </div>
                  <p className="w-80 md:w96 lg:w-[500px] lg:text-lg xl:w-[600px] text-black">
                    {item.desc}
                  </p>
                  <div className="flex gap-5 flex-wrap justify-end">
                    { item.demoCheck ? (
                      <Link href={item.demoLink} className="flex">
                        <button className="p-2 text-sm md:p-4 md:text-md lg:p-8 lg:text-lg bg-white text-gray-600 hover:bg-black hover:text-white font-semibold m-4 rounded">See Demo</button>
                      </Link>
                    ) : ( <></> )}
                    { item.codeCheck ? (
                      <Link href={item.codeLink} className="flex">
                        <button className="p-2 text-sm md:p-4 md:text-md lg:p-8 lg:text-lg bg-white text-gray-600 hover:bg-black hover:text-white font-semibold m-4 rounded">See Code</button>
                      </Link>
                    ) : ( <></> )}
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      <div className="w-screen h-screen flex flex-col gap-16 items-center justify-center text-center">
        <h1 className="text-8xl">Do you have a project?</h1>
        <div className="relative">
          <motion.svg
            animate={{ rotate: 360 }}
            transition={{ duration: 8, ease: "linear", repeat: Infinity }}
            viewBox="0 0 300 300"
            className="w-64 h-64 md:w-[500px] md:h-[500px] "
          >
            <defs>
              <path
                id="circlePath"
                d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
              />
            </defs>
            <text fill="#000">
              <textPath xlinkHref="#circlePath" className="text-xl">
                Fullstack Developer
              </textPath>
            </text>
          </motion.svg>
          <Link
            href="/contact"
            className="w-16 h-16 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex items-center justify-center"
          >
            Hire Me
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioPage;
