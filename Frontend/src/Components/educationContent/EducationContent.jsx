import React from "react";
import { FiPlus } from "react-icons/fi";
import { CiSearch } from "react-icons/ci";


const EducationContent = () => {
  return (
      <div className="EducationPage shadow-lg p-1" style={{height: "auto"}}>
        <div
          className="d-flex justify-content-between"
          style={{ borderBottom: "1px solid #3497f9 " }}
        >
          <h4 className="mt-2 p-3">Education Content</h4>
          <div>
            <button className="btn btn-primary mt-3 me-2">
              {" "}
              <FiPlus /> Add Content
            </button>
          </div>
        </div>
        <div className="d-flex align-items-center mt-4 ps-4 ">
          <div className="input-group date-filter-input search-bar me-5">
            {" "}
            <CiSearch size={25} className="pt-1 mb-0 mt-1" />
            <input type="text" className="form-control" placeholder="Search Content.." />
          </div>
          <div></div>
        </div>
        <div>
          <div
            className=" bg-white rounded ps-3 me-3 mt-2">
            <div className="mt-2">
              <ul className="ps-0" style={{ listStyle: "none" }}>
                <li
                  className=" d-flex justify-content-between py-2 align-items-center"
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
                      <div className="educationContentTitle">
                        4 Nutritions to Take Daily
                      </div>
                      <div className="educationContentSubTitle">
                        By Franklin Sierra
                      </div>
                    </div>
                  </div>
                  <button className="btn btn-primary ">View</button>
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
                      <div className="educationContentTitle ">
                        6 Healthy Lifestyle Tips
                      </div>
                      <div className="educationContentSubTitle">
                        By Franklin Sierra
                      </div>
                    </div>
                  </div>
                  <button className="btn btn-primary">View</button>
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
                      <div className="educationContentTitle">
                        Do's and Don't
                      </div>
                      <div className="educationContentSubTitle">
                        By Jasper Blackwell{" "}
                      </div>
                    </div>
                  </div>
                  <button className="btn btn-primary">View</button>
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
                      <div className="educationContentTitle">
                        Healthy Habits to Follow
                      </div>
                      <div className="educationContentSubTitle">
                        By Jasper Blackwell
                      </div>
                    </div>
                  </div>
                  <button className="btn btn-primary">View</button>
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
                      <div className="educationContentTitle ">
                        6 Healthy Lifestyle Tips
                      </div>
                      <div className="educationContentSubTitle">
                        By Franklin Sierra
                      </div>
                    </div>
                  </div>
                  <button className="btn btn-primary">View</button>
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
                      <div className="educationContentTitle ">
                        6 Healthy Lifestyle Tips
                      </div>
                      <div className="educationContentSubTitle">
                        By Franklin Sierra
                      </div>
                    </div>
                  </div>
                  <button className="btn btn-primary">View</button>
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
                      <div className="educationContentTitle ">
                        6 Healthy Lifestyle Tips
                      </div>
                      <div className="educationContentSubTitle">
                        By Franklin Sierra
                      </div>
                    </div>
                  </div>
                  <button className="btn btn-primary">View</button>
                </li>
              </ul>
            </div>
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

export default EducationContent;
