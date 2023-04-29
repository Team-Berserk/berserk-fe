import { useEffect, useState } from "react";
import Pro from "../Assets/Duure.svg";
import thumbnal from "../Assets/thumbnail.svg";
import { Link, useParams } from "react-router-dom";
import { instance } from "../Clients";

export const DoctorProfile = () => {
  const { id } = useParams();
  const [dentist, setDentist] = useState(null);

  useEffect(() => {
    instance
      .get(`/doctor/${id}`)
      .then((res) => {
        // console.log(res.data);
        setDentist(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      {dentist ? (
        <div className="flex flex-col">
          <div className="h-screen flex flex-col-reverse md:flex-row justify-evenly items-center md:justify-evenly">
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <div className="text-5xl font-serif">
                  {dentist && dentist.Name}
                </div>
                <div className="text-gray-400 text-sm">
                  delhiin shildeg shudnii emch boloh hun baigaa shuu
                </div>
              </div>
              <div className="flex gap-6 font-light text-lg">
                <Link to="/appointment" className="no-underline text-black">
                  <div>Bolzoh</div>
                </Link>
                <Link to="/appointment" className="no-underline text-black">
                  <div>Tsag awah</div>
                </Link>
              </div>
            </div>
            <div>
              <img src={Pro} className="w-80 md:w-fit" alt="img" />
            </div>
          </div>
          <div className="h-fit flex flex-col gap-32 justify-between">
            <div className="justify-evenly items-center flex flex-col md:flex-row gap-3 md:gap-0">
              <div className="font-meduim text-5xl title">ABOUT</div>
              <div className="text-sm font-light md:text-md w-80 md:w-[765px]">
                {dentist && dentist.About}
              </div>
            </div>
            <div className="justify-evenly items-center flex flex-col md:flex-row gap-3 md:gap-0">
              <div className="font-medium text-5xl title">SKILLS</div>
              <div className="font-medium text-lg flex flex-col w-80 md:w-[780px]">
                <div className="flex gap-2 justify-center md:justify-normal">
                  <div className="flex">
                    <div>{dentist && dentist.Skills}</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="justify-evenly items-center font-light flex flex-col md:flex-row gap-3 md:gap-0 pb-10">
              <div className="font-medium text-5xl title">WORKS</div>
              <div className="text-sm flex flex-col md:flex-row gap-10 items-center w-80 md:w-[760px]">
                <img src={thumbnal} className="rounded w-24" alt="img" />
                <div className="flex flex-col gap-3 w-72 text-center items-center">
                  <div className="text-3xl">Soddent Dentail Clinic</div>
                  <div className="text-gray-400">
                    Хэнтий аймгийн хамгийн гал эмнэлэг
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex justify-center items-center h-screen">
          <div className="text-2xl font-extralight">Loading...</div>
        </div>
      )}
    </>
  );
};
