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
    <div className="h-fit md:h-screen flex bg-gray-100 xl:px-40 xl:py-28 ">
      <div className="w-full flex flex-col justify-evenly">
        <div className="flex justify-between xl:border-[#BCBCBC] lg:border-b">
          <div className="flex flex-col gap-2 p-4 xl:p-0">
            <div className="font-semibold text-3xl xl:text-6xl">
              Meet Some of Our
            </div>
            <div className="font-bold text-4xl xl:text-7xl">Brains</div>
          </div>
          <div className="font-bold text-7xl hidden lg:block">
            MEET OUR <span className="text-yellow-500">DOCTORS</span>
          </div>
        </div>

        <div>
          <Carousel
            responsive={responsive}
            ssr={true}
            infinite={true}
            autoPlaySpeed={5000}
            transitionDuration={500}
            containerClass="carousel-container"
            autoPlay={true}
            className="z-10"
          >
            {Doctors &&
              Doctors.map((item, index) => {
                return <DoctorProfileCard {...item} key={index} />;
              })}
          </Carousel>
        </div>
      </div>
    </div>
  );
};
