import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = ({ 
  isVisible, 
  lang, 
  setLang, 
  theme, 
  toggleTheme, 
  t, 
  US, 
  MN, 
  moon, 
  sun, 
  profile, 
  logo1, 
  logo2 
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Close menu on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    // Watch Scroll event
    window.addEventListener('scroll', handleScroll);

  
    // If Component  unmounts, remove the event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isMenuOpen]);

  return (
    <header className={`navbar animate-intro delay-1 ${isVisible ? 'nav-visible' : 'nav-hidden'}`}>
      {/* Brand Logo */}
   
      <div className="brand">
         <a href="">
        {theme === 'light' ? (
          <img src={logo1} alt="Logo" style={{ width: '140px' }}/> 
        ) : (
          <img src={logo2} alt="Logo" style={{ width: '140px' }}/> 
        )}
         </a>
        <span className="dim">Calendar</span>
      </div>
   

      {/* Hamburger Menu Icon */}
      <div 
        className="menu-icon" 
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle Navigation"
      >
        <div className={`bar ${isMenuOpen ? 'open' : ''}`}></div>
        <div className={`bar ${isMenuOpen ? 'open' : ''}`}></div>
        <div className={`bar ${isMenuOpen ? 'open' : ''}`}></div>
      </div>

      {/* Navigation Controls Area */}
      <div className={`nav-controls ${isMenuOpen ? 'active' : ''}`}>
        <div className="lang-selector">
          <button 
            onClick={() => { setLang('en'); setIsMenuOpen(false); }} 
            className={`lang-toggle-btn ${lang === 'en' ? 'is-active' : ''}`}
          >
            <img src={US} alt="English" className="btn-icon" />
            <span>English</span>
          </button>
          
          <button 
            onClick={() => { setLang('mm'); setIsMenuOpen(false); }} 
            className={`lang-toggle-btn ${lang === 'mm' ? 'is-active' : ''}`}
          >
            <img src={MN} alt="Myanmar" className="btn-icon" />
            <span>မြန်မာ</span>
          </button>
        </div>

        <button 
          className="theme-toggle-btn" 
          onClick={() => { toggleTheme(); setIsMenuOpen(false); }}
        >
          {theme === 'light' ? (
            <>
              <img src={moon} alt="Dark Mode" className="theme-icon" />
              <span>{t.themeDark}</span>
            </>
          ) : (
            <>
              <img src={sun} alt="Light Mode" className="theme-icon" />
              <span>{t.themeLight}</span>
            </>
          )}
        </button>

        <div className="user-tag">
          <img src={profile} alt="User Profile" style={{ marginLeft: '6px' }} />
        </div>
      </div>
    </header>
  );
};

export default Navbar;