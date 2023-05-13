import "react-modern-calendar-datepicker/lib/DatePicker.css";
import { Calendar, utils } from "@amir04lm26/react-modern-calendar-date-picker";
import { useContext } from "react";
import { DataContext } from "../../Providers/DataContext";
import { useState } from "react";
import { Link } from "react-router-dom";

export const CalendarComp = () => {
  const [selectedDay, setSelectedDay] = useState(null);
  const { setAppointment, appointment, setPhoneNumber } =
    useContext(DataContext);

  const disabledDays = [
    {
      year: 2023,
      month: 7,
      day: 11,
    },
    {
      year: 2023,
      month: 7,
      day: 12,
    },
    {
      year: 2023,
      month: 7,
      day: 13,
    },
    {
      year: 2023,
      month: 7,
      day: 14,
    },
    {
      year: 2023,
      month: 7,
      day: 15,
    },
  ];

  const Cancel = () => {
    window.localStorage.removeItem("request");
    setPhoneNumber("");
    setAppointment({
      Date: "",
      Hour: "",
      Ownername: "",
      Doctor: "",
      Surename: "",
      Phonenumber: "",
    });
  };

  const TimerChangerFormat = (date) => {
    const Date = `${date.year}-${date.month < 10 ? "0" : ""}${date.month}-${
      date.day < 10 ? "0" : ""
    }${date.day}`;

    return Date;
  };

  const onChange = (date) => {
    setSelectedDay(date);

    setAppointment((prev) => ({
      ...prev,
      Date: TimerChangerFormat(date),
    }));
  };

  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <div className="flex flex-col gap-3">
        <Calendar
          value={selectedDay}
          onChange={(date) => onChange(date)}
          disabledDays={disabledDays}
          minimumDate={utils().getToday()}
          colorPrimary="#516EFF"
          shouldHighlightWeekends
        />
      </div>
      <div className="flex gap-5 py-4">
        <Link to={"/"}>
          <button className="CancelButton" onClick={Cancel}>
            Cancel
          </button>
        </Link>
        <Link to="/appointmentDoctors">
          <button
            className={!appointment.Date ? "DisabledButton" : "PurpleButton"}
            disabled={!appointment.Date}
            onClick={window.localStorage.setItem(
              "request",
              JSON.stringify(appointment)
            )}
          >
            Next
          </button>
        </Link>
      </div>
    </div>
  );
};
