import classes from "../components/Sidebar.module.css";
import { NavLink } from "react-router-dom";
import projectsLogo from "../assets/projects.svg";
import trackerLogo from "../assets/time-tracker.svg";
import teamLogo from "../assets/teams.svg";

const Sidebar = (props) => {
  return (
    <aside
      className={`${classes.sidebar} ${props.isOpened ? classes.opened : ""}`}
    >
      <ul className={classes["sidebar-nav"]}>
        <li>
          <NavLink
            to="/tracker"
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
          >
            <img src={trackerLogo} alt="Clock" />
            <span>Time Tracker</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/projects">
            <img src={projectsLogo} alt="List" />
            <span>Projects</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/teams">
            <img src={teamLogo} alt="Teams" />
            <span>Team</span>
          </NavLink>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
