import Calendar from "react-calendar";
import moment from "moment/moment";
import { useContext } from "react";
import { DataContext } from "../../Providers/DataContext";

export const CalendarComp = () => {
  const { setAppointment, checkAvailableTimes } = useContext(DataContext);

  return (
    <div>
      <Calendar
        minDate={new Date()}
        view="month"
        onClickDay={(date) => {
          setAppointment((item) => ({
            Date: moment(date).format("YYYY-MM-DD"),
          }));
          checkAvailableTimes(moment(date).format("YYYY-MM-DD"));
        }}
      />
    </div>
  );
};
