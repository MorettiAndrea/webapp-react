import { Link } from "react-router-dom";

export default function MovieCard({ movie }) {
  return (
    <>
      <div className="card">
        <img src={movie.image} className="card-img-top" alt={movie.title}></img>
        <div className="card-body">
          <h5 className="card-title">
            title:{movie.title}
            {movie.relase_year}
          </h5>
          <p>director:{movie.director}</p>
          <p>genre:{movie.genre}</p>
          <p className="card-text">{movie.abstract}</p>
          <Link to="#" className="btn btn-primary">
            Go to movie detail
          </Link>
        </div>
      </div>
    </>
  );
}
