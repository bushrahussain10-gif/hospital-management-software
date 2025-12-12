import React from "react";
import { HiOutlineCalendarDateRange } from "react-icons/hi2";
import { BsArrowsAngleContract } from "react-icons/bs";
import { FiPlus } from "react-icons/fi";
import { CiSearch } from "react-icons/ci";

const Appointment = () => {
  return (
    <div className="Patient-Info shadow-lg p-3">
      <div>
        <div
          className="d-flex justify-content-between"
          style={{ borderBottom: "1px solid #3497f9 " }}
        >
          <div className="d-flex  ">
            <h5 className="mt-3 p-3">NEW APPOINTMENTS</h5>
            <h5 className="mt-3 p-3">COMPLETED APPOINTMENTS</h5>
          </div>
          <div className="d-flex">
            <div>
              <button className="btn btn-primary mt-3 me-4">
                <FiPlus /> New Appointment
              </button>
            </div>
            <div>
              {" "}
              <BsArrowsAngleContract
                style={{ color: "blue" }}
                className="mt-4 ms-5 me-2 "
              />
            </div>
          </div>
        </div>
        <div className="d-flex align-items-center mt-4 ps-4 ">
          <div className="input-group date-filter-input search-bar me-5">
            {" "}
            <CiSearch size={25} className="pt-1 mb-0 mt-1" />
            <input type="text" className="form-control" placeholder="Search" />
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
                <th scope="col">Time </th>
                <th scope="col">Date</th>
                <th scope="col">Patient Name</th>
                <th scope="col">Patient Age</th>
                <th scope="col">Doctor</th>
                <th scope="col">Fee Status</th>
                <th scope="col">User Action</th>
              </tr>
            </thead>
            <tbody className="Patient-table ">
              <tr>
                <th className="fw-light" scope="row">
                  9.30 Am
                </th>
                <td>01/12/2025</td>
                <td>
                  {" "}
                  <img
                    src="/female.png"
                    alt="Frontend/public/female.png"
                    style={{ width: 30, height: 30, borderRadius: 50 }}
                  />
                  Jasmine Curie
                </td>
                <td>32</td>
                <td>Dr.John</td>
                <td style={{ color: "green" }}>Paid</td>
                <td>Request Fee</td>
              </tr>
              <tr>
                <th className="fw-light" scope="row">
                  9.30 Am
                </th>
                <td>01/12/2025</td>
                <td>
                  {" "}
                  <img
                    src="/female.png"
                    alt="Frontend/public/female.png"
                    style={{ width: 30, height: 30, borderRadius: 50 }}
                  />
                  Jasmine Curie
                </td>
                <td>32</td>
                <td>Dr.John</td>
                <td style={{ color: "green" }}>Paid</td>
                <td>Request Fee</td>
              </tr>
              <tr>
                <th className="fw-light" scope="row">
                  9.30 Am
                </th>
                <td>01/12/2025</td>
                <td>
                  {" "}
                  <img
                    src="/female.png"
                    alt="Frontend/public/female.png"
                    style={{ width: 30, height: 30, borderRadius: 50 }}
                  />
                  Jasmine Curie
                </td>
                <td>32</td>
                <td>Dr.John</td>
                <td style={{ color: "green" }}>Paid</td>
                <td>Request Fee</td>
              </tr>
              <tr>
                <th className="fw-light" scope="row">
                  9.30 Am
                </th>
                <td>01/12/2025</td>
                <td>
                  {" "}
                  <img
                    src="/female.png"
                    alt="Frontend/public/female.png"
                    style={{ width: 30, height: 30, borderRadius: 50 }}
                  />
                  Jasmine Curie
                </td>
                <td>32</td>
                <td>Dr.John</td>
                <td style={{ color: "red" }}>unpaid</td>
                <td>Request Fee</td>
              </tr>
              <tr>
                <th className="fw-light" scope="row">
                  9.30 Am
                </th>
                <td>01/12/2025</td>
                <td>
                  {" "}
                  <img
                    src="/female.png"
                    alt="Frontend/public/female.png"
                    style={{ width: 30, height: 30, borderRadius: 50 }}
                  />
                  Jasmine Curie
                </td>
                <td>32</td>
                <td>Dr.John</td>
                <td style={{ color: "red" }}>unpaid</td>
                <td>Request Fee</td>
              </tr>
              <tr>
                <th className="fw-light" scope="row">
                  9.30 Am
                </th>
                <td>01/12/2025</td>
                <td>
                  {" "}
                  <img
                    src="/female.png"
                    alt="Frontend/public/female.png"
                    style={{ width: 30, height: 30, borderRadius: 50 }}
                  />
                  Jasmine Curie
                </td>
                <td>32</td>
                <td>Dr.John</td>
                <td style={{ color: "green" }}>Paid</td>
                <td>Request Fee</td>
              </tr>
              <tr>
                <th className="fw-light" scope="row">
                  9.30 Am
                </th>
                <td>01/12/2025</td>
                <td>
                  {" "}
                  <img
                    src="/female.png"
                    alt="Frontend/public/female.png"
                    style={{ width: 30, height: 30, borderRadius: 50 }}
                  />
                  Jasmine Curie
                </td>
                <td>32</td>
                <td>Dr.John</td>
                <td style={{ color: "red" }}>unpaid</td>
                <td>Request Fee</td>
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

export default Appointment;
