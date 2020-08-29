import React, { useState, useEffect } from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const Clock = (props) => {
  const [time, setTime] = useState({ min: 3, sec: 0 });

  const [timeSet, setTimeSet] = useState(false);

  useEffect(() => {
    console.log("Clock use effect called");
    if (timeSet) {
      console.log("Setting time");
      var timerID = setInterval(() => setNewTime(), 1000);
      // setTimeSet(true);
      return function cleanup() {
        clearInterval(timerID);
      };
    }
  }, [time]);

  useEffect(() => {
    console.log("Clock -> props.resetTime", props.resetTime);
    props.resetTime && setTime({ min: 3, sec: 0 });
    props.resetTime && props.timeReset();
    props.resetTime && setTimeSet(false);

    return () => {};
  }, [props.resetTime]);

  const setNewTime = () => {
    console.log("Called setNewTime", time);

    const min = time.min;
    const sec = time.sec;
    const newSeconds = sec === 0 ? 59 : sec - 1;
    console.log("setNewTime -> newSeconds", newSeconds);
    if (min === 0) {
      if (newSeconds === 0) {
        console.warn("Time should be over");
        setTime({
          min: 0,
          sec: 0,
        });
        setTimeSet(false);
        props.timeOver();
      } else {
        setTime({
          min: min,
          sec: newSeconds,
        });
      }
    } else {
      setTime({
        min: newSeconds === 59 ? min - 1 : min ? min : 0,
        sec: newSeconds,
      });
      console.log("This is setini", {
        min: newSeconds === 59 ? min - 1 : min ? min : 0,
        sec: newSeconds,
      });
    }
  };

  const _clockStart = () => {
    console.log("Starting the clock");
    setTime({ min: 3, sec: 0 });

    !props.justGameOver && props.handleClockStart();
    !props.justGameOver && setTimeSet(true);
  };

  return (
    <>
      {timeSet ? (
        <Typography variant='h4' color='textPrimary' gutterBottom>
          {time.min < 10 ? `0${time.min}` : time.min} :{" "}
          {time.sec < 10 ? `0${time.sec}` : time.sec}
        </Typography>
      ) : (
        <Button variant='contained' color='primary' onClick={_clockStart}>
          Start Clock
        </Button>
      )}
    </>
  );
};

export default Clock;
