import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import c from "../assets/images/c.png";
import html from "../assets/images/html.png";
import css from "../assets/images/css.png";
import js from "../assets/images/js.png";
import py from "../assets/images/python.png";
import react from "../assets/images/react.png";
import java from "../assets/images/java.png";
import nodejs from "../assets/images/nodejs.png";

import "./SecondarySection.css";

const SecondarySection = () => {
  const courses = [
    { img: c, title: "C Programming", desc: "Mastered C programming basics, data structures, and algorithms during BTech semester 1.", bgColor: "bg-blue-400" },
    { img: html, title: "HTML", desc: "Learned HTML for creating and structuring web pages during BTech semester 2.", bgColor: "bg-red-400" },
    { img: css, title: "CSS", desc: "Studied CSS for styling web pages and enhancing UI design in BTech semester 3.", bgColor: "bg-green-400" },
    { img: js, title: "JavaScript", desc: "Acquired JavaScript skills for dynamic web development in BTech semester 3.", bgColor: "bg-yellow-400" },
    { img: py, title: "Python", desc: "Gained proficiency in Python for scripting, automation, and data analysis in BTech semester 3.", bgColor: "bg-purple-400" },
    { img: react, title: "React", desc: "Learned React for building interactive user interfaces in BTech semester 4.", bgColor: "bg-indigo-400" },
    { img: java, title: "Java", desc: "Studied Java for object-oriented programming and backend development in BTech semester 4.", bgColor: "" },
    { img: nodejs, title: "Node.js", desc: "Mastered Node.js for server-side development and building scalable applications in BTech semester 4.", bgColor: "bg-teal-400" },
  ];

  return (
    <>
      <h1 className="mt-20 mx-auto text-center p-1 rounded-lg bg-gray-300 text-xl text-black font-bold w-1/2 shadow-md shadow-gray-500">
        My Skill Set
      </h1>
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 p-6 ">
        {courses.map((course, index) => (
          <motion.div 
            key={index} 
            className="flex justify-center items-center cursor-pointer"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0.5, y: 20 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <Tilt
              className="Tilt"
              tiltMaxAngleX={8}
              tiltMaxAngleY={8}
              scale={1.02}
              transitionSpeed={400}
            >
              <motion.div 
                className={`Tilt-inner ${course.bgColor} bg-opacity-50 backdrop-blur-md rounded-lg shadow-md overflow-hidden transform transition-all duration-300 hover:shadow-xl text-center shadow-lg shadow-gray-700 w-64 p-4`}
                whileHover={{ scale: 1.02 }}
              >
                <div className="p-4 rounded-t-lg flex justify-center">
                  <img
                    src={course.img}
                    alt={course.title}
                    className="w-16 h-16 object-contain rounded-b-full border-1 shadow-xl shadow-yellow-500 bounce-in"
                  />
                </div>
                <div className="p-4 text-gray-100">
                  <h2 className="text-md font-semibold">{course.title}</h2>
                  <p className="text-xs text-gray-100 mt-1">{course.desc}</p>
                </div>
              </motion.div>
            </Tilt>
          </motion.div>
        ))}
      </section>
    </>
  );
};

export default SecondarySection;
