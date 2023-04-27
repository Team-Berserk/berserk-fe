import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import loginImg from "../Assets/Login.svg";
import { instance } from "../Clients";
import { AuthContext } from "../Providers";

export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { verifyToken, Navigator } = useContext(AuthContext);

  const onSubmit = () => {
    instance
      .post("/login", {
        username,
        password,
      })
      .then((response) => {
        window.localStorage.setItem("token", response.data);
        verifyToken();
        Navigator("/");
      });
  };

  return (
    <div className="flex flex-col p-28 justify-center items-center h-screen bg-teal-50">
      <div className="rounded-2xl flex p-10 justify-center items-center gap-20 shadow-2xl bg-sky-50 w-80 md:w-fit">
        <div className="hidden md:block w-96">
          <img src={loginImg} alt="loginImg" className="rounded-2xl" />
        </div>
        <div className="rounded-2xl">
          <div className="w-72 md:w-80">
            <h1 className="text-3xl md:text-5xl text-center font-serif">
              Soddent Dental Clinic
            </h1>
          </div>
          <h1 className="text-center text-lg">Нэвтрэх</h1>
          <div className="flex flex-col h-fit w-72 md:w-80">
            <h5 className="text-base md:text-lg">Хэрэглэгчийн нэр</h5>
            <input
              placeholder="Хэрэглэгчийн нэр"
              onChange={(e) => setUsername(e.target.value)}
              className="border-2 rounded-2xl p-2.5 outline-none focus:ring"
            />
            <h5 className="text-base md:text-lg">Нууц үг</h5>
            <input
              placeholder="Нууц үг"
              onChange={(e) => setPassword(e.target.value)}
              className="border-2 rounded-2xl p-2.5 outline-none focus:ring"
            />
            <button
              onClick={() => onSubmit()}
              className="bg-sky-300 rounded-2xl hover:bg-sky-400 active:bg-sky-500 my-6 p-2.5"
            >
              Нэвтрэх
            </button>
          </div>
          <Link to="/signup" className="no-underline">
            <div className="text-center">Шинэ бүртгэл нээх</div>
          </Link>
        </div>
      </div>
    </div>
  );
};
