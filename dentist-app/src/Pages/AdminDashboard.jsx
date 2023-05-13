import { useEffect, useState } from "react";
// import { DataContext } from "../Providers/DataContext";
import { UserManager } from "../Components/UserManager";
import { instance } from "../Clients";
import { utils } from "@amir04lm26/react-modern-calendar-date-picker";

export const Dashboard = () => {
  // const { allRequests } = useContext(DataContext);
  const [users, setUsers] = useState(null);
  const [awagdsn, setAwagdsn] = useState(0);
  const Daragin = [];

  useEffect(() => {
    const day = utils().getToday();
    const date = `${day.year}-${day.month < 10 ? "0" : ""}${day.month}-${
      day.day < 10 ? "0" : ""
    }${day.day}`;
    instance.put("manage", { date }).then((response) => {
      setUsers(Object.entries(response.data.placeholder));
      let num = 0;
      console.log(Object.entries(response.data.placeholder));
      Object.entries(response.data.placeholder).forEach((item) => {
        if (item[1]._id) {
          Daragin.push(item);
          num++;
        }
      });
      setAwagdsn(num);
    });
  }, []);

  return (
    <div className="h-screen bg-slate-50 pt-24 p-8 flex justify-center">
      <div className="w-full h-fit max-w-3xl">
        <h1 className=" font-bold text-xl">Soddent clinic admin dashboard.</h1>
        <div className="flex gap-8 pt-5">
          <div className=" w-1/3 p-3  bg-gradient-to-r from-cyan-500 to-blue-500 h-20 rounded-md">
            <h3 className="text-2xl  px-2 font-bold text-white">{`${awagdsn}`}</h3>
            <p className="text-white">Авагдсан цаг</p>
          </div>
          <div className=" w-1/3 p-3  bg-gradient-to-r from-cyan-500 to-blue-500 h-20 rounded-md">
            <h3 className="text-2xl  px-2 font-bold text-white">{`${
              8 - awagdsn
            }`}</h3>
            <p className="text-white">Сул цаг</p>
          </div>
          <div className=" w-1/3 p-3  bg-gradient-to-r from-cyan-500 to-blue-500 h-20 rounded-md">
            <h3 className="text-2xl  px-2 font-bold text-white">69</h3>
            <p className="text-white">Ямар нэг юм </p>
          </div>
        </div>
        <h1 className=" font-bold text-xl mt-16 text-center m-5">
          Өнөөдрийн үйлчлүүлэгчид
        </h1>
        <div className="h-fit  bg-slate-200 mt-8 rounded-2xl pb-10">
          <div className="h-10 w-full flex align-middle  p-4 pt-2 pr-16">
            <p className="w-32">Нэр</p>
            <p className="w-40">Ирц</p>
            <p className="w-48">Утасны Дугаар </p>
            <p className="w-32">Өдөр</p>
            <p className="w-42">Цаг</p>
          </div>
          {
            users &&
              users.map((user, index) => {
                return <UserManager key={user._id} user={user} index={index} />;
              }) //Array.map() creates a new array with each item being a function call in the array. This is a closure. The
          }
        </div>
        <h1 className=" font-bold text-xl mt-16 text-center">
          Дараагийн үйлчлүүлэгчид
          {Daragin.map((user, index) => {
            return <UserManager key={user._id} user={user} index={index} />;
          })}
        </h1>
      </div>
    </div>
  );
};
