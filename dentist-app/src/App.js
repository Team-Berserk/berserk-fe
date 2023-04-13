import "./App.css";
import { Route, Routes } from "react-router-dom";
import {
  Appointment,
  ClinicInfo,
  DoctorProfile,
  Home,
  Login,
  Profile,
  Signup,
} from "./Pages";
import { Dashboard } from "./Pages/AdminDashboard";
import { OTP } from "./Pages/OTP";

function App() {
  return (
    <div className="h-screen">
      <Routes>
        <Route index element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/appointment" element={<Appointment />} />
        {/* <Route path="/verification" element={<OTP />} /> */}
        <Route path="/profile/">
          <Route path=":id" element={<Profile />} />
        </Route>
        <Route path="/doctor/">
          <Route path=":id" element={<DoctorProfile />} />
        </Route>
        <Route path="/clinicInfo" element={<ClinicInfo />} />
      </Routes>
    </div>
  );
}

export default App;
