import { Link } from "react-router-dom";
import Landing from "../Assets/LandingImg.svg";
import LandingScreen from "../Assets/LandingScreen.svg";
import { StepsJSON } from "../Components/json/StepsJSON";
import { DoctorsCarousel } from "../Components/DoctorsCarousel";
import { Services } from "../Components";

export const Home = () => {
  return (
    <div className="snap-y snap-mandatory h-full overflow-y-scroll">
      <div className="flex flex-col-reverse xl:flex-row duration-500 h-full justify-evenly xl:justify-between px-6 xl:px-40 items-center py-32 xl:py-0">
        <div className="flex flex-col gap-5 mt-12 font-medium w-screen md:w-[500px] xl:w-[550px] items-center xl:items-start">
          <div className="text-4xl xl:text-5xl font-extrabold p-1 text-center xl:text-start">
            Хэнтий аймгийн хамгийн <span className="text-orange-400">гал</span>{" "}
            эмнэлэг
          </div>
          <div className="p-1 text-[#696969] font-semibold text-sm xl:text-md text-center xl:text-start">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500 specimen book.
          </div>
          <Link to="/appointment" className="w-fit mt-4">
            <button className="PurpleButton">Цаг авах</button>
          </Link>
        </div>
        <div className="flex justify-center">
          {/* sm:w-5/6 lg:w-2/3 xl:w-1/2 */}
          <img
            src={Landing}
            alt="LandingImg"
            className="pt-8 hidden xl:block"
          />
          <img
            src={LandingScreen}
            alt="LandingImg"
            className="pt-8 w-72 block xl:hidden"
          />
        </div>
      </div>
      <div className="flex h-fit 2xl:h-96 justify-center bg-[#516EFF]">
        <div className="flex flex-col 2xl:flex-row py-0 xl:py-20 w-full justify-evenly items-center gap-16 2xl:gap-0">
          <div className="text-white flex flex-col gap-5 px-10 xl:px-0 pt-20 xl:pt-0">
            <div className="font-semibold text-4xl xl:text-5xl">
              Манай үйлчилгээг хэрхэн авах вэ?
            </div>
            <div className="font-medium text-lg xl:text-xl">
              Эдгээр энгийн алхмуудыг дагаарай
            </div>
          </div>
          <div className="flex flex-wrap justify-center font-semibold text-lg pb-20 xl:pb-0 gap-10">
            {StepsJSON.map((item, index) => {
              return (
                <div className="ServiceCard" key={index}>
                  <div>{item.icon}</div>
                  <div>{item.name}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <Services />
      <DoctorsCarousel />
    </div>
  );
};
