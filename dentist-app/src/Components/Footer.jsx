import clock from "../Assets/footerAssets/footerClock.svg";
import calendar from "../Assets/footerAssets/footerCalendar.svg";
import map from "../Assets/footerAssets/footerMap.svg";
import headset from "../Assets/footerAssets/footerHeadset.svg";
import WebLogo from "../Assets/headerAssets/WebLogo.svg";

export const Footer = () => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col lg:flex-row w-full justify-evenly p-2 h-fit lg:h-72">
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
        </div>
        <div className="flex justify-center md:flex-row gap-16 py-5 md:p-0 md:items-center">
          <div className="flex flex-col gap-6 w-56">
            <div className="flex gap-3 items-start">
              <img src={map} alt="map" />
              <div>
                <div className="text-lg">Xaяг</div>
                <div>Хэнтий аймаг, Хэрлэн сум, 4p бaг</div>
              </div>
            </div>
            <div className="flex gap-2 items-start">
              <img src={headset} alt="headset" />
              <div>
                <div className="text-lg">Холбогдох</div>
                <div>Утасны дугаар : +976 9877-1177</div>
                <div>
                  Фэйсбүүк :{" "}
                  <a
                    className="text-blue-500 underline"
                    href="https://www.facebook.com/profile.php?id=100057076555186"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Соддент
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-12">
            <div className="flex gap-4 items-start">
              <img src={clock} alt="clock" />
              <div>
                <div className="text-lg">Хуваарь</div>
                <div>Дaвaa-Баасан: 10:00 - 18:00</div>
                <div>Хагассайн: 12:00 - 18:00</div>
                <div>Бүтэнсайн: амарна</div>
              </div>
            </div>
            <div>
              <div className="flex gap-2 items-start">
                <img src={calendar} alt="calendar" />
                <div>
                  <div className="text-lg">Цаг авах</div>
                  <div>Яг одоо цагаа ав!</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-sm text-gray-400 flex justify-center">
        ©2023 Соддент шүдний эмнэлэг.
      </div>
    </div>
  );
};
