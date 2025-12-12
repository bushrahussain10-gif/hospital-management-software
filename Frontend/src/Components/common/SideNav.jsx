import React from "react";
import { Link, NavLink } from "react-router-dom";
import { LuFileText } from "react-icons/lu";
import { IoSettingsSharp } from "react-icons/io5";
import { FaUserDoctor } from "react-icons/fa6";
import { FaBookMedical } from "react-icons/fa";
import { MdLogout } from "react-icons/md";
import { FiLogOut } from "react-icons/fi";
import { RxExit } from "react-icons/rx";
import { FaBuilding } from "react-icons/fa";
import { MdPeopleAlt } from "react-icons/md";
import { RiMessage2Fill } from "react-icons/ri";
import { PiSpeedometerFill } from "react-icons/pi";

const SideNav = () => {
  return (

    <div className="shadow-lg h-100">
      <div className="d-flex justify-content-center pt-3">
        <img className="w-50 h-50" src="Logo.png" alt="Logo" />
      </div>

      <ul className="mt-5 " style={{ listStyle: "none" }}>
        <li className="my-3">
          <NavLink className="side-link" to={"/dashboard"}>
            <div className="px-2 py-2 hover-div">
              <PiSpeedometerFill size={25} className="me-2" />
              Dashboard
            </div>
          </NavLink>
        </li>

        <li className="my-3">
          <NavLink className="side-link" to={"/patients"}>
            <div className="px-2 py-2 hover-div">
              <MdPeopleAlt size={25} className="me-2" />
              Patients
            </div>
          </NavLink>
        </li>

        <li className="my-3">
          <NavLink className="side-link" to={"/appointments"}>
            <div className="px-2 py-2 hover-div">
              <LuFileText size={25} className="me-2" />
              Appointments
            </div>
          </NavLink>
        </li>

        <li className="my-3">
          <NavLink className="side-link" to={"/doctors"}>
            <div className="px-2 py-2 hover-div">
              <FaUserDoctor size={25} className="me-2" />
              Doctors
            </div>
          </NavLink>
        </li>

        <li className="my-3">
          <NavLink className="side-link" to={"/messages"}>
            <div className="px-2 py-2 hover-div">
              <RiMessage2Fill size={25} className="me-2" />
              Messages
            </div>
          </NavLink>
        </li>

        <li className="my-3">
          <NavLink className="side-link" to={"/education-content"}>
            <div className="px-2 py-2 hover-div ">
              <FaBuilding size={25} className="me-2" />
              Education Content
            </div>
          </NavLink>
        </li>

        <li className="my-3">
          <NavLink className="side-link" to={"/medicine-inventory"}>
            <div className="px-2 py-2 hover-div ">
              <FaBookMedical size={25} className="me-2" />
              Medicine Inventory
            </div>
          </NavLink>
        </li>

        <li className="my-3">
          <NavLink className="side-link" to={"/settings"}>
            <div className="px-2 py-2 hover-div ">
              <IoSettingsSharp size={25} className="me-2" />
              Settings
            </div>
          </NavLink>
        </li>
        <br></br>
        <br></br>
        <br></br>
        <li className="my-3">
          <NavLink to={"/"}>
            <div>
              <button className="btn LogoutButton fs-5 ">
                <FiLogOut  size={25} className="me-3" style={{color: "gray"}} />
                Logout
              </button>
            </div>
          </NavLink>
        </li>
      </ul>
    </div>
    
  );
};

export default SideNav;
