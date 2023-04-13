import { useContext } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../../Providers/DataContext";

export const Order = () => {
  const { appointment, requestAppointment } = useContext(DataContext);

  return (
    <div className="flex gap-5 pb-10">
      <div className="p-4">Date : {appointment.Date}</div>
      <div className="p-4">Dentist : {appointment.Dentist}</div>
      <div className="p-4">Hour : {appointment.Hour}</div>
      {/* <Link to="/verification"> */}
      <div onClick={requestAppointment}>Confirm</div>
      {/* </Link> */}
    </div>
  );
};
