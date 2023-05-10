import { useContext } from "react";
import { instance } from "../Clients";
import { DataContext } from "../Providers/DataContext";

export const Card = ({ Date, Hour, Author, _id }) => {
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
          <div className="mx-2">Author: {Author && Author.username}</div>
          <div className="mx-2">Date: {Date && Date}</div>
          <div className="mx-2 text-gray-400">Hour: {Hour && Hour}</div>
          <div className="flex flex-col gap-2 m-2">
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
