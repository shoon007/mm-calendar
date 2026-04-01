import React, { useState, useEffect } from "react";
import "./Countdown.css";

const Countdown = () => {
  // Thingyan starts April 13
  const targetDate = new Date("2026-04-13T00:00:00").getTime();
  const [timeLeft, setTimeLeft] = useState({ d: 0, h: 0, m: 0, s: 0 });
  const [isFinished, setIsFinished] = useState(false);
  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const diff = targetDate - now;
      if (diff <= 0) return clearInterval(timer);

      setTimeLeft({
        d: Math.floor(diff / (1000 * 60 * 60 * 24)),
        h: Math.floor((diff / (1000 * 60 * 60)) % 24),
        m: Math.floor((diff / 1000 / 60) % 60),
        s: Math.floor((diff / 1000) % 60),
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="thingyan-container animate-intro delay-2">
      {isFinished ? (
        <h5 className="animate-fade-in">
          ပျော်ရွှင်ဖွယ် <strong>သင်္ကြန်အခါသမယဖြစ်ပါစေ</strong>
        </h5>
      ) : (
        <>
           <div className="cards-wrapper">
            <FlipUnit label="Days" value={timeLeft.d} />
            <FlipUnit label="Hours" value={timeLeft.h} />
            <FlipUnit label="Minutes" value={timeLeft.m} />
            <FlipUnit label="Seconds" value={timeLeft.s} />
          </div>
         
        </>
      )}
    </div>
  );
};

const FlipUnit = ({ value, label }) => {
  const formatted = String(value).padStart(2, "0");
  const [previous, setPrevious] = useState(formatted);

  useEffect(() => {

    const timeout = setTimeout(() => {
      setPrevious(formatted);
    }, 900);
    return () => clearTimeout(timeout);
  }, [value, formatted]);

  return (
    <div className="card-container">
      <div className="flip-card">
 
        <div className="top-half">
          <span>{formatted}</span>
        </div>
        <div className="bottom-half">
          <span>{previous}</span>
        </div>

 
        <div className="flip-animate" key={value}>
          <div className="top-flip">
            <span>{previous}</span>
          </div>
          <div className="bottom-flip">
            <span>{formatted}</span>
          </div>
        </div>
      </div>
      <p className="unit-label">{label}</p>
    </div>
  );
};

export default Countdown;
