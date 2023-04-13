import { useContext } from "react";
import { DataContext } from "../../Providers/DataContext";

const hourData = [
  { hour: 10, possible: false },
  { hour: 11, possible: true },
  { hour: 12, possible: true },
  { hour: 13, possible: true },
  { hour: 14, possible: true },
  { hour: 15, possible: false },
  { hour: 16, possible: true },
  { hour: 17, possible: true },
  { hour: 18, possible: true },
  { hour: 19, possible: false },
  { hour: 20, possible: true },
];

export const Hours = () => {
  const { setAppointment } = useContext(DataContext);

  return (
    <div className="flex flex-col">
      {hourData.map((item, index) => {
        return (
          <button
            key={index}

            onClick={() => {
              item.possible = !item.possible;
              setAppointment((prev) => ({
                ...prev,
                Hour: item.hour + ":00",
              }));
            }}
          >
            <div className="border-2 border-teal-500 p-2 active:bg-teal-700">{item.hour + ":00"}</div>
          </button>
        );
      })}
    </div>
  );
};
