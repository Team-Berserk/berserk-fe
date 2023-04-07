import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AuthProvider } from './Providers'
import {
  ClinicInfo,
  DoctorProfile,
  Home,
  Login,
  Profile,
  Signup,
  Request,
} from './Pages'

function App() {
  return (
    <div className="h-screen">
      <BrowserRouter>
        <AuthProvider>
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
        </AuthProvider>
      </BrowserRouter>
    </div>
  )
}

export default App
