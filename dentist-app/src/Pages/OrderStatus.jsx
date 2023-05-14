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
      name: "Өдөр",
      data: appointment.Date,
    },
    {
      name: "Цаг",
      data: appointment.Hour,
    },
    {
      name: "Эмч",
      data: Doctor,
    },
    {
      name: "Утасны дугаар",
      data: appointment.Phonenumber,
    },
  ];

  return (
    <div className="h-screen justify-center items-center flex overflow-y-scroll bg-appointmentImg bg-fixed bg-cover bg-center">
      <div className="flex flex-col rounded-2xl gap-8 items-center">
        <div className="flex flex-col justify-center gap-3 mx-6 text-3xl font-semibold mt-16 lg:mt-0">
          <div>Та мэдээллээ шалгана уу.</div>
        </div>
        <div className="flex flex-wrap justify-center md:flex-row items-center gap-5">
          <div className="w-80 lg:w-44 h-12 lg:h-24 bg-gray-100 flex items-center justify-normal lg:justify-center flex-row pl-3 lg:pl-0 lg:flex-col gap-3">
            <div className="font-semibold flex">
              Овог, Нэр<p className="block lg:hidden">:</p>
            </div>
            <hr className="w-32 hidden lg:block" />
            <div className="flex w-fit gap-1">
              <div>{appointment.Surename}</div>
              <div>{appointment.Ownername}</div>
            </div>
          </div>
          {OrderJSON.map((item, index) => {
            return (
              <div
                className="w-80 lg:w-44 h-12 lg:h-24 bg-gray-100 flex items-center justify-normal lg:justify-center flex-row pl-3 lg:pl-0 lg:flex-col gap-3"
                key={index}
              >
                <div className="font-semibold flex">
                  {item.name}
                  <p className="block lg:hidden">:</p>
                </div>
                <hr className="w-32 hidden lg:block" />
                <div>{item.data}</div>
              </div>
            );
          })}
        </div>
        <div className="flex gap-7 pb-6">
          <Link to="/appointmentInformation">
            <button className="CancelButton">Буцах</button>
          </Link>

          <button className="PurpleButton" onClick={requestAppointment}>
            Баталгаажуулах
          </button>
        </div>
      </div>
    </div>
  );
};
