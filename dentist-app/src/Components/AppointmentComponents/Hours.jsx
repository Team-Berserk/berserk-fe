import { useContext } from "react";
import { DataContext } from "../../Providers/DataContext";

export const Hours = () => {
  const { availabletimes, setAppointment, appointment } =
    useContext(DataContext);

  return (
    <div className="flex flex-wrap w-[330px] h-48 overflow-hidden justify-center gap-5">
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
            disabled={!item.possible}
          >
            <div
              className={
                item.possible
                  ? appointment.Hour !== item.hour
                    ? "HourButton"
                    : "ChoosenHour"
                  : "OccupiedHour"
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
