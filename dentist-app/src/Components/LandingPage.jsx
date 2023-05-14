import { Link } from "react-router-dom";
import Landing from "../Assets/landingAssets/LandingImg.svg";
import LandingScreen from "../Assets/landingAssets/LandingScreen.svg";

export const LandingPage = () => {
  return (
    <div
      className="flex flex-col-reverse lg:flex-row h-fit lg:h-screen px-6 xl:px-40 items-center py-20 xl:py-10"
      id="home"
    >
      <div className="flex flex-col gap-5 mt-12 font-medium w-screen md:w-[500px] lg:w-[800px] items-center lg:items-start">
        <div className="text-4xl lg:text-6xl font-extrabold p-1 text-center lg:text-start">
          Хэнтий аймгийн хамгийн <span className="text-[#49A7F6]">гал</span>{" "}
          эмнэлэг
        </div>
        <div className="p-1 text-[#696969] font-semibold text-md lg:text-lg text-center lg:text-start">
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
          className="pt-8 hidden lg:block"
          draggable={false}
        />
        <img
          src={LandingScreen}
          draggable={false}
          alt="LandingImg"
          className="w-72 block lg:hidden"
        />
      </div>
    </div>
  );
};
