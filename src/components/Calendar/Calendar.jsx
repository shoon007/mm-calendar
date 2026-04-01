import React from "react";
import { useCalendar } from "../../hooks/useCalendar";
import Month from "../Month/Month";
import { translations } from "../../locales/translations";
import "./Calendar.css";
  const Calendar = ({ holidays, weekdays, months, selectLabel, prevLabel, nextLabel, lang }) => {
  const {
    year,
    setYear,
    page,
    setPage,
    monthsToDisplay,
    handleNext,
    handlePrev,
  } = useCalendar(2026);

  const t = translations[lang];

  const toMyanmarDigits = (num) => {
    const digits = { 0: "၀", 1: "၁", 2: "၂", 3: "၃", 4: "၄", 5: "၅", 6: "၆", 7: "၇", 8: "၈", 9: "၉" };
    return String(num).split("").map((d) => digits[d] || d).join("");
  };

  const todayDate = new Date();
  const todayInfo = {
    day: todayDate.getDate(),
    month: todayDate.getMonth(),
    year: todayDate.getFullYear(),
  };

  // Date Formatting 
  const currentDay = todayDate.getDate();
  const currentMonthIdx = todayDate.getMonth();
  const currentYear = todayDate.getFullYear();

  // Burmese format (ဥပမာ - ၂၀၂၆ ခုနှစ်၊ မတ်လ ၃၁ ရက်)
  const myanmarCurrentDate = `${toMyanmarDigits(currentYear)} ခုနှစ်၊ ${months[currentMonthIdx]} ${toMyanmarDigits(currentDay)} ရက်`;
  
  // English format (eg.March 31, 2026)
  const englishCurrentDate = todayDate.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });
  return (
    <div className="calendar-wrapper ">
      <div className="year-title animate-intro delay-3" style={{ textAlign: "center", marginBottom: "50px" }}>  
        {/* Main Title */}
        <h5 className="intro-text">
          {lang === "mm"
            ? `မြန်မာနိုင်ငံ ပြက္ခဒိန် - ${toMyanmarDigits(year)} ခုနှစ်`
            : `Myanmar Calendar - ${year} `}
        </h5>

        {/* Current Date Display */}
        <h6 >
          {lang === "mm" ? "ယနေ့ရက်စွဲ : " : "Current date : "}
          <span style={{ color: '#2563eb', fontWeight: 'bold' }}>
            {lang === "mm" ? myanmarCurrentDate : englishCurrentDate}
          </span>
        </h6>
      </div>
   
      <div className="calendar-container animate-intro delay-4">
        {monthsToDisplay.map((mIdx) => (
          <Month
            key={`${year}-${mIdx}`}
            year={year}
            monthIdx={mIdx}
            holidays={holidays}
            lang={lang}
            t={t} 
            monthName={months[mIdx]}
            weekdayLabels={weekdays}
            todayInfo={todayInfo}
          />
        ))}
      </div>
      {/* footer */}
      <footer className="controls">
      <div className="footer-container">
        <div className="pagination">
          <button onClick={handlePrev} disabled={year === 2021 && page === 0}>
            ‹ {prevLabel}
          </button>
          <button onClick={handleNext} disabled={year === 2026 && page === 2}>
            {nextLabel} ›
          </button>
        </div>

        <div className="year-select-container">
          <span className="year-label">{selectLabel}</span>
          <select
            className="year-dropdown"
            value={year}
            onChange={(e) => {
              const selectedYear = Number(e.target.value);
              setYear(selectedYear);
              if (typeof setPage === "function") setPage(0);
            }}
          >
            {[2021, 2022, 2023, 2024, 2025, 2026].map((y) => (
              <option key={y} value={y}>
                {lang === "mm" ? toMyanmarDigits(y) : y}
              </option>
            ))}
          </select>
        </div>
      </div>
      </footer>
    </div>
  );
};

export default Calendar;
