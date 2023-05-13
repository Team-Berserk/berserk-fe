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
      <div className="w-full flex flex-col justify-evenly">
        <div className="flex justify-between items-center md:border-b">
          <div className="flex flex-col gap-2 p-4 xl:p-0">
            <div className="font-semibold text-5xl xl:text-6xl">
              Meet Some of Our
            </div>
            <div className="font-bold text-5xl xl:text-7xl">Brains</div>
          </div>
          <div className="font-bold text-6xl hidden 2xl:block">
            MEET OUR <span className="text-yellow-500">DOCTORS</span>
          </div>
        </div>
        {Doctors ? (
          <div>
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
