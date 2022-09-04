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

function App() {
  return (
    <div>
      <div className="sticky top-0 z-50">
        <Navbar />
      </div>

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/booking/:id" element={<Booking />}></Route>
        <Route path="/myOrders" element={<MyOrders />}></Route>
        <Route path="/showAllCarProducts" element={<AllCarProducts />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
      </Routes>

      <ToastContainer />
    </div>
  );
}

export default App;
