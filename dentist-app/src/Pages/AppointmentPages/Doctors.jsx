import { useContext } from "react";
import { DataContext } from "../../Providers/DataContext";
import { Link } from "react-router-dom";

export const Doctors = () => {
  const { Doctors, appointment, checkAvailableTimes, setAppointment } =
    useContext(DataContext);

  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <div className="flex gap-6 p-6 border mt-24">
        {Doctors &&
          Doctors.map((item, index) => {
            return (
              <div
                className="p-4 bg-gray-200 flex flex-col items-center gap-3 rounded-lg"
                key={index}
              >
                <div>{item.Name}</div>
                <button
                  className={
                    appointment.Doctor !== item._id
                      ? "HourButton font-semibold"
                      : "ChoosenHour"
                  }
                  onClick={() => {
                    setAppointment((prev) => ({
                      ...prev,
                      Doctor: item._id,
                    }));
                    checkAvailableTimes(appointment.Date, item._id);
                  }}
                >
                  Songoh
                </button>
              </div>
            );
          })}
      </div>

      {/* Button Section  */}

      <div className="flex gap-5 py-4">
        <Link to={"/appointmentDate"}>
          <button className="CancelButton">Cancel</button>
        </Link>
        <Link to="/appointmentHour">
          <button
            className={!appointment.Doctor ? "DisabledButton" : "PurpleButton"}
            disabled={!appointment.Doctor}
            onClick={window.localStorage.setItem(
              "request",
              JSON.stringify(appointment)
            )}
          >
            Next
          </button>
        </Link>
      </div>

      {/* Button Section */}
    </div>
  );
};
