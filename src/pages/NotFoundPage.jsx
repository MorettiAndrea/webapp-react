import { Link } from "react-router-dom";
export default function NotFoundPage () 



{ return (
  
  <div className="container ">
  <h1 className="text-center">ERR 404</h1>
  <h1 className="text-center">Coudn't find searched movie </h1>
  <Link to={paths.MoviesListPage} className="btn btn-primary">Return to the movies list page</Link>
  </div>
  );
}