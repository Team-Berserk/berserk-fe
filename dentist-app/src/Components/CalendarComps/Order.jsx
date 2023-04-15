import { useContext } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../../Providers/DataContext";

export const Order = () => {
  const { appointment, requestAppointment, setAppointment } =
    useContext(DataContext);

  const Cancel = () => {
    setAppointment({
      Date: null,
      Hour: null,
      Dentist: null,
      Author: null,
    });
  };

  return (
    <div className="flex gap-2 border-2">
      <div className="p-2">Date : {appointment.Date}</div>
      <div className="p-2">Dentist : {appointment.Dentist}</div>
      <div className="p-2">Hour : {appointment.Hour}</div>
      <button
        className="p-2 border-2 border-rose-700 active:bg-rose-600"
        onClick={Cancel}
      >
        Cancel
      </button>
      <button
        className="p-2 border-2 border-teal-700 active:bg-teal-950"
        onClick={requestAppointment}
      >
        <Link to="/dashboard" className="text-black">
          Confirm
        </Link>
      </button>
    </div>
  );
};
