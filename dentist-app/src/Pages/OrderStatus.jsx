import { useContext } from "react";
import { DataContext } from "../Providers/DataContext";
import { AuthContext } from "../Providers/AuthContext";
import { Link } from "react-router-dom";

export const OrderStatus = () => {
  const { appointment, requestAppointment, phoneNumber } =
    useContext(DataContext);
  const { userData } = useContext(AuthContext);

  const OrderJSON = [
    {
      name: "Registration number",
      data: appointment.Registration,
    },
    {
      name: "Date",
      data: appointment.Date,
    },
    {
      name: "Hour",
      data: appointment.Hour,
    },
    {
      name: "Phone Number",
      data: phoneNumber && "+976" + phoneNumber,
    },
  ];

  return (
    <div className="h-screen justify-center items-center flex overflow-y-scroll">
      <div className="flex flex-col rounded-2xl p-4 gap-16 items-center">
        <div className="flex flex-col p-6 justify-center text-center gap-3 text-3xl font-bold">
          <div className="flex flex-col md:flex-row gap-1">
            <div className="flex items-center justify-center">
              {userData && userData.username}'s
            </div>
            <div>appointment order status</div>
          </div>
          <div className="text-sm font-medium">Check your appointment!</div>
        </div>
        <div className="flex flex-wrap justify-center md:flex-row items-center gap-5">
          <div className="w-44 h-24 bg-gray-100 flex items-center flex-col justify-center gap-3 rounded-md">
            <div className="font-semibold">Name</div>
            <hr className="w-32" />
            <div className="flex w-fit gap-1">
              <div>{appointment.Surename}</div>
              <div>{appointment.Ownername}</div>
            </div>
          </div>
          {OrderJSON.map((item, index) => {
            return (
              <div
                className="w-44 h-24 bg-gray-100 flex items-center flex-col justify-center gap-3 rounded-md"
                key={index}
              >
                <div className="font-semibold">{item.name}</div>
                <hr className="w-32" />
                <div>{item.data}</div>
              </div>
            );
          })}
        </div>
        <div className="flex gap-7">
          <Link to="/appointment">
            <button className="CancelButton">Cancel</button>
          </Link>

          <button className={"ConfirmButton"} onClick={requestAppointment}>
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};
