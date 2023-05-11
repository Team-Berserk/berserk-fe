import { OrderJSON } from "../Components/json/OrderJSON";

export const OrderStatus = () => {
  return (
    <div className="h-screen justify-center items-center flex bg-slate-100">
      <div className="h-screen flex flex-col justify-center px-5 ">
        <div className="h-20 flex items-center">
          <p className="text-3xl font-bold">Order Status</p>
        </div>
        <div className="w-auto h-auto bg-white p-2 pb-0 rounded-2xl md:w-[500px]">
          <div className="auto h-auto border-b-2 p-6 border-dashed bg-white">
            <p className="text-3xl font-bold text-sky-500">Your ID</p>
            <p>Your order ID</p>
          </div>
        </div>
        <div className="w-auto h-fit bg-white p-2 rounded-2xl flex flex-col items-center">
          {OrderJSON.map((item, index) => {
            return (
              <div
                className="w-80 flex justify-between items-center p-4 bg-white md:w-[480px]"
                key={index}
              >
                <p className="my-2">{item.name}</p>
                <p className="text-slate-300">{item.clock}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
