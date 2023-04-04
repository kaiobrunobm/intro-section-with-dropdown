import React from "react";
import { VscChevronDown, VscChevronUp } from "react-icons/vsc";
import { BiAlarm, BiCalendarEvent, BiNotepad } from "react-icons/bi";
import { FaBell } from "react-icons/fa";
import { useState, useEffect, useRef } from "react";

const Nav = () => {
  const [menuFeatures, setMenuFeatures] = useState(false);
  const [menuCompany, setMenuCompany] = useState(false);

  const menuFeaturesRef = useRef();
  const menuCompanyRef = useRef();

  const handleMenuCompany = () => {
    setMenuCompany(!menuCompany);
  };
  const handleMenuFeatures = () => {
    setMenuFeatures(!menuFeatures);
  };

  useEffect(() => {
    const handleBody = (event) => {
      if (
        !menuFeaturesRef.current.contains(event.target) &&
        !menuCompanyRef.current.contains(event.target)
      ) {
        setMenuFeatures(false);
        setMenuCompany(false);
      }
    };

    document.addEventListener("mousedown", handleBody);
  });

  return (
    <nav className="sm: hidden lg:flex lg:justify-start">
      <div className="text-[1.1rem] text-MediumGray mx-20 flex items-center gap-16">
        <div className="flex flex-col justify-between items-center">
          <a
            onClick={handleMenuFeatures}
            href="#"
            className="flex items-center gap-3 trasition-all duration-300 hover:text-AlmostBlack"
          >
            Freatures
            {menuFeatures ? (
              <VscChevronUp className="text-[1.3rem]" />
            ) : (
              <VscChevronDown className="text-[1.3rem]" />
            )}
          </a>
          <div
            ref={menuFeaturesRef}
            className={
              menuFeatures
                ? "fixed left-[7rem] bg-AlmostWhite flex flex-col justify-cen mx-6 my-10 gap-5 p-5 rounded-xl shadow-lg"
                : "hidden"
            }
          >
            <a
              href="#"
              className="flex gap-3 transition-all duration-300 hover:text-AlmostBlack"
            >
              <BiNotepad className="text-Purple text-[1.5rem]" /> Todo List
            </a>
            <a
              href="#"
              className="flex gap-3 transition-all duration-300 hover:text-AlmostBlack"
            >
              <BiCalendarEvent className="text-Blue text-[1.5rem]" />
              Calendar
            </a>
            <a
              href="#"
              className="flex gap-3 transition-all duration-300 hover:text-AlmostBlack"
            >
              <FaBell className="text-Yellow text-[1.5rem]" /> Reminders
            </a>
            <a
              href="#"
              className="flex gap-3 transition-all duration-300 hover:text-AlmostBlack"
            >
              <BiAlarm className="text-DarkPurple text-[1.5rem]" /> Planning
            </a>
          </div>
        </div>

        <div>
          <a
            onClick={handleMenuCompany}
            href="#"
            className="flex items-center gap-3 trasition-all duration-300 hover:text-AlmostBlack"
          >
            Company
            {menuCompany ? (
              <VscChevronUp className="text-[1.3rem]" />
            ) : (
              <VscChevronDown className="text-[1.3rem]" />
            )}
          </a>
          <div
            ref={menuCompanyRef}
            className={
              menuCompany
                ? "fixed left-[21.5rem] bg-AlmostWhite flex flex-col mx-7 my-5 p-5 rounded-xl gap-5 shadow-lg"
                : "hidden"
            }
          >
            <a
              href="#"
              className="transition-all duration-300 hover:text-AlmostBlack"
            >
              History
            </a>
            <a
              href="#"
              className="transition-all duration-300 hover:text-AlmostBlack"
            >
              Our Team
            </a>
            <a
              href="#"
              className="transition-all duration-300 hover:text-AlmostBlack"
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
