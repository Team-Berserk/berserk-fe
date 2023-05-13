import "./App.css";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Home, OTP, OrderStatus, PageNotFound } from "./Pages";
import { Header } from "./Components";
import {
  CalendarComp,
  Doctors,
  Hours,
  Information,
} from "./Pages/AppointmentPages";

function App() {
  return (
    <div className="h-screen">
      <ToastContainer />
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/appointmentDate" element={<CalendarComp />} />
        <Route path="/appointmentDoctors" element={<Doctors />} />
        <Route path="/appointmentHour" element={<Hours />} />
        <Route path="/appointmentInformation" element={<Information />} />
        <Route path="/verification" element={<OTP />} />
        <Route path="/orderstatus" element={<OrderStatus />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
