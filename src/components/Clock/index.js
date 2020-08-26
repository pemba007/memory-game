import React, { useState, useEffect } from "react";
import Typography from "@material-ui/core/Typography";

const Clock = (props) => {
  const [time, setTime] = useState({ min: 0, sec: 10 });

  useEffect(() => {
    var timerID = setInterval(() => setNewTime(), 1000);
    return function cleanup() {
      clearInterval(timerID);
    };
  });

  // useEffect(() => {
  //   console.log("Current time", time);
  // });

  const setNewTime = () => {
    console.log("Called setNewTime", time);

    const min = time.min;
    const sec = time.sec;
    const newSeconds = sec === 0 ? 59 : sec - 1;
    console.log("setNewTime -> newSeconds", newSeconds);
    if (min === 0) {
      newSeconds === 0 &&
        props.timeOver() &&
        setTime({
          sec: newSeconds,
        }) &&
        clearInterval();
      newSeconds !== 0 && setTime({ sec: newSeconds });
    } else {
      setTime({
        min: newSeconds === 59 ? min - 1 : min,
        sec: newSeconds,
      });
      console.log("This is setini", {
        min: newSeconds === 59 ? min - 1 : min,
        sec: newSeconds,
      });
    }
  };

  return (
    <>
      <Typography variant='h4' color='textPrimary' gutterBottom>
        {(time && time.min) || "00"} : {(time && time.sec) || "00"}
      </Typography>
    </>
  );
};

export default Clock;
