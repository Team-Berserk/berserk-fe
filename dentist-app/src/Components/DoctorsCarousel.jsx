import { useContext } from "react";
import { DataContext } from "../Providers/DataContext";
// import { Link } from "react-router-dom";

export const DoctorsCarousel = () => {
  const { Doctors } = useContext(DataContext);
  return (
    <div
      className="h-screen flex justify-center items-center bg-gray-100 xl:px-40 xl:py-28"
      id="doctors"
    >
      <div className="w-full">
        <div className="flex justify-between xl:border-[#BCBCBC] xl:border-b">
          <div className="flex flex-col gap-2 p-4 xl:p-0">
            <div className="font-semibold text-3xl xl:text-6xl">
              Meet Some of Our
            </div>
            <div className="font-bold text-4xl xl:text-7xl">Brains</div>
          </div>
          <div className="font-bold text-7xl hidden md:block">
            MEET OUR <span className="text-yellow-500">DOCTORS</span>
          </div>
        </div>

        <div className="hidden md:flex flex-wrap justify-center items-center gap-10 h-fit">
          {Doctors &&
            Doctors.map((item, index) => {
              return (
                <div
                  className="flex flex-col items-center DoctorCard text-lg font-semibold"
                  key={index}
                >
                  <div className="border w-32 text-center">
                    {/* <img alt="profile" /> */}
                    <div>img</div>
                    <div>{item.Name}</div>
                  </div>
                  <button className="PurpleButton">Цаг авах</button>
                </div>
              );
            })}
        </div>
        <div className="md:hidden flex flex-col justify-center"></div>
      </div>
    </div>
  );
};
