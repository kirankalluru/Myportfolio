import React, { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { MdOutlineMessage } from "react-icons/md";
import { Link } from "react-router-dom";
import profile1 from "../assets/images/k2.png";
import profile2 from "../assets/images/k1.png";

const Sidebar = () => {
  const menus = [
    { name: "Kiran kalluru", link: "/", img: profile1 },
    { name: "Pavanteja Bheema", link: "/", img: profile2 },
    { name: "Kiran kalluru", link: "/", img: profile1 },
    { name: "Pavanteja Bheema", link: "/", img: profile2 },
    { name: "Kiran kalluru", link: "/", img: profile1 },
    { name: "Pavanteja Bheema", link: "/", img: profile2 },
    { name: "Kiran kalluru", link: "/", img: profile1 },
    { name: "Pavanteja Bheema", link: "/", img: profile2 },
    { name: "Kiran kalluru", link: "/", img: profile1 },
    { name: "Pavanteja Bheema", link: "/", img: profile2 },
  ];

  const [open, setOpen] = useState(false);



  return (
    <>
      <div
        className={`top-15 left-0 fixed bg-[#0f0e0e] min-h-screen ${
          open ? "w-72" : "w-16"
        } text-gray-100 px-4 duration-500`}
        onMouseEnter={()=>setOpen(true)}
        onMouseLeave={()=>setOpen(false)}
      >
        <div className="py-3 flex justify-between">
          {open && (
            <h1
            
             className="whitespace-pre duration-500 text-xl font-extrabold text-red-500">
              Hai <span className="text-xl font-bold text-lime-200">Messanger !</span>
            </h1>
          )}
          {open && (
            <MdOutlineMessage
              size={26}
              className="cursor-pointer text-blue-200"
            />
          )}
          <HiMenuAlt3
            size={26}
            className={`cursor-pointer ${open ? "text-red-700" : "text-green-700"}`}
            onClick={() => setOpen(!open)}
          />
        </div>
        <div className="mt-4 flex flex-col gap-4 relative">
          {menus.map((menu, i) => (
            <Link
              to={menu.link}
              key={i}
              className={`flex items-center gap-3.5 ${
                open ? "p-2" : "p-0"
              } hover:bg-gray-700 rounded-md`}
            >
              <img
                src={menu.img}
                alt={menu.name}
                className="w-8 h-8 rounded-full"
              />
              <span
                
                className={`capitalize whitespace-pre transition duration-500 transform ${
                  open ? "translate-x-0" : "translate-x-[-100%] opacity-0"
                }`}
              >
                {menu.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
      
    </>
  );
};

export default Sidebar;
