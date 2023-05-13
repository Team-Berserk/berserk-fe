import { Link } from "react-router-dom";
import Landing from "../Assets/LandingImg.svg";
import LandingScreen from "../Assets/LandingScreen.svg";

export const LandingPage = () => {
  return (
    <div
      className="flex flex-col-reverse xl:flex-row h-fit md:h-screen justify-evenly xl:justify-between px-6 xl:px-40 items-center py-20 xl:py-10"
      id="home"
    >
      <div className="flex flex-col gap-5 mt-12 font-medium w-screen md:w-[500px] xl:w-[800px] items-center xl:items-start">
        <div className="text-4xl xl:text-6xl font-extrabold p-1 text-center xl:text-start">
          Хэнтий аймгийн хамгийн <span className="text-blue-500">гал</span>{" "}
          эмнэлэг
        </div>
        <div className="p-1 text-[#696969] font-semibold text-md xl:text-lg text-center xl:text-start">
          Бид та болон таны гэр бүлийнхний амны хөндийн эрүүл ахуйн төлөө үргэлж
          хамгийн сайнаараа ажиллах болно .
        </div>
        <Link to="/appointmentDate" className="w-fit">
          <button className="PurpleButton">Цаг авах</button>
        </Link>
      </div>
      <div className="flex justify-center">
        <img
          src={Landing}
          alt="LandingImg"
          className="pt-8 hidden xl:block"
          draggable={false}
        />
        <img
          src={LandingScreen}
          draggable={false}
          alt="LandingImg"
          className="w-72 block xl:hidden"
        />
      </div>
    </div>
  );
};
