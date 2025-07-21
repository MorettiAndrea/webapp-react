import paths from "../../data/paths";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand ms-3" to={paths.homePage}>
          Homepage
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link className="nav-link" to={paths.moviesPage}>
                Movie
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={paths.aboutPage}>
                About Us
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
