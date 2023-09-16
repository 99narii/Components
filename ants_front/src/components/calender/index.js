import { useState } from "react";
import Calendar from "react-calendar";
import './style.css';

export const CalendarPage = ({ user }) => {
    const [value, onChange] = useState(new Date());
    const tileClassName = ({ date, view }) => {     //날자에 하이라이트
        if (date.getFullYear() === 2023 && date.getMonth() === 9 && date.getDate() === 10) {
            return 'highlight';     //월은 실제 월에서 -1
        }
    }

    return (
      <div className="calender">
        <Calendar onChange={onChange} value={value} tileClassName={tileClassName} />
      </div>
    );
};
