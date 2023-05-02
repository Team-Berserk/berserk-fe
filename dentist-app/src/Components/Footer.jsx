import { FooterJSON } from "./json/FooterJSON";

export const Footer = () => {
  return (
    <div className="flex w-full justify-evenly h-72 my-4 bg-slate-50">
      <div className="flex flex-col justify-evenly font-light">
        <div className="flex flex-col gap-3 w-96">
          <div className="text-3xl">[logo] Soddent Dentail Clinic</div>
          <div>
            High level experience in web design and development knowledge,
            producing quality work.
          </div>
        </div>
        <div>LOGOS insta fabceovok link</div>
      </div>
      <div className="flex flex-col lg:flex-row md:flex gap-32 w-fit justify-normal items-none lg:justify-center lg:items-center">
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
  );
};
