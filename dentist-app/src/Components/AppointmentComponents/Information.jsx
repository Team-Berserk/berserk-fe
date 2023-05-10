import { useContext } from "react";
import { DataContext } from "../../Providers/DataContext";

export const Information = () => {
  const { setAppointment, appointment } = useContext(DataContext);

  return (
    <div className="flex flex-col gap-3 items-center">
      <div className="flex flex-col gap-2">
        <div className="font-bold">Овог</div>
        <input
          className="infoInput"
          placeholder="Овог"
          value={appointment && appointment.Surename}
          onChange={(e) =>
            setAppointment((prev) => ({
              ...prev,
              Surename: e.target.value,
            }))
          }
        />
      </div>
      <div className="flex flex-col gap-2">
        <div className="font-bold">Нэр</div>
        <input
          className="infoInput"
          placeholder="Нэр"
          value={appointment && appointment.Ownername}
          onChange={(e) =>
            setAppointment((prev) => ({
              ...prev,
              Ownername: e.target.value,
            }))
          }
        />
      </div>
      <div className="flex flex-col gap-2">
        <div className="font-bold">Регистрийн дугаар</div>
        <input
          maxLength={10}
          className="infoInput"
          placeholder="Регистрийн дугаар"
          value={appointment && appointment.Registration}
          onChange={(e) =>
            setAppointment((prev) => ({
              ...prev,
              Registration: e.target.value,
            }))
          }
        />
      </div>
    </div>
  );
};
