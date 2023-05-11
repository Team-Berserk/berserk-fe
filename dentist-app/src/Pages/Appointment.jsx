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
    <div className="flex justify-center items-center h-fit lg:h-screen">
      <div
        className={
          appointment.Date
            ? "flex mt-20 flex-col items-center"
            : "mt-16 flex flex-col items-center"
        }
      >
        {/* Title Section */}

        <div className="text-2xl lg:text-3xl w-96 lg:w-fit font-semibold lg:pt-0 text-center lg:text-start mb-4 lg:mb-12">
          өдөр болон цагаа сонгоно yy.
        </div>

        {/* Title Section */}

        {/* Main Section */}

        <div className="flex flex-col lg:flex-row items-center md:justify-between gap-7 md:gap-0 w-80 md:w-[750px]">
          <div className="flex flex-col gap-3">
            <CalendarComp />
            {appointment.Date && <Hours />}
          </div>
          <Information />
        </div>

        {/* Main Section */}

        {/* Button Section */}

        <div className="flex gap-7 pt-12">
          <button className="CancelButton" onClick={Cancel}>
            Cancel
          </button>

          <button
            className={
              !appointment.Registration ||
              !appointment.Ownername ||
              !appointment.Surename
                ? "DisabledButton"
                : "ConfirmButton"
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
    </div>
  );
};
