import Doctor from "../Assets/Doctor.svg";
import { Link } from "react-router-dom";

export const DoctorProfileCard = ({ Name, Skills ,Img}) => {
  return (
    <div className="DoctorCard">
      <div className="w-32 text-center flex flex-col items-center gap-3">
       <div className="w-fit h-fit rounded-full overflow-hidden"> <img alt="profile" src={Img} draggable={false} /></div>
        <div className="w-72 flex flex-col">
          <div>{Name}</div>
          <div className="text-sm font-medium text-gray-500">{Skills}</div>
        </div>
        <Link to="/appointmentDate">
          <button className="border-2 border-[#70BBFB] rounded-lg p-2 px-3 w-32 h-12 font-medium text-center mt-6">
            Цаг авах
          </button>
        </Link>
      </div>
    </div>
  );
};
