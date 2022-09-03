import React from "react";
import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { signOut } from "firebase/auth";

const Navbar = () => {
  const [user] = useAuthState(auth);
  const logout = () => {
    signOut(auth);
  };

  const menuItems = (
    <>
      <li className="font-bold">
        <Link to="/about">About</Link>
      </li>
      <li className="font-bold">
        <Link to="/blogs">Blogs</Link>
      </li>
      {user && (
        <li className="font-bold">
          <Link to="/myOrder">My Orders</Link>
        </li>
      )}
      <li className="font-bold">
        <Link to="/addAReview">Add A Review</Link>
      </li>
      <li className="font-bold">
        <Link to="/myProfile">My Profile</Link>
      </li>
      {user && (
        <li className="font-bold">
          <Link to="/dashboard">Dashboard</Link>
        </li>
      )}
      <li className=" font-bold">
        {user ? (
          <button className=" font-bold" onClick={logout}>
            Sign Out
          </button>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </li>
    </>
  );
  return (
    <div className="  navbar bg-blue-200">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex="0" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex="0"
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menuItems}
          </ul>
        </div>
        <Link
          to="/"
          className="btn btn-ghost normal-case font-bold lg:text-3xl  sm:text-sm text-amber-600"
        >
          BoxBerry Motor
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex lg:pr-36 ">
        <ul className="menu menu-horizontal p-0">{menuItems}</ul>
      </div>
      {/* <h1>image</h1> */}
    </div>
  );
};

export default Navbar;
