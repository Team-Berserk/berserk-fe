import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./Pages/Home";
import { Login } from "./Pages/Login";
import { Profile } from "./Pages/Profile";
import { Signup } from "./Pages/Signup";
import { DoctorProfile } from "./Pages/DoctorProfile";
import { ClinicInfo } from "./Pages/ClinicInfo";
import { Request } from "./Pages/Request";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/profile/">
            <Route path=":id" element={<Profile />} />
          </Route>
          <Route path="/doctor/">
            <Route path=":id" element={<DoctorProfile />} />
          </Route>
          <Route path="/clinicInfo" element={<ClinicInfo />} />
          <Route path="/request">
            <Route path=":id" element={<Request />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
