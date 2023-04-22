import { useContext } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../../Providers/DataContext";

export const Order = () => {
  const { appointment, setAppointment } = useContext(DataContext);

  const Cancel = () => {
    setAppointment({
      Date: null,
      Hour: null,
      Dentist: null,
      Author: null,
    });
  };

  return (
    <div className="flex gap-2 border-2 p-4 w-72 md:w-fit items-center flex-col md:flex-row">
      <div className="p-0 md:p-2">Date : {appointment.Date}</div>
      <div className="p-0 md:p-2">Dentist : {appointment.Dentist}</div>
      <div className="p-0 md:p-2">Hour : {appointment.Hour}</div>
      <button className="p-2 border-2 border-teal-700 active:bg-teal-950 rounded-md">
        <Link to="/verification" className="text-black">
          Confirm
        </Link>
      </button>
      <button
        className="p-2 border-2 border-rose-700 active:bg-rose-600 rounded-md"
        onClick={Cancel}
      >
        Cancel
      </button>
    </div>
  );
};
