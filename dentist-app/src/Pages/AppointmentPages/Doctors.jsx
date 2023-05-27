import { useContext } from "react";
import { DataContext } from "../../Providers/DataContext";
import { Link } from "react-router-dom";
import Doctor from "../../Assets/Doctor.svg";

export const Doctors = () => {
  const { Doctors, appointment, checkAvailableTimes, setAppointment } =
    useContext(DataContext);

  return (
    <div className="h-screen flex flex-col justify-center items-center overflow-y-scroll bg-appointmentImg bg-fixed bg-cover bg-center">
      <div className="p-6 text-2xl lg:text-4xl font-semibold">
        Та эмчээ сонгоно уу.
      </div>
      <div className="flex overflow-x-scroll lg:overflow-auto justify-normal lg:justify-center w-screen gap-10 p-4">
        {Doctors &&
          Doctors.map((item, index) => {
            return (
              <div className="border border-gray-100 rounded-lg p-6 bg-white" key={index}>
                <div className="w-32 text-center flex flex-col items-center gap-6">
                <div className="w-fit h-fit rounded-full overflow-hidden">
                  <img
                    alt="profile"
                    className="w-16"
                    src={item.Img}
                    draggable={false}
                  />

                </div>
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
                          Hour:null
                        }));

                        checkAvailableTimes(appointment.Date, item._id);
                      }}
                    >
                      Сонгох
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
          <button className="CancelButton">Буцах</button>
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
            Үргэлжлүүлэх
          </button>
        </Link>
      </div>

      {/* Button Section */}
    </div>
  );
};
