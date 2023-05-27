import { createContext, useEffect, useState } from "react";
import { instance } from "../Clients";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [Doctors, setDoctors] = useState([]);
  const nav = useNavigate();

  const [availabletimes, setAvailabletimes] = useState(null);

  const [appointment, setAppointment] = useState({
    Date: "",
    Hour: "",
    Ownername: "",
    Dentist: "",
    Surename: "",
    Phonenumber: "",
  });

  const checkAvailableTimes = (Date, doctorId) => {
    const times = [
      { hour: "10:00", possible: true },
      { hour: "11:00", possible: true },
      { hour: "12:00", possible: true },
      { hour: "13:00", possible: true },
      { hour: "15:00", possible: true },
      { hour: "16:00", possible: true },
      { hour: "17:00", possible: true },
      { hour: "18:00", possible: true },
    ];

    instance.put(`/availableTimes/${doctorId}`, { Date }).then((res) => {
      times.forEach((element, index) => {
        if (res.data.includes(element.hour)) {
          element.possible = false;
          times[index].possible = false;
        }
      });
      setAvailabletimes(times);
    });
  };

  const Confitrm = () => {
    toast.success("Confirmed!", {
      position: toast.POSITION.TOP_CENTER,
      hideProgressBar: true,
      closeOnClick: true,
      autoClose: 4000,
    });
  };

  const FuckedUp = () => {
    toast.error("You fucked up bro!", {
      position: toast.POSITION.TOP_CENTER,
      hideProgressBar: true,
      closeOnClick: true,
      autoClose: 1000,
    });
  };

  useEffect(() => {
    const localReq = window.localStorage.getItem("request");
    if (localReq) {
      setAppointment(JSON.parse(localReq));
    }
  }, []);

  const requestAppointment = () => {
    instance
      .post("request", {
        Date: appointment && appointment.Date,
        Hour: appointment && appointment.Hour,
        Ownername: appointment && appointment.Ownername,
        Dentist: appointment && appointment.Dentist,
        Surename: appointment && appointment.Surename,
        Phonenumber: appointment && appointment.Phonenumber,
      })
      .then((res) => {
        if (res.data.message === "177013") {
          FuckedUp();
        } else {
          window.localStorage.removeItem("request");
          nav("/");
          Confitrm();
          setPhoneNumber("");
          setAppointment({
            Date: "",
            Hour: "",
            Dentist: "",
            Ownername: "",
            Surename: "",
            Phonenumber: "",
          });
        }
      });
  };

  const getDoctors = () => {
    instance.get("/doctors").then((res) => {
      setDoctors(res.data);
    });
  };

  useEffect(() => {
    getDoctors();
  }, []);
  return (
    <DataContext.Provider
      value={{
        Doctors,
        Confitrm,
        Navigator,
        appointment,
        phoneNumber,
        setAppointment,
        availabletimes,
        setPhoneNumber,
        setAvailabletimes,
        requestAppointment,
        checkAvailableTimes,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
