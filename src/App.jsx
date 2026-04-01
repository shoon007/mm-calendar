import React, { useEffect, useState } from 'react';
import { useThemeAndLang } from './hooks/useThemeAndLang';
import { useScrollNavbar } from './hooks/useScrollNavbar';
import { translations } from './locales/translations';

// Components
import Navbar from './components/Navbar/Navbar';
import Countdown from './components/Countdown/Countdown';
import Calendar from './components/Calendar/Calendar';

// Assets
import logo1 from './assets/Logo1.svg';
import logo2 from './assets/Logo2.svg';
import sun from './assets/Sun.svg';
import moon from './assets/Moon.svg';
import profile from './assets/Profile (1).svg';
import US from './assets/US.svg';
import MN from './assets/MN.svg';

import './App.css';

const App = () => {
  const [holidays, setHolidays] = useState([]);
  const { theme, lang, setLang, toggleTheme } = useThemeAndLang();
  const isVisible = useScrollNavbar(100);
  
  const t = translations[lang];

  // Fetch Holiday Data
  useEffect(() => {
    // Base URL 
    const baseUrl = import.meta.env.BASE_URL || '/';
    
    // Logic for both Paths 
    const primaryUrl = `${baseUrl}data/holidays.json`.replace(/\/\/+/g, '/');
    const fallbackUrl = '/mm-calendar/data/holidays.json';

    const fetchData = (url) => {
      return fetch(url)
        .then(res => {
          if (!res.ok) throw new Error("Not Found");
          return res.json();
        });
    };

    //Testing primary url ,if it fails then fallback url will be tested
    fetchData(primaryUrl)
      .then(data => {
        if (data?.holidays) setHolidays(data.holidays);
      })
      .catch(() => {
        
        fetchData(fallbackUrl)
          .then(data => {
            if (data?.holidays) setHolidays(data.holidays);
          })
          .catch(err => console.error("Final Fetch Error:", err));
      });
  }, []);
  const navAssets = { logo1, logo2, sun, moon, profile, US, MN };

  return (
    <div className="app-wrapper">
      {/* Navbar */}
      <Navbar 
        isVisible={isVisible}
        lang={lang}
        setLang={setLang}
        theme={theme}
        toggleTheme={toggleTheme}
        t={t}
        {...navAssets}
      />

      <main>
        {/* Thingyan Countdown */}
        <Countdown /> 
        {/* Calendar Component */}
        <Calendar 
          lang={lang} 
          weekdays={t.weekdays} 
          months={t.months}
          selectLabel={t.selectYear} 
          holidays={holidays} 
          prevLabel={t.prev}
          nextLabel={t.next}
        />
      </main>
    </div>
  );
};

export default App;