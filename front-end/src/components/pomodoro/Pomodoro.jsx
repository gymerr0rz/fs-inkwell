import { useState, useEffect } from 'react';
import {
  PomodoroContainer,
  PomodoroButtons,
} from '../../styles/pomodoro/Pomodoro.styled';
import { Pause, Play, StopCircle } from 'lucide-react';

const Pomodoro = () => {
  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  function checkButtonActive(e) {
    const buttons = document.querySelectorAll('.btn');
    const buttonClicked = e.currentTarget;
    buttons.forEach((btn) => {
      if (buttonClicked === btn) {
        buttons.forEach((a) => a.classList.remove('active'));
        btn.classList.add('active');
      }
    });
  }

  const startTimer = (e) => {
    setIsRunning(true);
    checkButtonActive(e);
  };

  const pauseTimer = (e) => {
    setIsRunning(false);
    checkButtonActive(e);
  };

  const stopTimer = (e) => {
    setMinutes(25);
    setSeconds(0);
    setIsRunning(false);
    checkButtonActive(e);
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
        <button
          onClick={(e) => startTimer(e)}
          disabled={isRunning}
          className="btn play"
        >
          <Play size={15} />
          START
        </button>
        <button
          onClick={(e) => pauseTimer(e)}
          disabled={!isRunning}
          className="btn pause"
        >
          <Pause size={15} />
          PAUSE
        </button>
        <button
          onClick={(e) => stopTimer(e)}
          disabled={!isRunning}
          className="btn stop"
        >
          <StopCircle size={15} />
          STOP
        </button>
      </PomodoroButtons>
    </PomodoroContainer>
  );
};

export default Pomodoro;
