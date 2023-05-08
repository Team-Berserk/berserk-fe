import Aboutus from "../Assets/Aboutus.svg";

export const AboutUs = () => {
  return (
    <div className="h-fit md:h-screen flex xl:px-40 xl:py-28 ">
      <div className="w-full flex flex-col justify-evenly">
        <div className="flex justify-between items-center xl:border-[#BCBCBC] lg:border-b">
          <div className="flex flex-col gap-2 p-4 xl:p-0">
            <div className="font-bold text-4xl xl:text-7xl">
              WHO <span className="text-yellow-500">WE ARE</span>
            </div>
          </div>
          <div className="font-bold text-5xl hidden lg:block">Our history</div>
        </div>
        <div className="flex flex-col md:flex-row justify-around items-center p-8 lg:p-0 gap-5 lg:gap-0 border">
          <div>
            <img alt="aboutus" src={Aboutus} />
          </div>
          <div className="flex flex-col border border-gray-500 bg-slate-100 rounded-xl h-fit p-16 items-center justify-center w-fit lg:w-[600px]">
            <div className="text-2xl font-semibold">Our history</div>
            <div className="">
              What is Soddent Dental Clinic? Soddent Dental Clinic is a simply
              dummy text of the printing and typesetting industry. Lorem Ipsum
              has been the industry's standard dummy text ever since the 1500s,
              when an unknown printer took a galley of type and scrambled it to
              make a type specimen book. It has survived not only five centuries
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
