import { Link } from "react-router-dom";

export default function MovieCard({ props }) {
  return (
    <>
      <div className="card">
        <img src={props.image} className="card-img-top" alt={props.title}></img>
        <div className="card-body">
          <h5 className="card-title">
            title:{props.title}
            {props.relase_year}
          </h5>
          <p>director:{props.director}</p>
          <p>genre:{props.genre}</p>
          <p className="card-text">{props.abstract}</p>
          <Link to="#" className="btn btn-primary">
            Go to detail
          </Link>
        </div>
      </div>
    </>
  );
}
