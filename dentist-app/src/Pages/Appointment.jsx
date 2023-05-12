import { useContext } from "react";
import { DataContext } from "../Providers/DataContext";
import { Link } from "react-router-dom";
import {
  CalendarComp,
  Hours,
  Information,
} from "../Components/AppointmentComponents";

export const Appointment = () => {
  const { setAppointment, appointment, setPhoneNumber } =
    useContext(DataContext);

  const Cancel = () => {
    setPhoneNumber("");
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
    <div className="h-screen lg:justify-center lg:items-center lg:flex overflow-y-scroll">
      <div className="mt-16 lg:mt-32 gap-6 flex flex-col items-center">
        <div className="text-2xl font-semibold">Өдөр болон цагаа сонгоно yy.</div>
        <div className="flex flex-col lg:flex-row items-center justify-between w-80 md:w-[750px]">
          <div className="flex flex-col gap-3">
            <CalendarComp />
            {appointment.Date && <Hours />}
          </div>
          <Information />
        </div>
        <div className="flex gap-5 py-4">
          <Link to={"/"}>
            <button className="CancelButton" onClick={Cancel}>
              Cancel
            </button>
          </Link>

          <button
            className={
              appointment.Registration.length < 10 ||
              !appointment.Ownername ||
              !appointment.Surename ||
              !appointment.Date ||
              !appointment.Hour
                ? "DisabledButton"
                : "ConfirmButton"
            }
            disabled={
              appointment.Registration.length < 10 ||
              !appointment.Ownername ||
              !appointment.Surename ||
              !appointment.Date ||
              !appointment.Hour
            }
            onClick={window.localStorage.setItem(
              "request",
              JSON.stringify(appointment)
            )}
          >
            {appointment.Registration.length < 10 ||
            !appointment.Ownername ||
            !appointment.Surename ||
            !appointment.Date ||
            !appointment.Hour ? (
              <div>Confirm</div>
            ) : (
              <Link to="/verification">Confirm</Link>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
