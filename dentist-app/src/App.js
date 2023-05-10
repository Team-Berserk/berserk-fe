import './App.css'
import { Route, Routes } from 'react-router-dom'
import {
  Appointment,
  Dashboard,
  Home,
  Login,
  OTP,
  Profile,
  Signup,
} from './Pages'

import { ToastContainer } from 'react-toastify'
import { Header } from './Components/Header'
import { Footer } from './Components/Footer'

function App() {
  return (
    <div className="h-screen">
      <ToastContainer />
      <Header />
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route index element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/verification" element={<OTP />} />
        <Route path="/profile/">
          <Route path=":id" element={<Profile />} />
        </Route>
      </Routes>
      {/* <Footer /> */}
    </div>
  )
}

export default App
