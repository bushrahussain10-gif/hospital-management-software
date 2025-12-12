import React from "react";
import { FiPlus } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";
import { CiSearch } from "react-icons/ci";
import { IoInformation } from "react-icons/io5";
import { FaEdit } from "react-icons/fa";

const Doctors = () => {
  return (
    
      <div className="Doctors-Info shadow-lg p-3">
        <div>
          <div
            className="d-flex justify-content-between"
            style={{ borderBottom: "1px solid #3497f9 " }}
          >
            <h4 className="mt-3 p-3">Doctors Info</h4>
            <div>
              <button className="btn btn-primary mt-3 me-2">
                {" "}
                <FiPlus /> Add Doctor
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
                placeholder="Search Doctor"
              />
            </div>
          </div>
          <div className="p-4 mb-0">
            <table class="table table-hover  ">
              <thead>
                <tr>
                  <th scope="col">Doctor Name </th>
                  <th scope="col">Qualification</th>
                  <th scope="col">Specialization</th>
                  <th scope="col">Experience</th>
                  <th scope="col">Timings</th>
                  <th scope="col">Status</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody className="Doctor-table ">
                <tr>
                  <th className="fw-light" scope="row">
                    <img
                      src="/female.png"
                      alt="Frontend/public/female.png"
                      style={{ width: 30, height: 30, borderRadius: 50 }}
                    />
                    Dr Hussain
                  </th>
                  <td>MBBS,MD</td>
                  <td>Cardiologist</td>
                  <td>12+ Years</td>
                  <td>10 AM- 2 PM</td>
                  <td className="badge bg-success ">Available</td>
                  <td>
                    <button className="DoctorPageButtonI me-2 p-1 ">
                      <IoInformation size={25} color="#318bff" />
                    </button>
                    <button className="DoctorPageButtonE me-2 p-1">
                      <FaEdit size={25} color="green" />
                    </button>
                    <button className="DoctorPageButtonC me-2 p-1">
                      <RxCross2 size={25} color="#ff6b6b" />
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
                    Dr Hussain
                  </th>
                  <td>MBBS,MD</td>
                  <td>Dermatologist</td>
                  <td>8+ Years</td>
                  <td>11 AM- 4 PM</td>
                  <td className="badge bg-danger">Busy</td>
                  <td>
                    <button className="DoctorPageButtonI me-2 p-1 ">
                      <IoInformation size={25} color="#318bff" />
                    </button>
                    <button className="DoctorPageButtonE me-2 p-1">
                      <FaEdit size={25} color="green" />
                    </button>
                    <button className="DoctorPageButtonC me-2 p-1">
                      <RxCross2 size={25} color="#ff6b6b" />
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
                    Dr Hussain
                  </th>
                  <td>MBBS,MD</td>
                  <td>Neurologist</td>
                  <td>15+ Years</td>
                  <td>9 AM- 1 PM</td>
                  <td className="badge bg-warning">On Leave</td>
                  <td>
                    <button className="DoctorPageButtonI me-2 p-1 ">
                      <IoInformation size={25} color="#318bff" />
                    </button>
                    <button className="DoctorPageButtonE me-2 p-1">
                      <FaEdit size={25} color="green" />
                    </button>
                    <button className="DoctorPageButtonC me-2 p-1">
                      <RxCross2 size={25} color="#ff6b6b" />
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
                    Dr Hussain
                  </th>
                  <td>BDS,MDS</td>
                  <td>Dentist</td>
                  <td>7+ Years</td>
                  <td>10 AM- 2 PM</td>
                  <td className="badge bg-success ">Available</td>
                   <td>
                    <button className="DoctorPageButtonI me-2 p-1 ">
                      <IoInformation size={25} color="#318bff" />
                    </button>
                    <button className="DoctorPageButtonE me-2 p-1">
                      <FaEdit size={25} color="green" />
                    </button>
                    <button className="DoctorPageButtonC me-2 p-1">
                      <RxCross2 size={25} color="#ff6b6b" />
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
                    Dr Hussain
                  </th>
                  <td>MBBS,MD</td>
                  <td>Oncologist</td>
                  <td>12+ Years</td>
                  <td>2 AM- 7 PM</td>
                  <td className="badge bg-warning">On Leave</td>
                  <td>
                    <button className="DoctorPageButtonI me-2 p-1 ">
                      <IoInformation size={25} color="#318bff" />
                    </button>
                    <button className="DoctorPageButtonE me-2 p-1">
                      <FaEdit size={25} color="green" />
                    </button>
                    <button className="DoctorPageButtonC me-2 p-1">
                      <RxCross2 size={25} color="#ff6b6b" />
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
                    Dr Hussain
                  </th>
                  <td>MBBS,MS Ortho</td>
                  <td>Orthopedic</td>
                  <td>10+ Years</td>
                  <td>10 AM- 2 PM</td>
                  <td className="badge bg-success ">Available</td>
                  <td>
                    <button className="DoctorPageButtonI me-2 p-1 ">
                      <IoInformation size={25} color="#318bff" />
                    </button>
                    <button className="DoctorPageButtonE me-2 p-1">
                      <FaEdit size={25} color="green" />
                    </button>
                    <button className="DoctorPageButtonC me-2 p-1">
                      <RxCross2 size={25} color="#ff6b6b" />
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
                    Dr Hussain
                  </th>
                  <td>MBBS,MD</td>
                  <td>General Physician</td>
                  <td>9+ Years</td>
                  <td>10 AM- 2 PM</td>
                  <td className="badge bg-danger">Busy</td>
                   <td>
                    <button className="DoctorPageButtonI me-2 p-1 ">
                      <IoInformation size={25} color="#318bff" />
                    </button>
                    <button className="DoctorPageButtonE me-2 p-1">
                      <FaEdit size={25} color="green" />
                    </button>
                    <button className="DoctorPageButtonC me-2 p-1">
                      <RxCross2 size={25} color="#ff6b6b" />
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

export default Doctors;
