import { Link } from "react-router-dom";
import loginImg from "../Assets/SignUp.svg";

export const Signup = () => {
  return (
    <>
      <div className="flex flex-col p-28 justify-center items-center h-screen bg-sky-200">
        <div className="fixed top-10 p-10">
          <h1 className="text-3xl md:text-5xl">Soddent Dental Clinic</h1>
        </div>
        <div className="rounded-2xl flex p-10 justify-center items-center shadow-2xl gap-20 bg-sky-50 w-96 md:w-fit">
          <div className="hidden md:block w-96">
            <img src={loginImg} alt="signupImg" className="rounded-2xl" />
          </div>
          <div className="rounded-2xl">
            <h1 className="text-center text-lg">Sign Up</h1>
            <div className="flex flex-col h-fit w-80">
              <h5>Email</h5>
              <input
                placeholder="email"
                className="border-2 rounded-2xl p-2.5 outline-none focus:ring"
              />
              <h5>Usename</h5>
              <input
                placeholder="username"
                className="border-2 rounded-2xl p-2.5 outline-none focus:ring"
              />
              <h5>Password</h5>
              <input
                placeholder="password"
                className="border-2  rounded-2xl p-2.5 outline-none focus:ring"
              />
              <button className="border-2 border-sky-400 rounded-2xl active:bg-sky-600 focus:ring my-6 p-2.5">
                Sign Up
              </button>
            </div>
            <Link to="/login" className="no-underline">
              <div className="text-center">Already have an account?</div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
