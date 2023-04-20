import { useState } from "react";
import classes from "./Checkbox.module.css";

const Checkbox = (props) => {
  const defaultChecked = props.checked ? props.checked : false;
  const [isChecked, setIsChecked] = useState(defaultChecked);

  const toggleCheckboxHandler = () => {
    setIsChecked((prevState) => !prevState);
  };

  return (
    <>
      <label className="flex align-center">
        <input
          type="checkbox"
          onChange={toggleCheckboxHandler}
          className={classes.checkbox}
          checked={isChecked}
          {...props}
        />
        <span>{props.label}</span>
      </label>
    </>
  );
};
export default Checkbox;
