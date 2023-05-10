export const UserManager = ({ User, Att, Numb, Date, Time }) => {
  return (
    <div className=" bg-white w-full h-10 p-4 py-2 flex ">
      <p className="w-32">{User}</p>
      {Att ? <p className=" w-40">irsen</p> : <p className=" w-40">ireegui</p>}
      <p className=" w-48">{Numb}</p>
      <p className=" w-32">{Date}</p>
      <p>{Time}</p>
    </div>
  );
};
