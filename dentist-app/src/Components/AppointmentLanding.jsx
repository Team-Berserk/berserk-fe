import { Link } from "react-router-dom";

export const AppointmentLanding = () => {
  return (
    <div className="h-96 flex justify-center items-center bg-dental bg-fixed bg-center bg-cover">
      <div className="w-[1280px] h-fit lg:h-[200px] rounded-3xl flex flex-col xl:flex-row p-8 m-8 justify-around items-center text-center xl:text-start bg-[#70BBFB] text-white">
        <div className="flex flex-col gap-3 font-semibold pb-4">
          <div className="text-3xl lg:text-4xl">
            Инээмсэглэлийг тань гэрэлтүүлцгээе!
          </div>
          <div className="text-sm md:text-lg">
            Үйлчлүүлэгчдийн шүдний эрүүл мэнд, сайхан инээмсэглэлтэй болоход нь
            туслах.
          </div>
        </div>
        <Link to="/appointmentDate">
          <button className="AppointmentButton text-sm xl:text-lg">
            Яг одоо цагаа ав!
          </button>
        </Link>
      </div>
    </div>
  );
};
