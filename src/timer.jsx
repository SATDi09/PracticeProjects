import { useRef, useState } from "react";

const Timer = () => {
  const [time, setTime] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const countTimer = useRef(null);
  function handleChange(e) {
    console.log("e.target", e.target);
    const { value, name } = e.target;
    setTime({ ...time, [name]: parseInt(value) });
  }
  function handleStart() {
    if(countTimer.current) return
    if (time.hours === 0 && time.minutes === 0 && time.seconds === 0) return;
    countTimer.current = setInterval(() => {
        setTime(prev=>{
            let {hours,minutes,seconds} = prev
            if (seconds > 0) {
                seconds= seconds - 1;
              } else if (time.minutes > 0 && time.seconds === 0) {
                minutes= minutes - 1; seconds= 59 ;
              } else if (hours > 0 && minutes === 0) {
                hours= hours - 1; minutes= 59; seconds= 59;
              } else{
                clearInterval(countTimer.current);countTimer.current = null;
              }
              console.log('Whats time', {hours,minutes,seconds})
              return {hours,minutes,seconds}
        })
      
    }, 1000);
  }
  function handleStop() {
    if(countTimer.current) {clearInterval(countTimer.current);countTimer.current = null;}
  }
  function handleClear() {
    if(countTimer.current) {clearInterval(countTimer.current);countTimer.current = null;}
    setTime({
        hours: 0,
        minutes: 0,
        seconds: 0,
      })
  }
//   console.log(time);
  console.log(countTimer);
  return (
    <>
      <div
        style={{
          justifyContent: "space-between",
          margin: "20%",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignContent: "center",
          }}
        >
          <label>Hours</label>
          <label>Minutes</label>
          <label>Seconds</label>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <input value={time.hours} onChange={handleChange} name="hours" type="number" />
          <input value={time.minutes} onChange={handleChange} name="minutes" type="number" />
          <input value={time.seconds} onChange={handleChange} name="seconds" type="number" />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "50px",
          }}
        >
          <button onClick={handleStart}>Start</button>
          <button onClick={handleStop}>Stop</button>
          <button onClick={handleClear}>Clear</button>
        </div>
      </div>
    </>
  );
};
export default Timer;
