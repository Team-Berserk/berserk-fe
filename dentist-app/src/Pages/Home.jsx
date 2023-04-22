import Landing from "../Assets/dentl.avif";

export const Home = () => {
  return (
    <div>
      {/* <Header/> */}
      <div className="flex border-2 border-rose-500 h-screen justify-evenly items-center">
        <div
          className="flex flex-col p-1 gap-2 font-medium text-sm lg:text-md"
          style={{ width: "485px" }}
        >
          <div className="text-5xl font-medium p-1">
            Хэнтий аймгийн хамгийн <span className="text-orange-400">гал</span>{" "}
            эмнэлэг
          </div>
          <div className=" p-1 text-gray-400">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500 specimen book.
          </div>
          <button className="bg-sky-400 p-3 rounded-2xl text-white shadow-md w-32 active:bg-sky-600 hover:bg-sky-500">
            Цаг захиалах
          </button>
        </div>
        <div className="w-1/2 justify-center hidden lg:flex">
          <img src={Landing} />
        </div>
      </div>
    </div>
  );
};
