import React from "react";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="bg-slate-900">
      <div>
        <div class="drawer drawer-mobile">
          <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
          <div class="drawer-content ">
            <h2 className="text-4xl bg-slate-900 text-lime-400 font-bold text-center mb-3 uppercase p-1">
              Welcome <span className="text-orange-600">to My</span> DashBoard
            </h2>
            <Outlet></Outlet>
          </div>
          <div class="drawer-side ml-1">
            <label for="dashboard-sidebar" class="drawer-overlay "></label>
            <ul class="menu  py-6 overflow-y-auto w-60 bg-blue-900 text-white">
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
              <li>
                <Link
                  to="/dashboard/review"
                  className="font-bold hover:text-orange-600"
                >
                  My Review
                </Link>
              </li>
              <li>
                <Link
                  to="/dashboard/history"
                  className="font-bold hover:text-orange-600"
                >
                  History
                </Link>
              </li>
              <li>
                <Link
                  to="/dashboard/manageAllOrders"
                  className="font-bold hover:text-orange-600"
                >
                  Manage All Orders
                </Link>
              </li>
              <li>
                <Link
                  to="/dashboard/manageAllProducts"
                  className="font-bold hover:text-orange-600"
                >
                  Manage All Products
                </Link>
              </li>
              <li>
                <Link
                  to="/dashboard/addNewProducts"
                  className="font-bold hover:text-orange-600"
                >
                  Add New Product
                </Link>
              </li>
              <li>
                <Link
                  to="/dashboard/manageAllUser"
                  className="font-bold hover:text-orange-600"
                >
                  Manage All User
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
