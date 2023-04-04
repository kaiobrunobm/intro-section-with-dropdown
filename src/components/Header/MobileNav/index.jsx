import React from "react";
import { VscClose, VscChevronDown, VscChevronUp } from "react-icons/vsc";
import { BiAlarm, BiCalendarEvent, BiNotepad } from "react-icons/bi";
import { FaBell } from "react-icons/fa";
import { useState } from "react";

const MobileNav = ({ handleNav, className }) => {
  const [menuFeatures, setMenuFeatures] = useState(false);
  const [menuCompany, setMenuCompany] = useState(false);

  const handleMenuFeatures = () => {
    setMenuFeatures(!menuFeatures);
  };

  const handleMenuCompany = () => {
    setMenuCompany(!menuCompany);
  };
  return (
    <nav className={className}>
      <button
        className="text-[3rem] m-2 self-end lg:hidden"
        onClick={handleNav}
      >
        <VscClose />
      </button>
      <div className="text-[1.2rem] text-MediumGray mx-7 my-2 flex flex-col gap-4">
        <div>
          <a
            href="#"
            className="flex gap-4 items-center"
            onClick={handleMenuFeatures}
          >
            Features
            {menuFeatures ? (
              <VscChevronUp className="text-[1.3rem]" />
            ) : (
              <VscChevronDown className="text-[1.3rem]" />
            )}
          </a>
          <div
            className={
              menuFeatures ? "flex flex-col mx-6 my-5 gap-5" : "hidden"
            }
          >
            <a href="#" className="flex gap-3">
              <BiNotepad className="text-Purple text-[1.5rem]" /> Todo List
            </a>
            <a href="#" className="flex gap-3">
              <BiCalendarEvent className="text-Blue text-[1.5rem]" />
              Calendar
            </a>
            <a href="#" className="flex gap-3">
              <FaBell className="text-Yellow text-[1.5rem]" /> Reminders
            </a>
            <a href="#" className="flex gap-3">
              <BiAlarm className="text-DarkPurple text-[1.5rem]" /> Planning
            </a>
          </div>
        </div>
        <div>
          <a
            href="#"
            className="flex gap-4 items-center"
            onClick={handleMenuCompany}
          >
            Company
            {menuCompany ? (
              <VscChevronUp className="text-[1.3rem]" />
            ) : (
              <VscChevronDown className="text-[1.3rem]" />
            )}
          </a>
          <div
            className={menuCompany ? "flex flex-col mx-7 my-5 gap-5" : "hidden"}
          >
            <a href="#">History</a>
            <a href="#">Our Team</a>
            <a href="#">Blog</a>
          </div>
        </div>

        <a href="#">Careers</a>
        <a href="#">About</a>
      </div>
      <div className="flex flex-col items-center gap-8 text-[1.2rem] my-10 text-MediumGray">
        <button className="">Login</button>
        <button className="border-2 border-MediumGray py-2 w-56 rounded-2xl">
          Register
        </button>
      </div>
    </nav>
  );
};

export default MobileNav;
