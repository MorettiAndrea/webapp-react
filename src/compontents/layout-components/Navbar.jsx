import { NavLink} from "react-router-dom";
import paths from "../../data/paths";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary ">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ">
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to={paths.homePage}>
                  Homepage
                </NavLink>
              </li>
              <li>
                <NavLink className="nav-link" aria-current="page" to={paths.moviesList}>
                  Movies list
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to={paths.moviesDetails}>
                  Movies Details
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
  );
}