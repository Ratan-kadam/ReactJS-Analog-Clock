import React from 'react';
import { useState, useEffect } from 'react';

const HOUR_ANGLE = 360 / 12;
const MIN_ANGLE = 360 / 60;
const SEC_ANGLE = 360 / 60;

export default function App() {
  return (
    <div>
      <Clock></Clock>
    </div>
  );
}

function Clock() {
  const [date, setDate] = useState({
    hours: 0,
    min: 0,
    second: 0,
  });

  useEffect(() => {
    let timer = setInterval(() => {
      let date = new Date();

      const hours_val = date.getHours();
      const min_val = date.getMinutes();
      const sec_val = date.getSeconds();

      const hours = (hours_val % 12) * HOUR_ANGLE;
      const min = (min_val % 60) * MIN_ANGLE;
      const sec = (sec_val % 60) * SEC_ANGLE;

      setDate({
        hours,
        min,
        sec,
      });
    }, 1000);
  }, []);

  const { hours, min, sec } = date;
  return (
    <div className="clock">
      <div
        className="hour"
        style={{ transform: `rotate(${hours}deg)`, transformOrigin: 'bottom' }}
      ></div>
      <div
        className="min"
        style={{ transform: `rotate(${min}deg)`, transformOrigin: 'bottom' }}
      ></div>
      <div
        className="sec"
        style={{ transform: `rotate(${sec}deg)`, transformOrigin: 'bottom' }}
      ></div>
    </div>
  );
}
