import { useContext } from "react";
import { DataContext } from "../Providers/DataContext";
import { UserManager } from "../Components/UserManager";

export const Dashboard = () => {
  // const { allRequests } = useContext(DataContext);

  return (
    <div className="h-screen bg-slate-50 pt-20 p-8">
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
        <div className="h-10 w-full flex align-middle justify-between p-4 pt-2 pr-16">
          <p>User</p>
          <p>Attendance</p>
          <p>Phone Number</p>
          <p>Date</p>
          <p>Time</p>
        </div>
        <UserManager
          User="Duurnee"
          Att={true}
          Numb="+97699112211"
          Date="May-01"
          Time="11:00"
        />
      </div>
      <h1 className=" font-bold text-xl mt-16 text-center">
        Daraagiin uilchluulegchid.
      </h1>
    </div>
  );
};
