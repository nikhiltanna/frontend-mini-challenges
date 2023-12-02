import React, { useEffect, useState } from "react";

const Stopwatch = ({changecolor}) => {
  const [isRunning, setIsRunning] = useState(false);
  const [minisec, setMinisec] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);

  useEffect(() => {
    let interval = null;

    if (isRunning) {
      interval = setInterval(() => {
        setMinisec(minisec + 1);
      }, 1);
    }

    return () => clearInterval(interval);
  }, [isRunning, minisec]);

  useEffect(() => {
    if (minisec % 100 === 0 && minisec !== 0) {
      setSeconds(seconds + 1);
      setMinisec(minisec%1000);
    }
  }, [minisec]);

  useEffect(() => {
    if (seconds % 60 === 0 && seconds !== 0) {
      setMinutes(minutes + 1);
      setSeconds(seconds%60);
      changecolor(minutes%60)
    }
  }, [seconds]);

  useEffect(() => {
    if (minutes % 60 === 0 && minutes !== 0) {
        setMinutes(minutes%60);
      setHours(hours + 1);
    }
  }, [minutes]);

  const resetAll = () => {
    setIsRunning(false);
    setMinisec(0);
    setHours(0);
    setMinutes(0);
    setSeconds(0);
  };

  const startTimer = () => {
    setIsRunning(true);
  };

  const stopTimer = () => {
    setIsRunning(false);
  };

  return (
    <div className="text-center mt-28">
      <div className="  text-center">
        {hours} {minutes % 60} {seconds % 60} {minisec}
      </div>
      <div>
        <button
          onClick={() => startTimer()}
          className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-4 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
        >
          Start
        </button>
        <button
          onClick={() => stopTimer()}
          className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-4 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
        >
          Stop
        </button>
        <br />
        <button
          onClick={() => resetAll()}
          className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-4 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Stopwatch;
