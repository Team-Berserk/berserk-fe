import { useContext, useEffect } from "react";
import { CalendarComp } from "../Components/CalendarComps/Calendar";
import { Doctors } from "../Components/CalendarComps/Doctors";
import { Hours } from "../Components/CalendarComps/Hours";
import { Order } from "../Components/CalendarComps/Order";
import { DataContext } from "../Providers/DataContext";

export const Appointment = () => {
  const { appointment } = useContext(DataContext);

  useEffect(() => {
    console.log(appointment);
  }, [appointment]);

  return (
    <div className="flex flex-col justify-center items-center h-screen border-2 border-rose-500">
      <CalendarComp appointment={appointment} />
      {appointment.Date && <Doctors />}
      {appointment.Dentist && <Hours />}
      {appointment.Hour && <Order />}
    </div>
  );
};
