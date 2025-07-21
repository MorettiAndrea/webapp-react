import { Link } from "react-router-dom";
export default function MovieCardForDetail({ Movie }) {
  return (
    <>
      <div className="card w-100" key={Movie.id}>
        <img src={Movie.image} className="card-img-top" alt={Movie.title}></img>
        <div className="card-body">
          <h5 className="card-title text-center">
            <strong>Title: </strong> {Movie.title}
            {Movie.relase_year}
          </h5>
          <p className="text-center">
            <strong>Director: </strong> {Movie.director}
          </p>
          <p className="text-center">
            <strong>Genre: </strong> {Movie.genre}
          </p>
          <p className="card-text text-center">{Movie.abstract}</p>
          <div className="d-center"></div>
        </div>
      </div>
    </>
  );
}
