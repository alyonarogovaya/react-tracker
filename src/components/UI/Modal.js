import classes from "./Modal.module.css";
import closeLogo from "../../assets/close.svg";
import Button from "./Button";
import ReactDOM from "react-dom";

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <header className="flex justify-between">
        <h2>{props.title}</h2>
        <button onClick={props.onClose}>
          <img src={closeLogo} alt="Close" />
        </button>
      </header>
      <div className={classes["modal-content"]}>{props.children}</div>
      <footer className="flex">
        <button className={classes["btn-cancel"]} onClick={props.onClose}>
          Cancel
        </button>
        <Button>{props.buttonText}</Button>
      </footer>
    </div>
  );
};

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClose}></div>;
};

const Modal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose} />,
        document.querySelector(".backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          title={props.title}
          buttonText={props.buttonText}
          onClose={props.onClose}
        >
          {props.children}
        </ModalOverlay>,
        document.querySelector(".modal-root")
      )}
    </>
  );
};

export default Modal;
