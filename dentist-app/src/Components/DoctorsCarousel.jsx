import "react-multi-carousel/lib/styles.css";
import { useContext } from "react";
import { DataContext } from "../Providers/DataContext";
import Carousel from "react-multi-carousel";
import { DoctorProfileCard } from "./DoctorPorfileCard";

export const DoctorsCarousel = () => {
  const { Doctors } = useContext(DataContext);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 3000, min: 1560 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 1560, min: 970 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 970, min: 750 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 750, min: 0 },
      items: 1,
    },
  };

  return (
    <div
      className="h-fit md:h-screen flex bg-gray-100 xl:px-40 xl:py-28"
      id="doctors"
    >
      <div className="w-full flex flex-col gap-12 lg:gap-44">
        <div className="flex justify-between items-center md:border-b">
          <div className="flex flex-col gap-2 p-4 xl:p-0">
            <div className="font-semibold text-5xl xl:text-6xl">
              Мэргэшсэн шүдний
            </div>
            <div className="font-bold text-5xl xl:text-7xl">эмч нар</div>
          </div>
          <div className="font-bold text-6xl hidden 2xl:block">
            Манай <span className="text-yellow-500">эмч</span> нар
          </div>
        </div>
        {Doctors ? (
          <div className="p-6 lg:p-0">
            <Carousel
              responsive={responsive}
              ssr={true}
              infinite={true}
              autoPlaySpeed={4000}
              transitionDuration={500}
              autoPlay={true}
              className="z-10"
            >
              {Doctors &&
                Doctors.map((item, index) => {
                  return <DoctorProfileCard {...item} key={index} />;
                })}
            </Carousel>
          </div>
        ) : (
          <div className="flex justify-center items-center">
            <div className="animate-spin inline-block w-12 h-12 border-[6px] border-current border-t-transparent text-gray-400 rounded-full">
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
