import React, { useState } from 'react';

const Task2Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const changeMonth = (offset) => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + offset, 1));
  };

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const monthNames = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
  const daysOfWeek = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];

  const holidays = ["1-1", "1-7", "2-23", "3-8", "5-1", "5-9", "6-12", "11-4"];

  const daysInMonth = new Date(year, month + 1, 0).getDate();
  let firstDay = new Date(year, month, 1).getDay();
  if (firstDay === 0) firstDay = 7; 
  firstDay -= 1; 

  const blanks = Array.from({ length: firstDay }, (_, i) => <td key={`blank-${i}`}></td>);
  
  const days = [];
  for (let d = 1; d <= daysInMonth; d++) {
    const dayOfWeek = new Date(year, month, d).getDay();
    const isWeekend = (dayOfWeek === 0 || dayOfWeek === 6);
    const isHoliday = holidays.includes(`${month + 1}-${d}`);

    let className = "";
    if (isHoliday) className = "holiday";
    else if (isWeekend) className = "weekend";

    days.push(<td key={d} className={className}>{d}</td>);
  }

  const rows = [];
  let cells = [];
  
  blanks.forEach(blank => cells.push(blank));

  days.forEach((day, index) => {
    cells.push(day);
    if (cells.length === 7) {
      rows.push(<tr key={`row-${index}`}>{cells}</tr>);
      cells = [];
    }
  });

  if (cells.length > 0) {
    while (cells.length < 7) {
      cells.push(<td key={`empty-end-${cells.length}`}></td>);
    }
    rows.push(<tr key="last-row">{cells}</tr>);
  }

  return (
    <div className="calendar-container">
      <h2>Задание 2: Календарь</h2>
      <div className="calendar-controls">
        <button onClick={() => changeMonth(-1)}>← Пред.</button>
        <h3>{monthNames[month]} {year}</h3>
        <button onClick={() => changeMonth(1)}>След. →</button>
      </div>

      <table>
        <thead>
          <tr>
            {daysOfWeek.map(day => <th key={day}>{day}</th>)}
          </tr>
        </thead>
        <tbody>
          {rows}
        </tbody>
      </table>
    </div>
  );
};

export default Task2Calendar;