import { useContext } from "react";
import { DataContext } from "../../Providers/DataContext";

export const Doctors = () => {
  const { setAppointment, doctorsData } = useContext(DataContext);
  return (
    <div className="flex flex-col">
      {doctorsData.map((item, index) => {
        return (
          <div className="flex flex-col" key={index}>
            Dentists :
            <button
              onClick={() => {
                setAppointment((prev) => ({
                  ...prev,
                  Dentist: item.name,
                }));
              }}
            >
              {item.name}
            </button>
          </div>
        );
      })}
    </div>
  );
};
