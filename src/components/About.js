import React, { useEffect, useRef } from 'react';
import './About.css';
import { motion, useInView } from 'framer-motion';
import k2 from '../assets/images/kiran_new.jpg';

const About = () => {
  const aboutRef = useRef(null);
  const isInView = useInView(aboutRef, { triggerOnce: true, threshold: 0.2 });

  

  return (
    <motion.div 
      ref={aboutRef} 
      className="about"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <div className="container">
        <motion.div 
          className="about-left anime"
          initial={{ opacity: 0, x: -100 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <img src={k2} alt="Kiran" />
        </motion.div>
        <motion.div 
          className="about-right"
          initial={{ opacity: 0, x: 100 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
        >
          <h1 id="about-subtitle">About Me</h1>
          <p id="about-desc text-xl ">
          Hello, I am Kiran, a dedicated and passionate Software Engineer currently pursuing a Bachelor of Technology in Computer Science at Raghu Engineering College. I have a strong foundation in full-stack development and a keen interest in solving complex problems through innovative technology solutions.
          </p>
          <h1 className='text-2xl mt-5 text-rose-600'>Education</h1>
          <div className="socialmedia-links">
            <motion.a 
              href="https://github.com/kirankalluru" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 5 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <i className="fa-brands fa-github"></i>
            </motion.a>
            <motion.a 
              href="https://www.linkedin.com/in/lakshmi-kiran-kalluru-a36971280/" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 5 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <i className="fa-brands fa-linkedin"></i>
            </motion.a>

            
          </div>
          <div className="edu-journey">
            <span>2022-2026</span>
            <p>B-tech(CSE)-Raghu Engineering<br/>College</p>
          </div>
          <div className="edu-journey">
            <span>2020-2022</span>
            <p>Intermediate-Sri Viswa Junior<br/>College</p>
          </div>
          <div className="edu-journey">
            <span>2010-2020</span>
            <p>School-Abhyudaya High School</p>
          </div>
          <motion.div 
            className="outer-container"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.4 }}
          >
            
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;