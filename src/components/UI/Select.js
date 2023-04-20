import { useState } from "react";
import OutsideCloser from "../../hooks/useOutsideCloser";
import classes from "./Select.module.css";

const Select = (props) => {
  const [selectIsOpened, setSelectIsOpened] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const toggleSelectHandler = () => {
    setSelectIsOpened(!selectIsOpened);
  };

  const onOptionClickHandler = (value) => () => {
    setSelectedOption(value);
    setSelectIsOpened(false);
  };

  const closeSelectHandler = () => {
    setSelectIsOpened(false);
  };

  return (
    <OutsideCloser onClose={closeSelectHandler}>
      <div className={classes["select-wrapper"]} onClick={toggleSelectHandler}>
        <div
          className={`${classes.select} ${
            selectIsOpened ? classes.opened : ""
          } ${props.className}`}
        >
          <div className="flex align-center justify-between">
            <div>{selectedOption || props.selectText}</div>
            <span className={classes.arrow}></span>
          </div>
          {selectIsOpened && (
            <div className={classes.options}>
              {props.options.map((option) => (
                <div
                  onClick={onOptionClickHandler(option)}
                  key={Math.random()}
                  className={`${classes.option} ${
                    selectedOption === option ? classes.selected : ""
                  }`}
                >
                  {option}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </OutsideCloser>
  );
};

export default Select;
