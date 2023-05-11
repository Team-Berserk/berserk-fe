import { createContext, useContext, useEffect, useState } from "react";
import { instance } from "../Clients";
import { AuthContext } from "./AuthContext";
import { toast } from "react-toastify";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const { userData } = useContext(AuthContext);
  const [allRequests, setAllRequests] = useState();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [Doctors, setDoctors] = useState(null);

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

  const [appointment, setAppointment] = useState({
    Date: "",
    Hour: "",
    Ownername: "",
    Surename: "",
    Author: "",
    Phonenumber: "",
    Registration: "",
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

    instance.put("/availableTimes", { Date }).then((res) => {
      times.forEach((element, index) => {
        if (res.data.includes(element.hour)) {
          element.possible = false;
          times[index].possible = false;
        }
      });
      // console.log(times);
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
        Author: userData._id,
        Ownername: appointment && appointment.Ownername,
        Surename: appointment && appointment.Surename,
        Phonenumber: "+976" + phoneNumber,
        Registration: appointment && appointment.Registration,
      })
      .then((res) => {
        if (res.data.message === "177013") {
          FuckedUp();
        } else {
          setAllRequests([...allRequests, res.data]);
          window.localStorage.removeItem("request");
          console.log(res.data);
          setPhoneNumber("");
          setAppointment({
            Date: "",
            Hour: "",
            Ownername: "",
            Surename: "",
            Author: "",
            Phonenumber: "",
            Registration: "",
          });
        }
      });
  };

  const getDoctors = () => {
    instance.get("/doctors").then((res) => {
      console.log(res.data);
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
        Doctors,
        Confitrm,
        Navigator,
        appointment,
        phoneNumber,
        allRequests,
        deleteRequest,
        getAllRequests,
        setAllRequests,
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
