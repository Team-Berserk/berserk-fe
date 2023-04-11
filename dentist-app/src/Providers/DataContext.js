import { createContext, useEffect, useState } from "react";
import { instance } from "../Clients";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [allRequests, setAllRequests] = useState();
  const getAllRequests = () => {
    instance.get("requests").then((res) => {
      console.log(res.data);
      setAllRequests(res.data);
    });
  };
  const deleteRequest = (reqId) => {
    instance.delete("request/" + reqId).then(() => {
      console.log("gg bro");
    });
  };
  const requestAppointment = (Date, Hour, Author, Dentist) => {
    instance
      .post("request", {
        Date,
        Hour,
        Author,
        Dentist,
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
        requestAppointment,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
