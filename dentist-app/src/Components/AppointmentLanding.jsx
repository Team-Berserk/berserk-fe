import { Link } from "react-router-dom";

export const AppointmentLanding = () => {
  return (
    <div className="h-1/2 flex justify-center items-center bg-dental bg-fixed bg-center bg-cover">
      <div className="w-[1280px] h-fit lg:h-[200px] rounded-3xl flex flex-col xl:flex-row p-8 m-8 justify-around items-center text-center xl:text-start bg-blue-500 text-white">
        <div className="flex flex-col gap-3 font-semibold pb-4">
          <div className="text-2xl lg:text-3xl">
            Let Us Brighten
            <span className="text-3xl lg:text-5xl">Your Smile!</span>
          </div>
          <div className="text-sm md:text-lg">
            Helping patients achieve good dental health & beautiful smile.
          </div>
        </div>
        <Link to="/appointment">
          <button className="AppointmentButton text-sm xl:text-lg">
            Create Appointment Now!
          </button>
        </Link>
      </div>
    </div>
  );
};
