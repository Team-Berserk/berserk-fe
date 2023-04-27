import image from "../Assets/dentl.avif";
import { Button } from "react-bootstrap"
import { Link } from "react-router-dom";

export const Cards = () => {
  return (
    <>
      <div className="h-auto flex justify-center items-center flex-col">
        <div className="w-[345px] h-auto border-zinc-300 border-2 rounded-[50px] p-2 flex flex-col items-center m-3">
          <div className="h-auto justify-center items-center flex p-2">
            <img
              src={image}
              className="w-40 h-40 rounded-full border-2 border-slate-600 mt-4"
            />
          </div>
          <div className="p-3">
            <p className="text-2xl font-semibold text-center m-0">Your name</p>
            <p className="text-cyan-900 text-md text-center">Web developer</p>
            <p className="text-center text-md mb-2">
              A kiddo who uses Bootstrap and Laravel in web development.
              Currently playing around with design via Figma
            </p>
          </div>
          <Link to="#">
            <Button className="w-48 m-1">Check info</Button>
          </Link>
        </div>
              </div>
    </>
  );
};
