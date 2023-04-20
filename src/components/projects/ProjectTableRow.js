import starLogo from "../../assets/favorites.svg";

const ProjectTableRow = (props) => {
  return (
    <tr>
      <td>
        <div className="flex align-center">
          <i style={{ backgroundColor: props.color }}></i>
          {props.name}
        </div>
      </td>
      <td>{props.client}</td>
      <td>{props.tracked}</td>
      <td>{props.progress}</td>
      <td>{props.access}</td>
      <td>
        <button>
          <img src={starLogo} alt="Star" />
        </button>
      </td>
    </tr>
  );
};

export default ProjectTableRow;
