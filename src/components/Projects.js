import React from "react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import justbank from '../assets/images/just bank.png'
import { FaReact, FaNodeJs, FaHtml5, FaCss3, FaJs, FaDatabase } from "react-icons/fa";
import { SiFirebase, SiMongodb, SiExpress, SiNetlify } from "react-icons/si";

const Projects = () => {
  const projects = [
    {
      url: justbank,
      desc: "just bank is an full stack MERN application which has been more responsive and and more reliable application.",
      techStack: [
        { name: "React", icon: <FaReact />, color: "text-blue-500" },
        { name: "Node.js", icon: <FaNodeJs />, color: "text-green-500" },
        { name: "MongoDB", icon: <SiMongodb />, color: "text-green-500" },
        { name: "Express.js", icon: <SiExpress />, color: "text-yellow-500" },
      ],
    },
    {
      url: "https://ichef.bbci.co.uk/news/1024/branded_news/1766/production/_99709950_english.jpg",
      desc: "A Netflix clone that allows users to stream movies and TV shows, featuring user accounts, watchlists, and playback functionality.",
      projectname: "Netflix Clone",
      techStack: [
        { name: "React", icon: <FaReact />, color: "text-blue-500" },
        { name: "Node.js", icon: <FaNodeJs />, color: "text-green-500" },
        { name: "MongoDB", icon: <SiMongodb />, color: "text-green-700" },
      ],
    },
    {
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPrtEL6qWpkMDfZCMQM9UJ1N00EhulOJdy5G-huihm-Q&s",
      desc: "A weather app clone that provides real-time weather updates and forecasts based on user location.",
      projectname: "Weather App Clone",
      techStack: [
        { name: "HTML", icon: <FaHtml5 />, color: "text-orange-500" },
        { name: "CSS", icon: <FaCss3 />, color: "text-blue-500" },
        { name: "JavaScript", icon: <FaJs />, color: "text-yellow-500" },
      ],
    },
    {
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpUKlttW7FDhICCLqmS8iqAkq0HR1kjSUIDEtQoUqnJw&s",
      desc: "A hotel booking app clone that enables users to search for hotels, check availability, and book rooms.",
      projectname: "Hotel Booking App Clone",
      techStack: [
        { name: "React", icon: <FaReact />, color: "text-blue-500" },
        { name: "Express", icon: <SiExpress />, color: "text-gray-500" },
        { name: "MongoDB", icon: <SiMongodb />, color: "text-green-700" },
      ],
    },
    {
      url: "https://loomslegacy.com/cdn/shop/files/001_dfbf9af2-6ff7-4bdd-9ae5-69f491fa994c.jpg?v=1640313011&width=800",
      desc: "An app clone inspired by Loom Legacy that allows users to manage their gaming gear and upgrade items.",
      projectname: "Loom Legacy App",
      techStack: [
        { name: "React", icon: <FaReact />, color: "text-blue-500" },
        { name: "Node.js", icon: <FaNodeJs />, color: "text-green-500" },
        { name: "Firebase", icon: <SiFirebase />, color: "text-yellow-500" },
      ],
    },
    {
      url: "https://images.pexels.com/photos/2882630/pexels-photo-2882630.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      desc: "A password generator that creates strong, random passwords to enhance online security.",
      projectname: "Password Generator",
      techStack: [
        { name: "HTML", icon: <FaHtml5 />, color: "text-orange-500" },
        { name: "CSS", icon: <FaCss3 />, color: "text-blue-500" },
        { name: "JavaScript", icon: <FaJs />, color: "text-yellow-500" },
      ],
    },
  ];

  return (
    <>
      <h1 className="mt-10 text-center p-1 rounded-lg bg-gray-300 text-2xl text-black font-bold w-1/2 mx-auto shadow-md shadow-gray-500">
        My Projects
      </h1>
      <section className="grid grid-cols-1 md:grid-cols-2 gap-10 p-10 bg-black text-white">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="flex flex-col md:flex-row items-center space-x-6 bg-gray-900 p-6 rounded-lg shadow-lg"
            initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <Tilt className="w-full md:w-1/3 bounce-in">
              <img
                src={project.url}
                alt={project.projectname}
                className="w-full h-48 object-cover rounded-lg shadow-lg"
              />
            </Tilt>
            <div className="w-full md:w-2/3 text-left">
              <h2 className="text-2xl text-yellow-300 font-bold mt-2 mb-2">{project.projectname}</h2>
              <p className="text-gray-200 mb-4">{project.desc}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.techStack.map((tech, idx) => (
                  <motion.div
                    key={idx}
                    className="flex items-center space-x-2 bg-gray-800 px-3 py-1 rounded-full cursor-pointer"
                    whileHover={{ scale: 1.1, backgroundColor: "#374151" }} // Gray-700 on hover
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <span className={`${tech.color} hover:text-white transition-colors duration-300`}>
                      {tech.icon}
                    </span>
                    <span className="text-gray-200 hover:text-white transition-colors duration-300">
                      {tech.name}
                    </span>
                  </motion.div>
                ))}
              </div>
              <div className="flex space-x-4">
                <a
                  href="https://just-bank.onrender.com/"
                  target="_blank"
                  className="bg-yellow-300 hover:bg-yellow-400 text-black font-bold py-2 px-4 rounded shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl"
                >
                  Live Demo
                </a>
                <a
                  href="#"
                  className="bg-yellow-300 hover:bg-yellow-400 text-black font-bold py-2 px-4 rounded shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl bounce-in"
                >
                  Code
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </section>
    </>
  );
};

export default Projects;