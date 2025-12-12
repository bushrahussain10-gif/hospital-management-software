import React from "react";
import { CgProfile } from "react-icons/cg";
import { BsArrowsAngleExpand } from "react-icons/bs";
import { RiAccountCircleFill } from "react-icons/ri";

const DashboardAppointments = () => {
  return (
    <div
      className="dashboardAppointmentParentContainer shadow-lg rounded p-3 ms-2 bg-white "
      style={{ width: "67.6%" }}
    >
    <div className="d-flex justify-content-between">
      <div>
        <h6> NEW APPOINTMENTS</h6>
      </div>
        <div>
                {" "}
                <BsArrowsAngleExpand  style={{color: "blue"}}/>
              </div>
      </div>
      <div>
        <div style={{ height: "30vh", overflowX: "hidden", overflowY: "auto" }}>
          <table class="table table-hover mt-0">
            <thead
              style={{ position: "sticky", top: "0", background: "white" }}
            >
              <tr>
                <th scope="col">Time</th>
                <th scope="col">Date</th>
                <th scope="col">Patient Name</th>
                <th scope="col">Doctor</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>9 AM - 10 AM</td>
                <td>27/11/2025</td>
                <td>
                
                  
                <img
                  src="/female.png"
                  alt="Frontend/public/female.png"
                  style={{ width: 30, height: 30, borderRadius: 50 }}
                />
            
                  Jasmine{" "}
                </td>
                <td>Dr.John</td>
              </tr>
              <tr>
                <td>9 AM - 10 AM</td>
                <td>27/11/2025</td>
                <td>
                <RiAccountCircleFill  size={25} className="me-1"/>
                    {/* <img
                  src="/female2.png"
                  alt="Frontend/public/female.png"
                  style={{ width: 30, height: 30, borderRadius: 50 }}
                /> */}
                  Anya Rollins
                </td>
                <td>Dr.Henry</td>
              </tr>
              <tr>
                <td>9 AM - 10 AM</td>
                <td>27/11/2025</td>
                <td>
                    <img
                  src="/Male.png"
                  alt="Frontend/public/female.png"
                  style={{ width: 30, height: 30, borderRadius: 50 }}
                />
                  Gabriel Agreste
                </td>
                <td>Dr.Sophia</td>
              </tr>
              <tr>
                <td>9 AM - 10 AM</td>
                <td>27/11/2025</td>
                <td>
                    <img
                  src="/female.png"
                  alt="Frontend/public/female.png"
                  style={{ width: 30, height: 30, borderRadius: 50 }}
                />
                  Noah keith
                </td>
                <td>Dr.Chloe</td>
              </tr>
              <tr>
                <td>9 AM - 10 AM</td>
                <td>27/11/2025</td>
                <td>
                    <img
                  src="/Male.png"
                  alt="Frontend/public/female.png"
                  style={{ width: 30, height: 30, borderRadius: 50 }}
                />
                  Liam Harvey
                </td>
                <td>Dr.Amelia</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DashboardAppointments;
