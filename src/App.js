import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/pages/Home/Home";
import Navbar from "./Components/Share/Navbar";
import Login from "./Components/pages/Login/Login";
import SignUp from "./Components/pages/Login/SignUp";
import Booking from "./Components/pages/Dashboard/Booking";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MyOrders from "./Components/pages/MyOrder/MyOrders";
import AllCarProducts from "./Components/pages/Home/AllCarProducts";
import RequireAuth from "./Components/pages/Login/RequireAuth";
import MyProfile from "./Components/pages/MyProfile/MyProfile";
import NotFound from "./Components/Share/NotFound";
import Dashboard from "./Components/pages/Dashboard/Dashboard";
import MyReview from "./Components/pages/Dashboard/MyReview";
import History from "./Components/pages/Dashboard/History";
import ManageAllOrders from "./Components/pages/Dashboard/ManageAllOrders";
import ManageAllProducts from "./Components/pages/Dashboard/ManageAllProducts";
import AddCarProducts from "./Components/pages/Dashboard/AddCarProducts";
import ManageAllUser from "./Components/pages/Dashboard/ManageAllUser";

function App() {
  return (
    <div>
      <div className="sticky top-0 z-50">
        <Navbar />
      </div>

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/booking/:id" element={<Booking />}></Route>
        <Route
          path="/myOrders"
          element={
            <RequireAuth>
              <MyOrders />
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/myProfile"
          element={
            <RequireAuth>
              <MyProfile />
            </RequireAuth>
          }
        ></Route>
        <Route path="/showAllCarProducts" element={<AllCarProducts />}></Route>
        {/* Dashboard */}
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        >
          <Route index element={<MyOrders />} />
          <Route path="myProfile" element={<MyProfile />} />
          <Route path="review" element={<MyReview />} />
          <Route path="history" element={<History />} />
          <Route path="manageAllOrders" element={<ManageAllOrders />} />
          <Route path="manageAllProducts" element={<ManageAllProducts />} />
          <Route path="addNewProducts" element={<AddCarProducts />} />
          <Route path="manageAllUser" element={<ManageAllUser />} />
        </Route>
        {/* Dashboard End */}
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>

      <ToastContainer />
    </div>
  );
}

export default App;
