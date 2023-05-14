// import clock from "../Assets/footerClock.svg";
// import calendar from "../Assets/footerCalendar.svg";
// import map from "../Assets/footerMap.svg";
// import headset from "../Assets/footerHeadset.svg";
import facebook from "../Assets/footerFacebook.svg";
import WebLogo from "../Assets/WebLogo.svg";

export const Footer = () => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col w-full justify-evenly md:flex-row p-2 h-fit md:h-72">
        <div className="flex flex-col justify-evenly font-light py-4 md:p-0">
          <div className="flex flex-col gap-3 w-auto">
            <div className="text-2xl md:text-2xl flex w-auto gap-2">
              <img src={WebLogo} alt="webLogo" />
            </div>
            <div className="w-auto md:w-96">
              Бид та болон таны гэр бүлийнхний амны хөндийн эрүүл ахуйн төлөө
              үргэлж хамгийн сайнаараа ажиллах болно .
            </div>
          </div>
          <a
            href="https://www.facebook.com/profile.php?id=100057076555186"
            target="_blank"
          >
            <div className="my-3 md:m-0">
              <img alt="facebookImg" src={facebook} className="w-12" />
            </div>
          </a>
        </div>
        <div className="flex justify-center md:flex-row gap-10 py-5 md:p-0 md:items-center">
          <div className="flex flex-col gap-5 w-56">
            <div className="flex gap-2 items-start">
              {/* <img src={map} alt="map"/> */}
              <div>
                <div className="text-lg">Xаяг</div>
                <div>
                  Khentii Aimag , PEARL DENTAL NYC233 Broadway18th FloorNew
                  York, NY 10279
                </div>
              </div>
            </div>
            <div className="flex gap-2 items-start">
              {/* <img src={headset} alt="headset"/> */}
              <div>
                <div className="text-lg">Holbogdoh</div>
                <div>Phone : 9877 1177</div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-12 w-56">
            <div className="flex gap-4 items-start">
              {/* <img src={clock} alt="clock"/> */}
              <div>
                <div className="text-lg">Schedule</div>
                <div>Mon-Sat 10pm - 16:00</div>
                <div>Mon-Sat 10pm - 16:00</div>
                <div>Mon-Sat 10pm - 16:00</div>
              </div>
            </div>
            <div>
              <div className="flex gap-2 items-start">
                {/* <img src={calendar} alt="calendar"/> */}
                <div>
                  <div className="text-lg">Appointment</div>
                  <div>Book appointment now!</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-sm text-gray-400 flex justify-center">
        ©2023 Soddent Dental Clinic.
      </div>
    </div>
  );
};
