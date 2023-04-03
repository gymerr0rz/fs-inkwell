import { useState, useEffect } from 'react';
import {
  PomodoroContainer,
  PomodoroButtons,
} from '../../styles/pomodoro/Pomodoro.styled';
import { Pause, Play, StopCircle } from 'lucide-react';

const Pomodoro = () => {
  const [minutes, setMinutes] = useState(20);
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const startTimer = () => {
    setIsRunning(true);
  };

  const pauseTimer = () => {
    setIsRunning(false);
  };

  const stopTimer = () => {
    setMinutes(20);
    setSeconds(0);
    setIsRunning(false);
  };

  useEffect(() => {
    let intervalId;

    if (isRunning) {
      intervalId = setInterval(() => {
        if (minutes === 0 && seconds === 0) {
          clearInterval(intervalId);
          setIsRunning(false);
        } else if (seconds === 0) {
          setMinutes(minutes - 1);
          setSeconds(59);
        } else {
          setSeconds(seconds - 1);
        }
      }, 1000);
    } else {
      clearInterval(intervalId);
    }

    return () => clearInterval(intervalId);
  }, [isRunning, minutes, seconds]);

  return (
    <PomodoroContainer>
      <h1>POMODORO</h1>
      <span>{`${minutes}:${seconds < 10 ? '0' : ''}${seconds}`}</span>
      <PomodoroButtons>
        <button onClick={startTimer} disabled={isRunning}>
          <Play size={15} />
          START
        </button>
        <button onClick={pauseTimer} disabled={!isRunning}>
          <Pause size={15} />
          PAUSE
        </button>
        <button onClick={stopTimer} disabled={!isRunning}>
          <StopCircle size={15} />
          STOP
        </button>
      </PomodoroButtons>
    </PomodoroContainer>
  );
};

export default Pomodoro;
