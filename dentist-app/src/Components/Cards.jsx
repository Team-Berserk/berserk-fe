import image from "../Assets/Duure.svg";
import { Link } from "react-router-dom";

export const Cards = ({ Name, _id }) => {
  return (
    <div className="h-[400px] w-[300px] border-zinc-300 border-2 rounded-[35px] flex flex-col justify-center items-center m-3 shadow-md">
      <div className="h-auto justify-center items-center flex p-2">
        <img
          src={image}
          className="w-40 h-40 rounded-full border-2 border-slate-600"
        />
      </div>
      <div className="flex flex-col mx-6 gap-2">
        <p className="text-xl font-semibold text-center">{Name}</p>
        <p className="text-cyan-900 text-sm text-center">Shudnii emch</p>
        <p className="text-center font-light text-sm">
          A kiddo who uses Bootstrap and Laravel in web development. Currently
          playing around with design via Figma
        </p>
      </div>
      <Link to={`/doctor/${_id}`}>
        <button className="bg-sky-400 p-3 rounded-2xl text-white shadow-md w-48 active:bg-sky-600 hover:bg-sky-500 my-4">
          Check info
        </button>
      </Link>
    </div>
  );
};
