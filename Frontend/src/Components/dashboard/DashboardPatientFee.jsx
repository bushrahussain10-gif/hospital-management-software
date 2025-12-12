import React from "react";
import { BsArrowsAngleExpand } from "react-icons/bs";

const DashboardPatientFee = () => {
  return (
    <div
      className="p-4 shadow-lg  h-50 bg-white rounded"
      style={{ width: "29.8%" }}
    >
      <div className="d-flex justify-content-between">
        <div>
          <h6>Patients Fee</h6>
        </div>
        <div>
          {" "}
          <BsArrowsAngleExpand  style={{color: "blue"}}/>
        </div>
      </div>
      <div
        className="mt-2"
        style={{ height: "30vh", overflowX: "hidden", overflowY: "auto" }}
      >
        <ul className="ps-0" style={{ listStyle: "none" }}>
          <li
            className="w-100 d-flex justify-content-between py-2 align-items-center"
            style={{ borderBottom: "1px solid grey" }}
          >
            {/* {Image of Education Content} */}
            <div className="d-flex align-items-center">
              <div>
                <img
                  src="/female.png"
                  alt="Frontend/public/female.png"
                  style={{ width: 50, height: 50, borderRadius: 50 }}
                />
              </div>

              {/* {Title & Subtitle of Education Content} */}
              <div className={"ms-2"}>
                <div className="educationContentTitle">Noah Keith</div>
                <div className="educationContentSubTitle-patient">
                  Doctor Fee Pending
                </div>
              </div>
            </div>
            <button className="btn btn-primary">Request Fee</button>
          </li>

          <li
            className="w-100 d-flex justify-content-between py-2 align-items-center"
            style={{ borderBottom: "1px solid grey" }}
          >
            {/* {Image of Education Content} */}
            <div className="d-flex align-items-center">
              <div>
                <img
                  src="/Male.png"
                  alt="Frontend/public/Male.png"
                  style={{ width: 50, height: 50, borderRadius: 50 }}
                />
              </div>

              {/* {Title & Subtitle of Education Content} */}
              <div className={"ms-2"}>
                <div className="educationContentTitle">William Watson</div>
                <div className="educationContentSubTitle-patient">
                  Doctor Fee Pending
                </div>
              </div>
            </div>
            <button className="btn btn-primary">Request Fee</button>
          </li>

          <li
            className="w-100 d-flex justify-content-between py-2 align-items-center"
            style={{ borderBottom: "1px solid grey" }}
          >
            {/* {Image of Education Content} */}
            <div className="d-flex align-items-center">
              <div>
                <img
                  src="/female.png"
                  alt="Frontend/public/female.png"
                  style={{ width: 50, height: 50, borderRadius: 50 }}
                />
              </div>

              {/* {Title & Subtitle of Education Content} */}
              <div className={"ms-2"}>
                <div className="educationContentTitle">Alden Hawkins</div>
                <div className="educationContentSubTitle-patient">
                  Doctor Fee Pending
                </div>
              </div>
            </div>
            <button className="btn btn-primary">Request Fee</button>
          </li>

           <li
            className="w-100 d-flex justify-content-between py-2 align-items-center"
            style={{ borderBottom: "1px solid grey" }}
          >
            {/* {Image of Education Content} */}
            <div className="d-flex align-items-center">
              <div>
                <img
                  src="/female.png"
                  alt="Frontend/public/female.png"
                  style={{ width: 50, height: 50, borderRadius: 50 }}
                />
              </div>

              {/* {Title & Subtitle of Education Content} */}
              <div className={"ms-2"}>
                <div className="educationContentTitle">Emma Taylor</div>
                <div className="educationContentSubTitle-patient">
                  Doctor Fee Pending
                </div>
              </div>
            </div>
            <button className="btn btn-primary">Request Fee</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DashboardPatientFee;
