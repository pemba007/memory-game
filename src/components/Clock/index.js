import React, { useState, useEffect } from "react";
import Typography from "@material-ui/core/Typography";

const Clock = (props) => {
  const [time, setTime] = useState({ min: 0, sec: 10 });

  useEffect(() => {
    if (props.play) {
      var timerID = setInterval(() => setNewTime(), 1000);
      return function cleanup() {
        clearInterval(timerID);
      };
    }
  });

  useEffect(() => {
    console.log("Clock -> props.resetTime", props.resetTime);
    props.resetTime && setTime({ min: 0, sec: 10 });
    props.resetTime && props.timeReset();

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

  return (
    <>
      <Typography variant='h4' color='textPrimary' gutterBottom>
        {time.min < 10 ? `0${time.min}` : time.min} :{" "}
        {time.sec < 10 ? `0${time.sec}` : time.sec}
      </Typography>
    </>
  );
};

export default Clock;
