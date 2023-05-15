import { useContext } from "react";
import { DataContext } from "../../Providers/DataContext";
import { Link } from "react-router-dom";

export const Hours = () => {
  const { availabletimes, setAppointment, appointment } =
    useContext(DataContext);

  return (
    <div className="h-screen flex flex-col justify-center items-center bg-appointmentImg bg-fixed bg-cover bg-center">
      <div className="p-6 text-4xl font-semibold">Ta цагаа сонгоно yy.</div>
      <div className="flex flex-wrap w-[330px] h-48 overflow-hidden justify-center gap-5 bg-white border border-gray-100">
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

      {/* Button Section */}
      <div className="flex gap-5 py-4">
        <Link to={"/appointmentDoctors"}>
          <button className="CancelButton">Буцах</button>
        </Link>

        <Link to="/appointmentInformation">
          <button
            className={!appointment.Hour ? "DisabledButton" : "PurpleButton"}
            disabled={!appointment.Hour}
            onClick={window.localStorage.setItem(
              "request",
              JSON.stringify(appointment)
            )}
          >
            Үргэлжлүүлэх
          </button>
        </Link>
      </div>
      {/* Button Section */}
    </div>
  );
};
