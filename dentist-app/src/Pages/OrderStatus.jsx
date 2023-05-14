import { useContext, useState } from "react";
import { DataContext } from "../Providers/DataContext";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { instance } from "../Clients";

export const OrderStatus = () => {
  const { appointment, requestAppointment } = useContext(DataContext);

  const [Doctor, setDoctor] = useState("");

  useEffect(() => {
    if (appointment.Dentist)
      instance
        .get(`/doctor/${appointment.Dentist}`)
        .then((res) => {
          setDoctor(res.data.Name);
        })
        .catch((err) => {
          console.log(err);
        });
  });

  const OrderJSON = [
    {
      name: "Date",
      data: appointment.Date,
    },
    {
      name: "Hour",
      data: appointment.Hour,
    },
    {
      name: "Doctor",
      data: Doctor,
    },
    {
      name: "Phone Number",
      data: appointment.Phonenumber,
    },
  ];

  return (
    <div className="h-screen justify-center items-center flex overflow-y-scroll">
      <div className="flex flex-col rounded-2xl p-4 gap-16 items-center">
        <div className="flex flex-col p-6 justify-center text-center gap-3 text-3xl font-bold">
          <div className="flex flex-col md:flex-row gap-1">
            <div className="flex items-center justify-center">
              <div>{appointment.Ownername}</div>'s
            </div>
            <div>appointment order status</div>
          </div>
          <div className="text-sm font-medium">Та мэдээллээ шалгана уу.</div>
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
          <Link to="/appointmentInformation">
            <button className="CancelButton">Cancel</button>
          </Link>

          <button className="PurpleButton" onClick={requestAppointment}>
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};
