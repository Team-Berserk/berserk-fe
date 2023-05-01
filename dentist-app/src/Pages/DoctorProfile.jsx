import { useEffect, useState } from "react";
import Pro from "../Assets/Duure.svg";
import thumbnal from "../Assets/thumbnail.svg";
import { Link, useParams } from "react-router-dom";
import { instance } from "../Clients";

export const DoctorProfile = () => {
  const { id } = useParams();
  const [dentist, setDentist] = useState([]);

  useEffect(() => {
    instance
      .get(`/doctor/${id}`)
      .then((res) => {
        console.log(res.data);
        setDentist(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="flex flex-col">
      <div className="h-screen flex flex-col-reverse md:flex-row justify-evenly items-center md:justify-around">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <div className="text-5xl font-serif">{dentist && dentist.Name}</div>
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
      <div className="h-fit flex flex-col gap-32   justify-center">
        <div className="justify-evenly items-center flex flex-col md:flex-row gap-3 md:gap-0">
          <div className="font-light text-4xl">ABOUT</div>
          <div className="text-sm font-light md:text-md w-80 md:w-1/2">
            {dentist && dentist.About}
          </div>
        </div>
        <div className="justify-evenly items-center flex flex-col md:flex-row gap-3 md:gap-0">
          <div className="font-light text-4xl">SKILLS</div>
          <div className="font-light text-lg flex flex-col w-80 md:w-1/2">
            <div className="flex gap-2 justify-center md:justify-normal">
              <div className="flex">
                <div>{dentist && dentist.Skills}</div>
              </div>
            </div>
          </div>
        </div>
        <div className="justify-evenly items-center font-light flex flex-col md:flex-row gap-3 md:gap-0 py-5">
          <div className="text-4xl">WORKS</div>
          <div className="text-sm flex flex-col md:flex-row gap-10 items-center w-96 md:w-1/2">
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
  );
};
