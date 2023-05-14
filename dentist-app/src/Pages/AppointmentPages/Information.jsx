import { useContext } from "react";
import { DataContext } from "../../Providers/DataContext";
import { Link } from "react-router-dom";

export const Information = () => {
  const { setAppointment, appointment } = useContext(DataContext);

  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <div className="p-6 text-4xl font-semibold">Та нэрээ оруулна уу.</div>
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
      </div>
      <div className="flex gap-5 py-4">
        <Link to={"/appointmentHour"}>
          <button className="CancelButton">Cancel</button>
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
            <div>Next</div>
          </button>
        </Link>
      </div>
    </div>
  );
};
