import React from "react";
import { HiOutlineCalendarDateRange } from "react-icons/hi2";
import { AiOutlineCloseSquare } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { FiPlus } from "react-icons/fi";
import { BiMessageRounded } from "react-icons/bi";
import { RxCross2 } from "react-icons/rx";
import { CiSearch } from "react-icons/ci";
import { FaInfo } from "react-icons/fa6";
import { IoInformation } from "react-icons/io5";
import { FaEdit } from "react-icons/fa";

const Patients = () => {
  return (
    
      <div className="Patient-Info shadow-lg p-2">
        <div>
          <div
            className="d-flex justify-content-between"
            style={{ borderBottom: "1px solid #3497f9 " }}
          >
            <h4 className="mt-2 p-3">Patient Info</h4>
            <div>
              <button className="btn btn-primary mt-3 me-2">
                {" "}
                <FiPlus /> New Patient
              </button>
            </div>
          </div>
          <div className="d-flex align-items-center mt-4 ps-4 ">
            <div className="input-group date-filter-input search-bar me-5">
              {" "}
              <CiSearch size={25} className="pt-1 mb-0 mt-1" />
              <input
                type="text"
                className="form-control"
                placeholder="Search"
              />
            </div>
            <div>
              <div className="input-group date-filter-input">
                <input
                  type="date"
                  className="form-control"
                  placeholder="Filter by Date"
                />
                <HiOutlineCalendarDateRange
                  size={25}
                  className="pt-1 mb-0 mt-1 "
                  style={{ color: "#3497f9" }}
                />
              </div>
            </div>
          </div>
          <div className="p-4 mb-0">
            <table class="table table-hover ">
              <thead>
                <tr>
                  <th scope="col">Patient Name </th>
                  <th scope="col">Age</th>
                  <th scope="col">Gender</th>
                  <th scope="col">Blood Group</th>
                  <th scope="col">Phone Number</th>
                  <th scope="col">Email ID</th>
                  <th scope="col">User Action</th>
                </tr>
              </thead>
              <tbody className="Patient-table ">
                <tr>
                  <th className="fw-light" scope="row">
                    <img
                      src="/female.png"
                      alt="Frontend/public/female.png"
                      style={{ width: 30, height: 30, borderRadius: 50 }}
                    />
                    Jasmine Curie
                  </th>
                  <td>32</td>
                  <td>Female</td>
                  <td>B+ve</td>
                  <td>+91 1234567890</td>
                  <td>jasmine@gmail.com</td>
                  <td>
                    <button className="PatientPgeButtonM me-2 p-1">
                      <BiMessageRounded size={25} color="#e4ebf4ff" />
                    </button>
                    <button className="PatientPgeButtonE me-2 p-1">
                      <FaEdit size={25} color="green" />
                    </button>
                    <button className="PatientPgeButtonC me-2 p-1">
                      <RxCross2 size={25} color="#ff6b6b" />
                    </button>
                    <button className="PatientPgeButtonI me-2 p-1 ">
                      <IoInformation size={25} color="#318bff" />
                    </button>
                  </td>
                </tr>
                <tr>
                  <th className="fw-light" scope="row">
                    <img
                      src="/Male.png"
                      alt="Frontend/public/female.png"
                      style={{ width: 30, height: 30, borderRadius: 50 }}
                    />
                    William Watson
                  </th>
                  <td>34</td>
                  <td>Male</td>
                  <td>O+ve</td>
                  <td>+91 1234567890</td>
                  <td>wiillyson@gmail.com</td>
                  <td>
                    <button className="PatientPgeButtonM me-2 p-1">
                      <BiMessageRounded size={25} color="#e4ebf4ff" />
                    </button>
                    <button className="PatientPgeButtonE me-2 p-1">
                      <FaEdit size={25} color="green" />
                    </button>
                    <button className="PatientPgeButtonC me-2 p-1">
                      <RxCross2 size={25} color="#ff6b6b" />
                    </button>
                    <button className="PatientPgeButtonI me-2 p-1 ">
                      <IoInformation size={25} color="#318bff" />
                    </button>
                  </td>
                </tr>
                <tr>
                  <th className="fw-light" scope="row">
                    <img
                      src="/female.png"
                      alt="Frontend/public/female.png"
                      style={{ width: 30, height: 30, borderRadius: 50 }}
                    />
                    Anya Rollins
                  </th>
                  <td>30</td>
                  <td>Female</td>
                  <td>B+ve</td>
                  <td>+91 1234567890</td>
                  <td>anne@gmail.com</td>
                  <td>
                    <button className="PatientPgeButtonM me-2 p-1">
                      <BiMessageRounded size={25} color="#e4ebf4ff" />
                    </button>
                    <button className="PatientPgeButtonE me-2 p-1">
                      <FaEdit size={25} color="green" />
                    </button>
                    <button className="PatientPgeButtonC me-2 p-1">
                      <RxCross2 size={25} color="#ff6b6b" />
                    </button>
                    <button className="PatientPgeButtonI me-2 p-1 ">
                      <IoInformation size={25} color="#318bff" />
                    </button>
                  </td>
                </tr>
                <tr>
                  <th className="fw-light" scope="row">
                    <img
                      src="/female.png"
                      alt="Frontend/public/female.png"
                      style={{ width: 30, height: 30, borderRadius: 50 }}
                    />
                    Noah Keith
                  </th>
                  <td>28</td>
                  <td>Female</td>
                  <td>AB+ve</td>
                  <td>+91 1234567890</td>
                  <td>keithnoah@gmail.com</td>
                  <td>
                    <button className="PatientPgeButtonM me-2 p-1">
                      <BiMessageRounded size={25} color="#e4ebf4ff" />
                    </button>
                    <button className="PatientPgeButtonE me-2 p-1">
                      <FaEdit size={25} color="green" />
                    </button>
                    <button className="PatientPgeButtonC me-2 p-1">
                      <RxCross2 size={25} color="#ff6b6b" />
                    </button>
                    <button className="PatientPgeButtonI me-2 p-1 ">
                      <IoInformation size={25} color="#318bff" />
                    </button>
                  </td>
                </tr>
                <tr>
                  <th className="fw-light" scope="row">
                    <img
                      src="/female.png"
                      alt="Frontend/public/female.png"
                      style={{ width: 30, height: 30, borderRadius: 50 }}
                    />
                    Emma Taylor
                  </th>
                  <td>35</td>
                  <td>Female</td>
                  <td>A+ve</td>
                  <td>+91 1234567890</td>
                  <td>emmawatson@gmail.com</td>
                  <td>
                    <button className="PatientPgeButtonM me-2 p-1">
                      <BiMessageRounded size={25} color="#e4ebf4ff" />
                    </button>
                    <button className="PatientPgeButtonE me-2 p-1">
                      <FaEdit size={25} color="green" />
                    </button>
                    <button className="PatientPgeButtonC me-2 p-1">
                      <RxCross2 size={25} color="#ff6b6b" />
                    </button>
                    <button className="PatientPgeButtonI me-2 p-1 ">
                      <IoInformation size={25} color="#318bff" />
                    </button>
                  </td>
                </tr>
                <tr>
                  <th className="fw-light" scope="row">
                    <img
                      src="/Male.png"
                      alt="Frontend/public/female.png"
                      style={{ width: 30, height: 30, borderRadius: 50 }}
                    />
                    Liam Harvey
                  </th>
                  <td>36</td>
                  <td>Male</td>
                  <td>B+ve</td>
                  <td>+91 1234567890</td>
                  <td>liamharvey@gmail.com</td>
                  <td>
                    <button className="PatientPgeButtonM me-2 p-1">
                      <BiMessageRounded size={25} color="#e4ebf4ff" />
                    </button>
                    <button className="PatientPgeButtonE me-2 p-1">
                      <FaEdit size={25} color="green" />
                    </button>
                    <button className="PatientPgeButtonC me-2 p-1">
                      <RxCross2 size={25} color="#ff6b6b" />
                    </button>
                    <button className="PatientPgeButtonI me-2 p-1 ">
                      <IoInformation size={25} color="#318bff" />
                    </button>
                  </td>
                </tr>
                <tr>
                  <th className="fw-light" scope="row">
                    <img
                      src="/female.png"
                      alt="Frontend/public/female.png"
                      style={{ width: 30, height: 30, borderRadius: 50 }}
                    />
                    Gabriel Agreste
                  </th>
                  <td>38</td>
                  <td>Male</td>
                  <td>O-ve</td>
                  <td>+91 1234567890</td>
                  <td>agrestegabriel@gmail.com</td>
                  <td>
                    <button className="PatientPgeButtonM me-2 p-1">
                      <BiMessageRounded size={25} color="#e4ebf4ff" />
                    </button>
                    <button className="PatientPgeButtonE me-2 p-1">
                      <FaEdit size={25} color="green" />
                    </button>
                    <button className="PatientPgeButtonC me-2 p-1">
                      <RxCross2 size={25} color="#ff6b6b" />
                    </button>
                    <button className="PatientPgeButtonI me-2 p-1 ">
                      <IoInformation size={25} color="#318bff" />
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <nav aria-label="Page navigation example">
          <ul class="pagination justify-content-end">
            <li class="page-item disabled">
              <a class="page-link" href="#" tabindex="-1" aria-disabled="true">
                Previous
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">
                1
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">
                2
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">
                3
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">
                Next
              </a>
            </li>
          </ul>
        </nav>
      </div>
    
  );
};

export default Patients;
