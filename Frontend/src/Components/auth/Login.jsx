import React from "react";
import {Link} from "react-router-dom";
// import { Link, NavLink } from "react-router-dom";


const Login = () => {
  return (
    <div className="login-component">
      <div className="login-form rounded p-4 "> 
        <h2 className="text-center">Login</h2>
        <h5 className="text-center ">Login to your account.</h5>
        <form>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              E-mail address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div className="d-flex justify-content-between align-items-center mb-3">
            <div className=" form-check ">
              <input
                type="checkbox"
                className="form-check-input"
                id="rememberMe"
              />
              <label className="form-check-label" htmlFor="rememberMe">
                Remember me
              </label>
            </div>
            <a href="#" className="reset-link">
              Reset Password ?
            </a>
          </div>
         <Link to={"/dashboard"}>
           <button type="submit" className="signin-btn">
            Sign In
          </button>
         </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
