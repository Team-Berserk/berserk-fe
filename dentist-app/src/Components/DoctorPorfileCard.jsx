import Doctor from "../Assets/Doctor.svg";
import { Link } from "react-router-dom";

export const DoctorProfileCard = ({ Name }) => {
  return (
    <div className="DoctorCard">
      <div className="w-32 text-center flex flex-col items-center gap-2">
        <img alt="profile" src={Doctor} draggable={false} />
        <div className="w-72">
          <div>{Name}</div>
          <div className="text-sm font-medium text-gray-500">
            Orthodontic Treatment
          </div>
          <div className="text-sm font-medium text-gray-500">
            Harvard Medical School
          </div>
        </div>
      </div>
      <Link to="/appointment">
        <button className="border border-[#516EFF] rounded-lg p-2 px-3 w-32 h-12 font-medium text-center">
          Цаг авах
        </button>
      </Link>
    </div>
  );
};