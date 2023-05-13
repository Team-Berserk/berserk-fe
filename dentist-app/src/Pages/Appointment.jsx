import { useContext } from "react";
import { DataContext } from "../Providers/DataContext";
import { Link } from "react-router-dom";
import { CalendarComp, Hours, Information } from "./AppointmentPages";

export const Appointment = () => {
  const { setAppointment, appointment, setPhoneNumber } =
    useContext(DataContext);

  return (
    <div className="h-screen lg:justify-center lg:items-center lg:flex overflow-y-scroll">
      <div className="mt-16 lg:mt-32 gap-6 flex flex-col items-center">
        <div className="text-2xl font-semibold">
          Өдөр болон цагаа сонгоно yy.
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-between w-80 md:w-[750px]">
          <div className="flex flex-col gap-3">
            <CalendarComp />
            {appointment.Date && <Hours />}
          </div>
          <Information />
        </div>
      </div>
    </div>
  );
};
