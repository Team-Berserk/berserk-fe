import { useContext } from "react";
import { DataContext } from "../../Providers/DataContext";
import { Link } from "react-router-dom";

export const Information = () => {
  const { setAppointment, appointment } = useContext(DataContext);

  return (
    <div className="h-screen flex flex-col justify-center items-center gap-6 bg-appointmentImg bg-fixed bg-cover bg-center">
      <div className="p-6 text-2xl lg:text-4xl font-semibold">Та нэрээ оруулна уу.</div>
      <div className="flex flex-col gap-3 items-center rounded-xl bg-white p-4 border border-gray-100">
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
      </div>
      {/* Button Section */}
      <div className="flex gap-5 py-4">
        <Link to={"/appointmentHour"}>
          <button className="CancelButton">Буцах</button>
        </Link>

        <Link to="/verification">
          <button
            className={
              !appointment.Ownername || !appointment.Surename
                ? "DisabledButton"
                : "PurpleButton"
            }
            disabled={!appointment.Ownername || !appointment.Surename}
            onClick={window.localStorage.setItem(
              "request",
              JSON.stringify(appointment)
            )}
          >
            Үргэлжлүүлэх
          </button>
        </Link>
      </div>
      {/* Button Section */}
    </div>
  );
};
