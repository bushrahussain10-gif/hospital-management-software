import React from "react";
import { BsArrowsAngleExpand } from "react-icons/bs";

const DashboardEducationContent = () => {
  return (
    <div
      className="p-4 shadow-lg  h-50 bg-white rounded"
      style={{ width: "29.8%" }}
    ><div className="d-flex justify-content-between">
      <div>
        <h6>Education Content</h6>
      </div>
      <div> <BsArrowsAngleExpand  style={{color: "blue"}} /></div>
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
                  src="/diet.jpeg"
                  alt="Frontend/public/diet.jpeg"
                  style={{ width: 50, height: 50, borderRadius: 50 }}
                />
              </div>

              {/* {Title & Subtitle of Education Content} */}
              <div className={"ms-2"}>
                <div className="educationContentTitle">4 Nutritions to Take Daily</div>
                <div className="educationContentSubTitle">By Franklin Sierra</div>
              </div>
            </div>
            <button className="btn btn-primary ">Assign</button>
          </li>

           <li
            className="w-100 d-flex justify-content-between py-2 align-items-center"
            style={{ borderBottom: "1px solid grey" }}
          >
            {/* {Image of Education Content} */}
            <div className="d-flex align-items-center">
              <div>
                <img
                  src="/do's & don't.webp"
                  alt="HealthyLifestyle"
                  style={{ width: 50, height: 50, borderRadius: 50 }}
                />
              </div>

              {/* {Title & Subtitle of Education Content} */}
              <div className={"ms-2"}>
                <div className="educationContentTitle ">6 Healthy Lifestyle Tips</div>
                <div className="educationContentSubTitle">By Franklin Sierra</div>
              </div>
            </div>
            <button className="btn btn-primary">Assign</button>
          </li>

           <li
            className="w-100 d-flex justify-content-between py-2 align-items-center"
            style={{ borderBottom: "1px solid grey" }}
          >
            {/* {Image of Education Content} */}
            <div className="d-flex align-items-center">
              <div>
                <img
                  src="/habits.jpg"
                  alt="habits.jpg"
                  style={{ width: 50, height: 50, borderRadius: 50 }}
                />
              </div>

              {/* {Title & Subtitle of Education Content} */}
              <div className={"ms-2"}>
                <div className="educationContentTitle">Do's and Don't</div>
                <div className="educationContentSubTitle">By Jasper Blackwell </div>
              </div>
            </div>
            <button className="btn btn-primary">Assign</button>
          </li>

           <li
            className="w-100 d-flex justify-content-between py-2 align-items-center"
            style={{ borderBottom: "1px solid grey" }}
          >
            {/* {Image of Education Content} */}
            <div className="d-flex align-items-center">
              <div>
                <img
                  src="/HealthyHabits.png"
                  alt="HealthyHabits"
                  style={{ width: 50, height: 50, borderRadius: 50 }}
                />
              </div>

              {/* {Title & Subtitle of Education Content} */}
              <div className={"ms-2"}>
                <div className="educationContentTitle">Healthy Habits to Follow</div>
                <div className="educationContentSubTitle">By Jasper Blackwell</div>
              </div>
            </div>
            <button className="btn btn-primary">Assign</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DashboardEducationContent;
