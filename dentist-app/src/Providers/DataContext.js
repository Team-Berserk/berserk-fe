import { createContext, useContext, useEffect, useState } from "react";
import { instance } from "../Clients";
import { AuthContext } from "./AuthContext";

export const DataContext = createContext();

const doctorsData = [
  {
    name: "Enkhtuvshin",
    inpossibleTimes: [12, 18, 20],
  },
  {
    name: "Duurenbayar",
    inpossibleTimes: [{ time: 15 }, { time: 10 }, { time: 13 }],
  },
  {
    name: "Justin Bieber",
    inpossibleTimes: [{ time: 11 }, { time: 12 }],
  },
  {
    name: "Andrew Tate",
    inpossibleTimes: [{ time: 13 }, { time: 16 }, { time: 19 }],
  },
  {
    name: "Mnholovesnobody",
    inpossibleTimes: [{ time: 12 }, { time: 18 }],
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
