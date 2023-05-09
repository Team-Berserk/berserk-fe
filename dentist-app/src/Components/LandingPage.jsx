import { Link } from "react-router-dom";
import Landing from "../Assets/LandingImg.svg";
import LandingScreen from "../Assets/LandingScreen.svg";


export const LandingPage = () => {
  return (
    <div className="flex flex-col-reverse xl:flex-row duration-500 h-full justify-evenly xl:justify-between px-6 xl:px-40 items-center py-32 xl:py-0">
      <div className="flex flex-col gap-5 mt-12 font-medium w-screen md:w-[500px] xl:w-[800px] items-center xl:items-start">
        <div className="text-4xl xl:text-6xl font-extrabold p-1 text-center xl:text-start">
          Хэнтий аймгийн хамгийн <span className="text-orange-400">гал</span>{" "}
          эмнэлэг
        </div>
        <div className="p-1 text-[#696969] font-semibold text-sm xl:text-md text-center xl:text-start">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500 specimen book.
        </div>
        <Link to="/appointment" className="w-fit mt-4">
          <button className="PurpleButton">Цаг авах</button>
        </Link>
      </div>
      <div className="flex justify-center">
        <img src={Landing} alt="LandingImg" className="pt-8 hidden xl:block" />
        <img
          src={LandingScreen}
          alt="LandingImg"
          className="pt-8 w-72 block xl:hidden"
        />
      </div>
    </div>
  );
};
