import React from "react";
import { IoPeople } from "react-icons/io5";
import { RiMedicineBottleFill } from "react-icons/ri";
import { VscBook } from "react-icons/vsc";
import { FaFileLines } from "react-icons/fa6";

const ActivityOverview = () => {
  return (
    <div
      className="activityOverviewParentContainer shadow-lg rounded p-4 bg-white h-100 "
      style={{ width: "30%" }}
    >
      {/* Title and Dropdown */}
      <div className="d-flex justify-content-between  align-items-center mb-2">
        <h6 className=" mb-0">Activity Overview</h6>  
        {/* fw-bold */}
        <div className="dropdown">
          <button
            type="button"
            className="btn dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Weekly
          </button>
          <ul className="dropdown-menu">
            <li>
              <a className="dropdown-item" href="#">
                Daily
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Monthly
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Yearly
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                All
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Activity containers */}
      {/* 1st & 2nd Container */}
      <div className="d-flex justify-content-between align-items-center  gap-2">
        {/*First container 1 */}
        <div className="d-flex justify-content-center align-items-center activityOverviewContainer1  rounded  w-50 p-3">
          <div>
            <div className="text-center">
              <FaFileLines size={25} />
            </div>
            <div className="text-center fw-bold">{100}</div>
            <div className="text-center">Appointments</div>
          </div>
        </div>

        {/* Second container 2 */}
        <div className=" activityOverviewContainer2 d-flex justify-content-center align-items-center rounded h-25 w-50 p-3">
          <div>
            <div className="text-center">
              <IoPeople size={25} />
            </div>
            <div className="text-center fw-bold">{50}</div>
            <div className="text-center">New Patients</div>
          </div>
        </div>
      </div>

      {/* 3rd & 4th Container */}
      <div className="d-flex justify-content-around align-items-center gap-2 mt-2">
        {/* Third container 3 */}
        <div className="  d-flex justify-content-center align-items-center activityOverviewContainer3  rounded w-50 p-3">
          <div>
            <div className="text-center">
              <RiMedicineBottleFill size={25} />
            </div>
            <div className="text-center fw-bold">{500}</div>
            <div className="text-center">Medicines sold</div>
          </div>
        </div>

        {/* Fourth container 4 */}
        <div className=" activityOverviewContainer4 d-flex justify-content-center align-items-center  rounded h-25 w-50 p-3">
          <div>
            <div className="text-center">
              <VscBook size={25} />
            </div>
            <div className="text-center fw-bold">{100}</div>
            <div className="text-center">Education Content</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivityOverview;
