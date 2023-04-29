import { createContext, useContext, useEffect, useState } from "react";
import { instance } from "../Clients";
import { AuthContext } from "./AuthContext";
import { toast } from "react-toastify";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [allRequests, setAllRequests] = useState();
  const [Doctors, setDoctors] = useState([]);
  const [availabletimes, setAvailabletimes] = useState([
    { hour: "10:00", possible: true },
    { hour: "11:00", possible: true },
    { hour: "12:00", possible: true },
    { hour: "13:00", possible: true },
    { hour: "15:00", possible: true },
    { hour: "16:00", possible: true },
    { hour: "17:00", possible: true },
    { hour: "18:00", possible: true },
  ]);
  const { userData } = useContext(AuthContext);
  const [appointment, setAppointment] = useState({
    Date: null,
    Hour: null,
    Dentist: null,
    Author: null,
  });
  const checkAvailableTimes = (Date) => {
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
    // console.log(availabletimes, "how");
    instance.put("/availableTimes", { Date: Date }).then((res) => {
      times.forEach((element, index) => {
        if (res.data.includes(element.hour)) {
          element.possible = false;
          times[index].possible = false;
        }
      });
      console.log(times);
    });
    setAvailabletimes(times);
  };

  const Confitrm = () => {
    toast.success("Confirmed!", {
      position: toast.POSITION.TOP_CENTER,
      hideProgressBar: true,
      closeOnClick: true,
      autoClose: 1000,
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

  const getAllRequests = () => {
    instance.get("requests").then((res) => {
      setAllRequests(res.data);
    });
  };
  const deleteRequest = (reqId) => {
    instance.delete("request/" + reqId).then(() => {
      console.log("gg bro");
    });
  };
  const requestAppointment = () => {
    instance
      .post("request", {
        Date: appointment.Date,
        Hour: appointment.Hour,
        Author: userData._id,
        Dentist: appointment.Dentist,
      })
      .then((res) => {
        if (res.data.message === "177013") {
          FuckedUp();
        } else {
          setAllRequests([...allRequests, res.data]);
          console.log(res.data);
          setAppointment({
            Date: null,
            Hour: null,
            Dentist: null,
            Author: null,
          });
        }
      });
  };

  const getDoctors = () => {
    instance.get("/doctors").then((res) => {
      // console.log(res.data);
      setDoctors(res.data);
    });
  };

  useEffect(() => {
    getAllRequests();
    getDoctors();
  }, []);
  return (
    <DataContext.Provider
      value={{
        Navigator,
        allRequests,
        setAllRequests,
        getAllRequests,
        deleteRequest,
        requestAppointment,
        appointment,
        setAppointment,
        availabletimes,
        setAvailabletimes,
        checkAvailableTimes,
        Confitrm,
        Doctors,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
