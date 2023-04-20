import Modal from "../UI/Modal";
import Input from "../UI/Input";
import classes from "./ProjectForm.module.css";
import Select from "../UI/Select";
import Checkbox from "../UI/Checkbox";

const ProjectForm = (props) => {
  const options = ["Option 1", "2"];

  return (
    <Modal
      title="Create new project"
      buttonText="Create"
      onClose={props.onClose}
    >
      <form className={classes.form}>
        <Input type="text" placeholder="Enter project name" />
        <Select selectText="Select client" options={options} />
        <div>
          <Checkbox label="Public" />
        </div>
      </form>
    </Modal>
  );
};

export default ProjectForm;
