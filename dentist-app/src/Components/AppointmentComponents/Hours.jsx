import { useContext } from "react";
import { DataContext } from "../../Providers/DataContext";

export const Hours = () => {
  const { availabletimes, setAppointment } = useContext(DataContext);

  return (
    <div className="flex flex-wrap w-[330px] h-14 overflow-hidden snap-y snap-mandatory overflow-y-scroll justify-center gap-5">
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
                  ? "border bg-[#516EFF] hover:bg-[#637DFF] rounded-md p-2 px-3 w-32 h-12 flex items-center justify-center text-white font-semibold snap-center"
                  : "DisabledButton snap-center"
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
