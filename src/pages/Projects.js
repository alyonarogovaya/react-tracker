import Button from "../components/UI/Button";
import ProjectsTable from "../components/projects/ProjectsTable";
import { useState } from "react";
import ProjectForm from "../components/projects/ProjectForm";

const Projects = () => {
  const [formIsVisible, setFormIsVisible] = useState(false);

  const formVisibilityHandler = () => {
    setFormIsVisible(true);
  };

  const closeModalHandler = () => {
    setFormIsVisible(false);
  };

  return (
    <>
      <div className="flex justify-between page-header">
        <h2>Projects</h2>
        <Button onClick={formVisibilityHandler}>Create new project</Button>
      </div>
      {formIsVisible && <ProjectForm onClose={closeModalHandler} />}
      <ProjectsTable />
    </>
  );
};

export default Projects;
