import React, { useState, useEffect } from 'react';

function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h2>Relógio</h2>
      <h3>{time.toLocaleTimeString()}</h3>
    </div>
  );
}

export default Clock;
