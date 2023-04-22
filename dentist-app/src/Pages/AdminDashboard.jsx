import { useContext } from "react";
import { Card } from "../Components/RequestCard";
import { DataContext } from "../Providers/DataContext";
import { Link } from "react-router-dom";

export const Dashboard = () => {
  const { allRequests } = useContext(DataContext);

  return (
    <div className="flex flex-col h-screen justify-center items-center">
      <div className="flex flex-col items-center w-screen p-3">
        <h1>Requests:</h1>
        <Link to="/appointment">
          <button className="border-2 p-2 rounded-md border-green-500 text-black hover:bg-green-400 active:bg-green-700">
            Create Request
          </button>
        </Link>
      </div>
      <div className="overflow-y-scroll md:overflow-hidden  flex flex-col md:flex-row items-center">
        {allRequests &&
          allRequests.map((req, index) => {
            return <Card {...req} key={index} />;
          })}
      </div>
    </div>
  );
};
