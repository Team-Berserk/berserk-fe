import { createContext, useContext, useEffect, useState } from "react";
import { instance } from "../Clients";
import { AuthContext } from "./AuthContext";
import { toast } from "react-toastify";

export const DataContext = createContext();

const doctorsData = [
  {
    name: "Justin Bieber",
  },

  {
    name: "Andrew Tate",
  },
];

export const DataProvider = ({ children }) => {
  const [allRequests, setAllRequests] = useState();
  const { userData } = useContext(AuthContext);
  const [appointment, setAppointment] = useState({
    Date: null,
    Hour: null,
    Dentist: null,
    Author: null,
  });

  const Confitrm = () => {
    toast.success("Confirmed!", {
      position: toast.POSITION.TOP_CENTER,
      hideProgressBar: true,
      closeOnClick: true,
      autoClose: 1000,
    });
  };

  const getAllRequests = () => {
    instance.get("requests").then((res) => {
      // console.log(res.data);
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
        setAllRequests([...allRequests, res.data]);
        Confitrm();
        console.log(res.data);
      });
  };

  useEffect(() => {
    getAllRequests();
  }, []);
  return (
    <DataContext.Provider
      value={{
        Navigator,
        allRequests,
        setAllRequests,
        getAllRequests,
        deleteRequest,
        doctorsData,
        requestAppointment,
        appointment,
        setAppointment,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
