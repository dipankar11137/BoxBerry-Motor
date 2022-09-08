import React from "react";
import { Link, Outlet } from "react-router-dom";
import useAdmin from "../../hooks/UseAdmin";
import Footer from "../../Share/Footer";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";

const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);
  console.log(admin);
  return (
    <div className="bg-slate-900">
      <div>
        <div className="drawer drawer-mobile">
          <input
            id="dashboard-sidebar"
            type="checkbox"
            className="drawer-toggle"
          />
          <div className="drawer-content ">
            <h2 className="text-4xl bg-slate-900 text-lime-400 font-bold text-center mb-3 uppercase p-1">
              Welcome <span className="text-orange-600">to My</span> DashBoard
            </h2>
            <Outlet></Outlet>
          </div>
          <div className="drawer-side ml-1">
            <label for="dashboard-sidebar" className="drawer-overlay "></label>
            <ul className="menu  py-6 overflow-y-auto w-60 bg-blue-900 text-white">
              <li>
                <Link
                  to="/dashboard"
                  className="font-bold hover:text-orange-600"
                >
                  My Orders
                </Link>
              </li>
              <li>
                <Link
                  to="/dashboard/myProfile"
                  className="font-bold hover:text-orange-600"
                >
                  My Profile
                </Link>
              </li>
              {!admin && (
                <li>
                  <Link
                    to="/dashboard/review"
                    className="font-bold hover:text-orange-600"
                  >
                    My Review
                  </Link>
                </li>
              )}
              <li>
                <Link
                  to="/dashboard/history"
                  className="font-bold hover:text-orange-600"
                >
                  History
                </Link>
              </li>
              {admin && (
                <li>
                  <Link
                    to="/dashboard/manageAllOrders"
                    className="font-bold hover:text-orange-600"
                  >
                    Manage All Orders
                  </Link>
                </li>
              )}
              {admin && (
                <li>
                  <Link
                    to="/dashboard/manageAllProducts"
                    className="font-bold hover:text-orange-600"
                  >
                    Manage All Products
                  </Link>
                </li>
              )}
              {admin && (
                <li>
                  <Link
                    to="/dashboard/addNewProducts"
                    className="font-bold hover:text-orange-600"
                  >
                    Add New Car Product
                  </Link>
                </li>
              )}
              {admin && (
                <li>
                  <Link
                    to="/dashboard/manageAllUser"
                    className="font-bold hover:text-orange-600"
                  >
                    Manage All User
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;
