import { Link } from "react-router-dom";


export default function MoviesCard({
  image,
  title, 
  relase_year,
  director,
  abstract,
  id
}) {
  return (
    <>
   
      <div className="col-4">
        <div className="row"> 
          <div className="card">
            <img src={image} className="card-img-top " alt={title} /> 
            <div className="card-body text-center">
                <h3 className="card-title">{title} ({relase_year})</h3>
                <p><strong>{director}</strong></p>
                <p className="card-text">{abstract}</p>
                <Link to={`/movies/${id}`} className="btn btn-primary">Movie dettails</Link> 
            </div>
          </div>
        </div>
      </div>
    </>
  );
}