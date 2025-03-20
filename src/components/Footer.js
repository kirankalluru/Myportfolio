import React from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-stone-950 text-white py-8 px-6 mt-16 relative">
      <div className="container mx-auto text-center">
        <div className="mb-6">
          <h5 className="text-lg font-bold">Useful Links</h5>
          <ul className="flex justify-center space-x-6 mt-2">
            <li><Link to="/projects" className="hover:text-blue-400 transition-all">Projects</Link></li>
            <li><Link to="/about" className="hover:text-blue-400 transition-all">About Me</Link></li>
            <li><Link to="/contact" className="hover:text-blue-400 transition-all">Contact</Link></li>
          </ul>
        </div>

        <div className="flex justify-center space-x-6 mb-4">
          <a href="https://github.com/kirankalluru?tab=repositories" target="_blank" rel="noopener noreferrer" className="text-2xl text-gray-400 hover:text-white transition-all">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/lakshmi-kiran-kalluru-a36971280/" target="_blank" rel="noopener noreferrer" className="text-2xl text-blue-600 hover:text-white transition-all">
            <FaLinkedin />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-2xl text-blue-400 hover:text-white transition-all">
            <FaTwitter />
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="text-2xl text-pink-500 hover:text-white transition-all">
            <FaInstagram />
          </a>
        </div>

        

        <div className="text-center mt-8 border-t border-stone-700 pt-4">
          &copy; 2024 Kiran's Portfolio. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;