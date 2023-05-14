import { useContext } from "react";
import { DataContext } from "../../Providers/DataContext";
import { Link } from "react-router-dom";
import Doctor from "../../Assets/Doctor.svg";

export const Doctors = () => {
  const { Doctors, appointment, checkAvailableTimes, setAppointment } =
    useContext(DataContext);

  return (
    <div className="h-screen flex flex-col justify-center items-center overflow-y-scroll">
      <div className="p-6 text-4xl font-semibold">Та эмчээ сонгоно уу.</div>
      <div className="flex overflow-x-scroll lg:overflow-auto justify-normal lg:justify-center w-screen gap-10  p-4 mt-24">
        {Doctors &&
          Doctors.map((item, index) => {
            return (
              <div className="border rounded-2xl p-4" key={index}>
                <div className="w-32 text-center flex flex-col items-center gap-5">
                  <img
                    alt="profile"
                    className="w-16"
                    src={Doctor}
                    draggable={false}
                  />
                  <div className="w-72 flex flex-col">
                    <div>{item.Name}</div>
                    <div className="text-sm font-medium text-gray-500">
                      {item.Skills}
                    </div>
                  </div>
                  <div>
                    <button
                      className={
                        appointment.Dentist !== item._id
                          ? "HourButton font-semibold"
                          : "ChoosenHour"
                      }
                      onClick={() => {
                        setAppointment((prev) => ({
                          ...prev,
                          Dentist: item._id,
                        }));
                        checkAvailableTimes(appointment.Date, item._id);
                      }}
                    >
                      Songoh
                    </button>
                  </div>
                </div>
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
            className={!appointment.Dentist ? "DisabledButton" : "PurpleButton"}
            disabled={!appointment.Dentist}
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
