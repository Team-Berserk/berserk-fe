import Aboutus from "../Assets/Aboutus.svg";

export const AboutUs = () => {
  return (
    <div className="h-fit md:h-screen flex xl:px-40 xl:py-28" id="aboutUs">
      <div className="w-full flex flex-col justify-evenly">
        <div className="flex justify-between items-center xl:border-[#BCBCBC] lg:border-b">
          <div className="flex flex-col gap-2 p-4 xl:p-0">
            <div className="font-bold text-4xl xl:text-7xl">
              БИД <span className="text-yellow-500">ХЭН БЭ</span>
            </div>
          </div>
          <div className="font-bold text-5xl hidden lg:block">Бидний түүх</div>
        </div>
        <div className="flex flex-col md:flex-row justify-around items-center p-8 lg:p-0 gap-5 lg:gap-0">
          <div>
            <img alt="aboutus" src={Aboutus} />
          </div>
          <div className="flex flex-col border border-gray-500 bg-slate-100 rounded-xl gap-6 h-fit p-16 items-center justify-center w-fit lg:w-[600px]">
            <div className="text-2xl font-semibold">Бидний Тухай</div>
            <div>
              Бид 2012 оноос хойш тасралтгүй үйл ажиллагаа явуулж байгаа бөгөөд
              тоног төхөөрөмжөө байнга шинэчлэн халдвар хамгааллын дэглэмээ
              чандлан мөрдөж, тав тухтай найрсаг эрүүл орчинг бүрдүүлж
              үйлчлүүлэгчийнхээ эрүүл мэндийн төлөө үргэлж хичээн ажиллаж байна.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
