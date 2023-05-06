import "react-modern-calendar-datepicker/lib/DatePicker.css";
import { Calendar, utils } from "@amir04lm26/react-modern-calendar-date-picker";
import { useContext } from "react";
import { DataContext } from "../../Providers/DataContext";
import { useState } from "react";

export const CalendarComp = () => {
  const { setAppointment, checkAvailableTimes } = useContext(DataContext);
  const [selectedDay, setSelectedDay] = useState(null);

  const disabledDays = [
    {
      year: 2023,
      month: 5,
      day: 9,
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
    setAppointment(() => ({
      Date: `${date.year}-${date.month < 10 ? "0" : ""}${date.month}-${
        date.day < 10 ? "0" : ""
      }${date.day}`,
    }));

    checkAvailableTimes(
      `${date.year}-${date.month < 10 ? "0" : ""}${date.month}-${
        date.day < 10 ? "0" : ""
      }${date.day}`
    );
  };

  return (
    <div>
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
