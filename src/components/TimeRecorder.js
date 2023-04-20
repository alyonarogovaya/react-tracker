import classes from "./TimeRecorder.module.css";
import plusLogo from "../assets/plus-blue.svg";
import tagLogo from "../assets/tag-gray.svg";
import Button from "./UI/Button";
import { useState } from "react";

const TimeRecorder = () => {
  const [isBillable, setIsBillable] = useState(false);
  // const [timer, setTimer] = useState({
  //   hours: "00",
  //   minutes: "00",
  //   seconds: "00",
  //   totalSeconds: 0,
  // });

  // const pad = (val) => {
  //   var valString = val + "";
  //   if (valString.length < 2) {
  //     return "0" + valString;
  //   } else {
  //     return valString;
  //   }
  // };

  // const setTimeHandler = () => {
  //   setTimer((prevState) => {
  //     prevState.totalSeconds++;
  //     console.log(prevState);
  //   });

  //   setInterval(setTimer, 1000);
  // };

  const changeTaskBillableHandler = () => {
    setIsBillable((prevState) => !prevState);
  };

  return (
    <div className={`flex align-center ${classes["time-recorder"]}`}>
      <input type="text" placeholder="What are you working on?" />
      <div className={`flex align-center ${classes["selected-project"]}`}>
        <img src={plusLogo} alt="Plus" />
        Project
      </div>
      <button className={classes["tag-btn"]}>
        <img src={tagLogo} alt="Tag" />
      </button>
      <button
        onClick={changeTaskBillableHandler}
        className={`${classes["btn-billing"]} ${
          isBillable ? classes.billable : ""
        }`}
      >
        <span>&#36;</span>
      </button>
      <div className={classes.timer}>
        <span className={classes.hours}>00</span>:
        <span className={classes.minutes}>00</span>:
        <span className={classes.seconds}>00</span>
      </div>
      <Button>Start</Button>
    </div>
  );
};

export default TimeRecorder;
