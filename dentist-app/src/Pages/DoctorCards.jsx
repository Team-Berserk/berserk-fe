import { useContext } from "react";
import { Cards } from "../Components/Cards";
import { DataContext } from "../Providers";

export const DoctorCards = () => {
  const { Doctors } = useContext(DataContext);

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="h-[700px] flex flex-col md:grid grid-cols-3">
        {Doctors.map((item, index) => {
          return <Cards {...item} index={index} key={index} />;
        })}
      </div>
    </div>
  );
};
