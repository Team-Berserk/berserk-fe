import { ServiceJSON } from "../Components/json/ServiceJSON";

export const Services = () => {
  return (
    <div className="flex xl:px-40 xl:py-10 h-fit xl:h-screen" id="service">
      <div className="w-full flex flex-col justify-evenly">
        <div className="flex justify-center text-center items-center lg:text-start lg:justify-between gap-80 xl:border-[#BCBCBC] xl:border-b">
          <div className="flex flex-col gap-2 p-4 xl:p-0">
            <div className="font-bold text-4xl xl:text-7xl">Үйлчилгээ</div>
          </div>
          <div className="font-bold text-7xl hidden lg:block">
            Гол <span className="text-yellow-500">онцлог</span>
          </div>
        </div>
        <div className="flex flex-wrap justify-center font-semibold gap-10 py-7 xl:py-0 text-center">
          {ServiceJSON.map((item, index) => {
            return (
              <div className="SpecailsCard" key={index}>
                <img
                  src={item.icon}
                  alt="icon"
                  className="w-12 md:w-24"
                  draggable={false}
                />
                <div className="text-sm md:text-lg">{item.name}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
