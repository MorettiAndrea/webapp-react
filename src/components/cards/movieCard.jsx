import { Link } from "react-router-dom";

export default function MovieCard({ props }) {
  return (
    <>
      <div className="card" key={props.id}>
        <img src={props.image} className="card-img-top" alt={props.id}></img>
        <div className="card-body">
          <h5 className="card-title text-center">
            <strong>Title: </strong> {props.title}
            {props.relase_year}
          </h5>
          <p className="text-center">
            <strong>Director: </strong> {props.director}
          </p>
          <p className="text-center">
            <strong>Genre: </strong> {props.genre}
          </p>
          <p className="card-text text-center">{props.abstract}</p>
          <div className="d-center">
            <Link to="#" className="btn btn-primary ">
              Go to movie detail
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
