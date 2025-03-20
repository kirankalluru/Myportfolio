import React, { useRef, useEffect } from "react"; // Added useEffect
import { motion } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import WhatsAppButton from "./WhatsAppButton";
import gify from "../assets/images/contactmailimg.png";
import emailjs from "@emailjs/browser";

const ContactMe = () => {
  const form = useRef();



  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_nmmdkkg", "template_21zrepc", form.current, {
        publicKey: "7MRdXRgB6IfO43SOd",
      })
      .then(
        () => {
          toast.success("Email sent successfully!");
          form.current.reset();
        },
        (error) => {
          toast.error("Failed to send email. Please try again.");
          console.error("Email sending failed...", error.text);
        }
      );
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="flex flex-col md:flex-row justify-center items-center min-h-screen px-4 py-8"
    >
      {/* Left Image Section */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        whileHover={{ rotate: 5, scale: 1.05 }}
        className="flex justify-center items-center w-full md:w-1/3 mb-8 md:mb-0"
      >
        <img
          className="rounded-3xl max-w-full h-auto shadow-lg"
          src={gify}
          alt="giffy"
        />
      </motion.div>

      <motion.form
  ref={form}
  onSubmit={sendEmail}
  initial={{ opacity: 0, scale: 0.9 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
  className=" bg-opacity-30 backdrop-blur-sm p-6 md:p-8 rounded-lg shadow-xl flex flex-col space-y-4 w-full md:w-1/2 max-w-lg border border-white/20"
>
  <h1 className="text-3xl font-bold mb-6 text-white text-center md:text-left">
    Contact Me
  </h1>

  {/* Name Field */}
  <label className="text-white text-sm md:text-base">Name</label>
  <motion.input
    className="p-3 rounded-md bg-white bg-opacity-20 backdrop-blur-md text-white focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-gray-300"
    type="text"
    name="user_name"
    placeholder="Enter your name"
    required
    whileFocus={{ scale: 1.05 }}
  />

  {/* Email Field */}
  <label className="text-white text-sm md:text-base">Email</label>
  <motion.input
    className="p-3 rounded-md bg-white bg-opacity-20 backdrop-blur-md text-white focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-gray-300"
    type="email"
    name="user_email"
    placeholder="Enter your email"
    required
    whileFocus={{ scale: 1.05 }}
  />

  {/* Message Field */}
  <label className="text-white text-sm md:text-base">Message</label>
  <motion.textarea
    className="p-3 rounded-md bg-white bg-opacity-20 backdrop-blur-md text-white focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-gray-300"
    name="message"
    placeholder="Write your message"
    rows="5"
    required
    whileFocus={{ scale: 1.05 }}
  ></motion.textarea>

  {/* Submit Button */}
  <motion.button
    type="submit"
    className="bg-gradient-to-r from-blue-500 to-green-500 text-white font-bold py-3 px-6 rounded-lg hover:from-blue-600 hover:to-green-600 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-transform"
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
    animate={{ scale: [1, 1.05, 1] }}
    transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
  >
    Submit
  </motion.button>

  {/* WhatsApp Button */}
  <WhatsAppButton
    phoneNumber="9381455691"
    message="Hello, I would like to inquire about your services."
  />
</motion.form>


      {/* Toast Container */}
      <ToastContainer position="top-right" theme="dark" />
    </motion.section>
  );
};

export default ContactMe;
