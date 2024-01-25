import { useEffect, useState } from 'react';

function Clock() {
  const [time, setTime] = useState(new Date());
  const milliseconds = 1000;

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, milliseconds);
    return () => clearInterval(timer);
  }, []);

  const currentHour = String(time.getHours()).padStart(2, '0');
  const currentMinute = String(time.getMinutes()).padStart(2, '0');
  const currentSecond = String(time.getSeconds()).padStart(2, '0');

  return (
    <div id="div-clock">
      <h1 id="h1-clock">Relógio</h1>
      <p id="p-clock">{`${currentHour}:${currentMinute}:${currentSecond}`}</p>
    </div>
  );
}

export default Clock;
