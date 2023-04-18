import { useContext } from "react";
import { instance } from "../Clients";
import { DataContext } from "../Providers/DataContext";

export const Card = ({ Date, Hour, Author, Dentist, _id }) => {
  const { setAllRequests } = useContext(DataContext);

  const deleteRequest = () => {
    instance.delete(`request/${_id}`).then((_res) => {
      instance.get("requests").then((res) => {
        setAllRequests(res.data);
      });
    });
  };

  return (
    <div className="p-3">
      <div className="w-72 border-2 rounded">
        <div className="cardDesign">
          <div className="cardInner">User: {Author && Author.username}</div>
          <div className="cardInner">Date: {Date && Date}</div>
          <div className="cardInner text-gray-400">
            Dentist: {Dentist && Dentist}
          </div>
          <div className="cardInner text-gray-400">Hour: {Hour && Hour}</div>
          <div className="flex flex-col gap-2 m-2">
            <button className="border-2 border-teal-400 rounded  hover:bg-teal-300">
              Approve
            </button>
            <button
              className="border-2 border-rose-400 rounded hover:bg-rose-300"
              onClick={deleteRequest}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
