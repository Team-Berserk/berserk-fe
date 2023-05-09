import { useContext } from "react";
import { DataContext } from "../../Providers/DataContext";

export const Information = () => {
  const {
    surename,
    ownername,
    registration,
    setOwnername,
    setRegistration,
    setSurename,
  } = useContext(DataContext);

  return (
    <div className="flex flex-col gap-3 items-center ">
      <div className="flex flex-col gap-2">
        <div className="font-bold">Овог</div>
        <input
          className="border border-[#516EFF] p-2 outline-none rounded-lg w-72"
          placeholder="Овог"
          value={surename && surename}
          onChange={(e) => setSurename(e.target.value)}
        />
      </div>
      <div className="flex flex-col gap-2">
        <div className="font-bold">Нэр</div>
        <input
          className="border border-[#516EFF] p-2 outline-none rounded-lg w-72"
          placeholder="Нэр"
          value={ownername && ownername}
          onChange={(e) => setOwnername(e.target.value)}
        />
      </div>
      <div className="flex flex-col gap-2">
        <div className="font-bold">Регистрийн дугаар</div>
        <input
          maxLength={10}
          className="border border-[#516EFF] p-2 outline-none rounded-lg w-72"
          placeholder="Регистрийн дугаар"
          value={registration && registration}
          onChange={(e) => setRegistration(e.target.value)}
        />
      </div>
    </div>
  );
};
