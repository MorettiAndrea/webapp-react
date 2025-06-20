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
    
          <div className="card">
          { image && <img src={image} className="card-img-top" alt={title} /> }
            <div className="card-body text-center">
                <h3 className="card-title">{title} ({relase_year})</h3>
               {director && <p className="card-text"><strong>{director}</strong></p>}
               {abstract && <p className="card-text">{abstract}</p>}
                <Link to={`/movies/${id}`} className="btn btn-primary">Movie details</Link> 
            </div>
        </div>
      
    </>
  );
}