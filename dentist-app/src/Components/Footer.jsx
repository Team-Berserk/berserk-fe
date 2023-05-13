import { FooterJSON } from "./json/FooterJSON";
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
          <div className="my-3 md:m-0">LOGOS insta fabceovok link</div>
        </div>
        <div className="flex justify-center md:flex-row gap-10 py-5 md:p-0 md:items-center">
          <div className="flex flex-col gap-2">
            <h3>Products</h3>
            {FooterJSON.map((item, index) => {
              return <div key={index}>{item.name}</div>;
            })}
          </div>
          <div className="flex flex-col gap-2">
            <h3>Company</h3>
            {FooterJSON.map((item, index) => {
              return <div key={index}>{item.name}</div>;
            })}
          </div>
          <div className="flex flex-col gap-2">
            <h3>Donations</h3>
            {FooterJSON.map((item, index) => {
              return <div key={index}>{item.name}</div>;
            })}
          </div>
        </div>
      </div>
      <div className="text-sm text-gray-400 flex justify-center">
        ©2023 Soddent Dental Clinic.
      </div>
    </div>
  );
};
