import { useContext } from "react";
import { DataContext } from "../../Providers/DataContext";

export const Hours = () => {
  const { setAppointment, availabletimes } = useContext(DataContext);
  console.log(availabletimes);
  return (
    <div className="flex flex-wrap p-4 gap-2 justify-center">
      {availabletimes.map((item, index) => {
        return (
          <button
            key={index}
            onClick={() => {
              if (!item.possible) return;
              setAppointment((prev) => ({
                ...prev,
                Hour: item.hour,
              }));
            }}
          >
            <div
              className={
                item.possible
                  ? "border-2 border-teal-500 p-2 active:bg-teal-700"
                  : "bg-gray-400 border-2 border-teal-500 p-2"
              }
            >
              {item.hour}
            </div>
          </button>
        );
      })}
    </div>
  );
};
