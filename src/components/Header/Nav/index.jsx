import React from "react";
import { VscChevronDown } from "react-icons/vsc";
import { BiAlarm, BiCalendarEvent, BiNotepad } from "react-icons/bi";
import { FaBell } from "react-icons/fa";

const Nav = () => {
  return (
    <nav className="sm: hidden lg:flex lg:justify-start">
      <div className="text-[1.1rem] text-MediumGray mx-20 flex items-center gap-16">
        <div className="group/features flex flex-col justify-between items-center">
          <button className="flex items-center gap-3 trasition-all duration-300 hover:text-AlmostBlack">
            Freatures
            <VscChevronDown className="text-[1.3rem] transition-all duration-300 group-hover/features:-rotate-180" />
          </button>
          <div className="hidden left-[7rem] top-5 bg-AlmostWhite flex-col justify-cen mx-6 my-10 p-3 rounded-xl shadow-lg  group-hover/features:fixed group-hover/features:flex">
            <a
              href="#"
              className="flex gap-3 transition-all duration-300 text-center p-2 rounded-lg hover:bg-LinkHover hover:text-AlmostBlack"
            >
              <BiNotepad className="text-Purple text-[1.5rem]" /> Todo List
            </a>
            <a
              href="#"
              className="flex gap-3 transition-all duration-300 text-center p-2 rounded-lg hover:bg-LinkHover hover:text-AlmostBlack"
            >
              <BiCalendarEvent className="text-Blue text-[1.5rem]" />
              Calendar
            </a>
            <a
              href="#"
              className="flex gap-3 transition-all duration-300 text-center p-2 rounded-lg hover:bg-LinkHover hover:text-AlmostBlack"
            >
              <FaBell className="text-Yellow text-[1.5rem]" /> Reminders
            </a>
            <a
              href="#"
              className="flex gap-3 transition-all duration-300 text-center p-2 rounded-lg hover:bg-LinkHover hover:text-AlmostBlack"
            >
              <BiAlarm className="text-DarkPurple text-[1.5rem]" /> Planning
            </a>
          </div>
        </div>

        <div className="group/company">
          <button className="flex items-center gap-3 trasition-all duration-300 hover:text-AlmostBlack">
            Company
            <VscChevronDown className="text-[1.3rem] transition-all duration-300 group-hover/company:-rotate-180" />
          </button>
          <div className="hidden left-[21.5rem] top-10 bg-AlmostWhite flex-col  my-5 p-3 rounded-xl shadow-lg group-hover/company:fixed group-hover/company:flex">
            <a
              href="#"
              className="transition-all duration-300 text-center p-2 rounded-lg hover:bg-LinkHover hover:text-AlmostBlack "
            >
              History
            </a>
            <a
              href="#"
              className="transition-all duration-300 text-center p-2 rounded-lg hover:bg-LinkHover hover:text-AlmostBlack"
            >
              Our Team
            </a>
            <a
              href="#"
              className="transition-all duration-300 text-center p-2 rounded-lg hover:bg-LinkHover  hover:text-AlmostBlack"
            >
              Blog
            </a>
          </div>
        </div>

        <a
          href="#"
          className="trasition-all duration-300 hover:text-AlmostBlack"
        >
          Careers
        </a>
        <a
          href="#"
          className="trasition-all duration-300 hover:text-AlmostBlack"
        >
          About
        </a>
      </div>

      <div className="fixed right-0 top-4 flex gap-12 text-[1.2rem] mx-10 text-MediumGray">
        <button className="transtion-all duration-300 hover:text-AlmostBlack">
          Login
        </button>
        <button className="flex items-center border-2 border-MediumGray  rounded-2xl px-6 py-2 transition-all duration- hover:text-AlmostBlack hover:border-AlmostBlack">
          Register
        </button>
      </div>
    </nav>
  );
};

export default Nav;
