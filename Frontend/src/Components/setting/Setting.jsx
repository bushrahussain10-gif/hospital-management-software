import React from "react";
import { HiOutlineCalendarDateRange } from "react-icons/hi2";
import { BsArrowsAngleContract } from "react-icons/bs";
import { FiPlus } from "react-icons/fi";
import { CiSearch } from "react-icons/ci";

const Setting = () => {
  return (
    <div classname="SettingPage">
      <div className="ms-3 p-3 "><h4>Settings</h4></div>
      <div className="ms-5">
        <div className="card me-5 ">
          <div className="card-body">
            <h5 className="card-title">Profile Settings</h5>
            <p className="card-text">
             Manage your personal details like name, contact, and address.
            </p>
            <a href="#" className="btn btn-primary">
              Edit Profile
            </a>
          </div>
        </div>
        <br></br>
      
      <div>
        <div className="card me-5">
          <div className="card-body">
            <h5 className="card-title">Account Settings</h5>
            <p className="card-text">
             Secure your account by updating passwords and login options.
            </p>
            <a href="#" className="btn btn-primary">
              Manage Account
            </a>
          </div>
        </div>
      </div>
      <br></br>

      <div>
        <div className="card  me-5">
          <div className="card-body">
            <h5 className="card-title">Privacy &amp; Security</h5>
            <p className="card-text">
              Control your data, permissions, and app security features.
            </p>
            <a href="#" className="btn btn-primary">
              Privacy Setting
            </a>
          </div>
        </div>
      </div>
      <br></br>

      <div>
        <div className="card me-5">
          <div className="card-body">
            <h5 className="card-title">Notification Settings</h5>
            <p className="card-text">
             Choose which reminders and updates you want to receive.
            </p>
            <a href="#" className="btn btn-primary">
              Manage Alerts
            </a>
          </div>
        </div>
      </div>
      <br></br>

      <div>
        <div className="card me-5">
          <div className="card-body">
            <h5 className="card-title">Appointment Settings</h5>
            <p className="card-text">
             Customize how you view, manage, and track your appointments.
            </p>
            <a href="#" className="btn btn-primary">
              Appointment Setting
            </a>
          </div>
        </div>
      </div>
      <br></br>

      <div>
        <div className="card  me-5">
          <div className="card-body">
            <h5 className="card-title">Language &amp; Appearance</h5>
            <p className="card-text">
             Change the app language and switch between light or dark mode.
            </p>
            <a href="#" className="btn btn-primary">
              Display Setting
            </a>
          </div>
        </div>
      </div>
      <br></br>

      <div>
        <div className="card  me-5">
          <div className="card-body">
            <h5 className="card-title">Help &amp; Support</h5>
            <p className="card-text">
            Get answers, contact support, or report a problem anytime.
            </p>
            <a href="#" className="btn btn-primary">
              Get Help
            </a>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Setting;

{
  /* <div className=" shadow-lg m-4 p-3">
    <h5>Settings</h5>
  </div>; */
}
