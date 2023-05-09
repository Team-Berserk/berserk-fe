import { createContext, useContext, useEffect, useState } from "react";
import { instance } from "../Clients";
import { AuthContext } from "./AuthContext";
import { toast } from "react-toastify";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const { userData } = useContext(AuthContext);
  const [allRequests, setAllRequests] = useState();
  const [surename, setSurename] = useState("");
  const [ownername, setOwnername] = useState("");
  const [registration, setRegistration] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
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

  const [appointment, setAppointment] = useState({
    Date: null,
    Hour: null,
    Ownername: null,
    Surename: null,
    Author: null,
    Phonenumber: null,
    Registration: null,
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

  const requestAppointment = () => {
    instance
      .post("request", {
        Date: appointment.Date,
        Hour: appointment.Hour,
        Author: userData._id,
        Ownername: ownername,
        Surename: surename,
        Phonenumber: "+976" + phoneNumber,
        Registration: registration,
      })
      .then((res) => {
        if (res.data.message === "177013") {
          FuckedUp();
        } else {
          setAllRequests([...allRequests, res.data]);
          console.log(res.data);
          setOwnername("");
          setSurename("");
          setRegistration("");
          setPhoneNumber("");
          setAppointment({
            Date: null,
            Hour: null,
            Author: null,
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
        surename,
        Confitrm,
        Navigator,
        ownername,
        appointment,
        phoneNumber,
        allRequests,
        setSurename,
        setOwnername,
        registration,
        deleteRequest,
        getAllRequests,
        setAllRequests,
        setAppointment,
        availabletimes,
        setPhoneNumber,
        setRegistration,
        setAvailabletimes,
        requestAppointment,
        checkAvailableTimes,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
