import { useContext } from "react";
import { DataContext } from "../../Providers/DataContext";

export const Doctors = () => {
  const { setAppointment, doctorsData } = useContext(DataContext);
  return (
    <div className="flex flex-col pt-3 gap-2">
      {doctorsData.map((item, index) => {
        return (
          <button
            key={index}
            onClick={() => {
              setAppointment((prev) => ({
                ...prev,
                Dentist: item.name,
              }));
            }}
          >
            <div
              className="flex p-2 justify-center border-2 border-rose-100 active:bg-rose-300 rounded-md"
              key={index}
            >
              <div> Dentists: {item.name}</div>
            </div>
          </button>
        );
      })}
    </div>
  );
};
