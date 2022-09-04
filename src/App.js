import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/pages/Home/Home";
import Navbar from "./Components/Share/Navbar";
import Login from "./Components/pages/Login/Login";
import SignUp from "./Components/pages/Login/SignUp";
import Booking from "./Components/pages/Dashboard/Booking";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div>
      <div className="sticky top-0 z-50">
        <Navbar />
      </div>

      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/booking/:id" element={<Booking />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
      </Routes>
    </div>
  );
}

export default App;
