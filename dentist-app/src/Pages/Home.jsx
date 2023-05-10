import {
  AboutUs,
  AppointStep,
  AppointmentLanding,
  DoctorsCarousel,
  Footer,
  LandingPage,
  Services,
} from "../Components";

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
