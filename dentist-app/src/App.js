import "./App.css";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import {
  Appointment,
  Dashboard,
  Home,
  Login,
  OTP,
  PageNotFound,
  Signup,
} from "./Pages";
import { Header } from "./Components";

function App() {
  return (
    <div className="h-screen">
      <Header />
      <ToastContainer />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/supersecretpageonlyadmin6969" element={<Login />} />
        <Route path="/dupersecretpageonlyadmin69" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/verification" element={<OTP />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
