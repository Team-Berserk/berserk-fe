import "./App.css";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Header } from "./Components/Header";
import { Appointment, Dashboard, Home, Login, OTP, Signup } from "./Pages";

function App() {
  return (
    <div className="h-screen">
      <Header />
      <ToastContainer />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/verification" element={<OTP />} />
      </Routes>
    </div>
  );
}

export default App;
