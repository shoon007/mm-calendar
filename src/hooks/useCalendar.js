import { useState, useMemo } from 'react';

export const useCalendar = (initialYear = 2026) => {
  const [year, setYear] = useState(initialYear);
  const [page, setPage] = useState(0); 

  const monthsToDisplay = useMemo(() => {
    const start = page * 4;
    return Array.from({ length: 4 }, (_, i) => start + i);
  }, [page]);

  const handleNext = () => {
    if (page < 2) setPage(p => p + 1);
    else if (year < 2026) { setYear(y => y + 1); setPage(0); }
  };

  const handlePrev = () => {
    if (page > 0) setPage(p => p - 1);
    else if (year > 2021) { setYear(y => y - 1); setPage(2); }
  };


  return { year, setYear, page, setPage, monthsToDisplay, handleNext, handlePrev };
};