import classes from "./Table.module.css";

const Table = (props) => {
  return (
    <>
      <div className={classes["table-title"]}>{props.title}</div>
      <table className={classes.table}>{props.children}</table>
    </>
  );
};

export default Table;
