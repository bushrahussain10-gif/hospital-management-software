import React from 'react'
import { BsArrowsAngleExpand } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import { BsThreeDotsVertical } from "react-icons/bs";
import { IoSend } from "react-icons/io5";
import { GrAttachment } from "react-icons/gr";

const Message = () => {
  return (
      <div className="d-flex p-2">
            <div
              className="p-3 ms-3 shadow-lg  h-80 bg-white rounded"
              style={{ width: "35%" }}
            >
              <div>
                <div className="pb-3">
                  {" "}
                  {/* <CiSearch size={25} className="pt-1 mb-0 mt-1" /> */}
                  <input
                    type="text"
                    className="form-control"
                    placeholder="🔍Search"
                  />
                </div>
                <hr></hr>
                <div>
                  <ul className="ps-0" style={{ listStyle: "none" }}>
                    <li
                      className=" d-flex justify-content-between py-2 align-items-center"
                      style={{ borderBottom: "1px solid grey" }}
                    >
                      {/* {Image of Education Content} */}
                      <div className="d-flex">
                        <div className="me-2">
                          <img
                            src="/female.png"
                            alt="Frontend/public/female.png"
                            style={{ width: 60, height: 60, borderRadius: 50 }}
                          />
                        </div>
    
                        {/* {Title & Subtitle of Message Content} */}
                        <div>
                          <div className="d-flex justify-content-between">
                            <div className="me-5">Elizabeth Polson</div>
                            <div className="ms-5 ">9.00am</div>
                          </div>
                          <div
                            className="MessagePageSubTitle"
                            style={{ width: 250 }}
                          >
                            Thank you for Scheduling my Appointment{" "}
                          </div>
                        </div>
                      </div>
                    </li>
    
                    <li
                      className=" d-flex justify-content-between py-2 align-items-center"
                      style={{ borderBottom: "1px solid grey" }}
                    >
                      {/* {Image of Education Content} */}
                      <div className="d-flex">
                        <div className="me-2">
                          <img
                            src="/Male.png"
                            alt="Frontend/public/female.png"
                            style={{ width: 60, height: 60, borderRadius: 50 }}
                          />
                        </div>
    
                        {/* {Title & Subtitle of Message Content} */}
                        <div>
                          <div className="d-flex justify-content-between">
                            <div className="me-5">Dr John Paullistan</div>
                            <div className="ms-5 ">9.00am</div>
                          </div>
                          <div className="MessagePageSubTitle">Sent Attachment</div>
                        </div>
                      </div>
                    </li>
    
                    <li
                      className=" d-flex justify-content-between py-2 align-items-center"
                      style={{ borderBottom: "1px solid grey" }}
                    >
                      {/* {Image of Education Content} */}
                      <div className="d-flex">
                        <div className="me-2">
                          <img
                            src="/female.png"
                            alt="Frontend/public/female.png"
                            style={{ width: 60, height: 60, borderRadius: 50 }}
                          />
                        </div>
    
                        {/* {Title & Subtitle of Message Content} */}
                        <div>
                          <div className="d-flex justify-content-between">
                            <div className="me-5">Dr Sophia </div>
                            <div className="ms-5 ">9.00am</div>
                          </div>
                          <div className="MessagePageSubTitle">Sent Attachment</div>
                        </div>
                      </div>
                    </li>
    
                    <li
                      className=" d-flex justify-content-between py-2 align-items-center"
                      style={{ borderBottom: "1px solid grey" }}
                    >
                      {/* {Image of Education Content} */}
                      <div className="d-flex">
                        <div className="me-2">
                          <img
                            src="/female.png"
                            alt="Frontend/public/female.png"
                            style={{ width: 60, height: 60, borderRadius: 50 }}
                          />
                        </div>
    
                        {/* {Title & Subtitle of Message Content} */}
                        <div>
                          <div className="d-flex justify-content-between">
                            <div className="me-5">Anya Rollins</div>
                            <div className="ms-5 ">9.00am</div>
                          </div>
                          <div className="MessagePageSubTitle">Sent Attachment</div>
                        </div>
                      </div>
                    </li>
    
                    <li
                      className=" d-flex justify-content-between py-2 align-items-center"
                      style={{ borderBottom: "1px solid grey" }}
                    >
                      {/* {Image of Education Content} */}
                      <div className="d-flex">
                        <div className="me-2">
                          <img
                            src="/female.png"
                            alt="Frontend/public/female.png"
                            style={{ width: 60, height: 60, borderRadius: 50 }}
                          />
                        </div>
    
                        {/* {Title & Subtitle of Message Content} */}
                        <div>
                          <div className="d-flex justify-content-between">
                            <div className="me-5">Dr Amelia</div>
                            <div className="ms-5 ">9.00am</div>
                          </div>
                          <div className="MessagePageSubTitle">Sent Attachment</div>
                        </div>
                      </div>
                    </li>
    
                    <li
                      className=" d-flex justify-content-between py-2 align-items-center"
                      style={{ borderBottom: "1px solid grey" }}
                    >
                      {/* {Image of Education Content} */}
                      <div className="d-flex">
                        <div className="me-2">
                          <img
                            src="/female.png"
                            alt="Frontend/public/female.png"
                            style={{ width: 60, height: 60, borderRadius: 50 }}
                          />
                        </div>
    
                        {/* {Title & Subtitle of Message Content} */}
                        <div>
                          <div className="d-flex justify-content-between">
                            <div className="me-5">Noah Keith</div>
                            <div className="ms-5 ">9.00am</div>
                          </div>
                          <div className="MessagePageSubTitle">Sent Attachment</div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
    
            <div class="chat-window  ps-4 me-3 rounded">
              {/* <!-- HEADER --> */}
              <div class="chat-header rounded shadow-lg d-flex align-items-center text-white px-3 py-2 ps-3 ">
                <div className="me-2">
                  <img
                    src="/female.png"
                    alt="HealthyLifestyle"
                    style={{ width: 50, height: 50, borderRadius: 50 }}
                  />
                </div>
    
                <div>
                  <h6 class="m-0 fw-bold">Elizabeth Polson</h6>
                  <small>Online</small>
                </div>
                <div class="ms-auto fs-4">
                  <BsThreeDotsVertical />
                </div>
              </div>
    
              {/* <!-- CHAT BODY --> */}
              <div class="chat-body px-3 py-3">
                {/* <!-- Date separator --> */}
                <div class="text-center">
                  <span class="date-badge px-3 py-1 rounded">Today</span>
                </div>
    
                {/* <!-- Incoming Message --> */}
                <div class="message-in mt-3">
                  <div class="msg-box  p-3 rounded">
                    Hi I need to meet Dr. Joel Tomorrow Urgently, <br />
                    Please arrange appointment.
                  </div>
                  <small class="text-muted ms-1">11:20pm</small>
                </div>
    
                {/* <!-- Outgoing Message --> */}
                <div class="message-out mt-3 text-end">
                  <div class="msg-box text-white p-3 rounded d-inline-block outgoing">
                    Yeah, Sure
                  </div>
                  <div>
                    <small class="text-muted">11:25pm</small>
                  </div>
                </div>
              </div>
    
              {/* <!-- INPUT BOX --> */}
              <div class="chat-input d-flex align-items-center px-3 py-2 border-top">
                <input
                  type="text"
                  class="form-control border-0 shadow-none"
                  placeholder="Type a message"
                />
                <button class="btn btn-light ms-2">
                  <GrAttachment />
                </button>
                <button class="btn btn-primary ms-2">
                  <IoSend />
                </button>
              </div>
            </div>
          </div>
  )
}

export default Message;