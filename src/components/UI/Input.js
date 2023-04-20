import classes from "./Input.module.css";

const Input = (props) => {
  return (
    <input
      type={props.type}
      className={classes.input}
      placeholder={props.placeholder}
      id={props.id}
    />
  );
};

export default Input;
