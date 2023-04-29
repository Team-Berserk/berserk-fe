import { useContext } from "react";
import { Cards } from "../Components/Cards";
import { DataContext } from "../Providers";

export const DoctorCards = () => {
  const { Doctors } = useContext(DataContext);

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="flex flex-col md:grid grid-cols-4 mt-40">
        {Doctors.map((item, index) => {
          return (
            <div className="m-4">
              <Cards {...item} index={index} key={index} />
            </div>
          );
        })}
      </div>
    </div>
  );
};
