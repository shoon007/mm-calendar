import React, { memo, useMemo } from 'react'; 
import { toMyanmarDigits } from "../../hooks/dateHelper";
import './Month.css';

const Month = memo(({ year, monthIdx, holidays, monthName, weekdayLabels, lang, t, todayInfo }) => {
  
  //Use UseMemo to avoid recalculating days and firstDay on every render, only when year or monthIdx changes
  const { days, firstDay } = useMemo(() => ({
    days: new Date(year, monthIdx + 1, 0).getDate(),
    firstDay: new Date(year, monthIdx, 1).getDay()
  }), [year, monthIdx]);

  const renderDayCell = (day) => {
    
    const dateKey = `${year}-${String(monthIdx + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    const holiday = holidays?.find(h => h.date === dateKey);

    const isToday = todayInfo && 
                    todayInfo.day === day && 
                    todayInfo.month === monthIdx && 
                    todayInfo.year === year;

    const dayClass = `day-cell ${holiday ? 'is-holiday' : ''} ${isToday ? 'is-today' : ''}`;

    return (
      <div key={day} className={dayClass}>
        {lang === 'mm' ? toMyanmarDigits(day) : day}

      
        {(holiday || isToday) && (
          <div className="holiday-tooltip">
            {isToday && (
              <span className="today-badge">
                {lang === 'mm' ? 'ယနေ့' : 'Today'}
              </span>
            )}
            {holiday && (
              <>
                {isToday && <br />}
                {t?.holidays?.[holiday.name] || holiday.name}
              </>
            )}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="month-card animate-fade-in">
      <h3 className="month-header">{monthName?.toUpperCase()}</h3>
      
      <div className="calendar-grid">
        {/* Weekday Labels */}
        {weekdayLabels?.map(label => (
          <div key={label} className="weekday-label">{label}</div>
        ))}

        {/* Empty slots for the first week */}
        {Array.from({ length: firstDay }).map((_, i) => (
          <div key={`empty-${i}`} className="empty-cell" />
        ))}
        
        {/* Actual Days */}
        {Array.from({ length: days }, (_, i) => i + 1).map(renderDayCell)}
      </div>
    </div>
  );
});

export default Month;