import { Link } from "react-router-dom";
import loginImg from "../Assets/Login.svg";

export const Login = () => {
  return (
    <>
      <div className="flex flex-col p-28 justify-center items-center h-screen bg-sky-200">
        <div className="w-80 md:w-fit fixed top-28">
          <h1 className="text-3xl md:text-5xl text-center font-serif">
            Soddent Dental Clinic
          </h1>
        </div>
        <div className="rounded-2xl flex p-10 justify-center items-center shadow-2xl gap-20 bg-sky-50 w-80 md:w-fit">
          <div className="hidden md:block w-96">
            <img src={loginImg} alt="loginImg" className="rounded-2xl" />
          </div>
          <div className="rounded-2xl ">
            <h1 className="text-center text-lg">Log In</h1>
            <div className="flex flex-col h-fit w-72 md:w-80">
              <h5 className="text-base md:text-lg">Usename</h5>
              <input
                placeholder="username"
                className="border-2 rounded-2xl p-2.5 outline-none focus:ring"
              />
              <h5 className="text-base md:text-lg">Password</h5>
              <input
                placeholder="password"
                className="border-2 rounded-2xl p-2.5 outline-none focus:ring"
              />
              <button className="border-2 border-sky-400 rounded-2xl hover:bg-sky-400 active:bg-sky-600 focus:ring my-6 p-2.5">
                Log In
              </button>
            </div>
            <Link to="/signup" className="no-underline">
              <div className="text-center">Dont have an account?</div>
            </Link>
          </div>
        </div>
        <div className="fixed bottom-5 ">
          <div className="text-xs">Developed by NewJeans</div>
        </div>
      </div>
    </>
  );
};
