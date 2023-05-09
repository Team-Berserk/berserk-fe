import { useContext } from "react";
import { DataContext } from "../Providers/DataContext";
import { Link } from "react-router-dom";
import {
  CalendarComp,
  Hours,
  Information,
} from "../Components/AppointmentComponents";

export const Appointment = () => {
  const { setAppointment, appointment } = useContext(DataContext);

  const Cancel = () => {
    setAppointment({
      Date: "",
      Hour: "",
      Ownername: "",
      Surename: "",
      Author: "",
      Phonenumber: "",
      Registration: "",
    });
  };

  return (
    <div className="h-screen flex flex-col justify-center gap-0 lg:gap-14 items-center mt-7">
      {/* Title Section */}

      <div className="hidden md:block text-2xl lg:text-3xl font-semibold lg:pt-0 text-center lg:text-start p-3">
        Цаг авах өдөр болон цагаа сонгоно yy.
      </div>

      {/* Title Section */}

      {/* Main Section */}

      <div className="flex flex-col md:flex-row items-center md:justify-between w-80 md:w-[750px]">
        <div className="flex flex-col gap-3">
          <CalendarComp />
          {appointment.Date && <Hours />}
        </div>
        <Information />
      </div>

      {/* Main Section */}

      {/* Button Section */}

      <div className="flex gap-7 pt-4">
        <button className="CancelButton" onClick={Cancel}>
          Cancel
        </button>

        <button
          className={
            !appointment.Registration ||
            !appointment.Ownername ||
            !appointment.Surename
              ? "DisabledButton"
              : "PurpleButton"
          }
          disabled={
            !appointment.Registration ||
            !appointment.Ownername ||
            !appointment.Surename
          }
          onClick={window.localStorage.setItem(
            "request",
            JSON.stringify(appointment)
          )}
        >
          {!appointment.Registration ||
          !appointment.Ownername ||
          !appointment.Surename ? (
            <div>Confirm</div>
          ) : (
            <Link to="/verification">Confirm</Link>
          )}
        </button>
      </div>

      {/* Button Section */}
    </div>
  );
};
