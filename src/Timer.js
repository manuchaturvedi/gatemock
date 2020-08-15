import React, { useState, useEffect } from 'react';

const Timer = () => {
  const [seconds, setSeconds] = useState(500);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(seconds => seconds - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="">
      <header className="">
        {seconds} seconds left.
      </header>
    </div>
  );
};
export default Timer;