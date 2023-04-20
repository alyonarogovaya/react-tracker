import Table from "../UI/Table";
import ProjectTableRow from "./ProjectTableRow";

const DUMMY_PROJECTS = [
  {
    id: "1",
    name: "colombohurdlaw",
    client: "david black",
    tracked: "0.77h",
    progress: "-",
    access: "public",
    color: "rgb(139, 195, 74)",
  },
  {
    id: "2",
    name: "Real estate",
    client: "eli",
    tracked: "7.11h",
    progress: "-",
    access: "public",
    color: "rgb(0, 188, 212)",
  },
];

const ProjectsTable = () => {
  return (
    <>
      <Table title="Projects">
        <thead>
          <tr>
            <th>Name</th>
            <th>Client</th>
            <th>Tracked</th>
            <th>Progress</th>
            <th>Access</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {DUMMY_PROJECTS.map((project) => (
            <ProjectTableRow
              key={project.id}
              name={project.name}
              client={project.client}
              tracked={project.tracked}
              access={project.access}
              progress={project.progress}
              color={project.color}
            />
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default ProjectsTable;
