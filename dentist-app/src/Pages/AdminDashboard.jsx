import { Link } from "react-router-dom";
import { Card } from "../Components/RequestCard";

export const Dashboard = () => {
  return (
    <div className="flex border-2 border-rose-500 h-screen">
      <div className="flex flex-col items-center w-96 h-20 border-2 border-teal-300 ">
        <h3 className="p-2.5 font-serif">LOGO (img)</h3>
        <div className="border-2 border-green-400 flex w-full h-full p-4">
          <Link to="/dashboard">
            <div>Requests</div>
          </Link>
        </div>
      </div>
      <div className="w-screen">
        <div className="flex items-center justify-between border-2 shadow-sm w-full p-2 h-20">
          <h3 className="m-1 font-serif">Admin Dashboard = Requests</h3>
          <div className="flex items-center border-2 border-black rounded-4 h-8 px-3">
            <div className="text-xl font-serif">User</div>
          </div>
        </div>

        <div className="overflow-y-scroll h-5/6 p-14 flex flex-wrap">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
};
