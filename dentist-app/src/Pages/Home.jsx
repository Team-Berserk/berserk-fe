import { DoctorsCarousel } from "../Components/DoctorsCarousel";
import {
  AppointStep,
  AppointmentLanding,
  Footer,
  Services,
} from "../Components";
import { AboutUs } from "../Components/About-us";
import { LandingPage } from "../Components/LandingPage";

export const Home = () => {
  return (
    <div className="snap-y snap-mandatory h-full overflow-y-scroll">
      <LandingPage />
      <AppointStep />
      <Services />
      <DoctorsCarousel />
      <AboutUs />
      <AppointmentLanding />
      <Footer />
    </div>
  );
};
