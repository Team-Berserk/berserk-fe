import { useContext, useEffect, useState } from "react";
// import { DataContext } from "../Providers/DataContext";
import { UserManager } from "../Components/UserManager";
import { instance } from "../Clients";
import { utils } from "@amir04lm26/react-modern-calendar-date-picker";

export const Dashboard = () => {
  // const { allRequests } = useContext(DataContext);
  const [users, setUsers] = useState(null);
  useEffect(() => {
    const day = utils().getToday();
    const date = `${day.year}-${day.month < 10 ? "0" : ""}${day.month}-${
      day.day < 10 ? "0" : ""
    }${day.day}`;
    instance.put("manage", { date }).then((response) => {
      // console.log(response.data);
      // console.log(utils().getToday());
      // console.log(Object.entries(response.data.placeholder));
      setUsers(Object.entries(response.data.placeholder));
    });
  }, []);

  return (
    <div className="h-screen bg-slate-50 pt-24 p-8 flex justify-center">
      <div className="w-full h-fit max-w-3xl">
        <h1 className=" font-bold text-xl">Soddent clinic admin dashboard.</h1>
        <div className="flex gap-8 pt-5">
          <div className=" w-1/3 bg-blue-500 h-20 rounded-md"></div>
          <div className=" w-1/3 bg-blue-500 h-20 rounded-md"></div>
          <div className=" w-1/3 bg-blue-500 h-20 rounded-md"></div>
        </div>
        <h1 className=" font-bold text-xl mt-16 text-center m-5">
          Unuudriin uilchluulegchid.
        </h1>
        <div className="flex gap-2 mt-4">
          <input
            className="w-60 h-10 rounded-full border-solid border-gray-400 border-2 p-4 outline-none"
            placeholder="Nereer haih"
          />
          <button className=" h-10 rounded-full border-solid border-gray-400 border-2 p-4 pt-1.5 flex align-top">
            Angilah
          </button>
        </div>
        <div className="h-fit  bg-slate-200 mt-8 rounded-2xl pb-10">
          <div className="h-10 w-full flex align-middle  p-4 pt-2 pr-16">
            <p className="w-32">User</p>
            <p className="w-40">Attendance</p>
            <p className="w-48">Phone Number</p>
            <p className="w-32">Date</p>
            <p className="w-42">Time</p>
          </div>
          {
            users &&
              users.map((user, index) => {
                return <UserManager key={user._id} user={user} index={index} />;
              }) //Array.map() creates a new array with each item being a function call in the array. This is a closure. The
          }
        </div>
        <h1 className=" font-bold text-xl mt-16 text-center">
          Daraagiin uilchluulegchid.
        </h1>
      </div>
    </div>
  );
};
