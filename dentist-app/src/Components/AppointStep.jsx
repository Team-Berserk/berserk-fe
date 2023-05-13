import { StepsJSON } from "../Components/json/StepsJSON";

export const AppointStep = () => {
  return (
    <div className="flex h-fit 2xl:h-96 justify-center bg-dental2 bg-fixed bg-center bg-cover">
      <div className="flex flex-col 2xl:flex-row py-0 xl:py-20 w-full justify-evenly items-center gap-16 2xl:gap-0">
        <div className="text-white flex flex-col gap-5 px-10 xl:px-0 pt-20 xl:pt-0">
          <div className="font-semibold text-4xl xl:text-5xl">
            Манай үйлчилгээг хэрхэн авах вэ?
          </div>
          <div className="font-medium text-lg xl:text-xl">
            Эдгээр энгийн алхмуудыг дагаарай
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-center w-80 md:w-fit font-semibold text-lg pb-20 xl:pb-0 gap-10">
          {StepsJSON.map((item, index) => {
            return (
              <div className="ServiceCard text-center py-3" key={index}>
                <img
                  src={item.icon}
                  alt="icon"
                  className="w-12"
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
