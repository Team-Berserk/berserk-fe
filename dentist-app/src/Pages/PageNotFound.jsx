import { Link } from "react-router-dom";

export const PageNotFound = () => {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="w-full h-fit flex flex-col items-center">
        <h1 className="text-center text-8xl font-bold font-sans text-[#516eff]">
          404
        </h1>
        <p className="text-center font-semibold text-lg sm  :text-xl text-gray-600 p-4 w-full sm:w-[550px] sm:pt-5 sm:pb-4">
          Алдаа 404 - Уучлаарай, таны хүссэн хуудас олдсонгүй.
        </p>
        <Link to="/">
          <button className="font-semibold text-white w-48 bg-[#516eff] p-4 rounded-xl">
            Go To Homepage
          </button>
        </Link>
      </div>
    </div>
  );
};
