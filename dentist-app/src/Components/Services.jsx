import { ServiceJSON } from "../Components/json/ServiceJSON";

export const Services = () => {
  return (
    <div className="flex xl:px-40 xl:py-10 h-fit xl:h-screen" id="service">
      <div className="w-full flex flex-col justify-evenly">
        <div className="flex justify-center text-center lg:text-start lg:justify-between xl:border-[#BCBCBC] xl:border-b">
          <div className="flex flex-col gap-2 p-4 xl:p-0">
            <div className="font-semibold text-4xl lg:text-6xl">
              We can make special
            </div>
            <div className="font-bold text-4xl xl:text-7xl">Services</div>
          </div>
          <div className="font-bold text-7xl hidden lg:block">
            KEY <span className="text-yellow-500">FEATURE</span>
          </div>
        </div>
        <div className="flex flex-wrap justify-center font-semibold gap-10 py-7 xl:py-0 text-center">
          {ServiceJSON.map((item, index) => {
            return (
              <div className="SpecailsCard" key={index}>
                <img
                  src={item.icon}
                  alt="icon"
                  className="w-20 md:w-24"
                  draggable={false}
                />
                <div>{item.name}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
