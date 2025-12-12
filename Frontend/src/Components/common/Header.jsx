import React from "react";
import { IoIosNotifications } from "react-icons/io";
import { VscAccount } from "react-icons/vsc";

const Header = () => {
  return (
    <div className="d-flex justify-content-between align-items-center px-4 py-2 bg-color ">
      {/* Container 1 */}
      <div className="fs-4">Dashboard</div>

      {/* Container 2 */}
      <div className="d-flex align-items-center ">
        <div className="me-3">
          <IoIosNotifications size={30} />
        </div>
        <div className="d-flex align-items-center">
          <VscAccount size={30} />
          <div className="ms-2">
          <div>Bushra Hussain</div>
          <div className="text-muted">Admin</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
