import { Link } from "react-router-dom";
export default function MoviesCard(){return (<>
<div className="col-4">
 <div className="row"><div className="card">
    <img src={movie.image} alt={movie.title} />
    <h3 className="card-title">{movie.title}({movie.relase_year})</h3>
    <section className="card-text">
    <p><strong>{movie.director}</strong></p>
    <p>{movie.abstract}</p>
    </section>
    <Link to={`/movies/${movie.id}`}>go to movie details</Link>
    </div>
    </div>
</div>
</>)}




