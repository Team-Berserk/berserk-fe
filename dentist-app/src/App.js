import "./App.css";
import { Route, Routes } from "react-router-dom";
import {
  Appointment,
  ClinicInfo,
  Dashboard,
  DoctorCards,
  DoctorProfile,
  Home,
  Login,
  OTP,
  Profile,
  Signup,
} from "./Pages";

import { ToastContainer } from "react-toastify";
import { Header } from "./Components/Header";
import { Footer } from "./Components/Footer";

function App() {
  return (
    <div className="h-screen ">
      <Header />
      <ToastContainer />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/verification" element={<OTP />} />
        <Route path="/profile/">
          <Route path=":id" element={<Profile />} />
        </Route>
        <Route path="/doctors" element={<DoctorCards />} />
        <Route path="/doctor/">
          <Route path=":id" element={<DoctorProfile />} />
        </Route>
        <Route path="/clinicInfo" element={<ClinicInfo />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
