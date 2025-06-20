export default function MovieDetailsCard({
  image,
  title, 
  release_year, 
  director,
  abstract,
  genre, 
  name,   
  vote,   
  text    
}) {
  return (
    
      <div className="col-6">
        <div className="card">
          {image && <img src={image} className="card-img-top" alt={title} />} 
          <div className="card-body text-center">
            <h3 className="card-title">{title} ({release_year})</h3>
            <p><strong>Director:</strong> {director}</p>
            {genre && <p><strong>Genre:</strong> {genre}</p>} 
            <p className="card-text">{abstract}</p>
            <hr className="my-4"/> 
            <h4>Reviews dettails</h4>
            <p><strong>Reviewer name:</strong> {name}</p> 
            <p className="card-text"><strong>Vote:</strong> {vote}/5</p> 
            <p className="card-text"><strong>Review:</strong> {text}</p>
          </div>
        </div>
    </div>
  );
}