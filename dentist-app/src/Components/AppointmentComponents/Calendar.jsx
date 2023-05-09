import "react-modern-calendar-datepicker/lib/DatePicker.css";
import { Calendar, utils } from "@amir04lm26/react-modern-calendar-date-picker";
import { useContext, useEffect } from "react";
import { DataContext } from "../../Providers/DataContext";
import { useState } from "react";

export const CalendarComp = () => {
  const [selectedDay, setSelectedDay] = useState(null);
  const { checkAvailableTimes, setAppointment, appointment } =
    useContext(DataContext);

  const disabledDays = [
    {
      year: 2023,
      month: 5,
      day: 4,
    },
    {
      year: 2023,
      month: 5,
      day: 20,
    },
    {
      year: 2023,
      month: 5,
      day: 21,
    },
  ];

  const onChange = (date) => {
    setSelectedDay(date);

    checkAvailableTimes(
      `${date.year}-${date.month < 10 ? "0" : ""}${date.month}-${
        date.day < 10 ? "0" : ""
      }${date.day}`
    );

    setAppointment(() => ({
      Date: `${date.year}-${date.month < 10 ? "0" : ""}${date.month}-${
        date.day < 10 ? "0" : ""
      }${date.day}`,
    }));
  };

  return (
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
  );
};
